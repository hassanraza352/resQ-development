
import { useState } from "react";

const Messages = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.trim() === "") {
      return;
    }

    console.log("Message:", message);
    setMessage("");
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className={`side ${sidebarOpen ? "open" : ""}`}>
        <div className="side-header-controls">
          <a className="logo" href="/">
            <i>✚</i>
            RESQ
          </a>

          <button
            className="side-close-btn"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <a href="/user/dashboard">
          <span>🏠</span>
          Dashboard
        </a>

        <a href="/user/report">
          <span>🚨</span>
          Report Incident
        </a>

        <a href="/user/my-reports">
          <span>📄</span>
          My Reports
        </a>

        <a href="/user/report-details">
          <span>📡</span>
          Live Status
        </a>

        <a href="/user/hospitals">
          <span>🏥</span>
          Nearby Hospitals
        </a>

        <a href="/user/units">
          <span>🚑</span>
          Service Units
        </a>

        <a href="/user/map">
          <span>🗺️</span>
          Live Map
        </a>

        <a href="/user/messages" className="on">
          <span>💬</span>
          Messages
        </a>

        <a href="/user/notifications">
          <span>🔔</span>
          Notifications
        </a>

        <a href="/user/settings">
          <span>⚙️</span>
          Settings
        </a>

        <a href="/login">
          <span>🚪</span>
          Log out
        </a>
      </aside>

      {/* Main */}
      <div className="main">
        {/* Header */}
        <header className="top">
          <button
            className="burger"
            aria-label="Menu"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <h1>Messages</h1>

          <span className="sp"></span>

          <button
            className="btn sm"
            id="th"
            aria-label="Toggle theme"
            onClick={() => {
              document.body.classList.toggle("dark");
            }}
          >
            🌓
          </button>

          <a href="/user/notifications" className="btn sm">
            🔔
          </a>

          <div className="av">AK</div>
        </header>

        {/* Page */}
        <main className="pg">
          <div
            className="two"
            style={{
              gridTemplateColumns: "1fr 2fr",
            }}
          >
            {/* Chats */}
            <div className="box">
              <h3>Chats</h3>

              <div className="row">
                <div className="ic">🚑</div>

                <div className="t">
                  <b>Rescue Unit-3</b>
                  <small>Okay, thank you!</small>
                </div>

                <span className="badge b-ok">Live</span>
              </div>

              <div className="row">
                <div className="ic">🏥</div>

                <div className="t">
                  <b>City General</b>
                  <small>Bed confirmed</small>
                </div>

                <span className="badge b-info"></span>
              </div>
            </div>

            {/* Chat */}
            <div className="box">
              <h3>Rescue Unit-3</h3>

              <div className="chat">
                <div className="msg">
                  Hi, I'm near the main gate.
                </div>

                <div className="msg me">
                  We are 5 minutes away. Please stay at the same location.
                </div>
              </div>

              {/* Message Input */}
              <form className="chatin" onSubmit={handleSend}>
                <input
                  type="text"
                  placeholder="Type a message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <button type="submit" className="btn p">
                  Send
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Messages;

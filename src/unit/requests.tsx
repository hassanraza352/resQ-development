import { useState } from "react";

type RequestItem = {
  id: number;
  icon: string;
  title: string;
  details: string;
};

const Requests = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [requests, setRequests] = useState<RequestItem[]>([
    {
      id: 1234,
      icon: "🚑",
      title: "Medical Emergency",
      details: "#1234 · 1.2 km",
    },
    {
      id: 1235,
      icon: "🚗",
      title: "Road Accident",
      details: "#1235 · 2.8 km",
    },
    {
      id: 1236,
      icon: "🔥",
      title: "Fire Incident",
      details: "#1236 · 3.4 km",
    },
  ]);

  const handleTheme = () => {
    document.body.classList.toggle("dark");
  };

  const handleRequest = (id: number, action: "Accepted" | "Rejected") => {
    const request = requests.find((item) => item.id === id);

    if (!request) return;

    alert(`${request.title} - ${action}`);

    setRequests((prev) =>
      prev.filter((item) => item.id !== id)
    );
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

        <a href="/unit/dashboard">
          <span>🏠</span>
          Dashboard
        </a>

        <a href="/unit/requests" className="on">
          <span>📥</span>
          Incoming Requests
        </a>

        <a href="/unit/assignment">
          <span>🎯</span>
          Active Assignment
        </a>

        <a href="/unit/map">
          <span>🗺️</span>
          Live Map
        </a>

        <a href="/unit/profile">
          <span>👤</span>
          Profile
        </a>

        <a href="/unit/settings">
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
            ☰ <span>Menu</span>
          </button>

          <h1>Incoming Requests</h1>

          <span className="sp"></span>

          <button
            className="btn sm"
            id="th"
            aria-label="Toggle theme"
            onClick={handleTheme}
          >
            🌓
          </button>

          <a
            href="/unit/notifications"
            className="btn sm"
          >
            🔔
          </a>

          <div className="av">RU</div>
        </header>

        {/* Page */}
        <main className="pg">
          <div className="box">
            <h3>Pending</h3>

            {requests.map((request) => (
              <div className="row" key={request.id}>
                <div className="ic">{request.icon}</div>

                <div className="t">
                  <b>{request.title}</b>
                  <small>{request.details}</small>
                </div>

                <button
                  className="btn g sm"
                  onClick={() =>
                    handleRequest(request.id, "Accepted")
                  }
                >
                  Accept
                </button>

                <button
                  className="btn sm"
                  onClick={() =>
                    handleRequest(request.id, "Rejected")
                  }
                >
                  Reject
                </button>
              </div>
            ))}

            {requests.length === 0 && (
              <p className="sub">
                No pending requests.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Requests;
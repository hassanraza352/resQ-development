import { useState } from "react";

const ActiveAssignment = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleTheme = () => {
    document.body.classList.toggle("dark");
  };

  const handleNavigate = () => {
    alert("Navigation started");
  };

  const handleComplete = () => {
    alert("Marked complete");
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

        <a href="/unit/requests">
          <span>📥</span>
          Incoming Requests
        </a>

        <a href="/unit/assignment" className="on">
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

          <h1>Active Assignment</h1>

          <span className="sp"></span>

          <button
            className="btn sm"
            id="th"
            aria-label="Toggle theme"
            onClick={handleTheme}
          >
            🌓
          </button>

          <a href="/unit/notifications" className="btn sm">
            🔔
          </a>

          <div className="av">RU</div>
        </header>

        {/* Page */}
        <main className="pg">
          <div className="two">
            {/* Assignment */}
            <div className="box">
              <h3>Medical Emergency #1234</h3>

              <div className="tl">
                <div>
                  <b>Accepted</b>
                </div>

                <div className="cur">
                  <b>En route</b>
                  <br />
                  <small>ETA 8 min</small>
                </div>
              </div>

              <button
                className="btn p"
                onClick={handleNavigate}
              >
                Navigate
              </button>

              <button
                className="btn g"
                onClick={handleComplete}
              >
                Mark complete
              </button>
            </div>

            {/* Route */}
            <div className="box">
              <h3>Route</h3>

              <div className="map">
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5 80 C30 70 35 45 55 55 S80 35 95 20"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1.2"
                    strokeDasharray="3 2"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="10"
                      to="0"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>

                <span
                  className="pin pu"
                  style={{
                    left: "30%",
                    top: "40%",
                  }}
                >
                  📍
                </span>

                <span
                  className="pin"
                  style={{
                    left: "65%",
                    top: "60%",
                  }}
                >
                  🚑
                </span>

                <span
                  className="pin"
                  style={{
                    left: "48%",
                    top: "25%",
                  }}
                >
                  🏥
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ActiveAssignment;
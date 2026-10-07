import { useState } from "react";

const UnitDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleTheme = () => {
    document.body.classList.toggle("dark");
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

        <a href="/unit/dashboard" className="on">
          <span>🏠</span>
          Dashboard
        </a>

        <a href="/unit/requests">
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
            aria-label="Toggle Menu"
            onClick={() => setSidebarOpen(true)}
          >
            ☰ <span>Menu</span>
          </button>

          <h1>Service Unit Dashboard</h1>

          <span className="sp"></span>

          <button
            className="btn sm"
            id="th"
            aria-label="Toggle theme"
            onClick={handleTheme}
          >
            🌓 Theme
          </button>

          <a href="/unit/notifications" className="btn sm">
            🔔
          </a>

          <div className="av">RU</div>
        </header>

        {/* Page */}
        <main className="pg">
          <h2>Ambulance Unit #04</h2>

          <p className="sub">
            Active duty dispatch and route tracking system.
          </p>

          {/* Statistics */}
          <div className="cards">
            <div className="st">
              <small>Active requests</small>
              <b>2</b>
            </div>

            <div className="st">
              <small>Assigned</small>
              <b>1</b>
            </div>

            <div className="st">
              <small>Completed today</small>
              <b>5</b>
            </div>
          </div>

          {/* Dashcam / Live Feed Placeholder */}
          <div className="media-placeholder-box">
            <div className="media-placeholder-icon">
              📹
            </div>

            <h4>
              Emergency Response Unit Dashcam & Live Feed Placeholder
            </h4>

            <p>
              Spacious media spot reserved for connecting ambulance
              dashcam feeds, drone surveillance, or site photo evidence.
            </p>

            <span className="badge b-red">
              LIVE DASHCAM PLACEHOLDER
            </span>
          </div>

          {/* Two Columns */}
          <div className="two">
            {/* Recent Dispatch Requests */}
            <div className="box">
              <h3>Recent Dispatch Requests</h3>

              <div className="row">
                <div className="ic">🚑</div>

                <div className="t">
                  <b>Medical Emergency</b>
                  <small>2 min ago — Sector 7</small>
                </div>

                <span className="badge b-red">
                  New
                </span>
              </div>

              <div className="row">
                <div className="ic">🚗</div>

                <div className="t">
                  <b>Road Collision</b>
                  <small>20 min ago — Highway 4</small>
                </div>

                <span className="badge b-info">
                  Accepted
                </span>
              </div>

              <div className="row">
                <div className="ic">🔥</div>

                <div className="t">
                  <b>Fire Incident</b>
                  <small>1 h ago — Market Street</small>
                </div>

                <span className="badge b-ok">
                  Done
                </span>
              </div>
            </div>

            {/* Live Navigation */}
            <div className="box">
              <h3>Live Navigation Route</h3>

              <div className="map">
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5 80 C30 70 35 45 55 55 S80 35 95 20"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1.8"
                    strokeDasharray="4 2"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="12"
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

export default UnitDashboard;
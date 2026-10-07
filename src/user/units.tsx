
import { useState } from "react";

const ServiceUnits = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

        <a href="/user/units" className="on">
          <span>🚑</span>
          Service Units
        </a>

        <a href="/user/map">
          <span>🗺️</span>
          Live Map
        </a>

        <a href="/user/messages">
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

          <h1>Service Units</h1>

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

          <a
            href="/user/notifications"
            className="btn sm"
          >
            🔔
          </a>

          <div className="av">AK</div>
        </header>

        {/* Page */}
        <main className="pg">
          <div className="two">
            {/* Nearby Units */}
            <div>
              <div className="box">
                <h3>Nearby units</h3>

                {/* Rescue Unit 3 */}
                <div className="row">
                  <div className="ic">🚑</div>

                  <div className="t">
                    <b>Rescue Unit-3</b>
                    <small>0.2 km</small>
                  </div>

                  <span className="badge b-ok">
                    Available
                  </span>
                </div>

                {/* Rescue Unit 7 */}
                <div className="row">
                  <div className="ic">🚑</div>

                  <div className="t">
                    <b>Rescue Unit-7</b>
                    <small>1.0 km</small>
                  </div>

                  <span className="badge b-ok">
                    Available
                  </span>
                </div>

                {/* Police Unit */}
                <div className="row">
                  <div className="ic">👮</div>

                  <div className="t">
                    <b>Police Unit 2</b>
                    <small>1.6 km</small>
                  </div>

                  <span className="badge b-warn">
                    Busy
                  </span>
                </div>

                {/* Fire Unit */}
                <div className="row">
                  <div className="ic">🚒</div>

                  <div className="t">
                    <b>Fire Unit 1</b>
                    <small>2.2 km</small>
                  </div>

                  <span className="badge b-ok">
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="box">
              <h3>Map</h3>

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

export default ServiceUnits;

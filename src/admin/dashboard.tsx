import { useState } from "react";

const Dashboardadmin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className={`side ${sidebarOpen ? "open" : ""}`}>
        <div className="side-header-controls">
          <a className="logo" href="/">
            <i>✚</i>RESQ
          </a>

          <button
            className="side-close-btn"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <a href="/admin/dashboard" className="on">
          <span>🏠</span>Dashboard
        </a>

        <a href="/admin/users">
          <span>👥</span>Users
        </a>

        <a href="/admin/hospitals">
          <span>🏥</span>Hospitals
        </a>

        <a href="/admin/units">
          <span>🚑</span>Service Units
        </a>

        <a href="/admin/incidents">
          <span>🚨</span>Incidents
        </a>

        <a href="/admin/reports">
          <span>📊</span>Reports & Analytics
        </a>

        <a href="/admin/settings">
          <span>⚙️</span>Settings
        </a>

        <a href="/login">
          <span>🚪</span>Log out
        </a>
      </aside>

      {/* Main */}
      <div className="main">
        <header className="top">
          <button
            className="burger"
            aria-label="Toggle Menu"
            onClick={() => setSidebarOpen(true)}
          >
            ☰ <span>Menu</span>
          </button>

          <h1>Admin Command Center</h1>

          <span className="sp"></span>

          <button
            className="btn sm"
            id="th"
            aria-label="Toggle theme"
            onClick={() => document.body.classList.toggle("dark")}
          >
            🌓 Theme
          </button>

          <a href="/admin/notifications" className="btn sm">
            🔔
          </a>

          <div className="av">ADM</div>
        </header>

        <main className="pg">
          <h2>System Overview</h2>

          <p className="sub">
            Real-time emergency dispatch and response monitoring.
          </p>

          {/* Stats */}
          <div className="cards">
            <div className="st">
              <small>Total users</small>
              <b>532</b>
            </div>

            <div className="st">
              <small>Hospitals</small>
              <b>12</b>
            </div>

            <div className="st">
              <small>Service units</small>
              <b>18</b>
            </div>

            <div className="st">
              <small>Incidents</small>
              <b>287</b>
            </div>
          </div>

          {/* Surveillance Media Placeholder */}
          <div className="media-placeholder-box">
            <div className="media-placeholder-icon">🖥️</div>

            <h4>
              Citywide Surveillance & CCTV Live Media Stream Placeholder
            </h4>

            <p>
              Spacious media spot reserved for connecting live traffic
              cameras, city surveillance feeds, or video streams.
            </p>

            <span className="badge b-red">
              LIVE STREAM PLACEHOLDER
            </span>
          </div>

          {/* Analytics + Recent Alerts */}
          <div className="two">
            <div className="box">
              <h3>Incidents Overview Analytics</h3>

              <div className="bars">
                <i data-h="35" title="35 Incidents"></i>
                <i data-h="52" title="52 Incidents"></i>
                <i data-h="44" title="44 Incidents"></i>
                <i data-h="70" title="70 Incidents"></i>
                <i data-h="58" title="58 Incidents"></i>
                <i data-h="85" title="85 Incidents"></i>
                <i data-h="66" title="66 Incidents"></i>
                <i data-h="92" title="92 Incidents"></i>
              </div>
            </div>

            <div className="box">
              <h3>Recent Incident Alerts</h3>

              <div className="row">
                <div className="ic">🚑</div>

                <div className="t">
                  <b>Medical Emergency</b>
                  <small>Lahore Sector 4</small>
                </div>

                <span className="badge b-warn">Active</span>
              </div>

              <div className="row">
                <div className="ic">🔥</div>

                <div className="t">
                  <b>Fire Hazard</b>
                  <small>Karachi Port</small>
                </div>

                <span className="badge b-ok">Resolved</span>
              </div>

              <div className="row">
                <div className="ic">🚗</div>

                <div className="t">
                  <b>Road Collision</b>
                  <small>Multan Highway</small>
                </div>

                <span className="badge b-warn">Active</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboardadmin;
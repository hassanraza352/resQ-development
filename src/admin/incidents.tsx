import { useState } from "react";

const Incidents = () => {
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

        <a href="/admin/dashboard">
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

        <a href="/admin/incidents" className="on">
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
            aria-label="Menu"
            onClick={() => setSidebarOpen(true)}
          >
            ☰ <span>Menu</span>
          </button>

          <h1>Incidents</h1>

          <span className="sp"></span>

          <button
            className="btn sm"
            id="th"
            aria-label="Toggle theme"
            onClick={() => document.body.classList.toggle("dark")}
          >
            🌓
          </button>

          <a href="/admin/notifications" className="btn sm">
            🔔
          </a>

          <div className="av">A</div>
        </header>

        <main className="pg">
          <div className="box">
            <h3></h3>

            <div className="tw">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>#1234</td>
                    <td>Medical</td>
                    <td>Lahore</td>
                    <td>
                      <span className="badge b-warn">Active</span>
                    </td>
                  </tr>

                  <tr>
                    <td>#1233</td>
                    <td>Accident</td>
                    <td>Multan</td>
                    <td>
                      <span className="badge b-info">Assigned</span>
                    </td>
                  </tr>

                  <tr>
                    <td>#1228</td>
                    <td>Fire</td>
                    <td>Karachi</td>
                    <td>
                      <span className="badge b-ok">Resolved</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Incidents;
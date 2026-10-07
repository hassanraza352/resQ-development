import { useState } from "react";

const Units = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
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

        <a href="/admin/units" className="on">
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

      <div className="main">
        <header className="top">
          <button
            className="burger"
            aria-label="Menu"
            onClick={() => setSidebarOpen(true)}
          >
            ☰ <span>Menu</span>
          </button>

          <h1>Service Units</h1>

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
                    <th>Unit</th>
                    <th>Type</th>
                    <th>City</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Rescue Unit-3</td>
                    <td>Ambulance</td>
                    <td>Lahore</td>
                    <td>
                      <span className="badge b-ok">Available</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Police Unit 2</td>
                    <td>Police</td>
                    <td>Lahore</td>
                    <td>
                      <span className="badge b-warn">Busy</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Fire Unit 1</td>
                    <td>Fire</td>
                    <td>Karachi</td>
                    <td>
                      <span className="badge b-ok">Available</span>
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

export default Units;
import { useState } from "react";

const Staff = () => {
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

        <a href="/hospital/overview">
          <span>🏥</span>Overview
        </a>

        <a href="/hospital/cases">
          <span>🩺</span>Incoming Cases
        </a>

        <a href="/hospital/beds">
          <span>🛏️</span>Beds & Capacity
        </a>

        <a href="/hospital/staff" className="on">
          <span>👩‍⚕️</span>Staff
        </a>

        <a href="/hospital/settings">
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

          <h1>Staff</h1>

          <span className="sp"></span>

          <button
            className="btn sm"
            id="th"
            aria-label="Toggle theme"
            onClick={() => document.body.classList.toggle("dark")}
          >
            🌓
          </button>

          <a href="/hospital/notifications" className="btn sm">
            🔔
          </a>

          <div className="av">CG</div>
        </header>

        <main className="pg">
          <div className="box">
            <h3>On duty</h3>

            <div className="tw">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Dr. Sana</td>
                    <td>Emergency</td>
                    <td>
                      <span className="badge b-ok">On duty</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Dr. Hamza</td>
                    <td>Surgery</td>
                    <td>
                      <span className="badge b-ok">On duty</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Nurse Ayesha</td>
                    <td>ICU</td>
                    <td>
                      <span className="badge b-warn">Break</span>
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

export default Staff;
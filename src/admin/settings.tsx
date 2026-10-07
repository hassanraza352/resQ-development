import { useState } from "react";

const Settings2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [autoAssign, setAutoAssign] = useState(true);

  const handleSave = () => {
    alert("Settings saved");
  };

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

        <a href="/admin/units">
          <span>🚑</span>Service Units
        </a>

        <a href="/admin/incidents">
          <span>🚨</span>Incidents
        </a>

        <a href="/admin/reports">
          <span>📊</span>Reports & Analytics
        </a>

        <a href="/admin/settings" className="on">
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

          <h1>System Settings</h1>

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
            <h3>General</h3>

            <div className="row">
              <div className="t">
                <b>Maintenance mode</b>
                <small>Pause new reports</small>
              </div>

              <div
                className={`sw ${maintenanceMode ? "on" : ""}`}
                onClick={() => setMaintenanceMode(!maintenanceMode)}
              ></div>
            </div>

            <div className="row">
              <div className="t">
                <b>Email notifications</b>
                <small>Send system emails</small>
              </div>

              <div
                className={`sw ${emailNotifications ? "on" : ""}`}
                onClick={() =>
                  setEmailNotifications(!emailNotifications)
                }
              ></div>
            </div>

            <div className="row">
              <div className="t">
                <b>Auto-assign nearest unit</b>
                <small>Match units automatically</small>
              </div>

              <div
                className={`sw ${autoAssign ? "on" : ""}`}
                onClick={() => setAutoAssign(!autoAssign)}
              ></div>
            </div>
          </div>

          <button className="btn p" onClick={handleSave}>
            Save changes
          </button>
        </main>
      </div>
    </div>
  );
};

export default Settings2;
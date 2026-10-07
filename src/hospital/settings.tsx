import { useState } from "react";

const Settings1 = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [pushNotifications, setPushNotifications] = useState(true);
  const [liveLocation, setLiveLocation] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);

  const [fullName, setFullName] = useState("Ali Khan");
  const [phone, setPhone] = useState("+92 300 0000000");

  const handleSave = () => {
    alert("Changes saved");
  };

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

        <a href="/hospital/staff">
          <span>👩‍⚕️</span>Staff
        </a>

        <a href="/hospital/settings" className="on">
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

          <h1>Settings</h1>

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
          {/* Preferences */}
          <div className="box">
            <h3>Preferences</h3>

            <div className="row">
              <div className="t">
                <b>Push notifications</b>
                <small>Alerts about your reports</small>
              </div>

              <div
                className={`sw ${pushNotifications ? "on" : ""}`}
                onClick={() =>
                  setPushNotifications(!pushNotifications)
                }
              ></div>
            </div>

            <div className="row">
              <div className="t">
                <b>Share live location</b>
                <small>Only during active incidents</small>
              </div>

              <div
                className={`sw ${liveLocation ? "on" : ""}`}
                onClick={() => setLiveLocation(!liveLocation)}
              ></div>
            </div>

            <div className="row">
              <div className="t">
                <b>SMS alerts</b>
                <small>Backup alerts by text</small>
              </div>

              <div
                className={`sw ${smsAlerts ? "on" : ""}`}
                onClick={() => setSmsAlerts(!smsAlerts)}
              ></div>
            </div>
          </div>

          {/* Account */}
          <div className="box">
            <h3>Account</h3>

            <div className="fld">
              <label>Full name</label>

              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="fld">
              <label>Phone</label>

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button className="btn p" onClick={handleSave}>
              Save changes
            </button>

            <a className="btn" href="/login">
              Log out
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings1;
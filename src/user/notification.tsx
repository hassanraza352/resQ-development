
import { useState } from "react";

const Notifications = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Incidents", "Updates", "System"];

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

        <a href="/user/units">
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

        <a href="/user/notifications" className="on">
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

          <h1>Notifications</h1>

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

          <a href="/user/notifications" className="btn sm">
            🔔
          </a>

          <div className="av">AK</div>
        </header>

        {/* Page */}
        <main className="pg">
          {/* Tabs */}
          <div className="tabs">
            {tabs.map((tab) => (
              <span
                key={tab}
                className={`chip ${activeTab === tab ? "on" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Notifications */}
          <div className="box">
            <h3></h3>

            <div className="row">
              <div className="ic">🔔</div>

              <div className="t">
                <b>Your incident has been assigned</b>
                <small>13 Oct, 10:30</small>
              </div>

              <span className="badge b-info">
                New
              </span>
            </div>

            <div className="row">
              <div className="ic">🚑</div>

              <div className="t">
                <b>Service unit is on the way</b>
                <small>13 Oct, 10:26</small>
              </div>

              <span className="badge b-warn">
                Update
              </span>
            </div>

            <div className="row">
              <div className="ic">✅</div>

              <div className="t">
                <b>Your report has been resolved</b>
                <small>10 Oct, 08:12</small>
              </div>

              <span className="badge b-ok">
                Done
              </span>
            </div>

            <div className="row">
              <div className="ic">💬</div>

              <div className="t">
                <b>New message from Hospital staff</b>
                <small>8 Oct, 09:00</small>
              </div>

              <span className="badge b-info">
                Msg
              </span>
            </div>

            <div className="row">
              <div className="ic">🛠️</div>

              <div className="t">
                <b>System maintenance scheduled</b>
                <small>6 Oct, 02:00</small>
              </div>

              <span className="badge b-red">
                System
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Notifications;

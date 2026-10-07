
import { useState } from "react";

const MyReports = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Active", "Resolved", "Cancelled"];

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

        <a href="/user/my-reports" className="on">
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

          <h1>My Reports</h1>

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

          {/* Reports */}
          <div className="box">
            <h3></h3>

            <div className="row">
              <div className="ic">🚑</div>

              <div className="t">
                <b>Medical Emergency</b>
                <small>#1234 · 13 Oct 2025</small>
              </div>

              <span className="badge b-warn">
                In progress
              </span>
            </div>

            <div className="row">
              <div className="ic">🚗</div>

              <div className="t">
                <b>Road Accident</b>
                <small>#1233 · 12 Oct 2025</small>
              </div>

              <span className="badge b-info">
                Assigned
              </span>
            </div>

            <div className="row">
              <div className="ic">🔥</div>

              <div className="t">
                <b>Fire Incident</b>
                <small>#1228 · 9 Oct 2025</small>
              </div>

              <span className="badge b-ok">
                Resolved
              </span>
            </div>

            <div className="row">
              <div className="ic">🚨</div>

              <div className="t">
                <b>Crime</b>
                <small>#1218 · 2 Oct 2025</small>
              </div>

              <span className="badge b-red">
                Cancelled
              </span>
            </div>

            <div className="row">
              <div className="ic">🚑</div>

              <div className="t">
                <b>Medical Emergency</b>
                <small>#1234 · 13 Oct 2025</small>
              </div>

              <span className="badge b-warn">
                In progress
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyReports;

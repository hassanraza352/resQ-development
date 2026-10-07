import { useState } from "react";

const Overview = () => {
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

        <a href="/hospital/overview" className="on">
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
            aria-label="Toggle Menu"
            onClick={() => setSidebarOpen(true)}
          >
            ☰ <span>Menu</span>
          </button>

          <h1>Hospital Overview</h1>

          <span className="sp"></span>

          <button
            className="btn sm"
            id="th"
            aria-label="Toggle theme"
            onClick={() => document.body.classList.toggle("dark")}
          >
            🌓 Theme
          </button>

          <a href="/hospital/notifications" className="btn sm">
            🔔
          </a>

          <div className="av">CG</div>
        </header>

        <main className="pg">
          <h2>Central General Hospital</h2>

          <p className="sub">
            Emergency trauma center status and bed capacity dashboard.
          </p>

          {/* Stats */}
          <div className="cards">
            <div className="st">
              <small>Incoming requests</small>
              <b>4</b>
            </div>

            <div className="st">
              <small>Beds free</small>
              <b>32</b>
            </div>

            <div className="st">
              <small>Ambulances</small>
              <b>6</b>
            </div>

            <div className="st">
              <small>Staff on duty</small>
              <b>58</b>
            </div>
          </div>

          {/* Hospital Media Placeholder */}
          <div className="media-placeholder-box">
            <div className="media-placeholder-icon">🏥</div>

            <h4>
              Hospital Main Entrance & ER Facility Media Placeholder
            </h4>

            <p>
              Spacious spot reserved for adding hospital exterior photos,
              ICU ward virtual tours, or emergency entrance video clips.
            </p>

            <span className="badge b-info">
              FACILITY MEDIA PLACEHOLDER
            </span>
          </div>

          {/* Incoming Requests */}
          <div className="box">
            <h3>Incoming Patient Emergency Requests</h3>

            <div className="row">
              <div className="ic">🚑</div>

              <div className="t">
                <b>Medical Emergency</b>
                <small>ETA 6 min — Critical Condition</small>
              </div>

              <span className="badge b-red">Urgent</span>
            </div>

            <div className="row">
              <div className="ic">🚗</div>

              <div className="t">
                <b>Road Accident</b>
                <small>ETA 14 min — Stable</small>
              </div>

              <span className="badge b-warn">Normal</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Overview;
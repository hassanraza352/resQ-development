import { useState } from "react";

const Beds = () => {
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

        <a href="/hospital/beds" className="on">
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
            aria-label="Menu"
            onClick={() => setSidebarOpen(true)}
          >
            ☰ <span>Menu</span>
          </button>

          <h1>Beds & Capacity</h1>

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
          {/* Stats */}
          <div className="cards">
            <div className="st">
              <small>ICU free</small>
              <b>4</b>
            </div>

            <div className="st">
              <small>ER free</small>
              <b>9</b>
            </div>

            <div className="st">
              <small>General free</small>
              <b>19</b>
            </div>
          </div>

          {/* Occupancy */}
          <div className="box">
            <h3>Occupancy</h3>

            <div className="bars">
              <i data-h="35" title="35"></i>
              <i data-h="52" title="52"></i>
              <i data-h="44" title="44"></i>
              <i data-h="70" title="70"></i>
              <i data-h="58" title="58"></i>
              <i data-h="85" title="85"></i>
              <i data-h="66" title="66"></i>
              <i data-h="92" title="92"></i>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Beds;
import { useState } from "react";

const Reports = () => {
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

        <a href="/admin/units">
          <span>🚑</span>Service Units
        </a>

        <a href="/admin/incidents">
          <span>🚨</span>Incidents
        </a>

        <a href="/admin/reports" className="on">
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

          <h1>Reports & Analytics</h1>

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
          <div className="cards">
            <div className="st">
              <small>Resolved this week</small>
              <b data-n="64">64</b>
            </div>

            <div className="st">
              <small>Avg response (min)</small>
              <b data-n="9">9</b>
            </div>
          </div>

          <div className="box">
            <h3>Weekly incidents</h3>

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

export default Reports;
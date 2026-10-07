import { useState } from "react";

interface CaseItem {
  id: number;
  icon: string;
  title: string;
  details: string;
}

const Cases = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [cases, setCases] = useState<CaseItem[]>([
    {
      id: 1,
      icon: "🩺",
      title: "Cardiac arrest · 52 y",
      details: "Unit 3 · ETA 6 min",
    },
    {
      id: 2,
      icon: "🦴",
      title: "Fracture · 28 y",
      details: "Unit 7 · ETA 14 min",
    },
  ]);

  const handleAction = (id: number, action: "Accepted" | "Rejected") => {
    alert(action);
    setCases((prev) => prev.filter((item) => item.id !== id));
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

        <a href="/hospital/cases" className="on">
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
            aria-label="Menu"
            onClick={() => setSidebarOpen(true)}
          >
            ☰ <span>Menu</span>
          </button>

          <h1>Incoming Cases</h1>

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
            <h3>Cases</h3>

            {cases.length === 0 ? (
              <p>No incoming cases.</p>
            ) : (
              cases.map((item) => (
                <div className="row" key={item.id}>
                  <div className="ic">{item.icon}</div>

                  <div className="t">
                    <b>{item.title}</b>
                    <small>{item.details}</small>
                  </div>

                  <button
                    className="btn g sm"
                    onClick={() => handleAction(item.id, "Accepted")}
                  >
                    Accept
                  </button>

                  <button
                    className="btn sm"
                    onClick={() => handleAction(item.id, "Rejected")}
                  >
                    Reject
                  </button>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cases;
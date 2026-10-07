
import { useState } from "react";

const ReportDetails = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCall = () => {
    alert("Calling Rescue Unit-3...");
  };

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

        <a href="/user/report-details" className="on">
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
            aria-label="Toggle Menu"
            onClick={() => setSidebarOpen(true)}
          >
            ☰ <span>Menu</span>
          </button>

          <h1>Live Incident Status</h1>

          <span className="sp"></span>

          <button
            className="btn sm"
            id="th"
            aria-label="Toggle theme"
            onClick={() => {
              document.body.classList.toggle("dark");
            }}
          >
            🌓 Theme
          </button>

          <a href="/user/notifications" className="btn sm">
            🔔
          </a>

          <div className="av">AK</div>
        </header>

        {/* Page */}
        <main className="pg">
          <h2>Report #1234</h2>

          <p className="sub">
            Medical Emergency ·{" "}
            <span className="badge b-warn">
              In progress
            </span>
          </p>

          {/* Two Column Section */}
          <div className="two">
            {/* Timeline */}
            <div className="box">
              <h3>Live Status Timeline</h3>

              <div className="tl">
                <div>
                  <b>You reported the incident</b>
                  <br />
                  <small>10:24 AM</small>
                </div>

                <div>
                  <b>Nearest unit notified</b>
                  <br />
                  <small>10:26 AM</small>
                </div>

                <div>
                  <b>Unit accepted the request</b>
                  <br />
                  <small>10:28 AM</small>
                </div>

                <div className="cur">
                  <b>
                    Ambulance on the way (ETA 8 min)
                  </b>
                  <br />
                  <small>10:40 AM</small>
                </div>
              </div>
            </div>

            {/* Assigned Unit */}
            <div className="box">
              <h3>Assigned Rescue Unit</h3>

              {/* Map */}
              <div className="map">
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5 80 C30 70 35 45 55 55 S80 35 95 20"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.8"
                    strokeDasharray="4 2"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="12"
                      to="0"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>

                <span
                  className="pin pu"
                  style={{
                    left: "30%",
                    top: "40%",
                  }}
                >
                  📍
                </span>

                <span
                  className="pin"
                  style={{
                    left: "65%",
                    top: "60%",
                  }}
                >
                  🚑
                </span>

                <span
                  className="pin"
                  style={{
                    left: "48%",
                    top: "25%",
                  }}
                >
                  🏥
                </span>
              </div>

              {/* Unit Info */}
              <div
                className="row"
                style={{
                  marginTop: "14px",
                }}
              >
                <div className="ic">🚑</div>

                <div className="t">
                  <b>Rescue Unit-3</b>
                  <small>
                    Ambulance · 2.1 km away
                  </small>
                </div>
              </div>

              {/* Actions */}
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "12px",
                }}
              >
                <a
                  className="btn p sm"
                  href="/user/messages"
                >
                  💬 Chat with Unit
                </a>

                <button
                  className="btn sm sky"
                  onClick={handleCall}
                >
                  📞 Call Unit
                </button>
              </div>
            </div>
          </div>

          {/* Evidence / Media Placeholder */}
          <div className="media-placeholder-box">
            <div className="media-placeholder-icon">
              📹
            </div>

            <h4>
              Uploaded Incident Evidence & Dispatch
              Footage Placeholder
            </h4>

            <p>
              Spacious spot reserved for attached incident
              site photos, live dashcam footage, or video
              recordings.
            </p>

            <span className="badge b-info">
              ATTACHED MEDIA PLACEHOLDER
            </span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReportDetails;

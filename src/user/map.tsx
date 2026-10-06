
import { Link } from "react-router-dom";

const LiveMap = () => {
  return (
    <div className="app">

      {/* ================= SIDEBAR ================= */}
      <aside className="side">

        <Link className="logo" to="/user/dashboard">
          <i>✚</i>
          RESQ
        </Link>

        <Link to="/user/dashboard">
          <span>🏠</span>
          Dashboard
        </Link>

        <Link to="/user/report">
          <span>🚨</span>
          Report Incident
        </Link>

        <Link to="/user/my-reports">
          <span>📄</span>
          My Reports
        </Link>

        <Link to="/user/report-details">
          <span>📡</span>
          Live Status
        </Link>

        <Link to="/user/hospitals">
          <span>🏥</span>
          Nearby Hospitals
        </Link>

        <Link to="/user/units">
          <span>🚑</span>
          Service Units
        </Link>

        <Link to="/user/map" className="on">
          <span>🗺️</span>
          Live Map
        </Link>

        <Link to="/user/messages">
          <span>💬</span>
          Messages
        </Link>

        <Link to="/user/notifications">
          <span>🔔</span>
          Notifications
        </Link>

        <Link to="/user/settings">
          <span>⚙️</span>
          Settings
        </Link>

        <Link to="/login">
          <span>🚪</span>
          Log out
        </Link>

      </aside>

      {/* ================= MAIN ================= */}
      <div className="main">

        {/* ================= TOP ================= */}
        <header className="top">

          <button
            className="burger"
            aria-label="Menu"
          >
            ☰
          </button>

          <h1>Live Tracking</h1>

          <span className="sp"></span>

          <button
            className="btn sm"
            id="th"
            aria-label="Toggle theme"
          >
            🌓
          </button>

          <Link
            to="/user/notifications"
            className="btn sm"
          >
            🔔
          </Link>

          <div className="av">
            HR
          </div>

        </header>

        {/* ================= PAGE ================= */}
        <main className="pg">

          <div
            className="two"
            style={{
              gridTemplateColumns: "2fr 1fr",
            }}
          >

            {/* ================= MAP ================= */}
            <div className="box">

              <h3>Map</h3>

              <div className="map">

                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5 80 C30 70 35 45 55 55 S80 35 95 20"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="1.2"
                    strokeDasharray="3 2"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="10"
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

            </div>

            {/* ================= SERVICE UNIT ================= */}
            <div className="box">

              <h3>Service unit</h3>

              <div className="row">

                <div className="ic">
                  🚑
                </div>

                <div className="t">
                  <b>Police Unit</b>
                  <small>
                    Arriving in 6 min
                  </small>
                </div>

              </div>

              <p>
                Route: 2.3 km · 8 min
              </p>

              <br />

              <button
                className="btn p w"
                data-toast="Sharing location"
              >
                Share location
              </button>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
};

export default LiveMap;


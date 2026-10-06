import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Hospitals = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="app">

      {/* ================= SIDEBAR ================= */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    

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

          <h1>Nearby Hospitals</h1>

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
            aria-label="Notifications"
          >
            🔔
          </Link>

          <div className="av">
            HR
          </div>

        </header>

        {/* ================= PAGE ================= */}
        <main className="pg">

          {/* SEARCH */}
          <div className="fld">
            <input placeholder="🔍 Search hospitals" />
          </div>

          {/* ================= TWO COLUMN ================= */}
          <div className="two">

            {/* ================= HOSPITALS ================= */}
            <div>

              <div className="box">

                <h3>Hospitals</h3>

                <div className="row">

                  <div className="ic">
                    🏥
                  </div>

                  <div className="t">
                    <b>City General Hospital</b>
                    <small>
                      2.1 km · 24/7 ER
                    </small>
                  </div>

                  <span className="badge b-ok">
                    Available
                  </span>

                </div>

                <div className="row">

                  <div className="ic">
                    🏥
                  </div>

                  <div className="t">
                    <b>Shifa Hospital</b>
                    <small>
                      4.4 km · Trauma
                    </small>
                  </div>

                  <span className="badge b-ok">
                    Available
                  </span>

                </div>

                <div className="row">

                  <div className="ic">
                    🏥
                  </div>

                  <div className="t">
                    <b>Al-Rahman Hospital</b>
                    <small>
                      6.0 km
                    </small>
                  </div>

                  <span className="badge b-red">
                    Full
                  </span>

                </div>

                <div className="row">

                  <div className="ic">
                    🏥
                  </div>

                  <div className="t">
                    <b>Metro Hospital</b>
                    <small>
                      6.2 km
                    </small>
                  </div>

                  <span className="badge b-ok">
                    Available
                  </span>

                </div>

              </div>

            </div>

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

          </div>

        </main>

      </div>

    </div>
  );
};

export default Hospitals;
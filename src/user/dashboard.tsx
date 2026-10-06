import { useState } from "react";
import CommercialOverlay from "../components/CommercialOverlay";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [showCommercial, setShowCommercial] = useState(true);
  const [commercialKey, setCommercialKey] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openCommercial = () => {
    setCommercialKey((prev) => prev + 1);
    setShowCommercial(true);
  };

  return (
    <>
      {/* ================= COMMERCIAL ================= */}
      {showCommercial && (
        <CommercialOverlay
          key={commercialKey}
          onFinish={() => setShowCommercial(false)}
        />
      )}

      {/* ================= APP ================= */}
      <div className="app">

        {/* ================= SIDEBAR ================= */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* SIDEBAR OVERLAY */}
        <div
          className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* ================= MAIN ================= */}
        <main className="main">

          {/* ================= TOP BAR ================= */}
          <header className="top">

            <button
              className="burger"
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>

            <h1>
              Dashboard
            </h1>

            <div className="sp" />

            <button
              className="btn sm p"
              onClick={openCommercial}
            >
              ▶ Commercial
            </button>

            <div className="av">
              HR
            </div>

          </header>

          {/* ================= PAGE ================= */}
          <section className="pg">

            <h2>Welcome back, Hassan 👋</h2>

            <p className="sub">
              We're ready when you need us.
            </p>

            {/* ================= STATS ================= */}
            <div className="cards">

              <div className="st">
                <small>Nearby Units</small>
                <b>12</b>
                <span className="badge b-ok">
                  Available
                </span>
              </div>

              <div className="st">
                <small>Hospitals</small>
                <b>08</b>
                <span className="badge b-info">
                  Accepting
                </span>
              </div>

              <div className="st">
                <small>Response Time</small>
                <b>06 min</b>
                <span className="badge b-ok">
                  Average
                </span>
              </div>

              <div className="st">
                <small>Active Requests</small>
                <b>02</b>
                <span className="badge b-red">
                  Active
                </span>
              </div>

            </div>

            {/* ================= TWO COLUMN ================= */}
            <div className="two">

              {/* MAP */}
              <div className="box">

                <h3>
                  Live Response Map

                  <span className="badge b-ok">
                    ● LIVE
                  </span>
                </h3>

                <div className="map">

                  <div
                    className="pin pu"
                    style={{
                      left: "35%",
                      top: "45%",
                    }}
                  >
                    🚑
                  </div>

                  <div
                    className="pin"
                    style={{
                      left: "65%",
                      top: "35%",
                    }}
                  >
                    🏥
                  </div>

                  <div
                    className="pin"
                    style={{
                      left: "50%",
                      top: "65%",
                    }}
                  >
                    📍
                  </div>

                </div>

              </div>

              {/* RECENT ACTIVITY */}
              <div className="box">

                <h3>
                  Recent Activity
                </h3>

                <div className="row">

                  <div className="ic">
                    🚑
                  </div>

                  <div className="t">
                    <b>Ambulance Request</b>
                    <small>
                      Completed • Today
                    </small>
                  </div>

                  <span className="badge b-ok">
                    Done
                  </span>

                </div>

                <div className="row">

                  <div className="ic">
                    🏥
                  </div>

                  <div className="t">
                    <b>Hospital Search</b>
                    <small>
                      Completed • Yesterday
                    </small>
                  </div>

                  <span className="badge b-info">
                    Done
                  </span>

                </div>

                <div className="row">

                  <div className="ic">
                    📍
                  </div>

                  <div className="t">
                    <b>Location Shared</b>
                    <small>
                      Yesterday
                    </small>
                  </div>

                  <span className="badge b-ok">
                    Done
                  </span>

                </div>

              </div>

            </div>

            {/* ================= VIDEO ================= */}
            <div className="video-hero-container">

              <div className="video-hero-header">

                <div>
                  <div className="video-tag">
                    RESQ RESPONSE NETWORK
                  </div>

                  <h3>
                    Emergency Response Network
                  </h3>
                </div>

                <div className="video-live-badge">
                  <span className="pulse-dot" />
                  LIVE NETWORK
                </div>

              </div>

              <div className="video-hero-wrapper">

                <div className="video-placeholder-overlay">

                  <div className="video-play-btn">
                    ▶
                  </div>

                  <div className="video-placeholder-text">

                    <h3>
                      Help is closer than you think.
                    </h3>

                    <p>
                      Find nearby emergency units,
                      hospitals and response teams
                      in real time.
                    </p>

                    <button className="btn p">
                      Request Help
                    </button>

                  </div>

                </div>

              </div>

              <div className="video-hero-footer">

                <div className="video-info-item">
                  <span>12</span> Nearby Units
                </div>

                <div className="video-info-item">
                  <span>08</span> Hospitals
                </div>

                <div className="video-info-item">
                  <span>06 min</span> Avg Response
                </div>

              </div>

            </div>

            {/* ================= MEDIA ================= */}
            <div className="media-placeholder-box">

              <div className="media-placeholder-icon">
                🏥
              </div>

              <h4>
                RESQ Network
              </h4>

              <p>
                Stay connected with your emergency
                response network.
              </p>

              <button
                className="btn sky"
                onClick={openCommercial}
              >
                ▶ Watch RESQ Commercial
              </button>

            </div>

          </section>

        </main>

      </div>
    </>
  );
};

export default Dashboard;
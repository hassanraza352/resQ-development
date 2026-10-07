
import { useState } from "react";

const Report = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [incidentType, setIncidentType] = useState("Medical");
  const [location, setLocation] = useState(
    "📍 Detecting current location..."
  );
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const incidentTypes = [
    {
      name: "Medical",
      icon: "🚑",
    },
    {
      name: "Accident",
      icon: "🚗",
    },
    {
      name: "Fire",
      icon: "🔥",
    },
    {
      name: "Crime",
      icon: "🚨",
    },
    {
      name: "Other",
      icon: "➕",
    },
  ];

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log({
      incidentType,
      location,
      description,
      files,
    });

    alert(
      "Report sent successfully. Emergency dispatch initiated!"
    );
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

        <a href="/user/report" className="on">
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

          <h1>Report Incident</h1>

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

          <a
            href="/user/notifications"
            className="btn sm"
          >
            🔔
          </a>

          <div className="av">AK</div>
        </header>

        {/* Page */}
        <main className="pg">
          <div className="box">
            <h3>Report an Incident</h3>

            <p
              style={{
                color: "var(--mut)",
                marginBottom: "16px",
              }}
            >
              Select incident type, specify location details,
              and upload media evidence.
            </p>

            {/* Incident Types */}
            <div className="tabs">
              {incidentTypes.map((type) => (
                <span
                  key={type.name}
                  className={`chip ${
                    incidentType === type.name ? "on" : ""
                  }`}
                  onClick={() =>
                    setIncidentType(type.name)
                  }
                >
                  {type.icon} {type.name}
                </span>
              ))}
            </div>

            {/* Location */}
            <div className="fld">
              <label>Location</label>

              <input
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
              />
            </div>

            {/* Description */}
            <div className="fld">
              <label>Description</label>

              <textarea
                placeholder="Describe the emergency incident clearly..."
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
              ></textarea>
            </div>

            {/* Media Upload */}
            <div className="fld">
              <label>
                Incident Media Evidence (Photos / Videos)
              </label>

              <div
                className="media-placeholder-box"
                style={{
                  marginTop: "6px",
                }}
              >
                <div className="media-placeholder-icon">
                  📸
                </div>

                <h4>
                  High-Resolution Photo & Incident Video
                  Attachment Spot
                </h4>

                <p>
                  Drag and drop emergency scene photos or
                  videos here, or click to browse files.
                </p>

                <input
                  type="file"
                  accept="image/*,video/*"
                  multiple
                  id="incident-media-input"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />

                <label
                  htmlFor="incident-media-input"
                  className="btn sky sm"
                >
                  📁 Browse Incident Photos / Videos
                </label>

                {/* Selected Files */}
                {files.length > 0 && (
                  <div style={{ marginTop: "14px" }}>
                    {files.map((file, index) => (
                      <div key={index}>
                        📎 {file.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Submit */}
            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                className="btn p w"
                style={{
                  padding: "14px",
                  fontSize: "16px",
                }}
              >
                🚨 Send Emergency Report Now
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Report;

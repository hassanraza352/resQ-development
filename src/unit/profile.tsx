import { useState } from "react";

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [unitName, setUnitName] = useState("Rescue Unit-3");
  const [type, setType] = useState("Ambulance");
  const [phone, setPhone] = useState("+92 300 1111111");

  const handleTheme = () => {
    document.body.classList.toggle("dark");
  };

  const handleSave = () => {
    console.log({
      unitName,
      type,
      phone,
    });

    alert("Profile saved");
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

        <a href="/unit/dashboard">
          <span>🏠</span>
          Dashboard
        </a>

        <a href="/unit/requests">
          <span>📥</span>
          Incoming Requests
        </a>

        <a href="/unit/assignment">
          <span>🎯</span>
          Active Assignment
        </a>

        <a href="/unit/map">
          <span>🗺️</span>
          Live Map
        </a>

        <a href="/unit/profile" className="on">
          <span>👤</span>
          Profile
        </a>

        <a href="/unit/settings">
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
            ☰ <span>Menu</span>
          </button>

          <h1>Profile</h1>

          <span className="sp"></span>

          <button
            className="btn sm"
            id="th"
            aria-label="Toggle theme"
            onClick={handleTheme}
          >
            🌓
          </button>

          <a href="/unit/notifications" className="btn sm">
            🔔
          </a>

          <div className="av">RU</div>
        </header>

        {/* Page */}
        <main className="pg">
          <div className="box">
            <h3>Unit profile</h3>

            {/* Unit Name */}
            <div className="fld">
              <label>Unit name</label>

              <input
                value={unitName}
                onChange={(e) => setUnitName(e.target.value)}
              />
            </div>

            {/* Type */}
            <div className="fld">
              <label>Type</label>

              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>Ambulance</option>
                <option>Fire</option>
                <option>Police</option>
              </select>
            </div>

            {/* Phone */}
            <div className="fld">
              <label>Phone</label>

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Save */}
            <button
              className="btn p"
              onClick={handleSave}
            >
              Save changes
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
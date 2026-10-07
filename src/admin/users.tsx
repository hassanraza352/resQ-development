import { useState } from "react";

interface User {
  name: string;
  role: string;
  status: "Active" | "Pending";
}

const Users = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState<User[]>([
    {
      name: "Ali Khan",
      role: "User",
      status: "Active",
    },
    {
      name: "Rescue Unit-3",
      role: "Unit",
      status: "Active",
    },
    {
      name: "Dr. Sana",
      role: "Hospital",
      status: "Pending",
    },
  ]);

  const handleSuspend = (index: number) => {
    setUsers((prev) =>
      prev.map((user, i) =>
        i === index ? { ...user, status: "Pending" } : user
      )
    );

    alert("User suspended");
  };

  const handleApprove = (index: number) => {
    setUsers((prev) =>
      prev.map((user, i) =>
        i === index ? { ...user, status: "Active" } : user
      )
    );

    alert("Approved");
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
  );

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

        <a href="/admin/users" className="on">
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

        <a href="/admin/reports">
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

          <h1>Users</h1>

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
          <div className="fld">
            <input
              placeholder="🔍 Search users"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="box">
            <h3></h3>

            <div className="tw">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredUsers.map((user, index) => (
                    <tr key={`${user.name}-${index}`}>
                      <td>{user.name}</td>

                      <td>{user.role}</td>

                      <td>
                        <span
                          className={`badge ${
                            user.status === "Active"
                              ? "b-ok"
                              : "b-warn"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td>
                        {user.status === "Pending" ? (
                          <button
                            className="btn g sm"
                            onClick={() => handleApprove(index)}
                          >
                            Approve
                          </button>
                        ) : (
                          <button
                            className="btn sm"
                            onClick={() => handleSuspend(index)}
                          >
                            Suspend
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Users;
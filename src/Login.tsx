import {
  useEffect,
  useState,
  type FormEvent,
  type CSSProperties,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import ambulance from "../assets/ambulance.jpg";

const ROLES = [
  { key: "user", label: "User", to: "/user/dashboard" },
  { key: "unit", label: "Unit", to: "/unit/dashboard" },
  { key: "hospital", label: "Hospital", to: "/hospital/overview" },
  { key: "admin", label: "Admin", to: "/admin/dashboard" },
];

export default function Login() {
  const navigate = useNavigate();

  const [ready, setReady] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const role = ROLES[roleIndex];

  useEffect(() => {
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setReady(true))
    );

    return () => cancelAnimationFrame(id);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      navigate(role.to);
    }, 400);
  };

  const buttonText = loading
    ? "Logging in…"
    : role.key === "user"
      ? "Login"
      : `Login as ${role.label}`;

  const bgStyle: CSSProperties = {
    "--bg-img": `url(${ambulance})`,
  } as CSSProperties;

  const animationStyle = (index: number): CSSProperties =>
    ({
      "--i": index,
    } as CSSProperties);

  return (
    <div
      className={`${styles["login-page"]} ${
        ready ? styles["login-page-ready"] : ""
      }`}
    >
      <div
        className={styles["login-bg"]}
        style={bgStyle}
        aria-hidden="true"
      />

      <main className={styles["login-wrap"]}>
        {/* LEFT SIDE */}
        <section className={styles["login-hero"]}>
          <Link
            to="/"
            className={styles["login-logo"]}
          >
            <svg viewBox="0 0 30 30" aria-hidden="true">
              <circle
                cx="15"
                cy="15"
                r="15"
                fill="#830000"
              />

              <path
                d="M13 7h4v6h6v4h-6v6h-4v-6H7v-4h6z"
                fill="#fff"
              />
            </svg>

            RESQ
          </Link>

          <h1 aria-label="Together for a safer tomorrow.">
            {["Together", "for a safer", "tomorrow."].map(
              (word, i) => (
                <span
                  className={styles["login-word"]}
                  key={word}
                >
                  <span style={animationStyle(i)}>
                    {word}
                  </span>
                </span>
              )
            )}
          </h1>

          <p
            className={styles["login-intro"]}
            style={animationStyle(3)}
          >
            Emergency calls, ambulances and hospitals on one
            platform.
          </p>
        </section>

        {/* LOGIN CARD */}
        <section className={styles["login-card"]}>
          {/* ROLE SWITCH */}
          <div
            className={styles["login-segment"]}
            role="tablist"
            aria-label="Log in as"
          >
            <i
              className={styles["login-pill"]}
              style={{
                transform: `translateX(${roleIndex * 100}%)`,
              }}
            />

            {ROLES.map((r, i) => (
              <button
                key={r.key}
                type="button"
                role="tab"
                aria-selected={i === roleIndex}
                onClick={() => setRoleIndex(i)}
              >
                {r.label}
              </button>
            ))}
          </div>

          <h2>Welcome back</h2>

          <p className={styles["login-sub"]}>
            Log in to your account to continue.
          </p>

          <form onSubmit={handleSubmit}>
            {/* EMAIL / PHONE */}
            <div className={styles["login-field"]}>
              <input
                id="login-id"
                type="text"
                placeholder=" "
                autoComplete="username"
                required
                value={identity}
                onChange={(e) =>
                  setIdentity(e.target.value)
                }
              />

              <label htmlFor="login-id">
                Email or phone
              </label>
            </div>

            {/* PASSWORD */}
            <div className={styles["login-field"]}>
              <input
                id="login-pw"
                type={showPw ? "text" : "password"}
                placeholder=" "
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <label htmlFor="login-pw">
                Password
              </label>

              <button
                type="button"
                className={styles["login-eye"]}
                onClick={() =>
                  setShowPw((s) => !s)
                }
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button
              className={styles["login-go"]}
              disabled={loading}
            >
              {buttonText}
            </button>
          </form>

          {/* LINKS */}
          <div className={styles["login-links"]}>
            <Link to="/forgot">
              Forgot password?
            </Link>

            <span>
              No account?{" "}
              <Link to="/register">
                Register
              </Link>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
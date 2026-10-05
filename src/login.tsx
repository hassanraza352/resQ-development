import { useEffect, useState, type CSSProperties, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './css/Login.module.css'
import ambulance from './assets/ambulance.jpg'

type Role = 'user' | 'unit' | 'hospital' | 'admin'

const ROLES: { key: Role; label: string; path: string }[] = [
  { key: 'user', label: 'User', path: '/user/dashboard' },
  { key: 'unit', label: 'Unit', path: '/unit/dashboard' },
  { key: 'hospital', label: 'Hospital', path: '/hospital/overview' },
  { key: 'admin', label: 'Admin', path: '/admin/dashboard' },
]

function Login() {
     useEffect(() => {
  const frame1 = requestAnimationFrame(() => {
    const frame2 = requestAnimationFrame(() => {
      document
        .querySelector(`.${styles.registerPage}`)
        ?.classList.add(styles.ready)
    })

    return () => cancelAnimationFrame(frame2)
  })

  return () => cancelAnimationFrame(frame1)
}, [])
  const navigate = useNavigate()

  const [role, setRole] = useState<Role>('user')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const activeIndex = ROLES.findIndex((item) => item.key === role)
  const selectedRole = ROLES[activeIndex]

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (loading) {
      return
    }

    setLoading(true)

    window.setTimeout(() => {
      navigate(selectedRole.path)
    }, 400)
  }

  const backgroundStyle = {
    '--ambulance-image': `url("${ambulance}")`,
  } as CSSProperties

  return (
    <main
     className={`${styles.loginPage} ${styles.ready}`}   

      style={backgroundStyle}
    >
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.wrap}>
        <section className={styles.hero}>
          <a className={styles.logo} href="/">
            <svg
              viewBox="0 0 30 30"
              aria-hidden="true"
            >
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
          </a>

          <h1 aria-label="Together for a safer tomorrow.">
            <span className={styles.w}>
              <span style={{ '--i': 0 } as CSSProperties}>
                Together
              </span>
            </span>

            <span className={styles.w}>
              <span style={{ '--i': 1 } as CSSProperties}>
                for a safer
              </span>
            </span>

            <span className={styles.w}>
              <span style={{ '--i': 2 } as CSSProperties}>
                tomorrow.
              </span>
            </span>
          </h1>

          <p className={styles.heroText}>
            Emergency calls, ambulances and hospitals on one platform.
          </p>
        </section>

        <section className={styles.card}>
          <div
            className={styles.seg}
            role="tablist"
            aria-label="Log in as"
          >
            <i
              className={styles.pill}
              style={{
                transform: `translateX(${activeIndex * 100}%)`,
              }}
              aria-hidden="true"
            />

            {ROLES.map((item) => (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={role === item.key}
                onClick={() => setRole(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <h2>Welcome back</h2>

          <p className={styles.sub}>
            Log in to your account to continue.
          </p>

          <form onSubmit={handleSubmit}>
            <div className={styles.fld}>
              <input
                id="login-id"
                type="text"
                placeholder=" "
                autoComplete="username"
                required
              />

              <label htmlFor="login-id">
                Email or phone
              </label>
            </div>

            <div className={styles.fld}>
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                placeholder=" "
                autoComplete="current-password"
                required
              />

              <label htmlFor="login-password">
                Password
              </label>

              <button
                className={styles.eye}
                type="button"
                onClick={() => setShowPassword((value) => !value)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <button
              className={styles.go}
              type="submit"
              disabled={loading}
            >
              {loading
                ? 'Logging in…'
                : role === 'user'
                  ? 'Login'
                  : `Login as ${selectedRole.label}`}
            </button>
          </form>

          <div className={styles.links}>
            <a href="/forgot">
              Forgot password?
            </a>

            <span>
              No account?{' '}
              <a href="/register">
                Register
              </a>
            </span>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login

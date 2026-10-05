import {
  useEffect,
  useState,
  type CSSProperties,
  type FormEvent,
} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './css/Register.module.css'
import ambulance from './assets/ambulance.jpg'

type Role = 'user' | 'unit' | 'hospital' | 'admin'

const ROLES: {
  key: Role
  label: string
  path: string
}[] = [
  {
    key: 'user',
    label: 'User',
    path: '/user/dashboard',
  },
  {
    key: 'unit',
    label: 'Service unit',
    path: '/unit/dashboard',
  },
  {
    key: 'hospital',
    label: 'Hospital staff',
    path: '/hospital/overview',
  },
  {
    key: 'admin',
    label: 'Admin',
    path: '/admin/dashboard',
  },
]

function Register() {
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
  const [password, setPassword] = useState('')

  const selectedRole = ROLES.find((item) => item.key === role)

  const passwordStrength = password
    ? [
        password.length >= 8,
        /\d/.test(password),
        /[A-Z]/.test(password),
        /[^A-Za-z0-9]/.test(password),
      ].filter(Boolean).length
    : 0

  const strengthWords = [
    '',
    'Too weak',
    'Getting there',
    'Good',
    'Strong',
  ]

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (loading) {
      return
    }

    setLoading(true)

    window.setTimeout(() => {
      if (selectedRole) {
        navigate(selectedRole.path)
      }
    }, 400)
  }

  const backgroundStyle = {
    '--ambulance-image': `url("${ambulance}")`,
  } as CSSProperties

  return (
    <main
className={`${styles.registerPage} ${styles.ready}`}   
   style={backgroundStyle}
    >
      <div
        className={styles.bg}
        aria-hidden="true"
      />

      <div className={styles.wrap}>
        <section className={styles.hero}>
          <a
            className={styles.logo}
            href="/"
          >
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

          <h1 aria-label="Be part of a safer community.">
            <span className={styles.w}>
              <span style={{ '--i': 0 } as CSSProperties}>
                Be part of
              </span>
            </span>

            <span className={styles.w}>
              <span style={{ '--i': 1 } as CSSProperties}>
                a safer
              </span>
            </span>

            <span className={styles.w}>
              <span style={{ '--i': 2 } as CSSProperties}>
                community.
              </span>
            </span>
          </h1>

          <p className={styles.heroText}>
            Join RESQ and be ready when it matters.
          </p>
        </section>

        <section className={styles.card}>
          <h2>Create your account</h2>

          <p className={styles.sub}>
            Choose how you will use RESQ.
          </p>

          <div
            className={styles.roles}
            role="group"
            aria-label="Account type"
          >
            {ROLES.map((item) => (
              <button
                key={item.key}
                type="button"
                aria-pressed={role === item.key}
                onClick={() => setRole(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.fld}>
              <input
                id="register-name"
                type="text"
                placeholder=" "
                autoComplete="name"
                required
              />

              <label htmlFor="register-name">
                Full name
              </label>
            </div>

            <div className={styles.fld}>
              <input
                id="register-email"
                type="email"
                placeholder=" "
                autoComplete="email"
                required
              />

              <label htmlFor="register-email">
                Email
              </label>
            </div>

            <div className={styles.fld}>
              <input
                id="register-password"
                type={showPassword ? 'text' : 'password'}
                placeholder=" "
                autoComplete="new-password"
                minLength={6}
                required
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
              />

              <label htmlFor="register-password">
                Password
              </label>

              <button
                className={styles.eye}
                type="button"
                onClick={() =>
                  setShowPassword((value) => !value)
                }
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <div
              className={`${styles.meter} ${
                passwordStrength
                  ? styles[`s${passwordStrength}`]
                  : ''
              }`}
              aria-hidden="true"
            >
              <i />
              <i />
              <i />
              <i />
            </div>

            <p className={styles.hint}>
              {passwordStrength
                ? strengthWords[passwordStrength]
                : 'Use 8+ characters with a number and a capital letter.'}
            </p>

            <button
              className={styles.go}
              type="submit"
              disabled={loading}
            >
              {loading
                ? 'Creating account…'
                : 'Create account'}
            </button>
          </form>

          <p className={styles.links}>
            Already have an account?{' '}
            <a href="/login">
              Login
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}

export default Register
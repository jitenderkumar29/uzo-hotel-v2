'use client';
import { useState, useRef, FormEvent } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import styles from './Login.module.css';
import Image from 'next/image';
import logoImage from '@/assets/icons/logo26.png';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter(); // Correct: useRouter at component level

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate inputs
    if (!username.trim()) {
      alert('Please enter your username');
      usernameRef.current?.focus();
      setIsSubmitting(false);
      return;
    }

    if (!password.trim()) {
      alert('Please enter your password');
      passwordRef.current?.focus();
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      alert(`Welcome back, ${username}!`);
      setIsSubmitting(false);
      // Reset form if not remembering
      if (!rememberMe) {
        setUsername('');
        setPassword('');
      }
    }, 1000);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.leftContainer}>
            <div className={styles.btnContainer}>
              <button
                onClick={() => router.back()}
                className={styles.backButton}
              >
                <FontAwesomeIcon icon={faChevronLeft} className={styles.backIcon} />
                Back
              </button>
            </div>
            <div className={styles.loginCardDesc}>
              <div className={styles.logoImage}>
                <Image src={logoImage} alt="Logo" height={80} width={80} />
              </div>
              <div><h3 className={styles.heading}>UZO Login</h3></div>
              <span className={styles.descHeading}>There&apos;s a better way to roam the world</span>
              <span className={styles.descText}>
                Sign up with your account and get exclusive access to discounts and
                savings on UZO stays and with our many travel partners.
              </span>
            </div>
          </div>
          <div className={styles.loginBox}>
            <div className={styles.loginHeader}>
              <span>Login</span>
            </div>

            <form onSubmit={handleSubmit} className={styles.loginForm}>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  id="username"
                  ref={usernameRef}
                  className={styles.inputField}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label htmlFor="username" className={styles.label}>
                  Username
                </label>
                <FaUser className={styles.icon} />
              </div>

              <div className={styles.inputBox}>
                <div className={styles.passwordContainer}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    ref={passwordRef}
                    className={styles.inputField}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="password" className={styles.label}>
                    Password
                  </label>
                  <FaLock className={styles.icon} />
                  <button
                    type="button"
                    className={styles.togglePassword}
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className={styles.rememberForgot}>
                <div className={styles.rememberMe}>
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="remember">Remember Me</label>
                </div>

                <div className={styles.forgot}>
                  <a href="#" className={styles.link}>
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className={styles.inputBox}>
                <button
                  type="submit"
                  className={styles.inputSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              </div>

              <div className={styles.socialLogin}>
                <a href="#" className={styles.socialBtn} aria-label="Login with Google">
                  <FaGoogle />
                </a>
                <a href="#" className={styles.socialBtn} aria-label="Login with Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className={styles.socialBtn} aria-label="Login with Twitter">
                  <FaTwitter />
                </a>
              </div>

              <div className={styles.register}>
                <span>
                  Don&apos;t have an account?{' '}
                  <a href="#" className={styles.link}>
                    Register
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
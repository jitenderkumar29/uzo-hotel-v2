'use client';
import { useState, useRef, FormEvent } from 'react';
import { FaLock, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';
import styles from './ResetPasswordUser.module.css';
import Image from 'next/image';
import logoImage from '@/assets/icons/logo.png';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ResetPasswordUser = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Validate inputs
    if (!password.trim()) {
      setMessage('Please enter your new password');
      passwordRef.current?.focus();
      setIsSubmitting(false);
      return;
    }

    if (password.length < 8) {
      setMessage('Password must be at least 8 characters');
      passwordRef.current?.focus();
      setIsSubmitting(false);
      return;
    }

    if (!confirmPassword.trim()) {
      setMessage('Please confirm your password');
      confirmPasswordRef.current?.focus();
      setIsSubmitting(false);
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      confirmPasswordRef.current?.focus();
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      setMessage('Your password has been successfully reset!');
      setIsSubmitting(false);
      setPassword('');
      setConfirmPassword('');
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
          <div className={styles.btnContainer}>
            <button
              onClick={() => router.back()}
              className={styles.backButton}
            >
              <FaArrowLeft className={styles.backIcon} />
              Back
            </button>
          </div>
          <div className={styles.loginCardDesc}>
            <div className={styles.logoImage}>
              <Image src={logoImage} alt="Logo" height={80} width={80} />
            </div>
            <div><h3 className={styles.heading}>Set New Password</h3></div>
            <span className={styles.descHeading}>Secure Your Account</span>
            <span className={styles.descText}>
              Create a strong new password for your UZO account. Make sure it&apos;s different from previous passwords.
            </span>
          </div>
        </div>

        <div className={styles.loginBox}>
          <div className={styles.loginHeader}>
            <span>Reset</span>
          </div>

          <form onSubmit={handleSubmit} className={styles.loginForm}>
            {message && (
              <div className={`${styles.message} ${isSuccess ? styles.success : styles.error}`}>
                {message}
              </div>
            )}

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
                  disabled={isSuccess}
                />
                <label htmlFor="password" className={styles.label}>
                  New Password
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

            <div className={styles.inputBox}>
              <div className={styles.passwordContainer}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  ref={confirmPasswordRef}
                  className={styles.inputField}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={isSuccess}
                />
                <label htmlFor="confirmPassword" className={styles.label}>
                  Confirm Password
                </label>
                <FaLock className={styles.icon} />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={toggleConfirmPasswordVisibility}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className={styles.passwordRequirements}>
              <span>Password Requirements:</span>
              <ul>
                <li className={password.length >= 8 ? styles.requirementMet : ''}>
                  Minimum 8 characters
                </li>
                <li className={/[A-Z]/.test(password) ? styles.requirementMet : ''}>
                  At least one uppercase letter
                </li>
                <li className={/[0-9]/.test(password) ? styles.requirementMet : ''}>
                  At least one number
                </li>
                <li className={/[^A-Za-z0-9]/.test(password) ? styles.requirementMet : ''}>
                  At least one special character
                </li>
              </ul>
            </div>

            <div className={styles.inputBox}>
              <button
                type="submit"
                className={styles.inputSubmit}
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? 'Resetting...' : isSuccess ? 'Password Reset!' : 'Reset Password'}
              </button>
            </div>

            <div className={styles.register}>
              <span>
                Remember your password?{' '}
                <Link href="/login" className={styles.link}>
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordUser;
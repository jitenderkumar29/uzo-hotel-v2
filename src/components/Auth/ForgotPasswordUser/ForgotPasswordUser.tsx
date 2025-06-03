'use client';
import { useState, useRef, FormEvent } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import styles from './ForgotPasswordUser.module.css';
import Image from 'next/image';
import logoImage from '@/assets/icons/logo26.png';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const ForgotPasswordUser = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Validate email
    if (!email.trim()) {
      setMessage('Please enter your email address');
      emailRef.current?.focus();
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Please enter a valid email address');
      emailRef.current?.focus();
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      setMessage(`Password reset link has been sent to ${email}`);
      setIsSubmitting(false);
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
              <FontAwesomeIcon icon={faChevronLeft} className={styles.backIcon} />
              Back
            </button>
          </div>
          <div className={styles.loginCardDesc}>
            <div className={styles.logoImage}>
              <Image src={logoImage} alt="Logo" height={80} width={80} />
            </div>
            <div><h3 className={styles.heading}>Reset Your Password</h3></div>
            <span className={styles.descHeading}>Recover Your Account</span>
            <span className={styles.descText}>
              Enter your email address associated with your UZO account and we&apos;ll send you a link to reset your password.
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
              <input
                type="email"
                id="email"
                ref={emailRef}
                className={styles.inputField}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSuccess}
              />
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <FaEnvelope className={styles.icon} />
            </div>

            <div className={styles.inputBox}>
              <button
                type="submit"
                className={styles.inputSubmit}
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? 'Sending...' : isSuccess ? 'Sent!' : 'Send Reset Link'}
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

            <div className={styles.register}>
              <span>
                Don&apos;t have an account?{' '}
                <Link href="/registerUser" className={styles.link}>
                  Register
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordUser;
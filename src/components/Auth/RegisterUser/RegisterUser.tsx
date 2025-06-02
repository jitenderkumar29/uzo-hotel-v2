'use client';
import { useState, useRef, FormEvent } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaTwitter, FaPhone, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import { FaAddressCard, FaCity, FaGlobe } from 'react-icons/fa';
import styles from './RegisterUser.module.css';
import Image from 'next/image';
import logoImage from '@/assets/icons/logo26.png';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const RegisterUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCountryCodeDropdown, setShowCountryCodeDropdown] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1', // Default country code
    mobile: '',
    address: {
      country: '',
      houseNumber: '',
      street: '',
      city: '',
      district: '',
      state: ''
    },
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Country codes with flags and names
  const countryCodes = [
    { code: '+1', name: 'United States', flag: '🇺🇸' },
    { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+61', name: 'Australia', flag: '🇦🇺' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+86', name: 'China', flag: '🇨🇳' },
    { code: '+33', name: 'France', flag: '🇫🇷' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' },
    { code: '+971', name: 'UAE', flag: '🇦🇪' },
    { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  ];

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleCountryCodeDropdown = () => {
    setShowCountryCodeDropdown(!showCountryCodeDropdown);
  };

  const selectCountryCode = (code: string) => {
    setFormData(prev => ({
      ...prev,
      countryCode: code
    }));
    setShowCountryCodeDropdown(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Check if the field is part of the address object
    if (name in formData.address) {
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.firstName.trim()) {
      alert('Please enter your first name');
      firstNameRef.current?.focus();
      setIsSubmitting(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      alert(`Registration successful! Welcome ${formData.firstName}`);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+1',
        mobile: '',
        address: {
          country: '',
          houseNumber: '',
          street: '',
          city: '',
          district: '',
          state: ''
        },
        password: '',
        confirmPassword: ''
      });
    }, 1000);
  };

  // Sample countries for address dropdown
  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'IN', name: 'India' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'JP', name: 'Japan' },
  ];

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
            <div className={styles.registerCardDesc}>
              <div className={styles.logoImage}>
                <Image src={logoImage} alt="Logo" height={80} width={80} />
              </div>
              <div><h3 className={styles.heading}>UZO Registration</h3></div>
              <span className={styles.descHeading}>Join our travel community</span>
              <span className={styles.descText}>
                Create your account to get exclusive access to discounts and
                savings on UZO stays and with our many travel partners.
              </span>
            </div>
          </div>
          <div className={styles.registerBox}>
            <div className={styles.registerHeader}>
              <span>Register</span>
            </div>

            <form onSubmit={handleSubmit} className={styles.registerForm}>
              <div className={styles.nameFields}>
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    ref={firstNameRef}
                    className={styles.inputField}
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="firstName" className={styles.label}>
                    First Name
                  </label>
                  <FaUser className={styles.icon} />
                </div>

                <div className={styles.inputBox}>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={styles.inputField}
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <label htmlFor="lastName" className={styles.label}>
                    Last Name
                  </label>
                  <FaUser className={styles.icon} />
                </div>
              </div>

              <div className={styles.inputBox}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.inputField}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <FaUser className={styles.icon} />
              </div>

              <div className={styles.inputBox}>
                <div className={styles.passwordContainer}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className={styles.inputField}
                    value={formData.password}
                    onChange={handleChange}
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

              <div className={styles.inputBox}>
                <div className={styles.passwordContainer}>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    className={styles.inputField}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
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

              <div className={styles.inputBox}>
                <div className={styles.phoneInputContainer}>
                  <div
                    className={styles.countryCodeSelector}
                    onClick={toggleCountryCodeDropdown}
                  >
                    <span className={styles.selectedCountryCode}>
                      {countryCodes.find(cc => cc.code === formData.countryCode)?.flag} {formData.countryCode}
                    </span>
                    <FaChevronDown className={styles.chevronIcon} />
                    {showCountryCodeDropdown && (
                      <div className={styles.countryCodeDropdown}>
                        {countryCodes.map((country) => (
                          <div
                            key={country.code}
                            className={`${styles.countryCodeOption} ${formData.countryCode === country.code ? styles.selected : ''}`}
                            onClick={() => selectCountryCode(country.code)}
                          >
                            <span className={styles.countryFlag}>{country.flag}</span>
                            <span className={styles.countryName}>{country.name}</span>
                            <span className={styles.countryCode}>{country.code}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    className={`${styles.inputField} ${styles.phoneInput}`}
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="mobile" className={styles.label}>
                    Mobile Number
                  </label>
                  <FaPhone className={styles.icon} />
                </div>
              </div>

              <div className={styles.inputBox}>
                <select
                  id="country"
                  name="country"
                  className={styles.inputField}
                  value={formData.address.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Country</option>
                  {countries.map(country => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
                <label htmlFor="country" className={styles.selectLabel}>
                  Country
                </label>
                <FaGlobe className={styles.icon} />
              </div>

              <div className={styles.addressSection}>
                <h4 className={styles.addressTitle}>Address Information</h4>

                <div className={styles.inputBox}>
                  <input
                    type="text"
                    id="houseNumber"
                    name="houseNumber"
                    className={styles.inputField}
                    value={formData.address.houseNumber}
                    onChange={handleChange}
                  />
                  <label htmlFor="houseNumber" className={styles.label}>
                    House/Apartment Number
                  </label>
                  <FaAddressCard className={styles.icon} />
                </div>

                <div className={styles.inputBox}>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    className={styles.inputField}
                    value={formData.address.street}
                    onChange={handleChange}
                  />
                  <label htmlFor="street" className={styles.label}>
                    Street
                  </label>
                  <FaMapMarkerAlt className={styles.icon} />
                </div>

                <div className={styles.inputBox}>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className={styles.inputField}
                    value={formData.address.city}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="city" className={styles.label}>
                    City
                  </label>
                  <FaCity className={styles.icon} />
                </div>

                <div className={styles.inputBox}>
                  <input
                    type="text"
                    id="district"
                    name="district"
                    className={styles.inputField}
                    value={formData.address.district}
                    onChange={handleChange}
                  />
                  <label htmlFor="district" className={styles.label}>
                    District
                  </label>
                  <FaMapMarkerAlt className={styles.icon} />
                </div>

                <div className={styles.inputBox}>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className={styles.inputField}
                    value={formData.address.state}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="state" className={styles.label}>
                    State/Province
                  </label>
                  <FaMapMarkerAlt className={styles.icon} />
                </div>
              </div>

              <div className={styles.inputBox}>
                <button
                  type="submit"
                  className={styles.inputSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Registering...' : 'Register'}
                </button>
              </div>

              <div className={styles.socialRegister}>
                <span className={styles.socialText}>Or register with</span>
                <div className={styles.socialIcons}>
                  <a href="#" className={styles.socialBtn} aria-label="Register with Google">
                    <FaGoogle />
                  </a>
                  <a href="#" className={styles.socialBtn} aria-label="Register with Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" className={styles.socialBtn} aria-label="Register with Twitter">
                    <FaTwitter />
                  </a>
                </div>
              </div>

              <div className={styles.loginLink}>
                <span>
                  Already have an account?{' '}
                  <a href="#" className={styles.link}>
                    Login
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

export default RegisterUser;
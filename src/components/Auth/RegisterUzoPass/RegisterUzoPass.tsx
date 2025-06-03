'use client';
import { useState, useRef, FormEvent } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaTwitter, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import { FaAddressCard, FaCity } from 'react-icons/fa';
import styles from './RegisterUzoPass.module.css';
import Image from 'next/image';
import logoImage from '@/assets/icons/logo26.png';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import ReactCountryFlag from 'react-country-flag';


const RegisterUzoPass = () => {
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
  const countryCodeButtonRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Country codes with flags and names
  const countryCodes = [
    { code: '+1', name: 'United States', isoCode: 'US' },
    { code: '+44', name: 'United Kingdom', isoCode: 'GB' },
    { code: '+91', name: 'India', isoCode: 'IN' },
    { code: '+61', name: 'Australia', isoCode: 'AU' },
    { code: '+81', name: 'Japan', isoCode: 'JP' },
    { code: '+86', name: 'China', isoCode: 'CN' },
    { code: '+33', name: 'France', isoCode: 'FR' },
    { code: '+49', name: 'Germany', isoCode: 'DE' },
    { code: '+971', name: 'United Arab Emirates', isoCode: 'AE' },
    { code: '+966', name: 'Saudi Arabia', isoCode: 'SA' },
    { code: '+39', name: 'Italy', isoCode: 'IT' },
    { code: '+34', name: 'Spain', isoCode: 'ES' },
    { code: '+7', name: 'Russia', isoCode: 'RU' },
    { code: '+82', name: 'South Korea', isoCode: 'KR' },
    { code: '+46', name: 'Sweden', isoCode: 'SE' },
    { code: '+41', name: 'Switzerland', isoCode: 'CH' },
    { code: '+31', name: 'Netherlands', isoCode: 'NL' },
    { code: '+32', name: 'Belgium', isoCode: 'BE' },
    { code: '+47', name: 'Norway', isoCode: 'NO' },
    { code: '+45', name: 'Denmark', isoCode: 'DK' },
  ];


  // const COUNTRY_CODE_MAP: Record<string, string> = {
  //   '+1': 'US',
  //   '+44': 'GB',
  //   '+91': 'IN',
  //   '+61': 'AU',
  //   '+81': 'JP',
  //   '+86': 'CN',
  //   '+33': 'FR',
  //   '+49': 'DE',
  //   '+971': 'AE',
  //   '+966': 'SA'
  // };

  const getCountryFlagProps = (countryCode: string) => {
    const codeWithoutPlus = countryCode.replace('+', '');
    const country = countryCodes.find(c => c.code === countryCode);

    return {
      countryCode: country?.isoCode || codeWithoutPlus,
      title: country?.name || ''
    };
  };
  // const getCountryFlagProps = (countryCode: string) => {
  //   const codeWithoutPlus = countryCode.replace('+', '');
  //   return {
  //     countryCode: countryCodes.code[countryCode] || codeWithoutPlus,
  //     title: countryCodes.find(c => c.code === countryCode)?.name || ''
  //   };
  //   // return {
  //   //   countryCode: COUNTRY_CODE_MAP[countryCode] || codeWithoutPlus,
  //   //   title: countryCodes.find(c => c.code === countryCode)?.name || ''
  //   // };
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleCountryCodeDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowCountryCodeDropdown(!showCountryCodeDropdown);
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

  // Close dropdown when clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    if (countryCodeButtonRef.current && !countryCodeButtonRef.current.contains(e.target as Node)) {
      setShowCountryCodeDropdown(false);
    }
  };

  // Add event listener when component mounts
  useState(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  // Sample countries for address dropdown
  // const countries = [
  //   { code: 'us', name: 'United States' },
  //   { code: 'in', name: 'India' },
  //   { code: 'UK', name: 'United Kingdom' },
  //   { code: 'CA', name: 'Canada' },
  //   { code: 'AU', name: 'Australia' },
  //   { code: 'JP', name: 'Japan' },
  // ];

  // const toggleCountryDropdown = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   setShowCountryDropdown(!showCountryDropdown);
  // };

  const selectCountryCode = (code: string, name: string) => {
    setFormData(prev => ({
      ...prev,
      countryCode: code,
      address: {
        ...prev.address,
        country: name
      },
    }));
    setShowCountryCodeDropdown(false);
    setTimeout(() => {
      console.log("formData after delay:", formData);
    }, 1000);
  };

  // const selectCountry = (countryName: string, code: string) => {
  //   setFormData(prev => ({
  //     ...prev,
  //     address: {
  //       ...prev.address,
  //       country: countryName
  //     },
  //     countryCode: code
  //   }));
  //   setShowCountryDropdown(false);
  // };


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
              <div><h3 className={styles.heading}>UZO Pass Registration</h3></div>
              <span className={styles.descHeading}>Corporate Comfort, Executive Perks.</span>
              <span className={styles.descText}>
                Partner with us—and make every business trip a better experience. Our Corporate Membership program offers tailored benefits for companies and business travelers who demand more from every stay.
              </span>
            </div>
          </div>
          <div className={styles.registerBox}>
            <div className={styles.registerHeader}>
              <span>Register</span>
            </div>

            <form onSubmit={handleSubmit} className={styles.registerForm}>
              <div className={styles.nameFields}>

                {/*  First Name */}
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
                    placeholder=" "
                  />
                  <label htmlFor="firstName" className={styles.label}>
                    First Name
                  </label>
                  <FaUser className={styles.icon} />
                </div>

                {/* Last Name */}
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={styles.inputField}
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="lastName" className={styles.label}>
                    Last Name
                  </label>
                  <FaUser className={styles.icon} />
                </div>
              </div>

              {/* Email */}
              <div className={styles.inputBox}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.inputField}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                />
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <FaUser className={styles.icon} />
              </div>

              {/* country Code Selector */}
              <div className={styles.inputBox}>
                <div className={styles.phoneInputContainer}>
                  <div
                    className={styles.countryCodeSelector}
                    onClick={toggleCountryCodeDropdown}
                    ref={countryCodeButtonRef}
                  >
                    <span className={styles.selectedCountryCode}>
                      <ReactCountryFlag
                        {...getCountryFlagProps(formData.countryCode)}
                        svg
                        className={styles.flagIconSelected}
                      />
                      {formData.countryCode}
                    </span>
                    <FaChevronDown className={styles.chevronIcon} />

                    {/* country Code Dropdown */}
                    {showCountryCodeDropdown && (
                      <div className={styles.countryCodeDropdown}>
                        {countryCodes.map((country) => {
                          const flagProps = getCountryFlagProps(country.code);
                          return (
                            <div
                              key={country.code}
                              className={`${styles.countryCodeOption} ${formData.countryCode === country.code ? styles.selected : ''
                                }`}
                              onClick={() => selectCountryCode(country.code, country.name)}
                            >
                              <ReactCountryFlag
                                {...flagProps}
                                svg
                                className={styles.flagIcon}
                              />
                              <span className={styles.countryName}>{country.name}</span>
                              <span className={styles.countryCode}>{country.code}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/*  Mobile Number */}
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    className={`${styles.inputField} ${styles.phoneInput}`}
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="mobile" className={`${styles.label} ${styles.MobilePlaceholder}`}
                  >
                    Mobile Number
                  </label>
                  {/* <FaPhone className={styles.icon} /> */}
                </div>
              </div>

              {/* <div className={styles.inputBox}>
                <div className={styles.phoneInputContainer}>
                  <div
                    className={styles.countryCodeSelector}
                    onClick={toggleCountryCodeDropdown}
                    ref={countryCodeButtonRef}
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
                    placeholder=" "
                  />
                  <label htmlFor="mobile" className={styles.label}>
                    Mobile Number
                  </label>
                  <FaPhone className={styles.icon} />
                </div>
              </div> */}


              {/* Address Information */}
              <div className={styles.addressSection}>
                <h4 className={styles.addressTitle}>Address Information</h4>
                <div className={styles.addressRow}>

                  {/* House */}
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      id="houseNumber"
                      name="houseNumber"
                      className={styles.inputField}
                      value={formData.address.houseNumber}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label htmlFor="houseNumber" className={styles.label}>
                      House
                    </label>
                    <FaAddressCard className={styles.icon} />
                  </div>

                  {/* Street */}
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      className={styles.inputField}
                      value={formData.address.street}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label htmlFor="street" className={styles.label}>
                      Street
                    </label>
                    <FaMapMarkerAlt className={styles.icon} />
                  </div>
                </div>

                {/* City */}
                <div className={styles.addressRow}>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className={styles.inputField}
                      value={formData.address.city}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label htmlFor="city" className={styles.label}>
                      City
                    </label>
                    <FaCity className={styles.icon} />
                  </div>

                  {/* District */}
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      id="district"
                      name="district"
                      className={styles.inputField}
                      value={formData.address.district}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label htmlFor="district" className={styles.label}>
                      District
                    </label>
                    <FaMapMarkerAlt className={styles.icon} />
                  </div>
                </div>

                {/* Working Example of Selecet Country */}
                {/* <div className={styles.addressRow}>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      className={styles.inputField}
                      value={formData.address.state}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label htmlFor="state" className={styles.label}>
                      State/Province
                    </label>
                    <FaMapMarkerAlt className={styles.icon} />
                  </div>
                  <div className={styles.inputBox}>
                    <div
                      className={`${styles.inputField} ${styles.selectCountryDisplay}`}
                      onClick={toggleCountryDropdown}
                      ref={countryCodeButtonRef}
                    >
                      <FaChevronDown className={styles.chevronIconCountry} />
                      <span className={styles.selectedCountryCode}>
                        {formData.address.country || 'Select Country'}
                      </span>
                      {showCountryDropdown && (
                        <div className={styles.countryCodeDropdown}>
                          {countryCodes.map((country) => (

                            <div
                              key={country.code}
                              className={`${styles.countryCodeOption} ${formData.address.country === country.name ? styles.selected : ''}`}
                              onClick={() => selectCountry(country.name, country.code)}
                            >
                              <ReactCountryFlag
                                {...getCountryFlagProps(country.code)}
                                svg
                                className={styles.flagIcon}
                              />
                              <span className={styles.countryName}>{country.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <ReactCountryFlag
                      {...getCountryFlagProps(formData.countryCode)}
                      svg
                      className={styles.icon}
                    />
                  </div>
                </div> */}

              </div>

              {/* Password */}
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
                    placeholder=" "
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

              {/* Confirm Password */}
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
                    placeholder=" "
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

              {/* Register User */}
              <div className={styles.inputBox}>
                <button
                  type="submit"
                  className={styles.inputSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Registering...' : 'Register'}
                </button>
              </div>

              {/* register with  Google, Facebook, Twitter*/}
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

              {/* Already have an account */}
              <div className={styles.loginLink}>
                <span>
                  Already have an account?{' '}
                  <Link href="/loginPass" className={styles.link}>
                    Login
                  </Link>
                </span>
              </div>

            </form>
          </div>
        </div >
      </div >
    </>
  );
};

export default RegisterUzoPass;
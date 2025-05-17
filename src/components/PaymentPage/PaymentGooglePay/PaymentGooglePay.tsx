import { useState } from 'react';
import styles from './PaymentGooglePay.module.css';
import Image from 'next/image';

interface BankOption {
  value: string;
  label: string;
}

export default function PaymentGooglePay() {
  const [upiId, setUpiId] = useState('');
  const [bank, setBank] = useState('0');
  const [errors, setErrors] = useState({
    upiId: '',
    bank: ''
  });

  const banks: BankOption[] = [
    { value: 'abfspay', label: 'abfspay' },
    { value: 'allbank', label: 'allbank' },
    { value: 'apl', label: 'apl' },
    { value: 'aubank', label: 'aubank' },
    { value: 'axisb', label: 'axisb' },
    { value: 'axisbank', label: 'axisbank' },
    { value: 'axl', label: 'axl' },
    { value: 'BARODAMPAY', label: 'BARODAMPAY' },
    { value: 'citi', label: 'citi' },
    { value: 'citigold', label: 'citigold' },
    { value: 'dbs', label: 'dbs' },
    { value: 'fbl', label: 'fbl' },
    { value: 'federal', label: 'federal' },
    { value: 'freecharge', label: 'freecharge' },
    { value: 'hdfcbankjd', label: 'hdfcbankjd' },
    { value: 'hsbc', label: 'hsbc' },
    { value: 'ibl', label: 'ibl' },
    { value: 'icici', label: 'icici' },
    { value: 'idfcbank', label: 'idfcbank' },
    { value: 'ikwik', label: 'ikwik' },
    { value: 'indus', label: 'indus' },
    { value: 'kotak', label: 'kotak' },
    { value: 'myicici', label: 'myicici' },
    { value: 'okaxis', label: 'okaxis' },
    { value: 'okhdfcbank', label: 'okhdfcbank' },
    { value: 'okicici', label: 'okicici' },
    { value: 'oksbi', label: 'oksbi' },
    { value: 'ptyes', label: 'ptyes' },
    { value: 'ptaxis', label: 'ptaxis' },
    { value: 'pthdfc', label: 'pthdfc' },
    { value: 'ptsbi', label: 'ptsbi' },
    { value: 'pingpay', label: 'pingpay' },
    { value: 'rbl', label: 'rbl' },
    { value: 'sbi', label: 'sbi' },
    { value: 'sib', label: 'sib' },
    { value: 'upi', label: 'upi' },
    { value: 'waaxis', label: 'waaxis' },
    { value: 'wahdfcbank', label: 'wahdfcbank' },
    { value: 'wasbi', label: 'wasbi' },
    { value: 'ybl', label: 'ybl' },
    { value: 'yesbank', label: 'yesbank' }
  ];

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      upiId: '',
      bank: ''
    };

    if (!upiId.trim()) {
      newErrors.upiId = 'UPI ID is required';
      valid = false;
    } else if (!/^[a-zA-Z0-9._-]+$/.test(upiId)) {
      newErrors.upiId = 'Enter a valid UPI ID';
      valid = false;
    }

    if (bank === '0') {
      newErrors.bank = 'Please select a bank';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const fullUpiId = `${upiId}@${bank}`;
      console.log('Processing payment with UPI ID:', fullUpiId);
      // Here you would typically call your payment processing service
      alert(`Payment initiated for UPI ID: ${fullUpiId}`);
    }
  };

  return (
    <div className={styles.paymentContainer}>
      <div className={styles.googlePayHeader}>
        <Image
          src="/icons/googlePayNew.png"
          alt="Google Pay"
          className={styles.googlePayLogo}
          height={197}
          width={500}
        />
        {/* <h2 className={styles.tagline}>Money made simple, by Google</h2> */}
      </div>

      <form onSubmit={handleSubmit} className={styles.paymentForm}>
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Enter Your Google Pay ID</label>

          <div className={styles.upiInputContainer}>
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="Enter Your UPI ID"
              className={`${styles.upiInput} ${errors.upiId ? styles.inputError : ''}`}
            />

            <span className={styles.atSymbol}>@</span>

            <select
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              className={`${styles.bankSelect} ${errors.bank ? styles.inputError : ''}`}
            >
              <option value="0">Select</option>
              {banks.map((bankOption) => (
                <option key={bankOption.value} value={bankOption.value}>
                  {bankOption.label}
                </option>
              ))}
            </select>
          </div>

          {errors.upiId && (
            <div className={styles.errorMessage}>
              <span>{errors.upiId}</span>
            </div>
          )}

          {errors.bank && (
            <div className={styles.errorMessage}>
              <span>{errors.bank}</span>
            </div>
          )}
        </div>

        {/* <div className={styles.totalFare}>
          <div className={styles.totalLabel}>Total Fare:</div>
          <div className={styles.amount}>₹4431</div>
        </div>

        <button
          type="submit"
          className={styles.payButton}
          disabled={!upiId || bank === '0'}
        >
          Make Payment
        </button>

        <div className={styles.terms}>
          By Continuing, you agree to the Rules,
          <a href="/" target="_blank" className={styles.termsLink}>Privacy Policy</a>,
          <a href="/" target="_blank" className={styles.termsLink}>User Agreement</a> and
          <a href="/" target="_blank" className={styles.termsLink}> Terms & Conditions</a> of Uzohotels
        </div> */}

      </form>
    </div>
  );
}
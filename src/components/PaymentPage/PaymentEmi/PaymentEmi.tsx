import { useState } from 'react';
import styles from './PaymentEmi.module.css';

interface Bank {
  id: string;
  name: string;
  logo: string;
}

interface EMIOption {
  tenure: number;
  principalAmount: number;
  percentage: string;
  emiValue: number;
  totalInterest: number;
  selected: boolean;
}

export default function PaymentEmi() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [selectedEmiOption, setSelectedEmiOption] = useState<EMIOption | null>(null);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  });

  const banks: Bank[] = [
    { id: 'hdfc', name: 'HDFC', logo: '/icons/hdfb.png' },
    { id: 'icici', name: 'ICICI', logo: '/icons/ICIB.png' },
    { id: 'axis', name: 'Axis', logo: '/icons/AXIB.png' },
    { id: 'hsbc', name: 'HSBC', logo: '/icons/HSBC.png' },
    { id: 'sbi', name: 'SBI', logo: '/icons/SBIB.png' },
    { id: 'kotak', name: 'Kotak', logo: '/icons/kotak.png' },
    { id: 'indusind', name: 'INDUSIND', logo: '/icons/INIB.png' },
    { id: 'rbl', name: 'RBL', logo: '/icons/RBL.png' },
    { id: 'scb', name: 'SCB', logo: '/icons/SDCB.png' },
    { id: 'yes', name: 'YES', logo: '/icons/yesBankLogo.png' },
    { id: 'citi', name: 'CITI', logo: '/icons/city.png' },
    { id: 'bob', name: 'Bank Of Baroda', logo: '/icons/bob.png' }
  ];

  const [emiOptions, setEmiOptions] = useState<EMIOption[]>([
    { tenure: 3, principalAmount: 4431, percentage: '15%', emiValue: 1514.08, totalInterest: 111.24, selected: false },
    { tenure: 6, principalAmount: 4431, percentage: '15%', emiValue: 771.14, totalInterest: 195.84, selected: false },
    { tenure: 9, principalAmount: 4431, percentage: '15%', emiValue: 523.61, totalInterest: 281.49, selected: false },
    { tenure: 12, principalAmount: 4431, percentage: '15%', emiValue: 399.93, totalInterest: 368.16, selected: false }
  ]);

  // const totalAmount = 4431;

  const selectBank = (bank: Bank) => {
    setSelectedBank(bank);
  };

  const selectEmiOption = (selectedOption: EMIOption) => {
    const updatedOptions = emiOptions.map(option => ({
      ...option,
      selected: option.tenure === selectedOption.tenure
    }));
    setEmiOptions(updatedOptions);
    setSelectedEmiOption(selectedOption);
  };

  // const selectEmiOption = (option: EMIOption) => {
  //   const updatedOptions = emiOptions.map(opt => ({
  //     ...opt,
  //     selected: opt.tenure === option.tenure
  //   }));
  //   setSelectedEmiOption(option);
  // };

  const formatCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
      value = value.match(/.{1,4}/g)?.join('-') || '';
    }
    setCardDetails({ ...cardDetails, number: value });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const getYears = () => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 30 }, (_, i) => currentYear + i);
  };

  // const submitPayment = () => {
  //   console.log('Payment submitted', {
  //     bank: selectedBank,
  //     emiOption: selectedEmiOption,
  //     cardDetails
  //   });
  // };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>SELECT BANKS</h2>
      </div>

      <div className={styles.steps}>
        {/* Step 1: Choose Bank */}
        <div className={`${styles.step} ${activeStep >= 1 ? styles.active : ''}`}>
          <div className={styles.stepHeader} onClick={() => setActiveStep(1)}>
            <span className={styles.stepNumber}>1</span>
            <div className={styles.stepInfo}>
              <span className={styles.stepTitle}>Choose your Bank</span>
              <span className={styles.stepDescription}>You must have its debit/credit card</span>
            </div>
            <span className={styles.stepIndicator}>›</span>
          </div>

          {activeStep === 1 && (
            <div className={styles.stepContent}>
              <div className={styles.bankList}>
                {banks.map(bank => (
                  <div
                    key={bank.id}
                    className={`${styles.bankItem} ${selectedBank?.id === bank.id ? styles.selected : ''}`}
                    onClick={() => selectBank(bank)}
                  >
                    <img src={bank.logo} alt={bank.name} className={styles.bankLogo} />
                    <span className={styles.bankName}>{bank.name}</span>
                    <input
                      type="radio"
                      name="bank-radio"
                      checked={selectedBank?.id === bank.id}
                      readOnly
                    />
                    <span className={styles.checkmark}></span>
                  </div>
                ))}
              </div>

              {selectedBank && (
                <button
                  className={styles.nextButton}
                  onClick={() => setActiveStep(2)}
                >
                  Next
                </button>
              )}
            </div>
          )}
        </div>

        {/* Step 2: Choose EMI Tenure */}
        <div className={`${styles.step} ${activeStep >= 2 ? styles.active : ''}`}>
          <div className={styles.stepHeader} onClick={() => activeStep >= 2 && setActiveStep(2)}>
            <span className={styles.stepNumber}>2</span>
            <div className={styles.stepInfo}>
              <span className={styles.stepTitle}>Choose EMI Tenure</span>
              <span className={styles.stepDescription}>Check interest rates and monthly installment beforehand</span>
            </div>
            <span className={styles.stepIndicator}>›</span>
          </div>

          {activeStep === 2 && (
            <div className={styles.stepContent}>
              <div className={styles.emiTableContainer}>
                <table className={styles.emiTable}>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Tenure</th>
                      <th>Principal Amount</th>
                      <th>Effective Interest*</th>
                      <th>Monthly Installments</th>
                      <th>Interest paid to bank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {emiOptions.map(option => (
                      <tr
                        key={option.tenure}
                        className={`${option.selected ? styles.selected : ''}`}
                        onClick={() => selectEmiOption(option)}
                      >
                        <td>
                          <label className={styles.radioContainer}>
                            <input
                              type="radio"
                              name="emi-option"
                              checked={option.selected}
                              readOnly
                            />
                            <span className={styles.radioCheckmark}></span>
                          </label>
                        </td>
                        <td>{option.tenure} months</td>
                        <td>₹{option.principalAmount}</td>
                        <td>{option.percentage} (p.a.)</td>
                        <td>₹{option.emiValue.toFixed(2)}</td>
                        <td>₹{option.totalInterest.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.navigationButtons}>
                <button
                  className={styles.backButton}
                  onClick={() => setActiveStep(1)}
                >
                  Back
                </button>
                <button
                  className={styles.nextButton}
                  disabled={!selectedEmiOption}
                  onClick={() => setActiveStep(3)}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Step 3: Enter Card Details */}
        <div className={`${styles.step} ${activeStep >= 3 ? styles.active : ''}`}>
          <div className={styles.stepHeader}>
            <span className={styles.stepNumber}>3</span>
            <div className={styles.stepInfo}>
              <span className={styles.stepTitle}>Enter Card Details</span>
              <span className={styles.stepDescription}>Fill up correct details of your debit/credit card</span>
            </div>
          </div>

          {activeStep === 3 && (
            <div className={styles.stepContent}>
              <div className={styles.cardForm}>
                <div className={styles.formGroup}>
                  <label>Enter Your Card No.</label>
                  <input
                    type="text"
                    value={cardDetails.number}
                    onChange={formatCardNumber}
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    maxLength={19}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Enter Card Holder Name</label>
                  <input
                    type="text"
                    name="name"
                    value={cardDetails.name}
                    onChange={handleInputChange}
                    placeholder="Card Holder Name"
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.halfWidth}>
                    <label>Expiry Month</label>
                    <select
                      name="expiryMonth"
                      value={cardDetails.expiryMonth}
                      onChange={handleInputChange}
                      className={styles.selectBox}
                    >
                      <option value="">Month</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option
                          key={i + 1}
                          value={i + 1 < 10 ? `0${i + 1}` : `${i + 1}`}
                        >
                          {i + 1 < 10 ? `0${i + 1}` : i + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.halfWidth}>
                    <label>Expiry Year</label>
                    <select
                      name="expiryYear"
                      value={cardDetails.expiryYear}
                      onChange={handleInputChange}
                      className={styles.selectBox}
                    >
                      <option value="">Year</option>
                      {getYears().map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>CVV</label>
                  <input
                    type="password"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleInputChange}
                    placeholder="CVV"
                    maxLength={4}
                  />
                </div>

                <div className={styles.saveCard}>
                  <input type="checkbox" id="saveCard" className={styles.checkBox} />
                  <label htmlFor="saveCard">Save this card for faster checkout</label>
                </div>

                {/* <div className={styles.totalAmount}>
                  <span>Total Fare:</span>
                  <span className={styles.amount}>₹{totalAmount}</span>
                </div>

                <button
                  className={styles.payButton}
                  onClick={submitPayment}
                >
                  Make Payment
                </button>

                <div className={styles.securityInfo}>
                  <span className={styles.lockIcon}>🔒</span>
                  <span>We use 128-bit secure encryption providing you a SAFE payment environment</span>
                </div>

                <div className={styles.termsConditions}>
                  By Continuing, you agree to the Rules,
                  <a href="https://www.easemytrip.com/privacy-policy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>,
                  <a href="https://www.easemytrip.com/user-agreement.html" target="_blank" rel="noopener noreferrer">User Agreement</a> and
                  <a href="https://www.easemytrip.com/terms.html" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> of EaseMyTrip
                </div> */}

              </div>

              <div className={styles.navigationButtons}>
                <button
                  className={styles.backButton}
                  onClick={() => setActiveStep(2)}
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
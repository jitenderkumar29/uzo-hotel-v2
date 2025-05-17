'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './PaymentMode.module.css';
import { Clock } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPlay } from '@fortawesome/free-solid-svg-icons';
import PaymentWallet from '../PaymentWallet/PaymentWallet';
import PaymentNetBanking from '../PaymentNetBanking/PaymentNetBanking';
import PaymentEmi from '../PaymentEmi/PaymentEmi';
import PaymentPayLater from '../PaymentPayLater/PaymentPayLater';
import PaymentGiftCard from '../PaymentGiftCard/PaymentGiftCard';

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
  url: string
}

type BankOption = {
  value: string;
  label: string;
};

export default function PaymentMode() {
  const [activeTab, setActiveTab] = useState<string>('upi');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvv, setCardCvv] = useState<string>('');
  const [saveCard, setSaveCard] = useState<boolean>(false);
  const [upiId, setUpiId] = useState<string>('');
  const [selectedBank, setSelectedBank] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  // const [selectedBank, setSelectedBank] = useState<string>('');

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };


  const paymentMethods: PaymentMethod[] = [
    { id: 'upi', name: 'UPI', icon: 'upi-icon', description: 'Make Online Payments Directly from Bank', url: "/icons/upi.png" },
    { id: 'card', name: 'Credit/Debit/ATM Cards', icon: 'card-icon', description: 'Use VISA, Mastercard, American Express etc.', url: "/icons/creditcard.png" },
    { id: 'wallet', name: 'Wallets', icon: 'wallet-icon', description: 'Choose Mobikwik, Payzapp, PhonePe or Amazon', url: "/icons/E-Purse.png" },
    { id: 'netbanking', name: 'Net Banking', icon: 'netbanking-icon', description: 'All Major banks are supported', url: "/icons/netBanking.png" },
    { id: 'emi', name: 'EMI', icon: 'emi-icon', description: 'HSBC, RBL, ICICI, Yes and others bank for EMI', url: "/icons/emi.png" },
    { id: 'paylater', name: 'PayLater', icon: 'paylater-icon', description: 'Simpl, ICICI Bank Pay later and Mobikwik Zip Available', url: "/icons/payLater.png" },
    { id: 'giftcard', name: 'Gift Card', icon: 'giftcard-icon', description: 'Pay with GiftCard', url: "/icons/giftcard.png" },
    { id: 'googlepay', name: 'Google Pay', icon: 'googlepay-icon', description: 'Pay Easily with Google Pay', url: "/icons/googlePay.png" },
    { id: 'paytm', name: 'PayTM', icon: 'paytm-icon', description: 'Pay Easily with PayTM', url: "/icons/payTm.png" }
  ];

  const bankOptions: BankOption[] = [
    { value: 'Select Bank', label: 'Select Bank' },
    { value: 'ybl', label: 'Yes Bank' },
    { value: 'okhdfcbank', label: 'HDFC Bank' },
    { value: 'ibl', label: 'IndusInd Bank' },
    { value: 'apl', label: 'Axis Bank' },
    { value: 'axis', label: 'Axis Bank' },
    { value: 'icici', label: 'ICICI Bank' },
    { value: 'hdfcbankjd', label: 'HDFC Bank' },
    { value: 'myicici', label: 'ICICI Bank' },
    { value: 'kotak', label: 'Kotak Mahindra Bank' },
    { value: 'okaxis', label: 'Axis Bank' },
    { value: 'okicici', label: 'ICICI Bank' },
    { value: 'oksbi', label: 'State Bank of India' },
    { value: 'sbi', label: 'State Bank of India' },
    { value: 'ptyes', label: 'Yes Bank' },
    { value: 'ptaxis', label: 'Axis Bank' },
    { value: 'pthdfc', label: 'HDFC Bank' },
    { value: 'ptsbi', label: 'State Bank of India' },
    { value: 'yesbank', label: 'Yes Bank' },
    { value: 'idfcbank', label: 'IDFC First Bank' },
    { value: 'goaxb', label: 'Axis Bank' },
    { value: 'allbank', label: 'Allahabad Bank' },
    { value: 'aubank', label: 'AU Small Finance Bank' },
    { value: 'axisb', label: 'Axis Bank' },
    { value: 'axisbank', label: 'Axis Bank' },
    { value: 'abfspay', label: 'ABFS Pay' },
    { value: 'axl', label: 'Axis Bank' },
    { value: 'freecharge', label: 'Freecharge' },
    { value: 'citi', label: 'Citibank' },
    { value: 'citigold', label: 'Citibank Gold' },
    { value: 'indus', label: 'IndusInd Bank' },
    { value: 'hsbc', label: 'HSBC Bank' },
    { value: 'dbs', label: 'DBS Bank' },
    { value: 'fbl', label: 'Federal Bank' },
    { value: 'federal', label: 'Federal Bank' },
    { value: 'barodapay', label: 'Bank of Baroda' },
    { value: 'ikwik', label: 'iKwik' },
    { value: 'pingpay', label: 'Ping Pay' },
    { value: 'rbl', label: 'RBL Bank' },
    { value: 'sib', label: 'South Indian Bank' },
    { value: 'upi', label: 'UPI' },
    { value: 'waaxis', label: 'Axis Bank' },
    { value: 'wahdfcbank', label: 'HDFC Bank' },
    { value: 'wasbi', label: 'State Bank of India' },
    { value: 'airtel', label: 'Airtel Payments Bank' },
    { value: 'pnb', label: 'Punjab National Bank' },
    { value: 'bob', label: 'Bank of Baroda' },
    { value: 'canara', label: 'Canara Bank' },
    { value: 'unionbank', label: 'Union Bank of India' },
    { value: 'bandhan', label: 'Bandhan Bank' },
    { value: 'standardchartered', label: 'Standard Chartered' }
  ];


  const formatCardNumber = (value: string) => {
    // Format card number with spaces after every 4 digits
    const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formatted);
  };

  const formatExpiry = (value: string) => {
    // Format expiry date as MM/YY
    const formatted = value.replace(/\D/g, '')
      .replace(/^(\d{2})/, '$1/')
      .substring(0, 5);
    setCardExpiry(formatted);
  };

  const validateForm = (): boolean => {
    // Basic validation logic
    if (activeTab === 'card') {
      return cardNumber.replace(/\s/g, '').length >= 16 &&
        cardName.length > 0 &&
        cardExpiry.length === 5 &&
        cardCvv.length >= 3;
    } else if (activeTab === 'upi') {
      return upiId.includes('@') && selectedBank !== '';
    }
    return true;
  };


  const handleBankChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBank(e.target.value);
    // You can add additional logic here when the bank changes
  };


  const makePayment = () => {
    if (validateForm()) {
      // Payment processing logic would go here
      console.log(`Processing ${activeTab} payment`);
    }
  };

  return (
    <div className={styles['payment-body']}>
      <div className={styles['payment-container']}>
        <div className={styles['timer-message']}>
          <Clock className={styles['clock-icon']} />
          {/* <Image src="/assets/images/watch.png" alt="Timer" width={16} height={16} /> */}
          <span className={styles['session']} >The session will expire in: <strong>{timeLeft > 0 ? (
            <p className={styles['time-left']}>{formatTime(timeLeft)}</p>
          ) : (
            <p className={styles['session-expired']}>Session Expired</p>
          )}</strong></span>
        </div>

        <div className={styles['payment-header']}>
          <h2>Payment Mode</h2>
        </div>

        <div className={styles['payment-options']}>
          <div className={styles['payment-methods']}>
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`${styles['payment-method']} ${activeTab === method.id ? styles['active'] : ''}`}
                onClick={() => setActiveTab(method.id)}
              >
                {/* <div className={`${styles['method-icon']} ${styles[method.icon]}`}></div> */}
                <Image src={method.url} height={50} width={50} alt='logo' />
                <div className={styles['method-details']}>
                  <div className={styles['method-name']}>{method.name}</div>
                  <div className={styles['method-description']}>{method.description}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles['payment-details']}>
            {/* UPI Payment */}
            {activeTab === 'upi' && (
              <div className={styles['payment-section']}>
                <div className={styles['section-title']}>Pay Via QR Code</div>

                <div className={styles['qr-section']}>
                  <div className={styles['qr-code']}>
                    <Image src="/icons/qrCode.png" alt="Scan QR" className={styles['blurred-qr']} width={193} height={193} />
                    <button className={styles['generate-qr-btn']}>Generate QR Code</button>
                  </div>

                  <div className={styles['qr-instructions']}>
                    <h3>How to pay through QR works?</h3>
                    <ul>
                      <li><span>1</span> Open UPI App in your phone</li>
                      <li><span>2</span> Scan this QR code in your UPI App</li>
                      <li><span>3</span> Proceed to payment & enter UPI PIN</li>
                    </ul>

                    <h3>We accepting all UPI apps</h3>
                    <div className={styles['upi-apps']}>
                      <Image src="/icons/pp-nw-icon.png" alt="PhonePe" width={40} height={40} />
                      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NrHT4rEeertzPwN7CT7V6DSYqxNq0cWv8g&s" alt="Amazon Pay" width={40} height={40} />
                      <Image src="/icons/googlePay.png" alt="Google Pay" width={40} height={40} />
                      <span>+ more</span>
                    </div>
                  </div>
                </div>

                <div className={styles['or-divider']}>
                  <span>OR</span>
                </div>

                <div className={styles['upi-form']}>
                  <div className={styles['form-title']}>Enter Your UPI ID</div>
                  <div className={styles['upi-input-group']}>
                    <div className={styles['upi-id-input']}>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="ex - mobilenumber"
                      />
                      {upiId && !upiId.includes('@') && (
                        <div className={styles['error-message']}>Please enter valid UPI ID</div>
                      )}
                    </div>
                    <span className={styles['upiAt']}>@</span>
                    <div className={styles['upi-bank-select']}>
                      <select
                        value={selectedBank}
                        onChange={handleBankChange}
                        className="bank-select"
                        aria-label="Select your bank"
                      >
                        {bankOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.value}
                          </option>
                        ))}
                      </select>
                      <FontAwesomeIcon icon={faChevronDown} className={styles['select-chevron']} />
                    </div>
                    <button className={styles['verify-btn']}>Verify & Pay</button>
                  </div>
                </div>

                <div className={styles['how-it-works']}>
                  <strong>How it works?</strong>
                  <span>Enter registered VPA</span>
                  <FontAwesomeIcon icon={faPlay} />
                  {/* <Image src="/assets/images/arrow-right.svg" alt="Arrow" width={16} height={16} /> */}
                  <span>Check payment request</span>
                  <FontAwesomeIcon icon={faPlay} />
                  {/* <Image src="/assets/images/arrow-right.svg" alt="Arrow" width={16} height={16} /> */}
                  <span>Approve payment</span>
                </div>
              </div>
            )}

            {/* Card Payment */}
            {activeTab === 'card' && (
              <div className={styles['payment-section']}>
                <div className={styles['form-group']}>
                  <label>Enter Your Card No.</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => formatCardNumber(e.target.value)}
                    placeholder="ENTER CARD NUMBER"
                    maxLength={19}
                  />
                  {cardNumber && cardNumber.replace(/\s/g, '').length < 16 && (
                    <div className={styles['error-message']}>
                      Please enter a valid card number
                    </div>
                  )}
                </div>

                <div className={styles['form-row']}>
                  <div className={`${styles['form-group']} ${styles['half-width']}`}>
                    <label>Valid Through (MM/YY)</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => formatExpiry(e.target.value)}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>

                  <div className={`${styles['form-group']} ${styles['half-width']}`}>
                    <label>CVV</label>
                    <input
                      type="password"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      placeholder="CVV"
                      maxLength={4}
                    />
                    {cardCvv && cardCvv.length < 3 && (
                      <div className={styles['error-message']}>
                        CVV must be 3 or 4 digits
                      </div>
                    )}
                  </div>
                </div>

                <div className={styles['form-group']}>
                  <label>Enter Card Holder Name</label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Name On The Card"
                  />
                  {cardName && cardName.length < 3 && (
                    <div className={styles['error-message']}>
                      Please enter valid name
                    </div>
                  )}
                </div>

                <div className={styles['save-card']}>
                  <input
                    type="checkbox"
                    id="saveCard"
                    checked={saveCard}
                    onChange={(e) => setSaveCard(e.target.checked)}
                  />
                  <label htmlFor="saveCard">Save this card for faster checkout</label>
                </div>
              </div>
            )}

            {/* Other payment methods would go here */}

            {activeTab === 'wallet' && (<PaymentWallet />)}
            {activeTab === 'netbanking' && (<PaymentNetBanking />)}
            {activeTab === 'emi' && (<PaymentEmi />)}
            {activeTab === 'paylater' && (<PaymentPayLater />)}
            {activeTab === 'giftcard' && (<PaymentGiftCard />)}
            {/* {activeTab === 'googlepay' && (<PaymentGooglePay />)}
            {activeTab === 'paytm' && (<PaymentPayTm />)} */}

            <div className={styles['total-section']}>
              <div className={styles['total-amount']}>
                <span>Total Fare:</span>
                <span className={styles['amount']}>₹3,472</span>
              </div>
              <button
                className={styles['pay-button']}
                onClick={makePayment}
              >
                Make Payment
              </button>
            </div>

            <div className={styles['security-message']}>
              <span className={styles['security-icon']}></span>
              <span>We use 128-bit secure encryption providing you a SAFE payment environment</span>
            </div>

            <div className={styles['terms-conditions']}>
              <span>
                By Continuing, you agree to the Rules,
                <a href="#">Privacy Policy</a>,
                <a href="#">User Agreement</a> and
                <a href="#">Terms & Conditions</a> of UZO Hotels
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
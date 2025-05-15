'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './PaymentMode.module.css';
import { Clock } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
  description: string;
  url: string
}

export default function PaymentMode() {
  const [activeTab, setActiveTab] = useState<string>('upi');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [cardExpiry, setCardExpiry] = useState<string>('');
  const [cardCvv, setCardCvv] = useState<string>('');
  const [saveCard, setSaveCard] = useState<boolean>(false);
  const [upiId, setUpiId] = useState<string>('');
  const [selectedBank, setSelectedBank] = useState<string>('');

  const paymentMethods: PaymentMethod[] = [
    { id: 'upi', name: 'UPI', icon: 'upi-icon', description: 'Make Online Payments Directly from Bank', url: "https://cdn.iconscout.com/icon/free/png-256/free-upi-logo-icon-download-in-svg-png-gif-file-formats--unified-payments-interface-payment-money-transfer-logos-icons-1747946.png?f=webp" },
    { id: 'card', name: 'Credit/Debit/ATM Cards', icon: 'card-icon', description: 'Use VISA, Mastercard, American Express etc.', url: "https://images.goodreturns.in/img/2019/01/creditcard-23-1461389394-1547703670.jpg" },
    { id: 'wallet', name: 'Wallets', icon: 'wallet-icon', description: 'Choose Mobikwik, Payzapp, PhonePe or Amazon', url: "https://www.idsolutionsindia.com/wp-content/uploads/2020/12/E-Purse-App-2.png" },
    { id: 'netbanking', name: 'Net Banking', icon: 'netbanking-icon', description: 'All Major banks are supported', url: "https://cdn-icons-png.flaticon.com/512/2655/2655001.png" },
    { id: 'emi', name: 'EMI', icon: 'emi-icon', description: 'HSBC, RBL, ICICI, Yes and others bank for EMI', url: "https://www.rrfinance.com/Blogs/images/What-is-the-EMI.png" },
    { id: 'paylater', name: 'PayLater', icon: 'paylater-icon', description: 'Simpl, ICICI Bank Pay later and Mobikwik Zip Available', url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZBgwQeZBPAo3d-tojI4z-K8t6xnpcSVdsg&s" },
    { id: 'giftcard', name: 'Gift Card', icon: 'giftcard-icon', description: 'Pay with GiftCard', url: "https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_1500px.jpg" },
    { id: 'googlepay', name: 'Google Pay', icon: 'googlepay-icon', description: 'Pay Easily with Google Pay', url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzaBF2M98Xp1_7uBP4sVRzl7D7L_DrNrMzQ&s" }
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
          <span>The session will expire in: <strong>03:50s</strong></span>
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
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="Scan QR" className={styles['blurred-qr']} width={193} height={193} />
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
                      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnyOoxY1k_Hj78I_Vb6S9sP4qV4cL5HkRzsa_7s5_ScOF5FSnIYXSWSwDXOE3xR6KHEu0&usqp=CAU" alt="PhonePe" width={40} height={40} />
                      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0NrHT4rEeertzPwN7CT7V6DSYqxNq0cWv8g&s" alt="Amazon Pay" width={40} height={40} />
                      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSzaBF2M98Xp1_7uBP4sVRzl7D7L_DrNrMzQ&s" alt="Google Pay" width={40} height={40} />
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
                    <div className={styles['upi-bank-select']}>
                      <select
                        value={selectedBank}
                        onChange={(e) => setSelectedBank(e.target.value)}
                      >
                        <option value="">Select Bank</option>
                        <option value="ybl">ybl</option>
                        <option value="okhdfcbank">okhdfcbank</option>
                        <option value="axis">axis</option>
                        <option value="icici">icici</option>
                        <option value="sbi">sbi</option>
                        <option value="paytm">paytm</option>
                      </select>
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
import { useState } from 'react';
import styles from './GiftCards.module.css';
import { FaGift, FaBirthdayCake, FaCalendarAlt, FaUser, FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import { GiPartyPopper } from 'react-icons/gi';
import { MdPets } from 'react-icons/md';
import Image from 'next/image';

const GiftCards = () => {
  const [activeTab, setActiveTab] = useState('Birthday');
  const [amount, setAmount] = useState('');
  const [quantity, setQuantity] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('Today');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [senderDetails, setSenderDetails] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [receiverDetails, setReceiverDetails] = useState({
    name: '',
    email: '',
    retypeEmail: '',
    mobile: ''
  });
  const [sameAsSender, setSameAsSender] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const categories = [
    { id: 'Birthday', icon: <FaBirthdayCake />, imageUrl: '/images/birthday_giftcard.png' },
    { id: 'Anniversary', icon: <GiPartyPopper />, imageUrl: '/images/anniversary_giftcard.png' },
    { id: 'New Year', icon: <FaCalendarAlt />, imageUrl: '/images/newyear_giftcard.png' },
    { id: "Valentine's Day", icon: <MdPets />, imageUrl: '/images/valentines_giftcard.png' },
    { id: 'Holiday', icon: <FaCalendarAlt />, imageUrl: '/images/holiday_giftcard.png' },
  ];

  const handleSenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSenderDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReceiverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReceiverDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSameAsSender = () => {
    setSameAsSender(!sameAsSender);
    if (!sameAsSender) {
      setReceiverDetails({
        name: senderDetails.name,
        email: senderDetails.email,
        retypeEmail: senderDetails.email,
        mobile: senderDetails.mobile
      });
    } else {
      setReceiverDetails({
        name: '',
        email: '',
        retypeEmail: '',
        mobile: ''
      });
    }
  };
  const activeCategory = categories.find(category => category.id === activeTab) || categories[0];

  return (
    <div className={styles.container}>
      <div className={styles.giftCardForm}>
        <h2 className={styles.sectionTitle}>Select Gift Card Category</h2>

        <div className={styles.categoryTabs}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.tab} ${activeTab === category.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              <span className={styles.tabIcon}>{category.icon}</span>
              <span>{category.id}</span>
            </button>
          ))}
        </div>

        <div className={styles.formSection}>
          <h3 className={styles.sectionSubtitle}>Enter Gift Card Details</h3>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Enter Denominations</label>
              <input
                type="text"
                placeholder="Min 1000 - 50000"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ''))}
                maxLength={5}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Select Quantity</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option value="">--Select Quantity--</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Delivery Date</label>
            <div className={styles.deliveryOptions}>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="delivery"
                  checked={deliveryOption === 'Today'}
                  onChange={() => setDeliveryOption('Today')}
                />
                <span>Today</span>
              </label>

              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="delivery"
                  checked={deliveryOption === 'Later'}
                  onChange={() => setDeliveryOption('Later')}
                />
                <span>Later</span>
              </label>

              {deliveryOption === 'Later' && (
                <input
                  type="date"
                  className={styles.dateInput}
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                />
              )}
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h3 className={styles.sectionSubtitle}>Enter Sender and Receiver Details</h3>

          <div className={styles.formRow}>
            <div className={styles.formColumn}>
              <div className={styles.formGroup}>
                <label>Sender details</label>
                <div className={styles.inputWithIcon}>
                  <FaUser className={styles.inputIcon} />
                  <input
                    type="text"
                    placeholder="Sender's name*"
                    name="name"
                    value={senderDetails.name}
                    onChange={handleSenderChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.inputWithIcon}>
                  <FaEnvelope className={styles.inputIcon} />
                  <input
                    type="email"
                    placeholder="Sender's email address*"
                    name="email"
                    value={senderDetails.email}
                    onChange={handleSenderChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.inputWithIcon}>
                  <FaMobileAlt className={styles.inputIcon} />
                  <input
                    type="text"
                    placeholder="Sender's 10 digits mobile number*"
                    name="mobile"
                    value={senderDetails.mobile}
                    onChange={handleSenderChange}
                    maxLength={10}
                  />
                </div>
                <p className={styles.note}>OTP will be sent to this number</p>
              </div>
            </div>

            <div className={styles.formColumn}>
              <div className={styles.formGroup}>
                <div className={styles.receiverLabel}>
                  <span>Receiver Details</span>
                  <label className={styles.sameAsSenderLabel}>
                    <input
                      type="checkbox"
                      checked={sameAsSender}
                      onChange={handleSameAsSender}
                    />
                    Same as sender details
                  </label>
                </div>
                {/* <div className={styles.receiverLabel}>
                  <span>Receiver Details</span>
                  <label className={styles.sameAsSenderLabel}>
                    <input
                      type="checkbox"
                      checked={sameAsSender}
                      onChange={handleSameAsSender}
                    />
                    Same as sender details
                  </label>
                </div> */}

                <div className={styles.inputWithIcon}>
                  <FaUser className={styles.inputIcon} />
                  <input
                    type="text"
                    placeholder="Receiver's name*"
                    name="name"
                    value={receiverDetails.name}
                    onChange={handleReceiverChange}
                    disabled={sameAsSender}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.inputWithIcon}>
                  <FaEnvelope className={styles.inputIcon} />
                  <input
                    type="email"
                    placeholder="Receiver's email address*"
                    name="email"
                    value={receiverDetails.email}
                    onChange={handleReceiverChange}
                    disabled={sameAsSender}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.inputWithIcon}>
                  <FaEnvelope className={styles.inputIcon} />
                  <input
                    type="email"
                    placeholder="Retype receiver's email address*"
                    name="retypeEmail"
                    value={receiverDetails.retypeEmail}
                    onChange={handleReceiverChange}
                    disabled={sameAsSender}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <div className={styles.inputWithIcon}>
                  <FaMobileAlt className={styles.inputIcon} />
                  <input
                    type="text"
                    placeholder="Receiver's 10 digits mobile number*"
                    name="mobile"
                    value={receiverDetails.mobile}
                    onChange={handleReceiverChange}
                    maxLength={10}
                    disabled={sameAsSender}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.termsSection}>
            <label className={styles.termsCheckbox}>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              I accept the <a href="#">Terms and Conditions</a>
            </label>
          </div>

          <div className={styles.paymentSummary}>
            <div className={styles.amountRow}>
              <span>Payable Amount</span>
              <span>₹ {amount ? parseInt(amount) * (quantity ? parseInt(quantity) : 1) : 0}</span>
            </div>

            <button className={styles.payNowButton} disabled={!termsAccepted}>
              Pay Now
            </button>
          </div>
        </div>
      </div>

      <div className={styles.previewSection}>
        <div className={styles.previewCard}>
          <div className={styles.previewHeader}>
            <FaGift className={styles.giftIcon} />
            <span>Preview E-Gift Card</span>
          </div>

          <div className={styles.previewContent}>
            <p>Hi {receiverDetails.name || 'Name'},</p>
            <p>
              You have received a travel E-Gift card worth
              <b className={styles.highlightAmount}> ₹{amount || '0'}</b>
              from &quot{senderDetails.name || 'Sender Name'}&quot. You may redeem this by entering the Card Number.
            </p>
          </div>

          <div className={styles.cardImage}>
            <Image
              src={activeCategory.imageUrl}
              alt={`${activeTab} Gift Card`}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/default-giftcard.png';
              }}
              width={600}
              height={250}
            />
          </div>

          <div className={styles.cardDetails}>
            <div className={styles.detailRow}>
              <span>{activeTab} E-Gift Card</span>
              <span>Gift Card No.: 1234xxxxxxxx</span>
              <span>Valid Till: 07-06-2026</span>
            </div>
            <div className={styles.termsNote}>T&C apply*</div>
          </div>
        </div>
      </div>

      <div className={styles.howToRedeem}>
        <h3>How to Redeem</h3>
        <p>
          You can redeem this Gift Card on our website and mobile apps (Android and iOS).
          To redeem the voucher, follow these simple steps:
        </p>

        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <p>Choose your preferred destination</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <p>Fill the required details and proceed to payment</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <p>Among payment options, choose gift cards</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <p>Enter your gift card number</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>5</div>
            <p>Continue with payment options if any balance remains</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCards;
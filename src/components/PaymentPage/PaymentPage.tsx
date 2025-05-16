import { useState } from 'react';
import styles from './PaymentPage.module.css';
import HeaderTop from '../HeaderTop/HeaderTop';
import PaymentMode from './PaymentMode/PaymentMode';
import PaymentSummary from './PaymentSummary/PaymentSummary';
import Image from 'next/image';

const PaymentPage = () => {
  const [, setIsLoggedIn] = useState(false);
  // const [roomDetails] = useState({
  //   Rooms: {
  //     engine: 7 // Setting to 7 to show the component (8 would hide it)
  //   }
  // });

  const handleLogin = () => {
    // Login logic would go here
    console.log('Login clicked');
    setIsLoggedIn(true);
  };

  // if (isLoggedIn || roomDetails.Rooms.engine === 8) {
  //   return null;
  // }

  const WalletAccount = () => (
    <div className={styles.paymentContainer}>
      <div className={styles.walletLoginPrompt}>
        <div className={styles.promptContent}>
          <Image
            src="/icons/walletIcon.svg"
            className={styles.walletIcon}
            alt="Wallet icon"
            width={50}
            height={50}
          />
          <span className={styles.promptMessage}>
            You have to login to use your <strong>wallet amount</strong>
          </span>
        </div>
        <button
          className={styles.loginButton}
          onClick={handleLogin}
        >
          LOG IN
        </button>
      </div>
    </div>
  )

  return (
    <><div>
      <HeaderTop />
      <div className={styles.paymentLayout}>
        <main className={styles.mainBody}>
          <WalletAccount />
          <PaymentMode />
        </main>
        <aside className={styles.asideBody}>
          <div><PaymentSummary /></div>
        </aside>
      </div>
    </div>


    </>
  );
};

export default PaymentPage;
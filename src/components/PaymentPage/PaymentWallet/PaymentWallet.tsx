import { useState } from 'react';
import Image from 'next/image';
import styles from './PaymentWallet.module.css';

interface Wallet {
  id: string;
  name: string;
  iconUrl: string;
  value: string;
}

interface PaymentWalletProps {
  initialSelected?: string | null;
  onWalletSelect?: (value: string) => void;
}

export default function PaymentWallet({
  initialSelected = null,
  onWalletSelect
}: PaymentWalletProps) {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(initialSelected);

  const wallets: Wallet[] = [
    {
      id: 'rdoMobiKwik',
      name: 'MobiKwik',
      iconUrl: '/icons/mobikwik-icon.png',
      value: '1245'
    },
    {
      id: 'rdoPhonePe',
      name: 'PhonePe',
      iconUrl: '/icons/pp-nw-icon.png',
      value: '6532'
    },
    {
      id: 'rdoBajajPay',
      name: 'Bajaj Pay',
      iconUrl: '/icons/bajajpay-logo.svg',
      value: '8945'
    },
    {
      id: 'rdoPayZapp',
      name: 'PayZapp',
      iconUrl: '/icons/payzapp-icon.png',
      value: '7854'
    },
    {
      id: 'rdoAmazon',
      name: 'Amazon',
      iconUrl: '/icons/amazone-pay-icon.png',
      value: '9511'
    }
  ];

  const handleWalletSelect = (value: string) => {
    setSelectedWallet(value);
    onWalletSelect?.(value);
  };

  return (
    <div className={styles.walletContainer}>
      <div className={styles.walletHeader}>SELECT YOUR WALLET</div>

      <div className={styles.walletOptions}>
        {wallets.map((wallet) => (
          <div key={wallet.id} className={styles.walletOption}>
            <label className={styles.walletLabel}>
              <input
                type="radio"
                id={wallet.id}
                name="walletP"
                value={wallet.value}
                checked={selectedWallet === wallet.value}
                onChange={() => handleWalletSelect(wallet.value)}
                className={styles.hiddenInput}
              />

              <span className={styles.checkmark}></span>

              <span className={styles.walletIcon}>
                <Image src={wallet.iconUrl} alt={`${wallet.name} icon`} width={26} height={26} unoptimized />
              </span>
              <span className={styles.walletName}>{wallet.name}</span>
            </label>

          </div>

        ))}
      </div>
    </div>
  );
}

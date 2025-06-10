// components/CardBenefits.tsx
'use client';
import { useState } from 'react';
import styles from './CardBenefits.module.css';
import { FaPlane, FaHotel, FaGift, FaTicketAlt, FaMusic, FaShoppingBag, FaCreditCard, FaShieldAlt, FaWifi, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

type Bank = 'bob' | 'dbs' | 'pnb' | 'standardCharted' | 'hdfc' | 'icici' | 'sbi' | 'axis';

interface Benefit {
  icon: React.ReactElement;
  text: string;
}

interface BankData {
  id: Bank;
  name: string;
  logo: string;
  cardType: string;
  benefits: Benefit[];
  fees: string[];
}

const CardBenefits = () => {
  const [activeBank, setActiveBank] = useState<Bank>('bob');
  const handleBankChange = (bank: Bank) => {
    setActiveBank(bank);
  };

  const banksData: BankData[] = [
    {
      id: 'bob',
      name: 'Bank Of Baroda',
      logo: '/icons/bob.png',
      cardType: 'Debit Card',
      benefits: [
        { icon: <FaPlane />, text: 'Domestic Flight Bookings: 10%* instant discount maximum (Up to INR 1,000)- with no Minimum Order Value' },
        { icon: <FaPlane />, text: 'International Flight Bookings: 10%* instant discount maximum (Up to INR 5,000)- with no Minimum Order Value' },
        { icon: <FaHotel />, text: 'Domestic & International Hotel Bookings: 15%* instant discount maximum up to INR. 10,000/- with no Minimum Order Value' },
        { icon: <FaGift />, text: 'Annual membership on top OTT platforms like Amazon Prime, Zee5 or SonyLiv' },
        { icon: <FaShoppingBag />, text: 'Enjoy vouchers worth INR 125 once per quarter on shopping platforms like Big Basket or BlinkIt' },
        { icon: <FaTicketAlt />, text: 'Get flat INR 250 OFF* on purchase of 2 movies/non movies tickets once a quarter.' },
        { icon: <FaMusic />, text: 'Unlock Gaana+ plus subscription (per annum)' },
        { icon: <FaCreditCard />, text: 'Grab 20%* Instant discount from Amazon on per card per month on recharge/bill payment on a Minimum Order Value of INR 129 only on Fridays' },
        { icon: <FaCreditCard />, text: 'Contactless transactions up to INR. 5,000 can be done without PIN at POS' },
        { icon: <FaShieldAlt />, text: 'Air Accident Insurance up to INR. 50 lacs' },
        { icon: <FaWifi />, text: 'Complimentary international and domestic airport lounge access (2 per annum)' }
      ],
      fees: [
        "Here's the Bank of Baroda UZO Hotels debit card fee and charges details.",
        "Issuance fee : INR 599* +Taxes",
        "Annual fee :INR 599* + Taxes"
      ]
    },
    {
      id: 'dbs',
      name: 'Digibank By DBS',
      logo: '/icons/DBS.png',
      cardType: 'Debit Card',
      benefits: [
        { icon: <FaPlane />, text: 'Get flat 10% OFF* (Up to INR 1000*) on domestic flights with a minimum booking amount of INR 6000.' },
        { icon: <FaPlane />, text: 'Grab flat 8% OFF* (Up to INR 2000*) on international flights with a minimum booking amount of INR 20,000.' },
        { icon: <FaHotel />, text: 'Enjoy flat 12% OFF* (Up to INR 2000*) on hotel bookings with a minimum booking amount of INR 3000.' },
        { icon: <FaHotel />, text: 'Enjoy flat 17% OFF* (Up to INR 2800*) on eco-friendly hotels and resorts with a minimum booking amount of INR 3000.' },
        { icon: <FaTicketAlt />, text: 'Get flat 8% OFF* (Up to INR 125*) on bus bookings with a minimum booking value of INR 1200' },
        { icon: <FaCreditCard />, text: 'Avail premium Signature Visa Concierge services any time, any day.' },
        { icon: <FaMusic />, text: 'Unlock Gaana+ plus subscription (per annum)' },
        { icon: <FaWifi />, text: 'Premium travel with 1 airport lounge access per quarter across India.' },
        { icon: <FaCreditCard />, text: 'Competitive Forex mark-up of 2.5% for international purchase and travel.' },
        { icon: <FaCreditCard />, text: 'Higher daily limit than before on ATM withdrawals & spends.' }
      ],
      fees: [
        "DBS Bank UZO Hotels Green Debit card is free for the first year. Annual fee of INR 299* + GST will be applicable from 2nd year onwards."
      ]
    },
    {
      id: 'pnb',
      name: 'Punjab National Bank',
      logo: '/icons/PNB.png',
      cardType: 'Credit Card',
      benefits: [
        { icon: <FaPlane />, text: 'Flat 10% off Up to INR. 1,000 on domestic flight bookings | NO MOV (Minimum order value)' },
        { icon: <FaPlane />, text: 'Flat 10% off Up to INR. 5,000 on international flight bookings | NO MOV' },
        { icon: <FaHotel />, text: 'Flat 20% discount Up to INR.5,000 on domestic hotel bookings | NO MOV' },
        { icon: <FaHotel />, text: 'Flat 20% discount Up to INR.10,000 on international hotel bookings | NO MOV' },
        { icon: <FaTicketAlt />, text: 'Flat INR.125 off on bus bookings on minimum order value of INR.500' },
        { icon: <FaGift />, text: 'Welcome Voucher worth the benefit of INR. 3000\n* Flights- INR. 500\n* Hotels- INR. 1,000\n* Holidays- INR. 1,500' },
        { icon: <FaCreditCard />, text: '300+ Reward Points on activation' },
        { icon: <FaShieldAlt />, text: 'Insurance Coverage up to INR. 2 Lacs for Accidental Death and Personal Total Disability' },
        { icon: <FaWifi />, text: 'Complimentary Domestic & International Airport Lounge Access.' }
      ],
      fees: [
        "Joining Fee Primary: INR.2000/*-",
        "Joining Fee Add on Card: NIL",
        "Annual Fee Primary: INR.2000/*- ((same will be waived if the annual spend on the card is more than INR. 1.00 Lakh* in the preceding year))",
        "Annual Fee Add on Card: NIL",
        "Renewal Fee: NIL"
      ]
    },
    {
      id: 'standardCharted',
      name: 'Standard Chartered',
      logo: '/icons/SC.png',
      cardType: 'Credit Card',
      benefits: [
        { icon: <FaCreditCard />, text: 'Get 10x rewards* on every INR 100 spent for booking tickets at standalone hotel and airline websites/apps/outlets.' },
        { icon: <FaHotel />, text: 'Flat 20% instant discount* on domestic & international hotel* bookings (Max discount of INR 5000 and INR 10000 respectively)' },
        { icon: <FaPlane />, text: 'Flat 10% off* on domestic & international flight bookings(Max discount of INR 1000 and INR 5000 respectively)' },
        { icon: <FaTicketAlt />, text: 'INR 125 off on bus ticket bookings (On minimum ticket booking of INR 500)' },
        { icon: <FaCreditCard />, text: 'Get annual fee of INR 350 waived off on spends of INR 50,000 or more on Standard Chartered EaseMyTrip Credit Card in the previous year.' },
        { icon: <FaWifi />, text: 'Enjoy 2 complimentary domestic lounge access per calendar year' },
        { icon: <FaCreditCard />, text: '2x reward points* for every INR 100 spent on all other category of retail spends (2 reward point = INR 0.50).' },
        { icon: <FaCreditCard />, text: 'Easy accessibility of EaseMy Trip Credit Card on Visa Network.' }
      ],
      fees: [
        "Annual Fee(For 1st year)₹350* + GST",
        "Renewal Fee (2nd Year Onwards)",
        "INR 350* + GST, The renewal fee will be reversed for clients with spends greater than or equal to INR 50,000* in the preceding year on Standard Chartered UZO Hotels Credit card"
      ]
    },
    {
      id: 'hdfc',
      name: 'HDFC Bank',
      logo: '/icons/HDFC.png',
      cardType: 'Debit Card',
      benefits: [
        { icon: <FaPlane />, text: 'Domestic Flight Bookings: 20%* instant discount maximum (Up to INR 1,500)- with no Minimum Order Value' },
        { icon: <FaPlane />, text: 'International Flight Bookings: 15%* instant discount maximum (Up to INR 5,900)- with no Minimum Order Value' },
        { icon: <FaHotel />, text: 'Domestic & International Hotel Bookings: 15%* instant discount maximum up to INR. 11,000/- with no Minimum Order Value' },
        { icon: <FaGift />, text: 'Annual membership on top OTT platforms like Amazon Prime, Zee5 or SonyLiv' },
        { icon: <FaShoppingBag />, text: 'Enjoy vouchers worth INR 125 once per quarter on shopping platforms like Big Basket or BlinkIt' },
        { icon: <FaTicketAlt />, text: 'Get flat INR 250 OFF* on purchase of 2 movies/non movies tickets once a quarter.' },
        { icon: <FaMusic />, text: 'Unlock Gaana+ plus subscription (per annum)' },
        { icon: <FaCreditCard />, text: 'Grab 20%* Instant discount from Amazon on per card per month on recharge/bill payment on a Minimum Order Value of INR 119 only on Fridays' },
        { icon: <FaCreditCard />, text: 'Contactless transactions up to INR. 9,000 can be done without PIN at POS' },
        { icon: <FaShieldAlt />, text: 'Air Accident Insurance up to INR. 50 lacs' },
        { icon: <FaWifi />, text: 'Complimentary international and domestic airport lounge access (2 per annum)' }
      ],
      fees: [
        "Here's the HDFC Bank UZO Hotels debit card fee and charges details.",
        "Issuance fee : INR 519* +Taxes",
        "Annual fee :INR 199* + Taxes"
      ]
    },
    {
      id: 'icici',
      name: 'ICICI Bank',
      logo: '/icons/icici.png',
      cardType: 'Debit Card',
      benefits: [
        { icon: <FaPlane />, text: 'Get flat 25% OFF* (Up to INR 1000*) on domestic flights with a minimum booking amount of INR 8000.' },
        { icon: <FaPlane />, text: 'Grab flat 18% OFF* (Up to INR 2000*) on international flights with a minimum booking amount of INR 21,000.' },
        { icon: <FaHotel />, text: 'Enjoy flat 13% OFF* (Up to INR 2000*) on hotel bookings with a minimum booking amount of INR 3100.' },
        { icon: <FaHotel />, text: 'Enjoy flat 17% OFF* (Up to INR 3100*) on eco-friendly hotels and resorts with a minimum booking amount of INR 3000.' },
        { icon: <FaTicketAlt />, text: 'Get flat 20% OFF* (Up to INR 125*) on bus bookings with a minimum booking value of INR 1200' },
        { icon: <FaCreditCard />, text: 'Avail premium Signature Visa Concierge services any time, any day.' },
        { icon: <FaMusic />, text: 'Unlock Gaana+ plus subscription (per annum)' },
        { icon: <FaWifi />, text: 'Premium travel with 1 airport lounge access per quarter across India.' },
        { icon: <FaCreditCard />, text: 'Competitive Forex mark-up of 12.5% for international purchase and travel.' },
        { icon: <FaCreditCard />, text: 'Higher daily limit than before on ATM withdrawals & spends.' }
      ],
      fees: [
        "ICICI Bank UZO Hotels Green Debit card is free for the first year. Annual fee of INR 299* + GST will be applicable from 2nd year onwards."
      ]
    },
    {
      id: 'sbi',
      name: 'State Bank of India (SBI)',
      logo: '/icons/SBI.png',
      cardType: 'Credit Card',
      benefits: [
        { icon: <FaPlane />, text: 'Flat 20% off Up to INR. 1,100 on domestic flight bookings | NO MOV (Minimum order value)' },
        { icon: <FaPlane />, text: 'Flat 15% off Up to INR. 8,000 on international flight bookings | NO MOV' },
        { icon: <FaHotel />, text: 'Flat 25% discount Up to INR.7,000 on domestic hotel bookings | NO MOV' },
        { icon: <FaHotel />, text: 'Flat 30% discount Up to INR.1,000 on international hotel bookings | NO MOV' },
        { icon: <FaTicketAlt />, text: 'Flat INR.135 off on bus bookings on minimum order value of INR.500' },
        { icon: <FaGift />, text: 'Welcome Voucher worth the benefit of INR. 3000\n* Flights- INR. 500\n* Hotels- INR. 2,000\n* Holidays- INR. 1,800' },
        { icon: <FaCreditCard />, text: '500+ Reward Points on activation' },
        { icon: <FaShieldAlt />, text: 'Insurance Coverage up to INR. 5 Lacs for Accidental Death and Personal Total Disability' },
        { icon: <FaWifi />, text: 'Complimentary Domestic & International Airport Lounge Access.' }
      ],
      fees: [
        "Joining Fee Primary: INR.3000/*-",
        "Joining Fee Add on Card: NIL",
        "Annual Fee Primary: INR.2000/*- ((same will be waived if the annual spend on the card is more than INR. 1.00 Lakh* in the preceding year))",
        "Annual Fee Add on Card: NIL",
        "Renewal Fee: NIL"
      ]
    },
    {
      id: 'axis',
      name: 'Axis Bank',
      logo: '/icons/AXIB.png',
      cardType: 'Credit Card',
      benefits: [
        { icon: <FaCreditCard />, text: 'Get 20x rewards* on every INR 1000 spent for booking tickets at standalone hotel and airline websites/apps/outlets.' },
        { icon: <FaHotel />, text: 'Flat 10% instant discount* on domestic & international hotel* bookings (Max discount of INR 6000 and INR 15000 respectively)' },
        { icon: <FaPlane />, text: 'Flat 10% off* on domestic & international flight bookings(Max discount of INR 1200 and INR 8000 respectively)' },
        { icon: <FaTicketAlt />, text: 'INR 125 off on bus ticket bookings (On minimum ticket booking of INR 700)' },
        { icon: <FaCreditCard />, text: 'Get annual fee of INR 550 waived off on spends of INR 50,000 or more on Standard Chartered EaseMyTrip Credit Card in the previous year.' },
        { icon: <FaWifi />, text: 'Enjoy 4 complimentary domestic lounge access per calendar year' },
        { icon: <FaCreditCard />, text: '3x reward points* for every INR 100 spent on all other category of retail spends (3 reward point = INR 0.50).' },
        { icon: <FaCreditCard />, text: 'Easy accessibility of EaseMy Trip Credit Card on Visa Network.' }
      ],
      fees: [
        "Annual Fee(For 1st year)₹350* + GST",
        "Renewal Fee (2nd Year Onwards)",
        "INR 350* + GST, The renewal fee will be reversed for clients with spends greater than or equal to INR 50,000* in the preceding year on UZO Hotels Credit card"
      ]
    }
  ];

  const bankIds: Bank[] = banksData.map((bank) => bank.id);

  const handleNext = () => {
    const currentIndex = bankIds.indexOf(activeBank);
    const nextIndex = (currentIndex + 1) % bankIds.length;
    setActiveBank(bankIds[nextIndex]);

    // Get the index of the last currently visible bank
    const lastVisibleIndex = bankIds.indexOf(visibleBanks[visibleBanks.length - 1]);

    // Update visible banks to always show 6 banks
    if (nextIndex >= lastVisibleIndex && nextIndex < bankIds.length - 1) {
      const startIndex = Math.min(bankIds.length - 6, nextIndex - 2);
      const newVisibleBanks = bankIds.slice(startIndex, startIndex + 6);
      setVisibleBanks(newVisibleBanks);
    } else if (nextIndex === 0) {
      // Reset to first 6 when reaching the end
      setVisibleBanks(bankIds.slice(0, 6));
    }
  };

  const handlePrev = () => {
    const currentIndex = bankIds.indexOf(activeBank);
    const prevIndex = (currentIndex - 1 + bankIds.length) % bankIds.length;
    setActiveBank(bankIds[prevIndex]);

    // Get the index of the first currently visible bank
    const firstVisibleIndex = bankIds.indexOf(visibleBanks[0]);

    // Update visible banks to always show 6 banks
    if (prevIndex <= firstVisibleIndex && prevIndex > 0) {
      const startIndex = Math.max(0, prevIndex - 3);
      const newVisibleBanks = bankIds.slice(startIndex, startIndex + 6);
      setVisibleBanks(newVisibleBanks);
    } else if (prevIndex === bankIds.length - 1) {
      // Reset to last 6 when reaching the beginning
      setVisibleBanks(bankIds.slice(-6));
    }
  };
  const [visibleBanks, setVisibleBanks] = useState<Bank[]>(bankIds.slice(0, 6));

  // const handleNext = () => {
  //   const currentIndex = bankIds.indexOf(activeBank);
  //   const nextIndex = (currentIndex + 1) % bankIds.length;
  //   setActiveBank(bankIds[nextIndex]);

  //   // Update visible banks if we're at the end of the current visible set
  //   if (nextIndex >= visibleBanks.length - 1 && nextIndex < bankIds.length - 1) {
  //     const newVisibleBanks = bankIds.slice(nextIndex - 2, nextIndex + 4);
  //     setVisibleBanks(newVisibleBanks);
  //   }
  // };

  // const handlePrev = () => {
  //   const currentIndex = bankIds.indexOf(activeBank);
  //   const prevIndex = (currentIndex - 1 + bankIds.length) % bankIds.length;
  //   setActiveBank(bankIds[prevIndex]);

  //   // Update visible banks if we're at the start of the current visible set
  //   const firstVisibleBankIndex = bankIds.indexOf(visibleBanks[0]);
  //   if (prevIndex <= firstVisibleBankIndex && prevIndex > 0) {
  //     const newVisibleBanks = bankIds.slice(Math.max(0, prevIndex - 3), prevIndex + 3);
  //     setVisibleBanks(newVisibleBanks);
  //   }
  // };

  return (
    <div className={styles.cardBenefits}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.subtitle}>Card Benefits</div>
          <h2 className={styles.title}>Choose From Our Top Co-Branded Credit & Debit Cards</h2>
          <p className={styles.tagline}>Grab assured perks and exclusive features for an ultimate experience</p>
        </div>

        <div className={styles.bankBenefits}>
          <div className={styles.bankTabsWrapper}>
            <div className={styles.navButtonPrev} onClick={handlePrev}>
              <FaChevronLeft />
            </div>
            <div className={styles.navButtonNext} onClick={handleNext}>
              <FaChevronRight />
            </div>

            <div className={styles.bankTabs}>

              <div className={styles.bankLinks}>
                {banksData
                  .filter(bank => visibleBanks.includes(bank.id))
                  .map((bank) => (
                    <button
                      key={bank.id}
                      className={`${styles.bankLink} ${activeBank === bank.id ? styles.active : ''}`}
                      onClick={() => handleBankChange(bank.id)}
                      style={{ width: `${100 / 6}%` }} // Ensure equal width for 6 items
                    >
                      <Image src={bank.logo} alt={`${bank.name} Logo`} height={50} width={50} />
                      <div className={styles.bankTitle}>{bank.name}</div>
                      <span className={styles.cardType}>({bank.cardType})</span>
                    </button>
                  ))}
              </div>
              {/* <div className={styles.bankLinks}>
                {banksData
                  .filter(bank => visibleBanks.includes(bank.id))
                  .map((bank) => (
                    <button
                      key={bank.id}
                      className={`${styles.bankLink} ${activeBank === bank.id ? styles.active : ''}`}
                      onClick={() => handleBankChange(bank.id)}
                    >
                      <Image src={bank.logo} alt={`${bank.name} Logo`} height={50} width={50} />
                      <div className={styles.bankTitle}>{bank.name}</div>
                      <span className={styles.cardType}>({bank.cardType})</span>
                    </button>
                  ))}
              </div> */}

            </div>
          </div>

          <div className={styles.bankDetails}>
            {banksData.map((bank) => (
              activeBank === bank.id && (
                <div key={bank.id} className={styles.bankDetail}>
                  <div className={styles.benefitsGrid}>
                    {bank.benefits.map((benefit, index) => (
                      <div key={index} className={styles.benefitItem}>
                        <div className={styles.benefitIcon}>{benefit.icon}</div>
                        <div className={styles.benefitText}>{benefit.text}</div>
                      </div>
                    ))}
                  </div>

                  <div className={styles.feeDetails}>
                    {bank.fees.map((fee, index) => (
                      <div key={index} className={styles.feeItem}>{fee}</div>
                    ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBenefits;
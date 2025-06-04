// components/CardBenefits.tsx
'use client';
import { useState } from 'react';
import styles from './CardBenefits.module.css';
import { FaPlane, FaHotel, FaGift, FaTicketAlt, FaMusic, FaShoppingBag, FaCreditCard, FaShieldAlt, FaWifi } from 'react-icons/fa';
import Image from 'next/image';

type Bank = 'bob' | 'dbs' | 'pnb' | 'standardCharted';

const CardBenefits = () => {
  const [activeBank, setActiveBank] = useState<Bank>('bob');

  const handleBankChange = (bank: Bank) => {
    setActiveBank(bank);
  };

  return (
    <div className={styles.cardBenefits}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.subtitle}>Card Benefits</div>
          <h2 className={styles.title}>Choose From Our Top Co-Branded Credit & Debit Cards</h2>
          <p className={styles.tagline}>Grab assured perks and exclusive features for an ultimate experience</p>
        </div>

        <div className={styles.bankBenefits}>
          <div className={styles.bankTabs}>
            <div className={styles.bankLinks}>
              <button
                className={`${styles.bankLink} ${activeBank === 'bob' ? styles.active : ''}`}
                onClick={() => handleBankChange('bob')}
              >
                <Image src={"/icons/bob.png"} alt='BoB Image' height={50} width={50} />
                {/* <div className={styles.bankLogo}>BoB</div> */}
                <div className={styles.bankTitle}>Bank Of Baroda</div>
                <span className={styles.cardType}>(Debit Card)</span>
              </button>

              <button
                className={`${styles.bankLink} ${activeBank === 'dbs' ? styles.active : ''}`}
                onClick={() => handleBankChange('dbs')}
              >
                <Image src={"/icons/DBS.png"} alt='BoB Image' height={50} width={50} />

                {/* <div className={styles.bankLogo}>DBS</div> */}
                <div className={styles.bankTitle}>Digibank By DBS</div>
                <span className={styles.cardType}>(Debit Card)</span>
              </button>

              <button
                className={`${styles.bankLink} ${activeBank === 'pnb' ? styles.active : ''}`}
                onClick={() => handleBankChange('pnb')}
              >
                <Image src={"/icons/PNB.png"} alt='BoB Image' height={50} width={50} />
                {/* <div className={styles.bankLogo}>PNB</div> */}
                <div className={styles.bankTitle}>Punjab National Bank</div>
                <span className={styles.cardType}>(Credit Card)</span>
              </button>

              <button
                className={`${styles.bankLink} ${activeBank === 'standardCharted' ? styles.active : ''}`}
                onClick={() => handleBankChange('standardCharted')}
              >
                <Image src={"/icons/SC.png"} alt='SC Image' height={50} width={50} />
                {/* <div className={styles.bankLogo}>SC</div> */}
                <div className={styles.bankTitle}>Standard Chartered</div>
                <span className={styles.cardType}>(Credit Card)</span>
              </button>
            </div>
          </div>

          <div className={styles.bankDetails}>
            {/* Bank of Baroda */}
            {activeBank === 'bob' && (
              <div className={styles.bankDetail}>
                <div className={styles.benefitsGrid}>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaPlane /></div>
                    <div className={styles.benefitText}>
                      Domestic Flight Bookings: 10%* instant discount maximum (Up to INR 1,000)- with no Minimum Order Value
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaPlane /></div>
                    <div className={styles.benefitText}>
                      International Flight Bookings: 10%* instant discount maximum (Up to INR 5,000)- with no Minimum Order Value
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaHotel /></div>
                    <div className={styles.benefitText}>
                      Domestic & International Hotel Bookings: 15%* instant discount maximum up to INR. 10,000/- with no Minimum Order Value
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaGift /></div>
                    <div className={styles.benefitText}>
                      Annual membership on top OTT platforms like Amazon Prime, Zee5 or SonyLiv
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaShoppingBag /></div>
                    <div className={styles.benefitText}>
                      Enjoy vouchers worth INR 125 once per quarter on shopping platforms like Big Basket or BlinkIt
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaTicketAlt /></div>
                    <div className={styles.benefitText}>
                      Get flat INR 250 OFF* on purchase of 2 movies/non movies tickets once a quarter.
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaMusic /></div>
                    <div className={styles.benefitText}>
                      Unlock Gaana+ plus subscription (per annum)
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaCreditCard /></div>
                    <div className={styles.benefitText}>
                      Grab 20%* Instant discount from Amazon on per card per month on recharge/bill payment on a Minimum Order Value of INR 129 only on Fridays
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaCreditCard /></div>
                    <div className={styles.benefitText}>
                      Contactless transactions up to INR. 5,000 can be done without PIN at POS
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaShieldAlt /></div>
                    <div className={styles.benefitText}>
                      Air Accident Insurance up to INR. 50 lacs
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaWifi /></div>
                    <div className={styles.benefitText}>
                      Complimentary international and domestic airport lounge access (2 per annum)
                    </div>
                  </div>
                </div>

                <div className={styles.feeDetails}>
                  <div className={styles.feeItem}>Here&apos;s the Bank of Baroda UZO Hotels debit card fee and charges details.</div>
                  <div className={styles.feeItem}>Issuance fee : INR 599* +Taxes</div>
                  <div className={styles.feeItem}>Annual fee :INR 599* + Taxes</div>
                </div>
              </div>
            )}

            {/* Digibank by DBS */}
            {activeBank === 'dbs' && (
              <div className={styles.bankDetail}>
                <div className={styles.benefitsGrid}>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaPlane /></div>
                    <div className={styles.benefitText}>
                      Get flat 10% OFF* (Up to INR 1000*) on domestic flights with a minimum booking amount of INR 6000.
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaPlane /></div>
                    <div className={styles.benefitText}>
                      Grab flat 8% OFF* (Up to INR 2000*) on international flights with a minimum booking amount of INR 20,000.
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaHotel /></div>
                    <div className={styles.benefitText}>
                      Enjoy flat 12% OFF* (Up to INR 2000*) on hotel bookings with a minimum booking amount of INR 3000.
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaHotel /></div>
                    <div className={styles.benefitText}>
                      Enjoy flat 17% OFF* (Up to INR 2800*) on eco-friendly hotels and resorts with a minimum booking amount of INR 3000.
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaTicketAlt /></div>
                    <div className={styles.benefitText}>
                      Get flat 8% OFF* (Up to INR 125*) on bus bookings with a minimum booking value of INR 1200
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaCreditCard /></div>
                    <div className={styles.benefitText}>
                      Avail premium Signature Visa Concierge services any time, any day.
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaMusic /></div>
                    <div className={styles.benefitText}>
                      Unlock Gaana+ plus subscription (per annum)
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaWifi /></div>
                    <div className={styles.benefitText}>
                      Premium travel with 1 airport lounge access per quarter across India.
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaCreditCard /></div>
                    <div className={styles.benefitText}>
                      Competitive Forex mark-up of 2.5% for international purchase and travel.
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaCreditCard /></div>
                    <div className={styles.benefitText}>
                      Higher daily limit than before on ATM withdrawals & spends.
                    </div>
                  </div>
                </div>

                <div className={styles.feeDetails}>
                  <div className={styles.feeItem}>
                    DBS Bank UZO Hotels Green Debit card is free for the first year. Annual fee of INR 299* + GST will be applicable from 2nd year onwards.
                  </div>
                </div>
              </div>
            )}

            {/* Punjab National Bank */}
            {activeBank === 'pnb' && (
              <div className={styles.bankDetail}>
                <div className={styles.benefitsGrid}>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaPlane /></div>
                    <div className={styles.benefitText}>
                      Flat 10% off Up to INR. 1,000 on domestic flight bookings | NO MOV (Minimum order value)
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaPlane /></div>
                    <div className={styles.benefitText}>
                      Flat 10% off Up to INR. 5,000 on international flight bookings | NO MOV
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaHotel /></div>
                    <div className={styles.benefitText}>
                      Flat 20% discount Up to INR.5,000 on domestic hotel bookings | NO MOV
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaHotel /></div>
                    <div className={styles.benefitText}>
                      Flat 20% discount Up to INR.10,000 on international hotel bookings | NO MOV
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaTicketAlt /></div>
                    <div className={styles.benefitText}>
                      Flat INR.125 off on bus bookings on minimum order value of INR.500
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaGift /></div>
                    <div className={styles.benefitText}>
                      Welcome Voucher worth the benefit of INR. 3000<br />
                      * Flights- INR. 500<br />
                      * Hotels- INR. 1,000<br />
                      * Holidays- INR. 1,500
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaCreditCard /></div>
                    <div className={styles.benefitText}>
                      300+ Reward Points on activation
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaShieldAlt /></div>
                    <div className={styles.benefitText}>
                      Insurance Coverage up to INR. 2 Lacs for Accidental Death and Personal Total Disability
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaWifi /></div>
                    <div className={styles.benefitText}>
                      Complimentary Domestic & International Airport Lounge Access.
                    </div>
                  </div>
                </div>

                <div className={styles.feeDetails}>
                  <div className={styles.feeItem}>Joining Fee Primary: INR.2000/*-</div>
                  <div className={styles.feeItem}>Joining Fee Add on Card: NIL</div>
                  <div className={styles.feeItem}>
                    Annual Fee Primary: INR.2000/*- ((same will be waived if the annual spend on the card is more than INR. 1.00 Lakh* in the preceding year))
                  </div>
                  <div className={styles.feeItem}>Annual Fee Add on Card: NIL</div>
                  <div className={styles.feeItem}>Renewal Fee: NIL</div>
                </div>
              </div>
            )}

            {/* Standard Chartered */}
            {activeBank === 'standardCharted' && (
              <div className={styles.bankDetail}>
                <div className={styles.benefitsGrid}>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaCreditCard /></div>
                    <div className={styles.benefitText}>
                      Get 10x rewards* on every INR 100 spent for booking tickets at standalone hotel and airline websites/apps/outlets.
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaHotel /></div>
                    <div className={styles.benefitText}>
                      Flat 20% instant discount* on domestic & international hotel* bookings (Max discount of INR 5000 and INR 10000 respectively)
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaPlane /></div>
                    <div className={styles.benefitText}>
                      Flat 10% off* on domestic & international flight bookings(Max discount of INR 1000 and INR 5000 respectively)
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaTicketAlt /></div>
                    <div className={styles.benefitText}>
                      INR 125 off on bus ticket bookings (On minimum ticket booking of INR 500)
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaCreditCard /></div>
                    <div className={styles.benefitText}>
                      Get annual fee of INR 350 waived off on spends of INR 50,000 or more on Standard Chartered EaseMyTrip Credit Card in the previous year.
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaWifi /></div>
                    <div className={styles.benefitText}>
                      Enjoy 2 complimentary domestic lounge access per calendar year
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaCreditCard /></div>
                    <div className={styles.benefitText}>
                      2x reward points* for every INR 100 spent on all other category of retail spends (2 reward point = INR 0.50).
                    </div>
                  </div>

                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><FaCreditCard /></div>
                    <div className={styles.benefitText}>
                      Easy accessibility of EaseMy Trip Credit Card on Visa Network.
                    </div>
                  </div>
                </div>

                <div className={styles.feeDetails}>
                  <div className={styles.feeItem}>Annual Fee(For 1st year)₹350* + GST</div>
                  <div className={styles.feeItem}>Renewal Fee (2nd Year Onwards)</div>
                  <div className={styles.feeItem}>
                    INR 350* + GST, The renewal fee will be reversed for clients with spends greater than or equal to INR 50,000* in the preceding year on Standard Chartered UZO Hotels Credit card
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBenefits;
import { useState } from 'react';
import styles from './PaymentNetBanking.module.css';
import Image from 'next/image';

interface Bank {
  id: string;
  name: string;
  logo: string;
  code: string;
}
interface BankSelect {
  id: string;
  name: string;
  code: string;
}

export default function PaymentNetBanking() {
  const [selectedBank, setSelectedBank] = useState<string>('');
  // const [showOtherBanks, setShowOtherBanks] = useState<boolean>(false);

  const popularBanks: Bank[] = [
    { id: 'rdoSBIB', name: 'State Bank of India', logo: '/icons/SBIB.png', code: 'SBIB|Payu' },
    { id: 'rdoICIB', name: 'ICICI Bank', logo: '/icons/ICIB.png', code: 'ICIB|Payu' },
    { id: 'rdo910', name: 'Kotak Mahindra Bank', logo: '/icons/kotak.png', code: '910|TPSL' },
    { id: 'rdo350', name: 'Yes Bank', logo: '/icons/yesBank.png', code: '350|TPSL' },
    { id: 'rdohdfb', name: 'HDFC Bank', logo: '/icons/hdfb.png', code: 'hdfb|Payu' },
    { id: 'rdoAXIB', name: 'Axis Bank', logo: '/icons/AXIB.png', code: 'AXIB|Payu' },
  ];

  const otherBanks: BankSelect[] = [
    // {
    //   "id": "rdoSBIB",
    //   "name": "State Bank of India",
    //   "code": "SBIB|Payu"
    // },
    // {
    //   "id": "rdoICIB",
    //   "name": "ICICI Bank",
    //   "code": "ICIB|Payu"
    // },
    // {
    //   "id": "rdo910",
    //   "name": "Kotak Mahindra Bank",
    //   "code": "910|TPSL"
    // },
    {
      "id": "rdo350",
      "name": "Jammu and Kashmir Bank",
      "code": "350|TPSL"
    },
    // {
    //   "id": "rdohdfb",
    //   "name": "HDFC Bank",
    //   "code": "hdfb|Payu"
    // },
    // {
    //   "id": "rdoAXIB",
    //   "name": "Axis Bank",
    //   "code": "AXIB|Payu"
    // },
    {
      "id": "rdoAIRNB",
      "name": "Airtel Payments Bank",
      "code": "AIRNB|Payu"
    },
    {
      "id": "rdoPNBB",
      "name": "Punjab National Bank",
      "code": "PNBB|Payu"
    },
    // {
    //   "id": "rdoYESB",
    //   "name": "Yes Bank",
    //   "code": "YESB|Payu"
    // },
    {
      "id": "rdoPSBNB",
      "name": "Punjab And Sind Bank",
      "code": "PSBNB|Payu"
    },
    {
      "id": "rdoPMNB",
      "name": "Punjab And Maharashtra Co-operative Bank Limited",
      "code": "PMNB|Payu"
    },
    // {
    //   "id": "rdoUCOB",
    //   "name": "UCO Bank",
    //   "code": "UCOB|Payu"
    // },
    // {
    //   "id": "rdoTBON",
    //   "name": "The Nainital Bank",
    //   "code": "TBON|Payu"
    // },
    // {
    //   "id": "rdoBHNB",
    //   "name": "The Bharat Co-op. Bank Ltd",
    //   "code": "BHNB|Payu"
    // },
    // {
    //   "id": "rdoJSBNB",
    //   "name": "Janata Sahakari Bank Pune",
    //   "code": "JSBNB|Payu"
    // },
    // {
    //   "id": "rdoCSMSNB",
    //   "name": "Cosmos Bank",
    //   "code": "CSMSNB|Payu"
    // },
    // {
    //   "id": "rdoIDFCNB",
    //   "name": "IDFC Netbanking",
    //   "code": "IDFCNB|Payu"
    // },
    // {
    //   "id": "rdoSBMB",
    //   "name": "State Bank of Mysore",
    //   "code": "SBMB|Payu"
    // },
    // {
    //   "id": "rdoSBPB",
    //   "name": "State Bank of Patiala",
    //   "code": "SBPB|Payu"
    // },
    // {
    //   "id": "rdoSBTB",
    //   "name": "State Bank of Travancore",
    //   "code": "SBTB|Payu"
    // },
    // {
    //   "id": "rdoSYNDB",
    //   "name": "Syndicate Bank",
    //   "code": "SYNDB|Payu"
    // },
    // {
    //   "id": "rdo620",
    //   "name": "Tamilnad Mercantile Bank",
    //   "code": "620|TPSL"
    // },
    // {
    //   "id": "rdoUBIB",
    //   "name": "Union Bank of India",
    //   "code": "UBIB|Payu"
    // },
    // {
    //   "id": "rdoUNIB",
    //   "name": "United Bank Of India",
    //   "code": "UNIB|Payu"
    // },
    // {
    //   "id": "rdoVJYB",
    //   "name": "Vijaya Bank",
    //   "code": "VJYB|Payu"
    // },
    // {
    //   "id": "rdoRBL",
    //   "name": "Ratnakar Bank",
    //   "code": "RBL |Payu"
    // },
    // {
    //   "id": "rdoSRSWT",
    //   "name": "Saraswat Bank",
    //   "code": "SRSWT|Payu"
    // },
    // {
    //   "id": "rdoSVCNB",
    //   "name": "Shamrao Vitthal Co-operative Bank",
    //   "code": "SVCNB|Payu"
    // },
    // {
    //   "id": "rdoSOIB",
    //   "name": "South Indian Bank",
    //   "code": "SOIB|Payu"
    // },
    // {
    //   "id": "rdoSDCB",
    //   "name": "Standard Chartered Bank",
    //   "code": "SDCB |Payu"
    // },
    // {
    //   "id": "rdoSBBJB",
    //   "name": "State Bank Of Bikaner and Jaipur",
    //   "code": "SBBJB|Payu"
    // },
    // {
    //   "id": "rdoSBHB",
    //   "name": "State Bank of Hyderabad",
    //   "code": "SBHB|Payu"
    // },
    // {
    //   "id": "rdoIDBB",
    //   "name": "IDBI Bank",
    //   "code": "IDBB|Payu"
    // },
    // {
    //   "id": "rdoINOB",
    //   "name": "Indian Overseas Bank",
    //   "code": "INOB|Payu"
    // },
    // {
    //   "id": "rdoINGB",
    //   "name": "Indian Overseas NetBanking",
    //   "code": "INGB |Payu"
    // },
    // {
    //   "id": "rdoINDB",
    //   "name": "Indian Bank",
    //   "code": "INDB|Payu"
    // },
    // {
    //   "id": "rdoINIB",
    //   "name": "IndusInd Bank",
    //   "code": "INIB|Payu"
    // },
    // {
    //   "id": "rdoKRKB",
    //   "name": "Karnataka Bank",
    //   "code": "KRKB|Payu"
    // },
    // {
    //   "id": "rdoKRVB",
    //   "name": "Karur Vysya - Corporate Netbanking",
    //   "code": "KRVB|Payu"
    // },
    // {
    //   "id": "rdoKRVB2",
    //   "name": "Karur Vysya Bank",
    //   "code": "KRVB|Payu"
    // },
    // {
    //   "id": "rdoOBCB",
    //   "name": "Oriental Bank Of Commerce",
    //   "code": "OBCB |Payu"
    // },
    // {
    //   "id": "rdoCPNB",
    //   "name": "Punjab National Bank-Corporate",
    //   "code": "CPNB |Payu"
    // },
    // {
    //   "id": "rdoCUBB",
    //   "name": "City Union Bank",
    //   "code": "CUBB|Payu"
    // },
    // {
    //   "id": "rdoCRPB",
    //   "name": "Corporation Bank",
    //   "code": "CRPB|Payu"
    // },
    // {
    //   "id": "rdoDCBB",
    //   "name": "DCB BANK Personal",
    //   "code": "DCBB|Payu"
    // },
    // {
    //   "id": "rdoDENN",
    //   "name": "Dena Bank",
    //   "code": "DENN|Payu"
    // },
    // {
    //   "id": "rdoDSHB",
    //   "name": "Deutsche Bank",
    //   "code": "DSHB|Payu"
    // },
    // {
    //   "id": "rdo370",
    //   "name": "Dhanlaxmi Bank",
    //   "code": "370|TPSL"
    // },
    // {
    //   "id": "rdoFEDB",
    //   "name": "Federal Bank",
    //   "code": "FEDB|Payu"
    // },
    // {
    //   "id": "rdo280",
    //   "name": "Allahabad Bank",
    //   "code": "280|TPSL"
    // },
    // {
    //   "id": "rdoADBB",
    //   "name": "Andhra Bank",
    //   "code": "ADBB |Payu"
    // },
    // {
    //   "id": "rdoBBCB",
    //   "name": "Bank of Baroda Corporate Banking",
    //   "code": "BBCB |Payu"
    // },
    // {
    //   "id": "rdoBBRB",
    //   "name": "Bank of Baroda Retail Banking",
    //   "code": "BBRB |Payu"
    // },
    // {
    //   "id": "rdoBBKB",
    //   "name": "Bank of Bahrain and Kuwait",
    //   "code": "BBKB|Payu"
    // },
    // {
    //   "id": "rdo310",
    //   "name": "Bank of Baroda",
    //   "code": "310|TPSL"
    // },
    // {
    //   "id": "rdoBOMB",
    //   "name": "Bank of Maharashtra",
    //   "code": "BOMB|Payu"
    // },
    // {
    //   "id": "rdoCABB",
    //   "name": "Canara Bank",
    //   "code": "CABB|Payu"
    // },
    // {
    //   "id": "rdoCSBN",
    //   "name": "Catholic Syrian Bank",
    //   "code": "CSBN|Payu"
    // },
    // {
    //   "id": "rdo740",
    //   "name": "Central Bank of India",
    //   "code": "740|TPSL"
    // },
    // {
    //   "id": "rdoSBIBcorp",
    //   "name": "State Bank of India-corporate",
    //   "code": "SBIB|Payu"
    // },
    // {
    //   "id": "rdoDBSBcorp",
    //   "name": "Lakshmi Vilas Bank - Corporate Netbanking",
    //   "code": "DBSB|Payu"
    // },
    // {
    //   "id": "rdoDBSBretail",
    //   "name": "Lakshmi Vilas Bank - Retail Netbanking",
    //   "code": "DBSB|Payu"
    // }
  ];

  const handleBankSelect = (bankCode: string) => {
    setSelectedBank(bankCode);
  };

  // const toggleOtherBanks = () => {
  //   setShowOtherBanks(!showOtherBanks);
  // };

  return (
    <div className={styles.paymentNetBanking}>
      <div className={styles.bankSelectionContainer}>
        <div className={styles.sectionTitle}>SELECT POPULAR BANKS</div>

        <div className={styles.bankOptions}>
          {popularBanks.map((bank) => (
            <div key={bank.id} className={styles.bankOption}>
              <input
                type="radio"
                id={bank.id}
                name="bankSelection"
                value={bank.code}
                onChange={() => handleBankSelect(bank.code)}
                checked={selectedBank === bank.code}
                className={styles.radioInput}
              />
              <label htmlFor={bank.id} className={styles.bankLabel}>
                <span className={styles.checkmark}></span>
                <span className={styles.bankLogo}>
                  <Image src={bank.logo} alt={`${bank.name} logo`} width="25" height="25" />
                </span>
                <span className={styles.bankName}>{bank.name}</span>
              </label>
            </div>
          ))}
        </div>

        {/* <div className={styles.otherBanksToggle}>
          <span className={styles.sectionTitle}>SELECT OTHER BANKS</span>
          <span className={styles.toggleIcon}>{showOtherBanks ? '▼' : '▶'}</span>
        </div> */}

        {/* {showOtherBanks && (
          <div className={styles.otherBanks}>
            <div className={styles.bankOptions}>
              {otherBanks.map((bank) => (
                <div key={bank.id} className={styles.bankOption}>
                  <input
                    type="radio"
                    id={bank.id}
                    name="bankSelection"
                    value={bank.code}
                    onChange={() => handleBankSelect(bank.code)}
                    checked={selectedBank === bank.code}
                    className={styles.radioInput}
                  />
                  <label htmlFor={bank.id} className={styles.bankLabel}>
                    <span className={styles.bankLogo}>
                      <img src={bank.logo} alt={`${bank.name} logo`} width="25" height="25" />
                    </span>
                    <span className={styles.bankName}>{bank.name}</span>
                    <span className={styles.checkmark}></span>
                  </label>
                </div>
              ))}
            </div>

            
          </div>
        )} */}
        <div className={styles.otherBanks}>
          <span className={styles.sectionTitle}>SELECT OTHER BANKS</span>
        </div>
        <div className={styles.bankDropdown}>
          <select
            className={styles.bankSelect}
            onChange={(e) => handleBankSelect(e.target.value)}
            value={selectedBank}
          >
            <option value="">Select Bank</option>
            {otherBanks.map((bank) => (
              <option key={bank.id} value={bank.code}>
                {bank.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
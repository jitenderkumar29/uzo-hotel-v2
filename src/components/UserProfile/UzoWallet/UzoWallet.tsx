"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillTransfer,
  faMoneyBillWave,
  faReply,
  faCoins,
  faPlane,
  faTrain,
  faHotel,
  faBus,
  faFileInvoiceDollar,
} from '@fortawesome/free-solid-svg-icons';
import styles from './UzoWallet.module.css';
import { Wallet } from 'lucide-react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Refund';
  comment: string;
  date: string;
}

const UzoWallet: React.FC = () => {
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [activeSummaryTab, setActiveSummaryTab] = useState<'spend' | 'refund' | 'pending'>('spend');


  // Sample data
  const walletBalance = 1250.50;
  const totalSpend = 850.75;
  const totalRefund = 250.00;
  const totalCashback = 150.25;

  const spendingData = [
    { category: 'Flight', amount: 450, color: '#147AD6', icon: faPlane },
    { category: 'Hotel', amount: 250, color: '#EC6666', icon: faHotel },
    { category: 'Bus', amount: 100, color: '#FFA200', icon: faBus },
    { category: 'Train', amount: 50, color: '#36d8ff', icon: faTrain },
  ];

  const transactions: Transaction[] = [
    {
      id: 1,
      description: 'Flight Booking - DEL to BOM',
      amount: 450,
      status: 'Completed',
      comment: 'Ticket #AB1234',
      date: '2023-06-15'
    },
    {
      id: 2,
      description: 'Hotel Booking',
      amount: 150,
      status: 'Completed',
      comment: 'Success #HT456',
      date: '2023-06-10'
    },
    {
      id: 3,
      description: 'Cashback Reward',
      amount: 50.25,
      status: 'Completed',
      comment: 'Promo code: SUMMER25',
      date: '2023-06-05'
    }
  ];
  const transactionsRefund: Transaction[] = [
    {
      id: 1,
      description: 'Flight Booking - Agra to Bareilly',
      amount: 950,
      status: 'Refund',
      comment: 'Ticket #AB1234',
      date: '2025-06-25'
    },
    {
      id: 2,
      description: 'Hotel Refund',
      amount: 850,
      status: 'Refund',
      comment: 'Cancellation #HT456',
      date: '2024-06-11'
    },
    // {
    //   id: 3,
    //   description: 'Cashback Reward',
    //   amount: 50.25,
    //   status: 'Refund',
    //   comment: 'Promo code: SUMMER25',
    //   date: '2023-06-05'
    // }
  ];
  const transactionsPending: Transaction[] = [
    {
      id: 1,
      description: 'Flight Booking - Chennai to Hyderabad',
      amount: 350,
      status: 'Pending',
      comment: 'Ticket #AB1234',
      date: '2023-05-05'
    },
    {
      id: 2,
      description: 'Hotel Refund request',
      amount: 250,
      status: 'Pending',
      comment: 'Cancellation #HT456',
      date: '2023-12-06'
    },
    // {
    //   id: 3,
    //   description: 'Cashback Reward',
    //   amount: 110.25,
    //   status: 'Pending',
    //   comment: 'Promo code: SUMMER25',
    //   date: '2025-06-05'
    // }
  ];

  const handleTransferClick = () => {
    setShowTransferModal(true);
  };

  const handleTransferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowTransferModal(false);
    setShowOTPModal(true);
  };

  const handleOTPSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate OTP and process transfer
    setShowOTPModal(false);
  };

  // Calculate percentages for the pie chart
  const totalAmount = spendingData.reduce((sum, item) => sum + item.amount, 0);
  const percentages = spendingData.map(item => ({
    ...item,
    percentage: totalAmount > 0 ? (item.amount / totalAmount) * 100 : 0
  }));

  return (
    <div className={styles.container}>
      {/* Wallet Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>UZO Wallet</h1>
        <div className={styles.balance}>
          <span className={styles.balanceLabel}>UZO Balance</span>
          <span className={styles.balanceAmount}>₹ {walletBalance.toFixed(2)}</span>
        </div>
      </div>

      {/* Transfer and Spending Section */}
      <div className={styles.content}>
        <div className={styles.leftSection}>
          {/* Transfer Money Card */}
          <div className={styles.transferCard} >
            <div className={styles.transferDetails} onClick={handleTransferClick}>
              <div className={styles.transferInfo}>
                <h2>Transfer Money</h2>
                <p>
                  To Your Bank Account
                  <FontAwesomeIcon icon={faMoneyBillTransfer} className={styles.transferLinkIcon} />

                  {/* Transfer your Money to Bank Account */}
                  {/* <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} /> */}
                </p>
              </div>
              {/* <div className={styles.transferIcon}>
                <FontAwesomeIcon icon={faMoneyBillTransfer} />
              </div> */}
            </div>
            <div className={styles.addWalletMoney}>
              <div className={styles.transferInfo}>
                <h2>Add Money</h2>
                <p>
                  To Your Wallet
                  <Wallet size={20} className={styles.transferLinkIcon} />
                </p>
              </div></div>
          </div>

          {/* Spending Summary */}
          <div className={styles.tabbedSummaryContainer}>
            <div className={styles.summaryTabs}>
              <button
                className={`${styles.summaryTab} ${activeSummaryTab === 'spend' ? styles.activeTab : ''}`}
                onClick={() => setActiveSummaryTab('spend')}
              >
                <FontAwesomeIcon icon={faMoneyBillWave} className={styles.tabIcon} />
                <span>Total Added Amount</span>
                <div className={styles.summaryAmount}>₹ {totalSpend.toFixed(2)}</div>
                {/* <div className={styles.summaryDescription}>Total amount spent from your wallet</div> */}
              </button>
              <button
                className={`${styles.summaryTab} ${activeSummaryTab === 'refund' ? styles.activeTab : ''}`}
                onClick={() => setActiveSummaryTab('refund')}
              >
                <FontAwesomeIcon icon={faReply} className={styles.tabIcon} />
                <span>Total Refund</span>
                <div className={styles.summaryAmount}>₹ {totalRefund.toFixed(2)}</div>
                {/* <div className={styles.summaryDescription}>Total amount refunded to your wallet</div> */}
              </button>
              <button
                className={`${styles.summaryTab} ${activeSummaryTab === 'pending' ? styles.activeTab : ''}`}
                onClick={() => setActiveSummaryTab('pending')}
              >
                <FontAwesomeIcon icon={faCoins} className={styles.tabIcon} />
                <span>Refund Pending</span>
                <div className={styles.summaryAmount}>₹ {totalCashback.toFixed(2)}</div>
                {/* <div className={styles.summaryDescription}>Amount pending to be refunded</div> */}
              </button>
            </div>

            {/* <div className={styles.tabContent}>
              {activeSummaryTab === 'spend' && (
                <div className={styles.summaryCard}>
                  <div className={styles.summaryIcon}>
                    <FontAwesomeIcon icon={faMoneyBillWave} className={styles.sumIcon} />
                  </div>
                  <div className={styles.summaryTitle}>Total Spend</div>
                  <div className={styles.summaryAmount}>₹ {totalSpend.toFixed(2)}</div>
                  <div className={styles.summaryDescription}>Total amount spent from your wallet</div>
                </div>
              )}

              {activeSummaryTab === 'refund' && (
                <div className={styles.summaryCard}>
                  <div className={styles.summaryIcon}>
                    <FontAwesomeIcon icon={faReply} className={styles.sumIcon} />
                  </div>
                  <div className={styles.summaryTitle}>Total Refund</div>
                  <div className={styles.summaryAmount}>₹ {totalRefund.toFixed(2)}</div>
                  <div className={styles.summaryDescription}>Total amount refunded to your wallet</div>
                </div>
              )}

              {activeSummaryTab === 'pending' && (
                <div className={styles.summaryCard}>
                  <div className={styles.summaryIcon}>
                    <FontAwesomeIcon icon={faCoins} className={styles.sumIcon} />
                  </div>
                  <div className={styles.summaryTitle}>Refund Pending</div>
                  <div className={styles.summaryAmount}>₹ {totalCashback.toFixed(2)}</div>
                  <div className={styles.summaryDescription}>Amount pending to be refunded</div>
                </div>
              )}
            </div> */}

          </div>
          {/* <div className={styles.spendingSummary}>
            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <FontAwesomeIcon icon={faMoneyBillWave} className={styles.sumIcon} />
              </div>
              <div className={styles.summaryTitle}>Total Spend</div>
              <div className={styles.summaryAmount}>₹ {totalSpend.toFixed(2)}</div>
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <FontAwesomeIcon icon={faReply} className={styles.sumIcon} />
              </div>
              <div className={styles.summaryTitle}>Total Refund</div>
              <div className={styles.summaryAmount}>₹ {totalRefund.toFixed(2)}</div>
            </div>

            <div className={styles.summaryCard}>
              <div className={styles.summaryIcon}>
                <FontAwesomeIcon icon={faCoins} className={styles.sumIcon} />
              </div>
              <div className={styles.summaryTitle}>Refund Pending</div>
              <div className={styles.summaryAmount}>₹ {totalCashback.toFixed(2)}</div>
            </div>
          </div> */}

        </div>

        {/* Right Section - Pie Chart */}
        <div className={styles.rightSection}>
          <div className={styles.pieChartContainer}>
            <div className={styles.pieChart}>
              {percentages.map((item, index) => (
                <div
                  key={index}
                  className={styles.pieSegment}
                  style={{
                    backgroundColor: item.color,
                    transform: `rotate(${percentages.slice(0, index).reduce((sum, i) => sum + i.percentage, 0) * 3.6
                      }deg)`,
                    opacity: item.percentage > 0 ? 1 : 0
                  }}
                >
                  <div
                    className={styles.segmentCover}
                    style={{
                      transform: `rotate(${item.percentage * 3.6}deg)`,
                      opacity: item.percentage > 0 ? 1 : 0
                    }}
                  />
                </div>
              ))}
              <div className={styles.pieCenter}>
                <div className={styles.pieLabel}>Money Spent</div>
              </div>
            </div>
          </div>

          <div className={styles.spendingCategories}>
            {spendingData.map((item, index) => (
              <div key={index} className={styles.categoryItem}>
                <div className={styles.categoryInfo}>
                  <FontAwesomeIcon icon={item.icon} className={styles.categoryIcon} />
                  <span>{item.category}</span>
                </div>
                <div
                  className={styles.categoryAmount}
                  style={{ backgroundColor: item.color }}
                >
                  {item.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions Section */}
      <div className={styles.transactionsSection}>
        <div className={styles.sectionHeader}>
          <FontAwesomeIcon icon={faFileInvoiceDollar} className={styles.headerIcon} />
          <h2>UZO Hotels Passbook</h2>
        </div>

        <div className={styles.transactionsTable}>
          <div className={styles.tableHeader}>
            <div className={styles.headerColumn} style={{ paddingLeft: '30px' }}>Transactions</div>
            <div className={styles.headerColumn}>Amount</div>
            <div className={styles.headerColumn}>Status</div>
            <div className={styles.headerColumn}>Comment</div>
          </div>

          {activeSummaryTab === 'spend' && (
            <div>
              {transactions.map(transaction => (
                <div key={transaction.id} className={styles.tableRow}>
                  <div className={styles.rowColumn} style={{ paddingLeft: '30px' }}>
                    <div className={styles.transactionDescription}>{transaction.description}</div>
                    <div className={styles.transactionDate}>{transaction.date}</div>
                  </div>
                  <div className={styles.rowColumn}>₹ {transaction.amount.toFixed(2)}</div>
                  <div className={styles.rowColumn}>
                    <span className={`${styles.statusBadge} ${styles[transaction.status.toLowerCase()]}`}>
                      {transaction.status}
                    </span>
                  </div>
                  <div className={styles.rowColumn}>{transaction.comment}</div>
                </div>
              ))
              }
            </div>)}
          {activeSummaryTab === 'refund' && (
            <div>
              {transactionsRefund.map(transaction => (
                <div key={transaction.id} className={styles.tableRow}>
                  <div className={styles.rowColumn} style={{ paddingLeft: '30px' }}>
                    <div className={styles.transactionDescription}>{transaction.description}</div>
                    <div className={styles.transactionDate}>{transaction.date}</div>
                  </div>
                  <div className={styles.rowColumn}>₹ {transaction.amount.toFixed(2)}</div>
                  <div className={styles.rowColumn}>
                    <span className={`${styles.statusBadge} ${styles[transaction.status.toLowerCase()]}`}>
                      {transaction.status}
                    </span>
                  </div>
                  <div className={styles.rowColumn}>{transaction.comment}</div>
                </div>
              ))
              }
            </div>)}
          {activeSummaryTab === 'pending' && (
            <div>
              {transactionsPending.map(transaction => (
                <div key={transaction.id} className={styles.tableRow}>
                  <div className={styles.rowColumn} style={{ paddingLeft: '30px' }}>
                    <div className={styles.transactionDescription}>{transaction.description}</div>
                    <div className={styles.transactionDate}>{transaction.date}</div>
                  </div>
                  <div className={styles.rowColumn}>₹ {transaction.amount.toFixed(2)}</div>
                  <div className={styles.rowColumn}>
                    <span className={`${styles.statusBadge} ${styles[transaction.status.toLowerCase()]}`}>
                      {transaction.status}
                    </span>
                  </div>
                  <div className={styles.rowColumn}>{transaction.comment}</div>
                </div>
              ))
              }
            </div>)}
        </div>
      </div>

      {/* Transfer Money Modal */}
      {showTransferModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.transferModal}>
            <div className={styles.modalHeader}>
              <h3>Fill the below details</h3>
              <button
                className={styles.closeButton}
                onClick={() => setShowTransferModal(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleTransferSubmit}>
              <div className={styles.formGroup}>
                <label>Name of Account Holder</label>
                <input
                  type="text"
                  placeholder="Enter account holder name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Account Number</label>
                <input
                  type="text"
                  placeholder="Enter your Account Number"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Re-enter Account Number</label>
                <input
                  type="text"
                  placeholder="Re-enter your Account Number"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>Bank Name</label>
                <input
                  type="text"
                  placeholder="Enter your Bank Name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>IFSC Code</label>
                <input
                  type="text"
                  placeholder="Enter IFSC Code"
                  required
                />
              </div>

              {/* <div className={styles.formGroup}>
                <label>Cancelled Cheque Copy/Bank Statement</label>
                <input
                  type="file"
                  accept=".png,.jpeg,.jpg,.pdf"
                  required
                />
                <div className={styles.fileFormat}>Format: PNG, JPEG, PDF</div>
              </div> */}

              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* OTP Verification Modal */}
      {showOTPModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.otpModal}>
            <div className={styles.modalHeader}>
              <h3>Please verify OTP Bank Transfer</h3>
              <button
                className={styles.closeButton}
                onClick={() => setShowOTPModal(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleOTPSubmit}>
              <div className={styles.formGroup}>
                <label>Verify OTP:</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  maxLength={6}
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Submit
              </button>

              <div className={styles.resendOtp}>
                Didn&apos;t receive OTP? <a href="#">Resend OTP</a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UzoWallet;
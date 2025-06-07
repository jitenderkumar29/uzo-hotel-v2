"use client";
import { useState } from "react";
import styles from "./PromoCodes.module.css";
import { Edit3, CheckCircle } from "lucide-react";

const PromoCodes = () => {
  const [editMode, setEditMode] = useState(false);
  const [promoCode, setPromoCode] = useState("UZOBTJL");
  const [shareLink, setShareLink] = useState("https://uzo-hotels/UZOBTJL");

  return (
    <div className={styles.promoCodesContainer}>
      <div className={styles.fieldsWrapper}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Promo Code</label>
          <input
            type="text"
            value={promoCode}
            readOnly={!editMode}
            onChange={(e) => setPromoCode(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Share Link</label>
          <input
            type="text"
            value={shareLink}
            readOnly={!editMode}
            onChange={(e) => setShareLink(e.target.value)}
            className={styles.input}
          />
        </div>

        <button
          className={editMode ? styles.updateButton : styles.editButton}
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? (
            <>
              <CheckCircle size={16} /> Update
            </>
          ) : (
            <>
              <Edit3 size={16} /> Edit
            </>
          )}
        </button>
      </div>

      <div className={styles.earningsWrapper}>
        <span className={styles.earningsText}>Total Earnings :</span>
        <span className={styles.earningsAmount}>₹ 0
        </span>
      </div>
    </div>
  );
};

export default PromoCodes;

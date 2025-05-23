'use client';
import React from 'react'
import styles from "./UzoRewards.module.css"
import Link from 'next/link';

const UzoRewards = () => {
  return (
    <div>
      <div className={styles.joinUzoCard}>
        <div className={styles.containerUzoCard}>
          <div className={styles.textContentUzoCard}>
            <h2>Join UZO Rewards</h2>
            <p>
              Elevate your stay and start enjoying our exclusive member only benefits today!{' '}
              <Link href="/" className={styles.signInLinkUzoCard}>Sign in</Link>
            </p>
          </div>
          <button className={styles.joinButtonUzoCard}>JOIN US</button>
        </div>
      </div>
    </div>
  )
}

export default UzoRewards

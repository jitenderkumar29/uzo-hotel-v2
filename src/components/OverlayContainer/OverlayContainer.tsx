// Overlay.tsx
'use client';
import React from 'react';
import styles from './OverlayContainer.module.css' // Assuming you have a CSS file for styles

interface OverlayProps {
  children: React.ReactNode;
  onClose?: () => void;
  show: boolean;
}

const OverlayContainer: React.FC<OverlayProps> = ({ children, onClose, show }) => {
  if (!show) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.overlayContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default OverlayContainer;

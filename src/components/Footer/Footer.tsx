import React, { useState } from 'react';
import Image from 'next/image';
import FooterModal from './FooterModal';
import styles from './Footer.module.css';

interface FooterColumnProps {
  imgUrl: string;
  title: string;
  text: string;
  imgWidth?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ imgUrl, title, text, imgWidth = '150' }) => (
  <div className={styles.column}>
    <div className={styles.columnContent}>
      <div className={styles.imageContainer}>
        <Image
          src={imgUrl}
          alt={title}
          width={parseInt(imgWidth)}
          height={100}
          className={styles.footerImage}
        />
      </div>
      <h3 className={styles.columnTitle}>{title}</h3>
      <p className={styles.columnText}>{text}</p>
    </div>
  </div>
);

interface FooterLinkProps {
  label: string;
  id: string;
  onClick: (id: string) => void;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, id, onClick }) => (
  <a
    className={styles.footerLink}
    onClick={e => {
      e.preventDefault();
      onClick(id);
    }}
  >
    {label}
  </a>
);

const FooterLinks: React.FC<{ loadInfo: (id: string) => void }> = ({ loadInfo }) => (
  <div className={styles.footerLinks}>
    <FooterLink label="Terms & Conditions" id="terms-pop-modal" onClick={loadInfo} />
    <span className={styles.divider}>|</span>
    <FooterLink label="Privacy Policy" id="privacy-policy-modal" onClick={loadInfo} />
    <span className={styles.divider}>|</span>
    <FooterLink label="Shipping Policy" id="shipping-policy-modal" onClick={loadInfo} />
    <span className={styles.divider}>|</span>
    <FooterLink label="Return Policy" id="return-policy-modal" onClick={loadInfo} />
  </div>
);

const Footer: React.FC = () => {
  const [modalId, setModalId] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const loadInfo = (id: string) => {
    setModalId(id);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setModalId('');
    document.body.style.overflow = 'auto';
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerSub}>
        <div className={styles.msgBody}>
          <div className={styles.container}>
            <FooterColumn
              imgUrl="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/money_back_guarantee_footer.webp?v=1728377935"
              title="60-Day Money Back Guarantee"
              text="No questions asked—60-day refund or replacement guaranteed."
            />
            <FooterColumn
              imgUrl="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/small_business_footer.webp?v=1728377934"
              title="Thank You!"
              text="Your purchase supports the Second Amendment community."
            />
            <FooterColumn
              imgUrl="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/secure_payment_footer.webp?v=1728377935"
              title="100% Secure Payment"
              text="All orders are AES-256 Bit encrypted through HTTPS."
              imgWidth="120"
            />
          </div>
        </div>

        <div className={styles.footerCopyright}>
          © <b>2025 VNSH.com</b> All Rights Reserved.
        </div>
        <FooterLinks loadInfo={loadInfo} />
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={closeModal} aria-label="Close modal">
              &times;
            </button>
            <FooterModal modalId={modalId} closeModal={closeModal} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

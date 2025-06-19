import React from 'react';
import styles from './Footer.module.css';

interface FooterModalProps {
  modalId: string;
  closeModal: () => void;
}

const FooterModal: React.FC<FooterModalProps> = ({ modalId, closeModal }) => {
  // Only render the modal if we have a valid modalId
  if (!modalId) return null;

  // Function to get the appropriate content based on modalId
  const getModalContent = () => {
    switch (modalId) {
      case 'terms-pop-modal':
        return (
          <>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Terms &amp; Disclaimer</h2>
            </div>
            <div className={styles.modalBody}>
              <p><strong>Effective Date: January 1st, 2019</strong></p>
              <p>To review material modifications and their effective dates scroll to the bottom of the page.</p>
              <div className={styles.termsDiv}>
                <ol>
                  <li>
                    <strong>Parties.</strong> The parties to these Terms of Use are you, and the owner of this VNSH.com website business, Sicuro Brands LLC ("Sicuro Brands"). All references to "we", "us", "our", this "website" or this "site" shall be construed to mean this website business and Sicuro Brands.
                  </li>
                  <li>
                    <strong>Modification.</strong> We reserve the right to modify these Terms of Use at any time, and without prior notice, by posting an amended Terms of Use that is always accessible through the Terms of Use link on this site's home page.
                  </li>
                  <li>
                    <strong>Use And Restrictions.</strong> Subject to these Terms of Use, our Privacy Policy, and the additional policies posted at the bottom of our home page, including without limitation our Return Policy, you may use the public areas of this site, but only for your own internal purposes.
                  </li>
                  <li>
                    <strong>How We Treat Postings To This Site.</strong> We will not treat information that you post to areas of this site that are viewable by others (for example, to a blog, forum or chat-room) as proprietary, private, or confidential.
                  </li>
                </ol>
              </div>
            </div>
          </>
        );

      case 'privacy-policy-modal':
        return (
          <>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Privacy Policy</h2>
            </div>
            <div className={styles.modalBody}>
              <p><strong>Effective Date: January 1st, 2019</strong></p>
              <div className={`${styles.privacyPolicy} ${styles.modalTextContent}`}>
                <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.</p>
                <p>We collect information that you provide to us when you register on our site, place an order, subscribe to our newsletter, or fill out a form.</p>
                <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
                <p>We may use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and site interaction.</p>
                <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide users with advance notice.</p>
              </div>
            </div>
          </>
        );

      case 'return-policy-modal':
        return (
          <>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Return Policy</h2>
            </div>
            <div className={styles.modalBody}>
              <p><strong>60-Day Money Back Guarantee</strong></p>
              <div className={styles.modalTextContent}>
                <p>We stand behind our products 100%. If you're not completely satisfied with your purchase, you may return it within 60 days of the purchase date for a full refund or exchange.</p>
                <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
                <p>To complete your return, we require a receipt or proof of purchase. Please do not send your purchase back to the manufacturer.</p>
                <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
              </div>
            </div>
          </>
        );

      case 'shipping-policy-modal':
        return (
          <>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Shipping Policy</h2>
            </div>
            <div className={styles.modalBody}>
              <p><strong>Fast & Reliable Shipping</strong></p>
              <div className={styles.modalTextContent}>
                <p>We process and ship all orders within 1-2 business days from our warehouse. Most orders within the continental United States will be delivered within 3-5 business days after shipping.</p>
                <p><strong>Shipping Methods:</strong></p>
                <ul>
                  <li>Standard Shipping: 3-5 business days</li>
                  <li>Expedited Shipping: 2-3 business days</li>
                  <li>Overnight Shipping: 1 business day (order must be placed before 12 PM EST)</li>
                </ul>
                <p><strong>International Shipping:</strong></p>
                <p>We ship to most countries worldwide. International orders typically take 7-14 business days for delivery, depending on the destination country's customs processing times.</p>
                <p><strong>Order Tracking:</strong></p>
                <p>You will receive a shipping confirmation email with tracking information as soon as your order leaves our warehouse. You can track your package using the provided tracking number.</p>
                <p><strong>Shipping Restrictions:</strong></p>
                <p>Some products may have shipping restrictions based on local laws and regulations. We reserve the right to cancel any order that violates these restrictions.</p>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.modalContentInner}>
      {getModalContent()}
    </div>
  );
};

export default FooterModal;

import React from 'react';

const FooterModal = ({ modalId, closeModal }) => {
  // Only render the modal if we have a valid modalId
  if (!modalId) return null;

  // Function to get the appropriate content based on modalId
  const getModalContent = () => {
    switch (modalId) {
      case 'terms-pop-modal':
        return (
          <>
            <div className="modal-header">
              <h2 className="modal-title">Terms &amp; Disclaimer</h2>
            </div>
            <div className="modal-body">
              <p><strong>Effective Date: January 1st, 2019</strong></p>
              <p>To review material modifications and their effective dates scroll to the bottom of the page.</p>
              <div className="terms-div">
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
            <div className="modal-header">
              <h2 className="modal-title">Privacy Policy</h2>
            </div>
            <div className="modal-body">
              <p><strong>Effective Date: January 1st, 2019</strong></p>
              <div className="privacy-policy modaltextcontent">
                <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.</p>
                <p>We collect information that you provide to us when you register on our site, place an order, subscribe to our newsletter, or fill out a form.</p>
                <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
                <p>By using this site, you consent to our privacy policy.</p>
				<p>For more information on privacy, please visit our Privacy Policy page.</p>
              </div>
            </div>
          </>
        );

      case 'shipping-policy-modal':
        return (
          <>
            <div className="modal-header">
              <h2 className="modal-title">Shipping Policy</h2>
            </div>
            <div className="modal-body">
              <div className="shipping-policy modaltextcontent">
                <p><strong>Standard Shipping</strong></p>
                <p>We offer fast and reliable shipping options for all our products. Most orders are processed within 1-2 business days and shipped via standard shipping, which typically takes 3-5 business days for delivery.</p>
                
                <p><strong>Expedited Shipping</strong></p>
                <p>For expedited shipping options, please contact our customer service team before placing your order.</p>
                
                <p><strong>International Shipping</strong></p>
                <p>We offer international shipping to most countries. Delivery times may vary depending on the destination.</p>
              </div>
            </div>
          </>
        );

      case 'returns-policy-modal':
        return (
          <>
            <div className="modal-header">
              <h2 className="modal-title">Return Policy</h2>
            </div>
            <div className="modal-body">
              <div className="returns-policy modaltextcontent">
                <p><strong>60-Day Money Back Guarantee</strong></p>
                <p>We offer a 60-day money-back guarantee on all our products. If you're not completely satisfied with your purchase, you may return it within 60 days of the purchase date for a full refund of the purchase price.</p>
                
                <p><strong>How to Initiate a Return</strong></p>
                <p>To initiate a return, please contact our customer service team with your order number and reason for return. Our team will provide you with return instructions and a return authorization number.</p>
                
                <p><strong>Return Conditions</strong></p>
                <p>Items must be in their original condition, unused, and in their original packaging. The customer is responsible for return shipping costs unless the return is due to our error.</p>
              </div>
            </div>
          </>
        );

      default:
        return (
          <div className="modal-body">
            <p>Content not found.</p>
          </div>
        );
    }
  };

  return (
    <>
      <button className="close-modal" onClick={closeModal}>&times;</button>
      {getModalContent()}
    </>
  );
};

export default FooterModal;

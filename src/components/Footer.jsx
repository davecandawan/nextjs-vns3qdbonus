import React, { useState } from "react";
import FooterModal from "./FooterModal";
import "./Footer.css";

const Footer = () => {
  const [modalId, setModalId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const loadInfo = (id) => {
    setModalId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="footer">
      <div id="footer-sub">
        <div className="msg-body">
          <div className="container">
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

        <div id="footer-copyright">© <b>2025 VNSH.com</b> All Rights Reserved.</div>
        <FooterLinks loadInfo={loadInfo} />
      </div>

      {/* Modal Rendering */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <FooterModal modalId={modalId} closeModal={closeModal} />
          </div>
        </div>
      )}
    </nav>
  );
};

const FooterColumn = ({ imgUrl, title, text, imgWidth = "150" }) => (
  <div className="column">
    <picture className="footer-sub-img-1">
      <img 
        src={imgUrl} 
        loading="lazy" 
        alt={title} 
        width={imgWidth} 
        height="150" 
        style={{ width: imgWidth, height: 'auto' }} 
      />
    </picture>
    <p className="footer-text-1"><b>{title}</b></p>
    <p className="footer-text-2">{text}</p>
  </div>
);

const FooterLinks = ({ loadInfo }) => (
  <div id="footer-links">
    <a onClick={() => loadInfo("terms-pop-modal")}>Terms & Disclaimer</a>
    <a onClick={() => loadInfo("privacy-policy-modal")}>Privacy Policy</a>
    <a onClick={() => loadInfo("shipping-policy-modal")}>Shipping Policy</a>
    <a onClick={() => loadInfo("returns-policy-modal")}>Return Policy</a>
  </div>
);

export default Footer;

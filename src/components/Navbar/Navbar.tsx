import React from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <div className={styles.navbarContainer}>
        <div className={styles.navbarContent}>
          <div className={styles.logoContainer}>
            <Image 
              src="https://d1tnk6mbnurvod.cloudfront.net/img/brh/White-VNSH-Logo.png" 
              alt="VNSH Logo" 
              className={styles.navbarLogo} 
              width={180}
              height={50}
              priority
            />
          </div>
          <p className={styles.navbarText}>
            Questions? | <a href="tel:888-526-1885" className={styles.phoneLink}>888-526-1885</a>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

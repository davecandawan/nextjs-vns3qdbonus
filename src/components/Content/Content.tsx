import React from 'react';
import styles from './Content.module.css';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import components with no SSR
const VidalyticsVideo = dynamic(() => import('../VidalyticsVideo/VidalyticsVideo'), {
  ssr: false,
});

const YotpoReview = dynamic(() => import('../YotpoReview/YotpoReview'), {
  ssr: false,
});

const Faqs = dynamic(() => import('../Faqs/Faqs'));
const Footer = dynamic(() => import('../Footer/Footer'));

interface ContentProps {
  buttonText?: string;
}

const Content: React.FC<ContentProps> = ({
  buttonText = 'Give Me My VNSH Holster + FREE QuickLock!',
}) => {
  return (
    <>
      <div className={styles.stickyBanner}>
        FREE <span style={{ textDecoration: 'line-through' }}>$50</span> VNSH QuickLock With Every
        Order - This Page ONLY!
      </div>
      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.headertext}>
            <b>
              <em>Insanely Comfy Holster</em>
            </b>{' '}
            Makes Any Semi-Auto (Plus 2 Extra Mags)
            <b>
              <em> Disappear In Plain Sight</em>
            </b>{' '}
            Even If You Wear
            <u>Nothing But Gym Shorts, Sweatpants and T-Shirts!</u>
          </p>
        </header>
        <div className={styles.subheadertext1}>
          <span className={styles.belowheadertext}>
            <em>Guaranteed Comfort Or 100% Of Your Money Back!</em>
          </span>
        </div>
        <div className={styles.videoContainer}>
          <VidalyticsVideo />
        </div>
        <div className={`${styles.btnDiv} ${styles.pulse}`}>
          <button className={styles.btn}>{buttonText}</button>
        </div>
        <div className={styles.imgCenter}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/quicklockbonus_new.png?v=1734018658"
            alt="VNSH Holster"
            className={styles.heroImage}
            width={1120}
            height={600}
            priority
          />
        </div>
        <div className={styles.header01}>
          <span className={`${styles.yellow} ${styles.headertext}`}>
            Discover Why Over 175,234 Americans Are Carrying With VNSH…
          </span>
        </div>
        <article className={styles.bodymsg}>
          <p className={styles.paragraphMargin}>
            Literally{' '}
            <b>
              <em>hundreds of thousands</em>
            </b>{' '}
            of Americans are using VNSH to carry comfortably all day, every day.
          </p>
          <p className={styles.paragraphMargin}>The biggest reason why is…</p>
          <p className={`${styles.paragraphMargin} ${styles.textmarginbot}`}>
            It’s GUARANTEED to be the most comfortable holster you’ve ever worn –{' '}
            <b className={styles.yellow1}>or you get 100% of your money back!</b>
          </p>
        </article>
        <div className={`${styles.pad1} ${styles.imgCenter} `}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/guaranteed_bannerDesktop.webp"
            alt="60 Day Money Back Guarantee"
            className={styles.heroImage1}
            width={1120}
            height={200}
          />
        </div>
        <article className={styles.bodymsg}>
          <p className={styles.paragraphMargin}>
            <b>
              <em>What makes it so comfortable??</em>
            </b>
          </p>
          <p className={styles.paragraphMargin}>The secret is our…</p>
        </article>
        <div className={styles.subheader}>
          <span className={`${styles.subheadertext} ${styles.orange}`}>
            Ultra-Plush <span className={styles.red}>“Yoga Pant” Material Belt</span> + a Robust
            Cordura Holster Body That’ll <span className={styles.red}>Never Dig or Poke</span>
          </span>
        </div>
        <article className={styles.bodymsg}>
          <p className={styles.paragraphMargin}>
            Unlike traditional holsters that require a <b>bulky tactical belt</b> and constantly{' '}
            <b>jab at your body</b>…
          </p>
          <p className={styles.paragraphMargin}>
            VNSH uses a durable but stretchy built-in belt that
          </p>
          <li className={styles.checkmarkItem}>Effortlessly wicks sweat…</li>
          <li className={styles.checkmarkItem}>Never retains odor…</li>
          <li className={styles.checkmarkItem}>
            Feels softer than your favorite PJs on Christmas morning…
          </li>
          <p className={styles.paragraphMargin}>
            … combined with a super tough Cordura blend holster body that gives you top-notch
            retention – with a non-rigid feel that’ll make you forget you're carrying at all
          </p>
          <p className={styles.paragraphMargin}>
            Plus, VNSH makes just about ANY semi auto{' '}
            <b>
              <u>disappear in plain sight.</u>
            </b>
          </p>
          <p className={styles.paragraphMargin}>
            <em>How many other holsters can do all that??</em>
          </p>
          <p className={styles.paragraphMargin}>
            <b>The answer is ZERO.</b>
          </p>
        </article>
        <div className={`${styles.btnDiv} ${styles.pulse}`}>
          <button className={styles.btn}>{buttonText}</button>
        </div>
        <article>
          <p>
            <span className={styles.belowbuttontext}>
              60 Days to Try It Yourself… Love It Or You Don’t Pay a Dime!
            </span>
          </p>
        </article>
        {/* <div className="yotpo">
        <YotpoReview />
      </div> */}
        <div className={styles.subheader}>
          <span className={`${styles.subheadertext} ${styles.orange}`}>
            Seriously, This Holster Works With 99.9% of Single Semi-Automatic Pistols On the Planet
          </span>
        </div>
        <div className={styles.holster3}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterDesktop1.webp"
            alt="VNSH Holster with various firearms"
            className={styles.heroImage}
            width={650}
            height={400}
          />
        </div>
        <article className={styles.bodymsg}>
          <p>
            Our holster design means that <b>regardless of what pistol you own…</b> it will help you
            safely and comfortably carry it.
          </p>
          <p className={styles.paragraphMargin}>
            No more needing to buy multiple holsters for all your pistols.
          </p>
          <p className={styles.paragraphMargin}>
            Plus, since it has 2-built in mag pouches, now{' '}
            <b>you don’t need to spend extra money on mag pouches</b> to guarantee you’re never out
            of the fight.
          </p>
          <p className={styles.paragraphMargin}>
            Take a look at the list of brands our holster works with and then grab yours before the
            price goes up!
          </p>
          <div className={styles.holster4}>
            <div className={styles.desktopLogo}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/LogoDesktop.webp?v=1729112354"
                alt="VNSH Holster with various firearms"
                className={styles.logoImage}
                width={650}
                height={400}
              />
            </div>
            <div className={styles.mobileLogo}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/LogoMobile.webp?v=1729112354"
                alt="VNSH Holster with various firearms"
                className={styles.logoImage}
                width={400}
                height={300}
              />
            </div>
          </div>
        </article>

        <div className={`${styles.btnDiv} ${styles.pulse}`}>
          <button className={styles.btn}>{buttonText}</button>
        </div>
        <article>
          <p>
            <span className={styles.belowbuttontext}>
              60 Days to Try It Yourself… Love It Or You Don’t Pay a Dime!
            </span>
          </p>
        </article>
        <div className={styles.subheader}>
          <span className={`${styles.subheadertext} ${styles.orange}`}>
            <em>
              <span className={styles.red}>Limited FREE Bonus Gift (Worth $50)</span>
            </em>{' '}
            Next 127 Buyers Get a{' '}
            <span className={styles.red}>Complimentary VNSH QuickLock Safe!</span>
          </span>
        </div>
        <div className={`${styles.pad1} ${styles.imgCenter}`}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/quicklockbonus_new.png?v=1734018658"
            alt="VNSH Holster deal"
            className={styles.heroImage}
            width={1120}
            height={600}
          />
        </div>
        <article className={styles.bodymsg}>
          <p className={styles.paragraphMargin}>
            For a short time, we’re giving out our bestselling lockbox –{' '}
            <b>
              <em>the VNSH QuickLock</em>
            </b>{' '}
            –{' '}
            <span className={styles.highlight}>
              100% FREE with every holster order (from this page ONLY)!
            </span>
          </p>
          <div className={styles.featuresContainer}>
            <div className={styles.featureItem}>
              <div className={styles.featureContent}>
                <li className={styles.checkmarkItem1}>
                  <b>Ultra Secure, But Lightning Fast Access</b> - a simple but robust key lock
                  gives you total peace-of-mind that{' '}
                  <b>
                    <em>nobody</em>
                  </b>{' '}
                  is getting inside but you. Yet you're always seconds away from having your weapon
                  in-hand.
                </li>
              </div>
              <div className={styles.featureImage}>
                <img
                  src="https://vnsh.com/cdn/shop/files/VNSH_Gun_Safe_4_e97c9ad2-f60f-4f40-a833-7a84ff0ff05e_500x.jpg"
                  alt="QuickLock secure access"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureContent}>
                <li className={styles.checkmarkItem1}>
                  <b>Great for Your Car, Nightstand, or Really Anywhere</b> - small enough to easily
                  fit in a bedroom drawer or cabinet, you can also toss it in your backpack then
                  easily stow in any car glove box or console.
                </li>
              </div>
              <div className={styles.featureImage}>
                <img
                  src="https://vnsh.com/cdn/shop/files/VNSH_Gun_Safe_3_3d925ef1-b8b6-40ee-acd9-8a2cc9785a0f_500x.jpg"
                  alt="QuickLock in use"
                  loading="lazy"
                />
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureContent}>
                <li className={styles.checkmarkItem1}>
                  <b>Not Just for Guns, Perfect for Other Valuables Too</b> - use it to lock up
                  cash, your personal IDs, watches and jewelry, or anything you don't want swiped
                  while you're not looking!
                </li>
              </div>
              <div className={styles.featureImage}>
                <img
                  src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/GunsafthreeMobile.webp"
                  alt="QuickLock with valuables"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <p className={styles.paragraphMargin}>Normally $50…</p>
          <p className={styles.paragraphMargin}>
            The VNSH QuickLock is yours{' '}
            <b>
              <em>
                <span className={styles.highlight}>totally FREE</span>
              </em>
            </b>{' '}
            with your holster order today!
          </p>
          <p className={styles.paragraphMargin}>
            Plus, when you grab this deal, you’ll be doing so{' '}
            <b>
              <em>100% Risk-Free,</em>
            </b>{' '}
            because…
          </p>
        </article>
        <div className={`${styles.btnDiv} ${styles.pulse}`}>
          <button className={styles.btn}>{buttonText}</button>
        </div>
        <article>
          <p>
            <span className={styles.belowbuttontext}>
              60 Days to Try It Yourself… Love It Or You Don’t Pay a Dime!
            </span>
          </p>
        </article>
        <div className={styles.subheader}>
          <span className={`${styles.subheadertext} ${styles.orange}`}>
            You're Getting An <span className={styles.red}>Iron-Clad,</span>
            <span className={styles.red}>Money-Back</span> Guarantee
          </span>
        </div>
        <div className={styles.pad1}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/guarantee-money-back-200.webp"
            alt="Money back guarantee"
            className={styles.heroImage2}
            width={800}
            height={200}
          />
        </div>
        <article className={styles.bodymsg}>
          <p className={styles.paragraphMargin}>
            Love everything about your order, or{' '}
            <b>
              <em>we'll refund you every penny.</em>
            </b>
          </p>
          <p className={styles.paragraphMargin}>It's that simple.</p>
          <p className={styles.paragraphMargin}>
            If you aren't totally thrilled, all you have to do is contact our{' '}
            <b>
              <em>US-Based Support Team</em>
            </b>{' '}
            within 60 days to get a full refund.
          </p>
          <p className={styles.paragraphMargin}>
            <b>
              Plus, we also give you a{' '}
              <em>
                <span className={`${styles.yellow1} ${styles.font2}`}>
                  2-year workmanship guarantee as well!
                </span>
              </em>
            </b>
          </p>
          <p className={styles.paragraphMargin}>
            We know you'll love your VNSH gear, which is why we're happy to extend you these
            iron-clad guarantees.
          </p>
          <p className={styles.paragraphMargin}>
            So if you want the{' '}
            <b>
              <em>comfiest holster on earth</em>
            </b>{' '}
            ... plus a second one{' '}
            <b>
              <em>totally FREE on the house</em>
            </b>
            ...
          </p>
          <p className={styles.paragraphMargin}>
            <b>
              <em>Plus... get a FREE VNSH QuickLock with it...</em>
            </b>
          </p>
          <p className={styles.paragraphMargin}>
            Then you owe it to yourself to grab this deal now!
          </p>
        </article>
        <div className={`${styles.btnDiv} ${styles.pulse}`}>
          <button className={styles.btn}>{buttonText}</button>
        </div>
        <article>
          <p>
            <span className={styles.belowbuttontext}>
              60 Days to Try It Yourself… Love It Or You Don’t Pay a Dime!
            </span>
          </p>
        </article>

        <div className={styles.pad1}>
          <div className={`${styles.desktopImage} ${styles.holster5} ${styles.imgCenter1}`}>
            <Image
              src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/TestimoniesDesktop.webp"
              alt="Customer testimonials"
              className={styles.heroImage}
              width={1400}
              height={1000}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className={styles.mobileImage}>
            <Image
              src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/TestimoniesMobile.webp"
              alt="Customer testimonials mobile"
              className={styles.heroImage}
              width={500}
              height={800}
            />
          </div>
        </div>
        <div className={styles.faqs}>
          <Faqs />
        </div>
        <div className={styles.footers}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Content;

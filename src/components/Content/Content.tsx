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
        <div className={styles.header}>
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
          <p className={styles.paragraphMargin}>
            Where kydex can be rigid and uncomfortable... and leather is sweaty and sticky, the VNSH
            holster is ultra-comfortable because it uses a custom blend of sweat-wicking fabrics
            that we call "yoga pant" fabric to help you stay cool and dry in the nastiest
            environments.
          </p>
          <p className={styles.paragraphMargin}>
            Not to mention the waist band is made from a crazy comfy velcro <b>that will not</b>{' '}
            snag on shirts, waistbands and the like. The VNSH holster is superior to leather and
            kydex.
          </p>
          <p className={styles.paragraphMargin}>
            And because of its unique no-clip, no hook design,{' '}
            <b>you can comfortably configure the holster any which way you want.</b>
          </p>
          <p className={styles.paragraphMargin}>Want to carry at 3 o'clock? Go for it.</p>
          <p className={styles.paragraphMargin}>Like pure appendix carry? That's easy.</p>
          <p className={styles.paragraphMargin}>
            Does carrying in the small of your back suit you best? Well, it works there too.
          </p>
          <p className={styles.paragraphMargin}>
            You can even carry it up high on your chest or side thanks to the adjustable strap
            (which extends up to 48 inches and 68 inches with our extension strap).
          </p>
          <p className={styles.paragraphMargin}>
            Also, we combined that awesome "yoga pant" fabric with rugged 1000D Cordura so it will
            withstand years and years of abuse without showing a sign of distress.
          </p>
          <p className={styles.paragraphMargin}>
            And best of all it features an <b>enhanced trigger guard</b>. Yes, it's true, the VNSH
            holster is the only bellyband on the planet with a dedicated trigger guard built in. A
            solid but flexible piece of .7mm plastic resits in the custom-built holster to prevent{' '}
            <b>anything</b> from accidentally causing a negligent discharge.
          </p>
          <p className={styles.paragraphMargin}>
            Not to mention the retention is rock-solid... <b>but still incredibly easy to draw.</b>{' '}
            Never fear that your gun will fall out, or that a criminal will be able to disarm you.
          </p>
        </article>
        <div className={styles.holster3}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterDesktop2.webp"
            alt="VNSH Holster in use"
            className={styles.heroImage}
            width={650}
            height={400}
          />
        </div>
        <div className={`${styles.btnDiv} ${styles.pulse}`}>
          <button className={styles.btn}>{buttonText}</button>
        </div>
        <div className={styles.subheader}>
          <span className={`${styles.subheadertext} ${styles.orange}`}>
            Crazy Holiday Deal! <br />
            <span className={styles.red}>Buy 1 Holster, Get 1 FREE!</span>
          </span>
        </div>
        <div className={styles.pad1}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterDesktop4.webp"
            alt="VNSH Holster deal"
            className={styles.heroImage}
            width={1120}
            height={600}
          />
        </div>
        <article className={styles.bodymsg}>
          <p className={styles.paragraphMargin}>
            As you've seen... people{' '}
            <em>
              <b>love</b>
            </em>{' '}
            the VNSH Holster.
          </p>
          <p className={styles.paragraphMargin}>
            In fact, most people who buy one almost always <b>end up wanting at least one more</b> –
            either for themselves or to give to a friend or family member.
          </p>
          <p className={styles.paragraphMargin}>
            So since the holidays are right around the corner...
          </p>
          <p className={styles.paragraphMargin}>
            We're giving you the <b>biggest deal we've EVER offered!</b>
          </p>
          <p className={styles.yellow1}>
            <b>Buy 1 Holster, Get 1 FREE!</b>
          </p>
          <p className={styles.paragraphMargin}>
            Plus, when you grab this deal today, you'll be doing so{' '}
            <b>100% Risk-Free, because...</b>
          </p>
        </article>
        <div className={styles.subheader}>
          <span className={`${styles.subheadertext} ${styles.orange}`}>
            You're Getting An <span className={styles.red}>Iron-Clad,</span>
            <br />
            <span className={styles.red}>Money-Back</span> Guarantee
          </span>
        </div>
        <div className={styles.pad1}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/guarantee-money-back-200.webp"
            alt="Money back guarantee"
            className={styles.heroImage}
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
          <p className={styles.paragraphMargin}>Plus... get a FREE VNSH Holster with it...</p>
          <p className={styles.paragraphMargin}>
            Then you owe it to yourself to grab this deal now!
          </p>
        </article>
        <div className={`${styles.btnDiv} ${styles.pulse}`}>
          <button className={styles.btn}>{buttonText}</button>
        </div>
        <div className={styles.subheader}>
          <span className={`${styles.subheadertext} ${styles.orange}`}>
            Fair Warning... <br />
            Big Deal <span className={styles.red}>Before Prices Go Up...</span>
          </span>
        </div>
        <article className={styles.bodymsg}>
          <p className={styles.paragraphMargin}>
            Since we launched in late 2022, we've done everything in our power to keep the VNSH
            Holster{' '}
            <b>
              <em>as affordable as possible.</em>
            </b>
          </p>
          <p className={styles.paragraphMargin}>
            But sadly, inflation is finally forcing us to raise prices on our holster.
          </p>
          <p className={styles.paragraphMargin}>
            Now, as much of a bummer as that is... the <b>GOOD NEWS</b> is that...
          </p>
          <p className={styles.paragraphMargin}>
            We're running this huge{' '}
            <b>
              <u>
                <span className={styles.yellow1}>Buy 1, Get 1 FREE</span>
              </u>
            </b>{' '}
            deal to make sure everyone has a chance to get the VNSH Holster for an awesome price
            before it becomes more expensive in the weeks ahead.
          </p>
          <p className={styles.paragraphMargin}>It won't last forever though...</p>
          <p className={styles.paragraphMargin}>
            Once this is over, you'll never see a deal this good on VNSH Holsters again.
          </p>
          <p className={styles.paragraphMargin}>So don't wait!</p>
          <p className={styles.paragraphMargin}>
            <b>
              Grab your VNSH Holster and{' '}
              <span className={styles.yellow1}>get a second one 100% FREE</span> while you still
              can!
            </b>
          </p>
        </article>
        <div className={`${styles.btnDiv} ${styles.pulse}`}>
          <button className={styles.btn}>{buttonText}</button>
        </div>
        <div className={styles.pad1}>
          <div className={styles.desktopImage}>
            <Image
              src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/TestimoniesDesktop.webp"
              alt="Customer testimonials"
              className={styles.heroImage}
              width={1120}
              height={800}
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
        <div className={`${styles.btnDiv} ${styles.pulse}`}>
          <button className={styles.btn}>{buttonText}</button>
        </div>
        <div className={styles.footers}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Content;

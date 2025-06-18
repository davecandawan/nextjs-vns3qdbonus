import React from "react";
import "./Content.css";
import VidalyticsVideo from "./VidalyticsVideo";
import YotpoReview from "./YotpoReview";
import Faqs from "./Faqs";
import Footer from "./Footer";

function Content({ buttonText = "Give Me This Buy 1, Get 1 FREE Deal Before It's Gone!" }) {
  return (
    <>
      <section className="content">
        <header className="header">
          <p className="headertext">
            <b><em>Insanely Comfy Holster</em></b> Makes Any Semi-Auto (Plus 2 Extra Mags)
            <b><em> Disappear In Plain Sight</em></b> Even If You Wear
            <u>Nothing But Gym Shorts, Sweatpants and T-Shirts!</u>
          </p>
        </header>
        <div className="video-container">
          <VidalyticsVideo />
        </div>
        <div className="btndiv pulse">
          <button className="btn">{buttonText}</button>
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterDesktop4.webp?v=1729102312"
            alt="heroimage"
            className="hero-image" />
        </div>
        <div className="header pad1">
          <span className="headertext yellow">
            175,232 Americans Have Trusted Us to Give Them The MOST Comfortable Holster They’ve Ever Worn
          </span>
        </div>
        <article className="bodymsg">
          <p>The VNSH Holster is rapidly becoming one of America's best-selling holsters… <b>and for good reason too!</b></p>
          <p>It’s GUARANTEED to be <b>the most comfortable holster</b> you’ll ever wear - or you get 100% of your money back!
            Try it for 60 days, and if you don’t like it for any reason, let us know and we’ll give you every penny back.
          </p>
        </article>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/guaranteed_bannerDesktop.webp?v=1729109678"
            alt="heroimage"
            className="hero-image" />
        </div>
        <article className="bodymsg">
          <p>The reason for it’s insane comfort? The materials. We combined the rugged <b>1000D Cordura</b> with a stretchy <b>‘yoga pant’</b> fabric that is not only built to last for years, but also feels like silk boxers on your skin.</p>
          <p>Even better, these sweat-wicking materials do <u>NOT</u> retain sweat or odor, so you can <b>carry comfortably all day</b> without getting sticky or slimy.</p>
          <p>You can wear this holster with <b>ANY</b> clothing. That’s because our specially designed, built in waistband simply goes around your torso like a belt, and doesn’t need hooks, clips, or a tactical belt to wear.</p>
          <p>This means you can wear this holster with a business suit, sweat suit, or swim suit… <em>or even just your birthday suit.</em></p>
          <p>But where it really excels <b><em>(and where most other holsters fail miserably)</em></b> is that it helps you carry anywhere while having the ability to carry 2 additional mags.</p>
          <p>Perhaps the best thing of all is this holster will fit 99% of all brands, types, and styles of semi autos.</p>
          <p>And our unique design ensures your concealed carry device <b>“Vanishes”</b> against your body, making it virtually invisible to others.</p>
          <p>It’s why we named it the <b><u>VNSH Holster!</u></b></p>
          <p>How many other holsters can do all that? <b>The answer is ZERO.</b></p>
        </article>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterDesktop3.webp?v=1729102182"
            alt="heroimage"
            className="hero-image" />
        </div>
        <article className="bodymsg">
          <p>Now it’s obvious we’d be saying this. But take a look at what some of our thousands upon thousands of customers say about our holster.</p>
        </article>
        <div className="yotpo">
          <YotpoReview />
        </div>
        <div className="btndiv pulse">
          <button className="btn">{buttonText}</button>
        </div>
        <div className="subheader">
          <span className="subheadertext orange">
            Seriously, This Holster Works With 99.9% of Single Semi-Automatic Pistols On the Planet
          </span>
        </div>
        <div className="holster3">
          <img
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterDesktop1.webp?v=1729102182"
            alt="heroimage"
            className="hero-image" />
        </div>
        <article className="bodymsg">
          <p>Our holster design means that <b>regardless of what pistol you own</b> it will help you safely and comfortably carry it.</p>
          <p>No more needing to buy multiple holsters for all your pistols.</p>
          <p>Plus, since it has 2-built in mag pouches, now <b>you don't need to spend extra money on mag pouches</b> to guarantee you’re never out of the fight.</p>
          <p>Take a look at the list of brands our holster works with and then grab yours before the price goes up!</p>
        </article>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/LogoDesktop.webp?v=1729112354"
            alt="heroimage"
            className="hero-image" />
        </div>
        <div className="btndiv pulse">
          <button className="btn">{buttonText}</button>
        </div>
        <div className="subheader">
          <span className="subheadertext orange">
            Don’t Let An Uncomfortable Holster Be The Reason You’re Unarmed When Bad Guys Attack
          </span>
        </div>
        <article className="bodymsg">
          <p>The vast majority of gun owners don’t carry their gun daily for 1 simple reason.</p>
          <p>They don’t like how their holster feels.</p>
          <p>The good news is that the VNSH Holster is made for all day wear… and owning <b>it is the #1 thing you can do to ensure you're always ready to defend yourself</b> and your family.</p>
          <p>The VNSH holster is superior to leather and kydex.</p>
          <p>Where kydex can be rigid and uncomfortable… and leather is sweaty and sticky, the VNSH holster is ultra-comfortable because it uses a custom blend of sweat-wicking fabrics that we call "yoga pant" fabric to help you stay cool and dry in the nastiest environments.</p>
          <p>Not to mention the waist band is made from a crazy comfy velcro <b>that will not</b> snag on shirts, waistbands and the like.The VNSH holster is superior to leather and kydex.</p>
          <p>And because of its unique no-clip, no hook design, <b>you can comfortably configure the holster any which way you want.</b></p>
          <p>Want to carry at 3 o’clock? Go for it.</p>
          <p>Like pure appendix carry? That’s easy.</p>
          <p>Does carrying in the small of your back suit you best? Well, it works there too.</p>
          <p>You can even carry it up high on your chest or side thanks to the adjustable strap (which extends up to 48 inches and 68 inches with our extension strap).</p>
          <p>Also, we combined that awesome "yoga pant" fabric with rugged 1000D Cordura so it will withstand years and years of abuse without showing a sign of distress.</p>
          <p>And best of all it features an <b>enhanced trigger guard</b>. Yes, it’s true, the VNSH holster is the only bellyband on the planet with a dedicated trigger guard built in. A solid but flexible piece of .7mm plastic resits in the custom-built holster to prevent <b>anything</b> from accidentally causing a negligent discharge.</p>
          <p>Not to mention the retention is rock-solid… <b>but still incredibly easy to draw.</b> Never fear that your gun will fall out, or that a criminal will be able to disarm you.</p>
        </article>
        <div className="holster3">
          <img
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterDesktop2.webp?v=1729102182"
            alt="heroimage"
            className="hero-image" />
        </div>
        <div className="btndiv pulse">
          <button className="btn">{buttonText}</button>
        </div>
        <div className="subheader">
          <span className="subheadertext orange">
            Crazy Holiday Deal! <br></br><span className="red">Buy 1 Holster, Get 1 FREE!</span>
          </span>
        </div>
        <div className="pad1">
          <img
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/BlackHolsterDesktop4.webp?v=1729102312"
            alt="heroimage"
            className="hero-image" />
        </div>
        <article className="bodymsg">
          <p>As you’ve seen… people <em><b>love</b></em> the VNSH Holster.</p>
          <p>In fact, most people who buy one almost always <b>end up wanting at least one more</b> – either for themselves or to give to a friend or family member.</p>
          <p>So since the holidays are right around the corner…</p>
          <p>We’re giving you the <b>biggest deal we’ve EVER offered!</b></p>
          <p className="yellow1"><b>Buy 1 Holster, Get 1 FREE!</b></p>
          <p>Plus, when you grab this deal today, you’ll be doing so <b>100% Risk-Free, because…</b></p>
        </article>
        <div className="subheader">
          <span className="subheadertext orange">
            You’re Getting An <span className="red">Iron-Clad,</span><br></br><span className="red">Money-Back</span> Guarantee
          </span>
        </div>
        <div className="pad1">
          <img
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/guarantee-money-back-200.webp?v=1729100261"
            alt="heroimage"
            className="hero-image" />
        </div>
        <article className="bodymsg">
          <p>Love everything about your order, or <b><em>we’ll refund you every penny.</em></b></p>
          <p>It’s that simple.</p>
          <p>If you aren’t totally thrilled, all you have to do is contact our <b><em>US-Based Support Team</em></b> within 60 days to get a full refund.</p>
          <p><b>Plus, we also give you a <em><span className="yellow1 font2">2-year workmanship guarantee as well!</span></em></b></p>
          <p>We know you’ll love your VNSH gear, which is why we’re happy to extend you these iron-clad guarantees.</p>
          <p>So if you want the <b><em>comfiest holster on earth</em></b> … plus a second one <b><em>totally FREE on the house</em></b>…</p>
          <p>Plus… get a FREE VNSH Holster with it…</p>
          <p>Then you owe it to yourself to grab this deal now!</p>
        </article>
        <div className="btndiv pulse">
          <button className="btn">{buttonText}</button>
        </div>
        <div className="subheader">
          <span className="subheadertext orange">
            Fair Warning… <br></br>Big Deal <span className="red">Before Prices Go Up…</span>
          </span>
        </div>
        <article className="bodymsg">
          <p>Since we launched in late 2022, we’ve done everything in our power to keep the VNSH Holster <b><em>as affordable as possible.</em></b></p>
          <p>But sadly, inflation is finally forcing us to raise prices on our holster.</p>
          <p>Now, as much of a bummer as that is… the <b>GOOD NEWS</b> is that…</p>
          <p>We’re running this huge <b><u><span className="yellow1">Buy 1, Get 1 FREE</span></u></b> deal to make sure everyone has a chance to get the VNSH Holster for an awesome price before it becomes more expensive in the weeks ahead.</p>
          <p>It won’t last forever though…</p>
          <p>Once this is over, you’ll never see a deal this good on VNSH Holsters again.</p>
          <p>It won’t last forever though…</p>
          <p>So don’t wait!</p>
          <p><b>Grab your VNSH Holster and <span className="yellow1">get a second one 100% FREE</span> while you still can!</b></p>
        </article>
        <div className="btndiv pulse">
          <button className="btn">{buttonText}</button>
        </div>
        <div className="pad1">
          <img
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/TestimoniesDesktop.webp?v=1729117025"
            alt="heroimage"
            className="hero-image desktop-image" />
          <img
            src="https://cdn.shopify.com/s/files/1/0670/4948/8684/files/TestimoniesMobile.webp?v=1729117026"
            alt="heroimage-mobile"
            className="hero-image mobile-image" />
        </div>
        <div className="faqs">
          <Faqs />
        </div>
        <div className="btndiv pulse">
          <button className="btn">{buttonText}</button>
        </div>
        <div className="footers">
          <Footer />
        </div>
      </section>
    </>
  );
}

export default Content;

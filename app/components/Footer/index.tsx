"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./Footer.module.css";
import Image from "next/image";

const museLinks = [
  "About Us",
  "Stories",
  "Artisans",
  "Boutiques",
  "Contact Us",
  "EU Compliances Docs",
];

const quickLinks = [
  "Orders & Shipping",
  "Join/Login as a Seller",
  "Payment & Pricing",
  "Return & Refunds",
  "FAQs",
  "Privacy Policy",
  "Terms & Conditions",
];

const paymentMethodsIcons = [
  "assets/gpay-icon.png",
  "assets/mastercard-icon.png",
  "assets/paypal-icon.png",
  "assets/amex-icon.png",
  "assets/apple-pay-icon.png",
  "assets/opay-icon.png",
];

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const isSectionExpanded = (section: string) =>
    expandedSections.includes(section);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.desktopView}>
          <div className={styles.topSection}>
            <div className={styles.newsletterSection}>
              <h4 className={styles.heading}>Be the first to know</h4>
              <p className={styles.text}>
                Sign up for updates from mettā muse.
              </p>
              <div className={styles.newsletter}>
                <input
                  type="text"
                  placeholder="Enter your e-mail..."
                  className={styles.newsletterInput}
                />
                <button className={styles.subscribeBtn}>Subscribe</button>
              </div>
            </div>

            <div className={styles.contactSection}>
              <h4 className={styles.heading}>CONTACT US</h4>
              <p className={styles.text}>+44 221 133 5360</p>
              <p className={`${styles.text} ${styles.email}`}>
                customercare@mettamuse.com
              </p>

              <h4 className={styles.heading}>Currency</h4>
              <div className={styles.currencySelector}>
                <Image
                  src="/assets/flag.png"
                  alt="Currency flag"
                  height={24}
                  width={24}
                  className={styles.flagImage}
                />
                <p>+ USD</p>
              </div>
              <p className={styles.currencyNote}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h4 className={styles.heading}>mettā muse</h4>
              <div className={styles.links}>
                {museLinks.map((link) => (
                  <p key={link} className={styles.link}>
                    {link}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.heading}>Quick Links</h4>
              <div className={styles.links}>
                {quickLinks.map((link) => (
                  <p key={link} className={styles.link}>
                    {link}
                  </p>
                ))}
              </div>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.heading}>Follow Us</h4>
              <div className={styles.socialIcons}>
                <Image
                  src="/assets/insta.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </div>

              <div className={styles.paymentSection}>
                <h4 className={styles.heading}>mettā muse Accepts</h4>
                <div className={styles.paymentIcons}>
                  {paymentMethodsIcons.map((icon) => (
                    <Image
                      key={icon}
                      src={`/${icon}`}
                      alt="Payment method"
                      width={56}
                      height={35}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className={styles.mobileView}>
          <section className={styles.mobileSection}>
            <h2 className={styles.mobileHeading}>BE THE FIRST TO KNOW</h2>
            <p className={styles.mobileText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. this is simply dummy text.
            </p>
            <div className={styles.newsletter}>
              <input
                type="text"
                placeholder="Enter your e-mail..."
                className={styles.newsletterInput}
              />
              <button className={styles.subscribeBtn}>SUBSCRIBE</button>
            </div>
          </section>

          <div className={styles.divider} />

          <section className={styles.mobileSection}>
            <h2 className={styles.mobileHeading}>CALL US</h2>
            <p className={styles.contactText}>
              +44 221 133 5360 <span className={styles.plus}>+</span>{" "}
              customercare@mettamuse.com
            </p>
          </section>

          <div className={styles.divider} />

          <section className={styles.mobileSection}>
            <h2 className={styles.mobileHeading}>CURRENCY</h2>
            <div className={styles.currencySelector}>
              <img
                src="/assets/flag.png"
                alt="Currency flag"
                height={24}
                width={24}
                className={styles.flagImage}
              />
              <span className={styles.plus}>+</span>
              <span>USD</span>
            </div>
          </section>

          <div className={styles.divider} />

          <button
            className={styles.accordionButton}
            onClick={() => toggleSection("metta")}
          >
            <span>mettā muse</span>
            <ChevronDown
              className={`${styles.chevron} ${
                isSectionExpanded("metta") ? styles.rotate : ""
              }`}
            />
          </button>
          {isSectionExpanded("metta") && (
            <div className={styles.accordionContent}>
              {museLinks.map((link) => (
                <a key={link} href="#" className={styles.mobileLink}>
                  {link}
                </a>
              ))}
            </div>
          )}

          <div className={styles.divider} />

          <button
            className={styles.accordionButton}
            onClick={() => toggleSection("quick")}
          >
            <span>QUICK LINKS</span>
            <ChevronDown
              className={`${styles.chevron} ${
                isSectionExpanded("quick") ? styles.rotate : ""
              }`}
            />
          </button>
          {isSectionExpanded("quick") && (
            <div className={styles.accordionContent}>
              {quickLinks.map((link) => (
                <a key={link} href="#" className={styles.mobileLink}>
                  {link}
                </a>
              ))}
            </div>
          )}

          <div className={styles.divider} />

          <button
            className={styles.accordionButton}
            onClick={() => toggleSection("follow")}
          >
            <span>FOLLOW US</span>
            <ChevronDown
              className={`${styles.chevron} ${
                isSectionExpanded("follow") ? styles.rotate : ""
              }`}
            />
          </button>

          <div className={styles.divider} />

          <section className={styles.mobileSection}>
            <h2 className={styles.mobileHeading}>mettā muse ACCEPTS</h2>
            <div className={styles.paymentIcons}>
              {paymentMethodsIcons.map((icon) => (
                <Image
                  key={icon}
                  src={`/${icon}`}
                  alt="Payment method"
                  width={56}
                  height={35}
                />
              ))}
            </div>
          </section>

          <div className={styles.mobileCopyright}>
            Copyright © 2023 mettamuse. All rights reserved.
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

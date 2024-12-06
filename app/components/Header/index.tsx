import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  Menu,
} from "lucide-react";
import styles from "./Header.module.css";

const navLinks = ["Shop", "Skills", "Stories", "About", "Contact Us"];

export default function Header() {
  return (
    <>
      <div className={styles.announcement}>
        <div className={styles.desktopAnnouncements}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className={styles.announcementItem} key={index}>
              <img src="assets/announcement.svg" alt="announcement-icon" />
              <span>Lorem ipsum dolor</span>
            </div>
          ))}
        </div>
        <div className={styles.mobileAnnouncement}>
          <img src="assets/announcement.svg" alt="announcement-icon" />
          <span>Lorem ipsum dolor</span>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.leftSection}>
            <Menu className={styles.menu} />
            <img
              src="assets/logo.png"
              alt="appscrip-logo"
              className={styles.logo}
            />
          </div>
          <h1 className={styles.title}>LOGO</h1>
          <div className={styles.icons}>
            <Search className={styles.icon} />
            <Heart className={styles.icon} />
            <ShoppingBag className={styles.icon} />
            <User className={`${styles.icon} ${styles.userIcon}`} />
            <div className={styles.language}>
              ENG <ChevronDown width={16} height={16} />
            </div>
          </div>
        </div>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a href="#" key={link} className={styles.navLink}>
              {link}
            </a>
          ))}
        </nav>
      </header>

      <div className={styles.breadcrumb}>
        <span className={styles.breadcrumbInactive}>HOME</span>
        <span className={styles.breadcrumbSeparator}></span>
        <span className={styles.breadcrumbActive}>SHOP</span>
      </div>
    </>
  );
}

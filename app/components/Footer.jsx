import styles from '../styles/Footer.module.css'
// Imported icons
import {
  TiSocialFacebook,
  TiSocialPinterest,
  TiSocialTwitter } from "react-icons/ti";
  import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>Information</h4>
            <ul className={styles.footerItems}>
              <li className={styles.footerLinks}><a href="#">home</a></li>
              <li className={styles.footerLinks}><a href="#">blog</a></li>
              <li className={styles.footerLinks}><a href="#">about us</a></li>
              <li className={styles.footerLinks}><a href="#">menu</a></li>
              <li className={styles.footerLinks}><a href="#">contact us</a></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Top items</h4>
            <ul className={styles.footerItems}>
              <li className={styles.footerLinks}><a href="#">pepperoni</a></li>
              <li className={styles.footerLinks}><a href="#">swiss mushroom</a></li>
              <li className={styles.footerLinks}><a href="#">barbeque chicken</a></li>
              <li className={styles.footerLinks}><a href="#">vegeterian</a></li>
              <li className={styles.footerLinks}><a href="#">ham & cheese</a></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Others</h4>
            <ul className={styles.footerItems}>
              <li className={styles.footerLinks}><a href="#">checkout</a></li>
              <li className={styles.footerLinks}><a href="#">cart</a></li>
              <li className={styles.footerLinks}><a href="#">product</a></li>
              <li className={styles.footerLinks}><a href="#">locations</a></li>
              <li className={styles.footerLinks}><a href="#">legal</a></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Social Media</h4>
            <div className={styles.socialLinks}>
              <a href="#">
                <TiSocialFacebook size={20}/>
                </a>
              <a href="#">
                <TiSocialPinterest size={20}/>
                </a>
              <a href="#">
                <TiSocialTwitter  size={20}/>
                </a>
              <a href="#">
                <FaInstagram size={20}/>
                </a>
            </div>
            <div className={styles.footerText}>
              <p>Signup and get exclusive and coupon codes</p>
            </div>
            <div className={styles.footerButton}>
              <button>sign up</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
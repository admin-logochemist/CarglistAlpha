import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../../styles/store.module.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    
    return (
        <div className="container-fluid">
            <div className="row" id={styles.footrtstore}>
                <div className={`${"col-lg-12  "} ${styles.footer12}`}>
                    <div className={styles.uldiv}>
                        <ul>
                            <li>
                                <img src="weblisted-01.png" className='footer-logo' alt="" /> <br />

                                <a href="/">WEBLISTED</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.uldiv} footer-col-2`}>
                        <ul>
                            <li><a href="/termsOfUse">Terms & Conditions</a></li>
                            <li><a href="/privacy"> Privacy Policy </a></li>
                        </ul>
                    </div>
                    <div className={`${styles.uldiv} footer-col-3`}>
                        <ul>
                            <li><a href="/CustomerCare">Customer Care</a></li>
                            <li><a href="/Dashboard/ProductAddPage">Weblisted Sell</a></li>
                            <li><a href="/termsOfUse">How to shop on weblisted</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.uldiv} footer-col-4`}>
                        <ul>
                            <li><a href="/CustomerCare">Help Center</a></li>
                            <li><a href="/OnlineShopping">Online Shopping App</a></li>
                            <li><a href="/WeblistedExclusive">weblisted Exclusive</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.uldiv} footer-col-5`}>
                        <ul>
                            <li><a href="/About">About Us</a></li>
                            <li><a href="/Contact">Contact Us</a></li>
                            <li><a href="/Affiliated">Affiliates</a></li>
                            <li><a href="/FAQ">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className={`${"col-lg-12 col-md-12 col-sm-12"} footer-bottom ${styles.footer13}`}>
                    <div className={styles.icon} >
                        <FacebookOutlinedIcon className={styles.footerIcon} />
                        <InstagramIcon className={styles.footerIcon} />
                        <TwitterIcon className={styles.footerIcon} />
                        <LinkedInIcon className={styles.footerIcon} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;

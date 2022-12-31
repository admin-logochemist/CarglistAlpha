import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/customercare.module.css'
import Header from '../pages/Header'
import HeaderStore from '../components/component/HeaderStore';
import CustomerCareCard from '../components/component/CustomerCareCard';
import Footer from '../components/component/Footer';
import ContactCard from '../components/component/ContactCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const CustomerCare = () => {
    return (
        <>
            <Header />
            <div id="setHeaderBottomGap"></div>

            <HeaderStore />
            <div className="container-fluid welistedBannerAffilated">
                <div className="row">
                    <img src="weblisted_banner2.jpg" alt="" />
                </div>
            </div>
            <div className={`${"container"} welistedBannerAffilated`}>
                <div className={`${"row"} ${styles.MainContainer}`}>
                    <a className={styles.backIcon} href="/Store"> <ArrowBackIcon className={`${'p-3'} ${styles.backIcon2}`} /> </a>

                    <div className={`${"col-lg-12"} ${styles.sect}`}>
                        <span>Self Service Tool</span>
                    </div>
                </div>
                <div className="row d-flex mt-5">
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="order-tracking.png" text="Track Order" />
                    </div>
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="padlock.png" text="Rest Password" />
                    </div>
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="payment-method.png" text="My Payment Options" />
                    </div>
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="user.png" text="Edit Account Details" />
                    </div>

                </div>
                <div className="row d-flex mt-5">
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="wallet-filled-money-tool.png" text=" Wallet" />
                    </div>
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="return-box.png" text="Return" />
                    </div>
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="book.png" text="Address Book" />
                    </div>
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="cancel.png" text="Cancel Order" />
                    </div>

                </div>
            </div>
            <div className="container mt-5 pt-5">
                <div className="row welistedBannerAffilated">
                    <span className={styles.Questions}>Questions</span>
                </div>
                <div className={`${"row"} ${styles.roow2} `}>
                    <div className="col-lg-4">
                        <ul className={styles.ulquestion}>
                            <li> <a href="">What are the expected delivery timeline?</a> </li>
                            <li> <a href="">What are the conditions for Weblisted Like New?</a> </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <ul className={styles.ulquestion}>
                            <li> <a href="">What are the expected delivery timeline?</a> </li>
                            <li><a href="">What are the  conditions for Weblisted Like New?</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <ul className={styles.ulquestion}>
                            <li> <a href="">What are the expected delivery timeline?</a> </li>
                            <li> <a href="">What are the conditions for Weblisted Like New?</a> </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className={`${"container"} welistedBannerAffilated`}>
                <div className={`${"row"} ${styles.MainContainer}`}>
                    <div className={`${"col-lg-12"} ${styles.sect}`}>
                        <span>Category</span>
                    </div>
                </div>
                <div className="row d-flex mt-5">
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="woman.png" text="Account Mangement" />
                    </div>
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="bag.png" text="Weblisted Catergory" />
                    </div>
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="checkout.png" text="Order" />
                    </div>
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="fast-delivery.png" text="Shipping & Delivery" />
                    </div>

                </div>
                <div className="row d-flex mt-5 pb-5">
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="wallet-filled-money-tool.png" text=" Payments" />
                    </div>
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="return-box.png" text="Returns" />
                    </div>
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="refund.png" text="Refunds" />
                    </div>
                    <div className="col-lg-3 col-sm-6 pt-3">
                        <CustomerCareCard img="megaphone.png" text="Promotions" />
                    </div>

                </div>
            </div>
            <div className={`${"container mb-5"} welistedBannerAffilated`}>
                <div className={`${"row"} ${styles.MainContainer}`}>
                    <div className={`${"col-lg-12"} ${styles.sect} text-center`}>
                        <span>Still looking for answers? Ask Daz anytime, day or night, Click on 'Chat Now' for English or 'Chat Karain' for Urdu to connect with us 24/7</span>
                    </div>
                </div>
                <div className="row d-flex mt-4 mb-5">
                    <div className="col-lg-6 pt-3">
                        <ContactCard img="chat-bubbles-with-ellipsis.png" text="Chat Now" p="24 hours, 7 days a week" />
                    </div>
                    <div className="col-lg-6 pt-3">
                        <ContactCard img="chat-bubbles-with-ellipsis.png" text="Lets Chat" p="24 hours, 7 days a week" />
                    </div>
                    <div className="col-lg-6 pt-3">
                        <ContactCard img="email.png" text="Others" p="Others" />
                    </div>
                    <div className="col-lg-6 pt-3">
                        <ContactCard img="help-desk.png" text="Seller Help Center" p="get your answer now" />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default CustomerCare;
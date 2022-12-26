import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../pages/Header"
import HeaderStore from '../components/component/HeaderStore';
import styles from '../styles/Affiliate.module.css'
import Footer from '../components/component/Footer'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Affiliated = () => {
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

            <div className="container mt-3 welistedBannerAffilated mx-auto">
                <div className="row">
                    <a className={styles.backIcon} href="/Store"> <ArrowBackIcon className={`${'p-3'} ${styles.backIcon2}`} /> </a>
                    <div className={`${"col-lg-12"} `}>
                        <div className={styles.Affiliatepara}>
                            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, hic illo. Incidunt consequuntur ducimus aliquam? Ea in soluta sed. Sapiente, quidem saepe facere repudiandae officia odio itaque? Ipsum, explicabo ratione?</p>
                            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, hic illo.</p>
                            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, hic illo. Incidunt consequuntur ducimus aliquam? Ea in soluta sed. Sapiente, quidem saepe facere ?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${"container mt-3"} welistedBannerAffilated `}>
                <div className={`${"row"} ${styles.howswork}`}>
                    <div className={`${"col-lg-8"} ${styles.work}`}>
                        <h4>HOW DOES IT WORK</h4>
                        <div className={styles.boxes}>
                            <div className={styles.box}>
                                <img src="notes.png" alt="" />
                                <h5>Step 1</h5>
                                <p>Sign Up affilated program</p>
                            </div>
                            <div className={styles.box}>
                                <img src="donation.png" alt="" />
                                <h5>Step 2</h5>
                                <p>Recommenditions Products</p>
                            </div>
                            <div className={styles.box}>
                                <img src="earning.png" alt="" />
                                <h5>Step 3</h5>
                                <p>Earn Money</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className={`${"container mt-3"}  welistedBannerAffilated `}></div>
            <div className="container welistedBannerAffilated">
                <div className="row ">
                    <div className="col-lg-8 mx-auto p-5 text-center">
                        <h4>Affiliate Agreement </h4>
                        <span className={`${styles.notes}`}>
                            <p>Affiliate Marketing in USA Terms and Conditions (the “Agr eement”) shall constitute an Agreement between you (“You” or “Affiliate”) and the Company, for the registration and appointment of the Affiliate to provide the Company with Promotion of the Channels. The Affiliate and the Company shall collectively be referred to as the “Parties” and individually as the “Party”.</p>
                        </span>
                        <span className={`${styles.notes}`}>
                            <p>The Affiliate must read, agree to, and accept all of the terms and provisions contained in this
                                Agreement, by clicking “I Accept” button, and the Parties hereby agree, acknowledge and accept that clicking such button shall instantly form a valid, effective and legally binding agreement for good consideration between the Parties. </p>
                        </span>
                        <span className={`${styles.notes}`}>
                            <p>
                                This Agreement constitutes the complete and exclusive statement of the agreement of both the Parties with respect to the subject matter of this Agreement, and supersede all prior oral and written commitments, understandings, and communications between the Parties regarding such matter. The Company may, at its sole discretion, amend the Agreement, from time to time, by providing the revised version(s) of the same to the Affiliate in writing, at the sole discretion of the Company, without being required to give any prior notice to the Affiliate. Any continued performance of its obligations under this Agreement, by the Affiliate after the revised Agreement has come into effect shall be deemed as the Affiliate’s consent to such revised Agreement.
                            </p>
                        </span>
                        <span className={`${styles.notes}`}>
                            <p>
                                WHEREAS, the Company is engaged in the provision of advertising services and Affiliate is willing and able to provide promotional services and content of the Channels to Customers, for the Company, for the purpose of increasing the user traffic on those Channels. The Company now engages the Affiliate, and the Affiliate accepts such engagement, to perform the Promotion of the Channels in the Territory on the terms and conditions specified herein.
                            </p>
                        </span>
                        <h5>1. DEFINITIONS </h5>
                        <span className={`${styles.notes}`}>
                            <p>1.1 Advertising Material shall mean any advertising materials provided by the Company to the Affiliate, to be published by the Affiliate on the Affiliate’s Accounts solely for the purposes of conducting the Promotion of the Channels, in accordance with the terms and conditions herein.
                            </p>
                        </span>
                        <span className={`${styles.notes}`}>
                            <p>
                                1.2 “Affiliate” or “You” shall have the meaning given to the term in the Preamble above (i.e. the first Party named above, who shall be engaged for the purpose of, and authorized by the Company to promote the Channels on the terms and conditions of this Agreement).
                            </p>
                        </span>
                        <h5>2. APPOINTMENT </h5>
                        <span className={`${styles.notes}`}>
                            <p>2.1 The Company appoints the Affiliate as its Channel promotion affiliate for the Territory, wherein the Affiliate shall conduct Promotions for the Channels for the Affiliate’s followers, subscribers, and/or any person visiting the Affiliate’s website(s) and/or social media accounts (“Customers”), as well as publish the Advertising Materials of the Affiliate’s Accounts to induce them to visit and use the Channels (“Promotion”).</p>
                        </span>
                        <span className={`${styles.notes}`}>
                            <p>2.2 Affiliate shall only conduct the Promotion of the Channels to Customers within the Territory, except as otherwise approved in writing by Company.</p>
                        </span>
                        <span className={`${styles.notes}`}>
                            <p>2.3 The Channels within the Territory will be covered non-exclusively by Affiliate, and the Company is free to engage other affiliates to provide similar services to the Promotion with the Territory.
                            </p>
                        </span>
                        <h5>3. COMPENSATION </h5>
                        <span className={`${styles.notes}`}>
                            <p>3.1 In consideration for the Affiliate’s performance of its obligations and as good and valuable consideration, the Company shall to pay to the Affiliate, a commission on the Net Sales in the Territory, at such rates as shall be specified in writing and notified by the Company to the Affiliate, from time to time (“Commission”). The Commission is inclusive of VAT, where applicable, and shall be subject to levy and deduction of all applicable taxes (including without limitation withholding taxes and VAT). The rate(s) applicable to the Commission may be revised at any time at the sole discretion of the Company, subject to prior written notice being provided to the Affiliate to such change.</p>
                        </span>

                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Affiliated

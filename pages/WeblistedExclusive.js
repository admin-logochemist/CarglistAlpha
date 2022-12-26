/* eslint-disable @next/next/no-img-element */
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/craigslistHiring.module.css'
import Header from './Header';
import Footer from '../components/component/Footer'
import HeaderEbey from '../components/component/HeaderEbey';


export default function WeblistedExclusive() {
    return (
        <>
            <Header />
            <div id="setHeaderBottomGap"></div>

            <div className="container">
                <HeaderEbey />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className={`${"col-lg-12"} ${styles.topcategory}`} >
                        <h3>Top Category</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <img src="topcategory.png" alt="" className={styles.topimg} />
                        <img src="topcategory1.png" alt="" className={styles.topimg} />
                        <img src="topcategory2.png" alt="" className={styles.topimg} />
                        <img src="topcategory3.png" alt="" className={styles.topimg} />
                        <img src="topcategory4.png" alt="" className={styles.topimg} />
                        <img src="topcategory5.png" alt="" className={styles.topimg} />
                        <img src="topcategory6.png" alt="" className={styles.topimg} />
                        <img src="topcategory7.png" alt="" className={styles.topimg} />
                        <img src="topcategory8.png" alt="" className={styles.topimg} />
                    </div>
                    <div className="col-lg-12">
                        <div className={styles.topcate}>
                            <span>Electronic:</span>
                            <p>Mobile Phones |</p>
                            <p>Air Conditioners |</p>
                            <p>Portable ACs |</p>
                            <p> Refrigerators  |</p>
                            <p> Laptops |</p>
                            <p>Tablets |</p>
                            <p> Smart Watches |</p>
                            <p> Led TVs |</p>
                            <p> Wireless Earbuds </p>
                        </div>
                        <div className={styles.topcate}>
                            <span>Trending:</span>
                            <p>Weblisted App |</p>
                            <p>Weblisted Mall |</p>
                            <p> Online Grocery Shopping |</p>
                            <p> Online Bill Payment  |</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className={`${"col-lg-12"} ${styles.topcategory}`} >
                        <h3>Top Product</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <img src="toppro.jpg" alt="" className={styles.topimg} />
                        <img src="toppro1.jpg" alt="" className={styles.topimg} />
                        <img src="toppro2.jpg" alt="" className={styles.topimg} />
                        <img src="toppro3.jpg" alt="" className={styles.topimg} />
                        <img src="toppro4.jpg" alt="" className={styles.topimg} />
                        <img src="toppro5.jpg" alt="" className={styles.topimg} />
                        <img src="toppro6.jpg" alt="" className={styles.topimg} />
                        <img src="toppro7.jpg" alt="" className={styles.topimg} />
                        <img src="toppro8.jpg" alt="" className={styles.topimg} />
                    </div>
                    <div className={`${"col-lg-12"} ${styles.topcont}`} >
                        <h5>Join The Weblisted Revolution, and Experience the Difference</h5>
                        <p>Weblisted is US flagship e-commerce platform powered by its cutting-edge technology infrastructure. In a nation where online shopping was a strange phenomenon not too long ago, Weblisted.lk, has succeeded in altering the entire perception of internet marketing over the last three years. The tremendous success is owed to Weblisted’s authentic approach to online marketing. It is not just a stand-alone retail space. It is a hub for all consumer needs, from purchasing products from the best brands to managing utility bills online.</p>
                        <p>With over 5 million consumers across the region, Weblisted continues to deliver phenomenal customer service making sure that shoppers are completely satisfied with their user experience. From the moment the customer places the order up until the packages are safely delivered to the doorstep, Weblisted ensures that the products are quality tested, safely packaged, and efficiently delivered to the customer. This customer-centric approach has allowed Weblisted to be the #1 e-commerce platform in US.</p>
                        <p>With over 3+ million products across hundreds of categories, Weblisted is a one-stop shop where sellers are given the advantage to reach out to millions of consumers islandwide. Local sellers from top brands to household entrepreneurs can set up their online shop and start building it while getting visibility from consumers across the island. Weblisted assists and encourages these sellers by providing them with space, logistics, technology, and other systems to thrive in an online marketplace.</p>
                        <p>Also, with the change of consumer behavior that has shifted to online platforms, Weblisted helps sellers across the nation maintain business and shares new hope to sellers who struggle to get their products moving due to the pandemic situation and constant lockdowns. You can get the lowest price and amazing discounts on products across the website and enjoy massive price drops and offers during campaigns. So join the Weblisted journey and experience the maximum benefits the e-commerce industry has to offer.</p>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

import React from 'react'
import styles from '../styles/About.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../pages/Header'
import Footer from '../components/component/Footer'
import HeaderEbey from '../components/component/HeaderEbey'


const OnlineShopping = () => {
    return (
        <>
            <Header />
            <div id="setHeaderBottomGap"></div>

            <div className="container">
                <HeaderEbey />
                <div className="row">
                    <div className={`${"col-lg-12"} ${styles.online}`}>
                        <h4>The Best Online Shopping App</h4>
                        <p>With digital advancements rapidly evolving, online shopping in Usa has been on the rise.
                            More and more people making use of the ease of accessibility that comes with shopping online,
                            Weblisted offers the ultimate online shopping experience that meets all your needs with the Weblisted online shopping app! Weblisted is the
                            biggest e-commerce platform  and the number 1 online shopping app in Usa that ensures to provide all its users with end-to-end e-commerce solutions.
                            From 55million assortments available site-wide and more than 3000 brands on board, Weblisted brings you all your favorite products just a click away.
                            Experiences shopping made easy as Weblisted online shopping app brings you the liberty to shop online hassle-free and find what you’re looking for whether you’re shopping for groceries,
                            home appliances, new gadgets or simply want to pay your utility bills and top up your mobile balance on Weblisted e-store,
                            the Weblisted App download will open the gates to all your needs in one place. Don’t wait any further, get the Weblisted App download going and make the most of your online shopping!</p>
                    </div>
                    <div className={`${"col-lg-12"} ${styles.online}`}>
                        <h4>Download the Weblisted App and Enjoy Amazing Offers</h4>
                        <p>Weblisted has converged the online shopping experience in Usa by offering so many assortments on Weblisted,
                            you can now make the most of your online shopping in Usa with Weblisted as it’s one of the best discount shopping apps that offers you exciting flash sales,
                            mega deals, brand vouchers, and bundle offers that you can exclusively avail from the Weblisted app online.
                            Never miss a deal with Push Notifications by Weblisted App and you can also opt to pay with the QR scan directly from the app and redeem vouchers and special products.
                            With the Weblisted app shopping, you can shop online from curated products of your choice and shop with your card to enjoy discounts or add the products to your wishlist to shop later.
                            Weblisted App Usa offers a faster and more secure checkout facility so you can Weblisted app download is easily available for all s
                            martphones on the App Store and Playstore and you can even download the Weblisted online shopping app download with Weblisted apk download.
                            So download the Weblisted app and stay on top of all discounts and shop your products before they get sold out!</p>
                    </div>
                    <div className={`${"col-lg-12"} ${styles.online}`}>
                        <h4>Why Shop on Weblisted?</h4>
                        <p>Weblisted is Usa’s biggest online shopping marketplace that connects sellers and buyers virtually in one place.
                            If you’re looking to upgrade your online shopping experience in Usa, then Weblisted brings you Usa’s best online shopping app,
                            the Weblisted App with which you can enjoy more than thousands of wide varieties of assortments at your fingertips.
                            Weblisted online shopping app is your handy grocery shopping app, utility app, and one of Usa’s best shopping apps,
                            so don’t wait anymore, head over to Weblisted online shopping and enjoy Weblisted discounts and make your online shopping experience count.
                            Weblisted makes online shopping in Usa a hassle-free and convenient experience for all so download your Weblisted app now and enjoy easy online shopping in Usa!
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default OnlineShopping



import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/systemStatus.module.css'
import Header from './Header';
import Footer from '../components/component/Footer';
import HeaderEbey from '../components/component/HeaderEbey'
import Accordian from '../components/component/Accordion/Accordian'

export default function FAQ() {
    return (
        <>
            <Header />
            <div id="setHeaderBottomGap"></div>

            <div className="container-fluid" > 
                <HeaderEbey />
                <div className="row d-flex justify-content-center" id={styles.main}>
                    <img src="weblisted_banner2.jpg" alt="" />
                    <div className="col-lg-12 my-5"  style={{width:'60%'}}>
                        <Accordian />
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

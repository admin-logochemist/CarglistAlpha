import React from 'react'
import styles from '../styles/About.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../pages/Header'
import Footer from '../components/component/Footer'
import HeaderEbey from '../components/component/HeaderEbey'


const About = () => {
    return (
        <>
            <Header />
            <div className='container'>

                <div className='row'>
                    <div className='col-md-12'>
                        <HeaderEbey />

                    </div>
                </div>
            </div>
            <img src="weblisted_banner1.jpg" className={`${styles.mainContent}`}  alt="" style={{ width: "100%" }} />
            <div className={`container pb-5`}>
                <div className={`row py-5 px-5 ${styles.mainContent}`}>
                    <div className="col-lg-12 pt-5">
                        <div className='mb-5 d-flex justify-content-center '>
                            <h5 className={`text-center p-4 text-light h1 ${styles.mainhead}`} > ABOUT US  </h5>
                        </div>
                    </div>

                    <div className='col-md-6 d-flex justify-content-center align-items-center' id={styles.aboutimg}>
                        <div className='text-center'>
                            <img src="about-us.jpg" className={`${styles.aboutimg} w-75`} alt="" />
                        </div>
                    </div>

                    <div className={`col-md-6 pb-5 d-flex justify-content-center align-items-center ${styles.whoweare}`}>
                        <div className='text-center text-light'>
                            <h1> Who We Are</h1>
                            <p style={{fontSize:'18px', lineHeight:'30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                tenetur error, harum nesciunt ipsum debitis quas aliquid. consectetur adipisicing elit.</p>
                        </div>
                    </div>



                </div>
            </div>
            <Footer />
        </>
    )
}

export default About

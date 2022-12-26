import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../pages/Header'
import styles from '../styles/Contact.module.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import Footer from '../components/component/Footer'


const Contact = () => {
  return (
    <>
      <Header />
      <div id="setHeaderBottomGap"></div>


      <div className={` ${styles.body} mb-5 pb-5`}>

        <div className="container-fluid">

          <div className={`${"row"} ${styles.row}`}>
            <div className={`${styles.mainhead} text-center d-flex justify-content-center align-items-center`}>
              <h1 className={` py-4`} >CONTACT US</h1>
            </div>
            <div className={`${"col-lg-5 col-md-6 col-sm-6 mt-5"} ${styles.fool}`}>
              <h2 className={`${styles.heading}`}>Dont Hesitate To Ask A Question</h2>
              <p className={`${styles.para}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta?</p>
              <div className={`${styles.Contacts}`}>
                <span className={`${styles.address} ${styles.adders2}`}>
                  <span className={`${styles.content}`}><LocalPhoneIcon className={`${styles.Icon}`} />&nbsp; 003345562856</span>
                  <span className={`${styles.content}`}><EmailIcon className={`${styles.Icon}`} />&nbsp; info@weblisted.com</span>
                </span>

                <span className={`${styles.address} `}>
                  <span className={`${styles.content}`}><PlaceIcon className={`${styles.Icon}`} />&nbsp;&nbsp;&nbsp;Main Office <br /> &nbsp;&nbsp;&nbsp;123th Street, Pekanbaru</span>
                </span>

              </div>

            </div>
            <div className={`${"col-lg-4 col-md-6 col-sm-6 mt-5"} ${styles.fool2}`}>

              <form action="" className={`${styles.form} py-5`}>
                <div>
                  <span className='h1 p-2 text-white'>Get In Touch</span>
                </div>

                <div className={`${"form-group"} ${styles.fgroup}`}>
                  <input type="text" name="" id="" className={`${'form-control'} ${styles.Contactfield}`} placeholder='Your Name Here' />
                  <input type="text" name="" id="" className={`${'form-control'} ${styles.Contactfield}`} placeholder='Your Email Here' />
                </div>
                <div className={`${"form-group"} ${styles.fgroup2}`}>
                  <input type="text" name="" id="" className='form-control' placeholder='Your Subject Here' />
                  <textarea name="" id="" cols="30" rows="10" className='form-control' placeholder='Your Message Here'></textarea>
                </div>
                <button className={styles.button}>Submit</button>
              </form>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact

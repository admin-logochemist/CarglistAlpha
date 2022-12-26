// eslint-disable-next-line react-hooks/exhaustive-deps
import React from 'react'
import Link from 'next/link';
import styles from "../styles/postadd.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from '../pages/Header'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { faHeader } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { selectOpenResturant } from '../components/features/ResSlice';
import Header from './Header';
export default function postadd() {
  const selectJob = useSelector(selectOpenResturant);

  return (

    <>
      <Header />
      <div id="setHeaderBottomGap"></div>

      <section id={styles.section}>
        <div className=" d-flex justify-content-center align-items-center" style={{width:'100%'}} >
          <div className="row mx-auto">
            <div className="col-6" style={{height:'80vh'}}>
              <div className={styles.jobpost_wrapper}>
                <div className={styles.jobpost_job_postings}>
                  {/* <a href="#" className={styles.jobpost_link}></a> */}
                  <div className={styles.jobpost_image}>
                    <h3>{selectJob?.data().posttitle}</h3>
                    <div className={styles._overlay}>

                    </div>
                  </div>
                  <div className={styles.jobpost_body}>
                    <img src={selectJob?.data().image} alt="" className={styles.imgpost} />
                    <div className={styles.classifications}>
                      <div className={`${styles.posthead}`}>
                        <span className={styles.jovaluehead}> &nbsp;{selectJob?.data().posttitle}</span>
                        <span className={styles.jovalue}><FontAwesomeIcon icon={faLocationDot} className={`${styles.posticon}`} /> &nbsp;{selectJob?.data().city}</span>
                      </div>
                      <span className={styles.jovalue}> &nbsp;{selectJob?.data().compensation}</span>
                      <span className={styles.jovalue}> &nbsp;{selectJob?.data().select}</span>
                    </div>
                    <div className={`${styles.postdetails}`}>
                      <span className={`${styles.postDescription}`}>Descriptionsss</span>
                      <p>{selectJob?.data().discription}</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>


      </ section>
    </>
  )
}

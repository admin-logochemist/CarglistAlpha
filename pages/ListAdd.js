import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../pages/Header';
import styles from '../styles/ListAdd.module.css'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {
    addDoc,
    getDocs,
    collection,
    serverTimestamp,
    updateDoc,
    doc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { Ubq } from 'styled-icons/crypto';
import { New } from 'styled-icons/entypo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const ListAdd = () => {

    const [condition, setCondition] = useState(false)

    const handlelist = () => {
        if (Use === Use) {
            setCondition(true);
        }

    }
    const handlelist2 = () => {
        if (New === New) {
            setCondition(false);
        }
    }


    return (

        <>
            <Header />
            <div id="setHeaderBottomGap"></div>

            <div className={`${"container-fluid"} ${styles.maincontainer}  welistedBannerAffilated`}>

                <a className={styles.backIcon} href="/Store"> <ArrowBackIcon className={`${'p-3'} ${styles.backIcon2}`} /> </a>

                <div className={`${'row mt-5'}  ${styles.MainRow}`}>
                    <h4 className={styles.Head}>Create Your Listing</h4>
                    <h6>Listing details</h6>
                    <div className="col-lg-6">
                        <div className={`${"form-group mt-4"} ${styles.formgroup}`}>
                            <span>Title <InfoOutlinedIcon className={styles.icon} /></span>
                            <input type="text" className={`${'form-control'} ${styles.input}`} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${"form-group mt-4"} ${styles.formgroup}`}>
                            <span> SubTitle <InfoOutlinedIcon className={styles.icon} /></span>
                            <input type="text" className={`${'form-control'} ${styles.input}`} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${"form-group mt-4"} ${styles.formgroup1}`}>
                            <span>Category<InfoOutlinedIcon className={styles.icon} /></span>
                            <span className={styles.span}> category <ArrowForwardIosOutlinedIcon className={styles.icon2} /> subcategory</span>
                            {/*  <input type="text" className={`${'form-control'} ${styles.input}`} />*/}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${"form-group mt-4"} ${styles.formgroup1}`}>
                            <span>Condition<InfoOutlinedIcon className={styles.icon} /></span>
                            <select onChange={(e) => setCondition(e.target.value)} name="" id="" className={styles.select} >
                                <option value="New">New</option>
                                <option value="Use">Use</option>
                            </select>
                        </div>
                    </div>
                    {condition ? <div className="col-lg-6"  >
                        <div className={`${"form-group mt-4"} ${styles.formgroup}`}>
                            <span> condition description <InfoOutlinedIcon className={styles.icon} /></span>
                            <textarea type="text" className={`${'form-control'} ${styles.input}`} />
                        </div>
                    </div> : ''}
                    <div className="col-lg-6">
                        <div className={`${"form-group mt-4"} ${styles.formgroup}`}>
                            <span>Photos(0)</span>
                            <input type="file" className={`${'form-control'} ${styles.input}`} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${"form-group mt-4"} ${styles.formgroup1}`}>
                            <span>Item specifics <InfoOutlinedIcon className={styles.icon} /></span>
                            <span className={styles.span2}> <strong>Required</strong>  <br /> <p>Buyers need these item specifics about your item
                            </p>
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={`${"form-group mt-2"} ${styles.formgroup1}`}>
                            <span></span>

                            <span className={styles.inputs2}>
                                <span>Types <InfoOutlinedIcon className={styles.icon} /></span>
                                <select name="" id="" >
                                    <option value=""></option>
                                    <option value="catalog">catalog</option>
                                    <option value="Enter Your Own">Enter Your Own</option>
                                </select>
                            </span>
                        </div>
                        <button className={`${styles.button}`}>Submit </button>
                    </div>
                </div>
            </div>

        </>
    )
}


export default ListAdd;



import React, { useState, useEffect } from 'react'
import styles from '../../../styles/SellerDashboard.module.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'
import { db, storage } from "../../../firebase";
import { updateDoc, collection, onSnapshot, orderBy, query, doc, getDocs, where, getDoc, addDoc, deleteDoc } from 'firebase/firestore'


function Topbar() {


  const [sellerStore, setSellerStore] = useState([])
  const [edit, setEdit] = useState(false)
  var data = [];

  const [dataFetch, setDataFetch] = useState(data)

  const getSellerProfile = () => {
    const uemail = localStorage.getItem('email')
    onSnapshot(
      query(collection(db, "SellerStore"), where("email", "==", uemail))
      , (snapshot) => {
        setSellerStore(snapshot.docs.map(item => item.data()))
        console.log(sellerStore[0]?.contact);
      })
  };


  useEffect(() => {
    getSellerProfile();
  }, [])


  return (
    <div className={styles.Topbar}>
      <div className={styles.TopbarWrapper}>
        <div className={styles.topleft}>
          <span className={styles.Logo}><a href="/"><img src="/weblisted-01.png" alt="" className={styles.imglogo} /></a></span>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topbarIconContainer}>
            {/*<NotificationsNone />*/}
            {/*<span className={styles.topIconBag}>2</span>*/}
          </div>
          <div className={styles.topbarIconContainer}>
            {/*<Language />*/}
            {/*<span className={styles.topIconBag}>2</span>*/}
          </div>
          <div className={styles.topbarIconContainer}>
            {/*<Settings />*/}
          </div>
          <img src={sellerStore[0]?.bannerImage} alt="" className={styles.topAvatar} />
        </div>
      </div>
    </div>
  )

}

export default Topbar
import React, { useEffect, useState } from "react";
import Header from './Header';
import Sidebar from './user_sidebar';
import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";


import { useRouter } from "next/router";

import { updateDoc, collection, onSnapshot, orderBy, query, doc, getDocs, where, getDoc, addDoc, deleteDoc, } from 'firebase/firestore'
import { db, storage } from "../firebase";




const User_profile=()=> {
    const router = useRouter();
   
    const [usersName, setUsersName] = useState("");
    const [usersEmail, setUsersEmail] = useState("");
    const [visible, setVisible] = useState(false)
    // const [userModal, setUserModal] = useState()
    const [changeData, setChangeData] = useState()
    const [fdata, setFData] = useState();
    const [userData, setUserData] = useState([]);
    const [advertData, setAdvertData] = useState()
    const [status, setStatus] = useState(false);
    const [imageId, setImageId] = useState("")
    const [file, setFile] = useState("")
    const [flag, setFlag] = useState(false)
    const dispatch= useDispatch()
    var data = [];
    
  const ISSERVER = typeof window === "undefined";
  
    useEffect( async() => {
      if (!ISSERVER) {
      const Email = localStorage.getItem("email")
   
   
    setUsersEmail(Email ? Email : localStorage.getItem('email'))
  
        // console.log(router.query.advertEmail)
  if((Email!== undefined) && Email.length ){
  
    let advertize = collection(db, 'userid');
        let q = query(advertize, where('email', '==', Email))
        const querySnapshot = await getDocs(q);
        querySnapshot?.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data(),"hello");
          data.push({ id: doc.id, ...doc.data() })
  
        }); 
    
    if (data) {
      console.log(data[0].id)
      setAdvertData(data)
      setImageId(data[0].id)
    }
  }}
    
    }, [])
  
  return (
  <>
        <Head>
            <title>Weblisted</title>
            <meta name="description" content="Generated by create next app" />
         <link rel="icon" href="/icon-06.png" /> 
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
        </Head>

        <main>
          <Header />
            <div id="setHeaderBottomGap"></div>
          <Sidebar />  

            <div className="container">
            <div className="row mt-5 mb-5 justify-content-center">
                <div className="col-lg-offset-4 col-lg-6 col-sm-offset-3 col-sm-6">
                    <div className="user_profile">
                        <div className="user_details">
                            <div className="proflie-icon">
                                <i className="fas fa-user-tie red"></i>
                            </div>
                            {advertData && advertData.map((item, index) => (
                            <h3 className="title red" key={index}>{item.name}</h3>
                            ))}
                        </div>
                        {advertData && advertData.map((item, index) => (
                        <ul className="profile-content" key={index}>
                            <li><span><i className="fas fa-envelope-open-text red"></i></span>&nbsp;{item?.email}</li>
                            <li><span><i className="fas fa-map-marked-alt red"></i></span>&nbsp;{item?.name}</li>
                            <li><span><i className="fas fa-mobile red"></i></span>&nbsp;{item?.phone}</li>
                            <li><span><i className="fas fa-building red"></i></span>&nbsp;{item.select}</li>
                            <li><span><i className="fas fa-globe-africa red"></i></span>&nbsp;{item.country}</li>
                        </ul>
                        ))}
                        <div className="wrapper">
                            <input type="radio" name="select" id="option-1" checked />
                            <input type="radio" name="select" id="option-2" />
                            <label htmlFor="option-1" className="option option-1">
                                <div className="dot"></div>
                                <span>Male</span>
                            </label>
                            <label htmlFor="option-2" className="option option-2">
                                <div className="dot"></div>
                                <span>Female</span>
                            </label>
                        </div>
                        <button className='edit_btn mt-2'>Edit</button>
                    </div>
                </div>
            </div>
        </div>
            {/* <Footer /> */}
        </main>
  </>
  );
}


export default User_profile;

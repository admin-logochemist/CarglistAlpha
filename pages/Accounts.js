import Head from 'next/head'
import Header from './Header';
import Sidebar from './user_sidebar';
import React, { useState, useEffect } from 'react'
import DCss from '../styles/dashboard.module.css'
import { db, storage } from '../firebase';
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, getAuth, deleteUser } from 'firebase/auth'
import { updateDoc, collection, onSnapshot, orderBy, query, doc, getDocs, where, getDoc, addDoc, deleteDoc } from 'firebase/firestore'
import HeaderStore from '../components/component/HeaderStore';
function Accounts() {
    const [userData, setUserData] = useState([])
    const [select, setSelect] = useState();
    const [addId, setAddId] = useState();
    const [searchResult, setSearchResult] = useState()
    const [flag, setFlag] = useState(false)
    const [Uemail, setUemail] = useState("")
    var data = [];
  
  
        
     

    
    const ISSERVER = typeof window === "undefined";
    
    useEffect( () => {
        if (!ISSERVER) {
        const Email = localStorage.getItem("email")
        console.log(Email)
        
     

    
          // console.log(router.query.advertEmail)
    if((Email!== undefined) && Email.length ){
   const foor= async () => {
        let advertize = collection(db, 'orderdetail');
        let q = query(advertize,where('email','==',Email))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data(),"hello");
          data.push({ id: doc.id, ...doc.data() })
  
        }
        ); 
   
      if (data) {
          console.log(data,"data found")
          setUserData(data);
       
      }
    }
    foor()
}
        
    }
      
      }, [])
    

    
    
      const handleCapacity = (e) => {
        setSelect(e.target.value);
        setAddId(e.target.id);
        console.log(select)
    }
  

    const firebaseUpdate = async () => {
        const washingtonRef = doc(db, "orderdetail", addId);
        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
            status: select
            // address: fdata.address,
        });

        setFlag(!flag)
    }


    return (
        <>
            <Head>
                <title>WebListed</title>
                <meta name="description" content="WebListed" />
                <link rel="icon" href="/icon-07.png" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
            </Head>

            <main>
            <HeaderStore />
                <Sidebar />

                <div className="container" >
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-3 col-sm-6 lg_own" >
                            <div className="serviceBox">
                                <div className="service-content" id={DCss.yorders} >
                                    <div className="service-icon" >
                                        <span><i className="fas fa-sort-alpha-up fa-3x" id={DCss.redz}></i></span>
                                    </div>
                                    <h4 className="title">Your <span>Orders</span></h4>
                                    <h2 className="description">53405</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 lg_own">
                            <div className="serviceBox green">
                                <div className="service-content" id={DCss.yfav}>
                                    <div className="service-icon">
                                        <span><i className="fas fa-bookmark fa-3x" id={DCss.redz}></i></span>
                                    </div>
                                    <h4 className="title">Your <span>Favourite</span></h4>
                                    <h2 className="description">85823</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 lg_own">
                            <div className="serviceBox blue">
                                <div className="service-content" id={DCss.yrewards}>
                                    <div className="service-icon">
                                        <span><i className="fas fa-shield-alt fa-3x" id={DCss.redz}></i></span>
                                    </div>
                                    <h4 className="title">Your <span>Rewards</span></h4>
                                    <h2 className="description">85845</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel" id={DCss.zofis}>
                                <div className="panel-heading"  id={DCss.fozi}>
                                    <div className="row">
                                        <div className="col col-xs-8">
                                            <h4 className="title">RECENT ORDERS</h4>
                                        </div>
                                    </div>
                                </div>




                                <div className="panel-body table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr className="active capatilize">
                                                <th>Store</th>
                                                <th>User</th>
                                                <th>OrderItems</th>
                                                <th>Quantity</th>
                                                <th>Date</th>
                                                <th>Amount</th>
                                                <th>Status</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {( userData.filter(item => item.status !== "Completed"))?.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.store}</td>
                                                    <td>
                                                        {/* <!-- <div className="user_icon">
                                                    <img src="images/img1.jpg" alt="">
                                                </div> --> */}
                                                        {item.email}
                                                    </td>
                                                    <td>      {item.order.map((item, index) => (

                                                        <div key={index} >
                                                            <p>{item.split(',')[1].split("\"")[1]}</p>

                                                        </div>



                                                    ))}</td>
                                                    <td>      {item.order.map((item, index) => (

                                                        <div key={index}>

                                                            <p>{item.split(',')[2].substring(0, 1)}</p>
                                                        </div>



                                                    ))}</td>
                                                    <td>{new Date(item.timestamp.seconds * 1000).toLocaleString()}</td>
                                                    <td>${item.amount}</td>
                                                    <td><span className={`${DCss.status}`}>{item.status}</span></td>
                                                    {/* <td>
                                                        <ul className={`${DCss.action_list}`}>
                                                            <li></li>
                                                           
                                                            <li><a href="#" onClick={firebaseUpdate} className="btn"><em className="fa fa-edit"></em></a></li>
                                                        </ul>
                                                    </td> */}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                     
        


                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col col-xs-8">
                                        <h4 className="title">ORDER HISTORY</h4>
                                    </div>
                                </div>
                            </div>




                            <div className="panel-body table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr className="active capatilize">
                                            <th>Store</th>
                                            <th>User</th>
                                            <th>OrderItems</th>
                                            <th>Quantty</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(userData.filter(item => item.status === "Completed"))?.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.store}</td>
                                                <td>

                                                    {item.email}
                                                </td>

                                                <td>      {item.order.map((item, index) => (

                                                    <div key={index}>
                                                        <p>{item.split(',')[1].split("\"")[1]}</p>

                                                    </div>



                                                ))}</td>
                                                <td>      {item.order.map((item, index) => (

                                                    <div key={index} >

                                                        <p>{item.split(',')[2].substring(0, 1)}</p>
                                                    </div>



                                                ))}</td>
                                                <td>{new Date(item.timestamp.seconds * 1000).toLocaleString()}</td>
                                                <td>${item.amount}</td>
                                                <td><span className={`${DCss.status}`}>{item.status}</span></td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
             


            </main>
        </>
    );
}

export default Accounts;

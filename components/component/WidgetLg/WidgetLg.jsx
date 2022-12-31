import React,{useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../../../styles/UserDetails.module.css';
import { db, storage } from '../../../firebase';
import { auth } from '../../../firebase'
import { createUserWithEmailAndPassword, getAuth, deleteUser } from 'firebase/auth'
import { updateDoc, collection, onSnapshot, orderBy, query, doc, getDocs, where, getDoc, addDoc,deleteDoc } from 'firebase/firestore'
import { faCheck, faAnglesLeft , faAnglesRight, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const WidgetLg = () => {

  const [userData, setUserData] = useState([])
  const [select,setSelect]= useState();
  const [addId,setAddId] =useState();
    const [searchResult,setSearchResult] = useState()
    const [flag,setFlag] = useState(false)
  var data = [];
  const handleCapacity=(e)=>{
      setSelect(e.target.value);
      setAddId(e.target.id);
     console.log(select)
  }
  const getUser = async () => {
    
      const querySnapshot = await getDocs(collection(db, "orderdetail"),)
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //   console.log(doc.id, " => ", doc.data());
      data.push({ id: doc.id, ...doc.data() })
    //   setUserData(userData=>[...userData,doc.data()])
    })
    
    
      setUserData(data);
console.log(userData);        

}
  
const firebaseUpdate = async () => {
  const washingtonRef = doc(db, "orderdetail",addId);
  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
  status:select
    // address: fdata.address,
  });
 
  setFlag(!flag)
}


useEffect(() => {
  try {
    
    getUser();
   

  } catch (error) {
    console.error(error)
  }
}, [flag])  


  return (
    <div className={styles.body}>
      <div id={styles.Maincontainer11} >
        <div className="container">
          <div className="row">
            <div className="col-lg-12" id={styles.OrderDetails}>
              <div className="row">
  
                <div className="col-md-12">
                  <div className={`${styles.Order_panel}`}>
                    <div className={`${styles.Order_panel_heading}`}>
                      <div className="row">
                        <div className="col col-sm-5 col-xs-12">
                          <h4 className={`${styles.panel_title}`}>Order Details</h4>
                        </div>
                      </div>

                    </div>
                    <div className={`${styles.order_panel_body}`}>
                  
                   
                      <table className={`${styles.order_table}`}>
                        <thead>
                          <tr className={styles.tr}>
                            <th>User</th>
                            <th>OrderItems</th>
                            <th>Quantty</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(searchResult ? searchResult : userData.filter(item => item.status !== "Completed"))?.map((item, index) => (
                            <tr key={index}>
                              <td>{item.email}</td>
                              <td>{item.order.map((item, index) => (
                                <div key={index}>
                                  <p>{item.split(',')[1].split("\"")[1]}</p>
                                </div>))}
                              </td>
                              <td>{item.order.map((item, index) => (

                                <div key={index}>
                                  <p>{item.split(',')[2].substring(0, 1)}</p>
                                </div>
                                ))}
                                </td>
                              <td>{new Date(item.timestamp.seconds * 1000).toLocaleString()}</td>
                              <td>${item.amount}</td>
                              <td>
                              <ul className={`${styles.status}`}>
                              <li></li>
                              <select className="" id={item.id} onChange={handleCapacity}>
                                <option value="pending">Pending</option>
                                <option value="inProcess">inProcess</option>
                                <option value="Completed">Completed</option>
                              </select>
                              <li><a href="#" onClick={firebaseUpdate} className="btn"><FontAwesomeIcon icon={faCheck}  className={styles.DoneIcon}/></a></li>
                            </ul>
                              </td>
                              <td>
                              <a href="/index" ><FontAwesomeIcon icon={faEye}/></a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table> 
                    </div>

                    <div className={`${styles.panel_footer}`}>
                      <div className="row">
 
                        <div className="col-xs-6">
                          <ul className={`${styles.pagination}`}>
                            <li><a href="#"><FontAwesomeIcon icon={faAnglesLeft}/></a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li className={`${styles.active}`}><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faAnglesRight}/></a></li>
                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className={`${styles.Order_panel}`}>
                    <div className={`${styles.Order_panel_heading}`}>
                      <div className="row">
                        <div className="col col-sm-5 col-xs-12">
                          <h4 className={`${styles.panel_title}`}>Order History</h4>
                        </div>
                      </div>

                    </div>
                    <div className={`${styles.order_panel_body}`}>
                      <table className={`${styles.order_table}`}>
                        <thead>
                          <tr className={styles.tr}>
                          <th>User</th>
                          <th>OrderItems</th>
                            <th>Quantty</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>

                          </tr>
                        </thead>
                        <tbody>
                          {(searchResult ? searchResult : userData.filter(item => item.status === "Completed"))?.map((item, index) => (
                            <tr key={index}>
                              <td>{item.email}</td>
                              <td>{item.order.map((item, index) => (
                                <div key={index}>
                                  <p>{item.split(',')[1].split("\"")[1]}</p>
                                </div>
                              ))}
                              </td>
                               <td>{item.order.map((item, index) => (
                                <div key={index} ><p>{item.split(',')[2].substring(0, 1)}</p>
                                </div>
                                ))}</td>
                              <td>{new Date(item.timestamp.seconds * 1000).toLocaleString()}</td>
                              <td>${item.amount}</td>
                              <td><span className={`${styles.status}`}>{item.status}</span></td>

                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className={`${styles.panel_footer}`}>
                      <div className="row">

                        <div className="col-xs-6">
                          <ul className={`${styles.pagination}`}>
                            <li><a href="#"><FontAwesomeIcon icon={faAnglesLeft}/></a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li className={`${styles.active}`}><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faAnglesRight}/></a></li>
                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default WidgetLg;

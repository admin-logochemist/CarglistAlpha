/* eslint-disable react-hooks/rules-of-hooks */
import React, { main, useState, useEffect } from 'react';
import styles from '../styles/post.module.css'
import Head from 'next/head'
import Sider from '../components/component/Sider';
import "bootstrap/dist/css/bootstrap.min.css";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from './Header'
import { JobList } from '../components/component/JobList'
import { updateDoc, collection, onSnapshot, orderBy, query, doc, getDocs, where, getDoc, addDoc, deleteDoc } from 'firebase/firestore'
import DCss from '../styles/dashboard.module.css'
import { db } from '../firebase'
import { useRouter } from 'next/router';
import { Category } from 'styled-icons/boxicons-regular';



function Mypost() {
    const router = useRouter()
    const { openCat } = router.query;
    const [on, setOn] = useState(false);
    const [job, setJob] = useState([]);
    const [selectData, setSelectData] = useState();
    const [cityName, setCityName] = useState();
    const [usersName, setUsersName] = useState("");
    const [visible, setVisible] = useState(false)
    // const [userModal, setUserModal] = useState()
    const [changeData, setChangeData] = useState()
    const [fdata, setFData] = useState()
    const [userData, setUserData] = useState([])
    const [status, setStatus] = useState(false)
    const [flag, setFlag] = useState(false)
    var data = [];
    useEffect(() => {
        // Perform localStorage action

        const users = localStorage.getItem('email')
        console.log(users, "local storage")
        setUsersName(((users !== null) && (users !== undefined)) ? users : "")
        console.log(usersName, "local storage")
        setFlag(!flag)
    }, [])

    console.log("category", openCat);


    const getPost = async () => {

        const querySnapshot = await getDocs(collection(db, "Form"), where("cuser", "==", usersName));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            data.push({ id: doc.id, ...doc.data() })
            // setUserData(userData=>[...userData,doc.data()])
        })
        const filterData = data.filter((item) => (item.cuser == usersName))
        if (filterData) {
            setUserData(filterData)
        }
    }
    const delUser = async (e) => {
        const id = e.target.id

        await deleteDoc(doc(db, "Form", id)).then(doc => console.log(doc));
        setFlag(!flag)
    }

    useEffect(() => {
        try {

            getPost();
        } catch (error) {
            console.error(error)
        }
    }, [flag])
    console.log(cityName, "city")
    return (
        <>
            <Head>
                <title>weblisted</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
            </Head>
            <div id={styles.body}>
                <Header />
            <div id="setHeaderBottomGap"></div>

                <div className="col-md-12">
                    <div className={`${DCss.Order_panel}`}>
                        <div className={`${DCss.Order_panel_heading}`}>
                            <div className="row">
                                <div className="col col-sm-5 col-xs-12">
                                    <h4 className={`${DCss.panel_title}`}>Post Details</h4>
                                </div>
                            </div>
                        </div>
                        <div className={`${DCss.order_panel_body}`}>
                            <table className={`${DCss.order_table}`}>
                                <thead>
                                    <tr>
                                        <th>Post No</th>
                                        <th>Post Title</th>
                                        <th>Category</th>
                                        <th>Actions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {userData?.map((item, index) => (
                                        <tr key={index} >
                                            <td>{index + 1}</td>
                                            <td>{item?.posttitle}</td>

                                            <td><span className={`${DCss.status}`}>{item?.subcategory}</span></td>
                                            <td>
                                                <ul className={`${DCss.action_list}`}>


                                                    <li><a href="#" id={item.id} onClick={delUser} className="btn"><em className="fa fa-trash"></em></a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className={`${DCss.panel_footer}`}>
                            <div className="row">


                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default Mypost;

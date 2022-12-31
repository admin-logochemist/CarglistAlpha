import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/Header.module.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from '../components/features/BasketSlice';
import { useRouter } from 'next/router';


export default function Header() {

    const items = useSelector(selectItems);
    const route = useRouter();
    const [usersName, setUsersName] = useState("");
    const [usersEmail, setUsersEmail] = useState("");
    useEffect(() => {
        // Perform localStorage action
        const users = localStorage.getItem('displayName')
        const usersemail = localStorage.getItem('email')
        console.log(users, "local storage")
        setUsersName(((users !== null) && (users !== undefined)) ? users : "")
        setUsersEmail(((usersemail !== null) && (usersemail !== undefined)) ? usersemail : "Login")
    }, [])
    const signOut = () => {
        if (usersName !== "logged Out") {
            localStorage.clear();
            const users = null;
            route.push("/");
        }
    }

    // col-lg-2 col-md-2 col-sm-2 col-xm-3 col-3 
    // col-lg-10 col-md-10 col-sm-9 col-xm-9 col-9
    return (

        <div className='container-fluid' id={styles.header}>
            <div className='row' id={styles.row_header}>
                <div className='col-3 bg-success'  id={styles.head_name}>
                    <a href="/" className={styles.imgcontainer}><img src="/weblisted-01.png" className={`${styles.headerlogoImage}`} alt=""  /></a>    
                </div>
                <div className='col-9 bg-warning ll' >
                    <div id={styles.header_rightside}>
                        <span className={styles.logoutbutton}>
                            {((usersName !== null) && (usersName !== "")) ?
                                <p onClick={signOut} className={styles.a_1}>
                                    {usersName}
                                    <br />
                                  <button className={styles.logoutbtn}>Logout </button> 
                                </p>
                                :
                                <a href="/SignIn" className={`${styles.a_1} text-light`}>
                                    Login </a>}
                        </span>
                     
                        <span className='text-light' id={styles.header_rightside_text}><a href="Dashboard/SellerDashboard">| &nbsp; Account</a></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

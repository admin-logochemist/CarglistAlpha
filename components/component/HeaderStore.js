import React, { useState, useEffect } from 'react'
import styles from '../../styles/store.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { router } from 'next/router';

import { selectItems } from '../features/BasketSlice';
import { useRouter } from 'next/router';
import Link from 'next/link'
function HeaderStore() {
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
    
    const [category, setCategory] = useState('')
    const [search, setSearch] = useState("")

    const Searchdata = () => {
        if (search || category) {

            router.push({ pathname: '/SearchProduct', query: { search: search, Scategory: category } })
        }
    }

    return (
        <div className="container-fluid headerStoreContainer">
            <div className="row">
                <div className='col-lg-12' id={styles.col12}>
                    <a href='/'>  <img src="/weblisted-store-logo.png" alt="" className={styles.storelogo} /></a>

                    <div className='form-group me-3' id={styles.search}>
                        <input type="text" className={` ${styles.headInput}`} onChange={(e) => setSearch(e.target.value)} />
                        <FontAwesomeIcon role='button' icon={faSearch} onClick={Searchdata} className={styles.icon} />
                    </div>

                    {/* <div className={styles.colz}>
                        {((usersName !== null) && (usersName !== "")) ?
                            <p onClick={signOut} className={styles.a_1}>
                                {usersName}
                                <br />
                                <button className={styles.logoutbtn}>Logout </button>
                            </p>
                            :
                            <a href="/SignIn" className={styles.a_1}>
                                Login
    </a>} 
                    </div> */}

                    {/*<button className={styles.Addprobtn} ><a href="/ProductAdd/ProductAdd" className={styles.AddproLink} >Add product</a></button>*/}
                    {/*  <button className={styles.logoutbtn1} onClick={() => route.push('/ProductAdd/ProductAdd')}>Add product</button> */}



                    {/* <span className={styles.dfrty}>
                        <span onClick={() => route.push('/CheckOut')} ><FontAwesomeIcon icon={faCartShopping} className={styles.iconCart} /></span>
                        <span className={styles.CartNo}>{items.length}</span>
                    </span> */}


                    {/* <button className={styles.logoutbtn} onClick={() => route.push('/')}>Account</button> */}


                </div>


            </div>

            {/*<div className="col-lg-12" id={styles.divrecomm}>
                        <span>Most  Recommended</span>
                        <div className={styles.recom} ></div>
                        <div className={styles.recpost} id={styles.recpost1} >
                            <span className={styles.cart}>
                                <img src="/00v0v_6SFtGULNQ54z_0kE0dL_600x450.jpg" alt="" className={styles.image} />
                                <span className={styles.text}>Class Room</span>
                            </span>
                        </div>
    </div>*/}
        </div>

    )
}

export default HeaderStore
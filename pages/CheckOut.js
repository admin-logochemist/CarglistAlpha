import React, { useState, useEffect } from 'react'
import Header from '../pages/Header'
import styles from '../styles/CheckOut.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CheckoutPro from './CheckoutPro'
import { selectItems, selectTotal } from '../components/features/BasketSlice';
import { useSelector } from 'react-redux'
import HeaderStore from '../components/component/HeaderStore';
import { useRouter } from 'next/router';
//  import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
function CheckOut() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const router = useRouter()
    const [usersName, setUsersName] = useState("");
    const [usersEmail, setUsersEmail] = useState("");
    const stripePromise = loadStripe(`pk_test_51KosFhFwyx0lKIchAhCk1Lua6CU9NQlovXtmseEEmTP02yAILBK9sLNFjehxXq9bhfHQt3U3ZR4HuASJHMJhBAYt00XZvsEuMM`)
    useEffect(() => {
        // Perform localStorage action
        const users = localStorage.getItem('displayName')
        const usersemail = localStorage.getItem('email')
        console.log(users, "local storage")
        setUsersName(((users !== null) && (users !== undefined)) ? users : "")
        setUsersEmail(((usersemail !== null) && (usersemail !== undefined)) ? usersemail : "Login")
    }, [])
    const CheckoutProg = () => {
        router.push("/Contact");
        // router.push("/CheckOutPay");
    }
    const createCheckoutSession = async () => {

        const stripe = await stripePromise;
        const checkoutSession =
            await axios.post('/api/create-checkout-session',
                {

                    items: items,
                    email: usersEmail,


                })
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        }

        )
        if (result.error) alert(result.error.message)
    }


    return (
        <>
            <Header />
            <div id="setHeaderBottomGap"></div>

            <div className='container-fluid' id={styles.bodyz}>
                <div className={styles.card} >

                    <div className="row" id={styles.row}>
                        <div className="col-md-8" id={styles.cart}>
                            <div className={styles.title}>
                                <div className="row" id={styles.row}>
                                    <div className="col" id={styles.col} ><h4><b>Shopping Cart</b></h4></div>
                                    <div className="col align-self-center text-right text-muted">{items?.length} items</div>
                                </div>
                            </div>

                            <div className="row" id={styles.row}>

                                {items && items?.length ? items.map((item, i) => {
                                    return <CheckoutPro
                                        key={i}
                                        img={item?.image || ''}
                                        title={item?.title || ''}
                                        price={item?.price || ''}
                                        quantity={item?.quantity ? item?.quantity : 1}
                                        price_total={item.price_total || ''}
                                        description={item?.description}
                                        itemid={item?.itemid}


                                    />
                                }
                                ) : null}

                            </div>

                            <div className={styles.back_to_shop}><a href="/Store"><FontAwesomeIcon icon={faArrowCircleLeft} /></a><span className="text-muted">Back to shop</span></div>
                        </div>
                        <div className="col-md-4" id={styles.summary}>
                            <div><h5><b>Summary</b></h5></div>
                            <hr />
                            <div className="row" id={styles.row}>
                                <div className="col" id={styles.col} >ITEMS {items?.length}</div>
                                <div className="col text-right">${total}</div>
                            </div>

                            <div className="row" id={styles.row}>
                                <div className="col" id={styles.col}>TOTAL PRICE</div>

                                <div className="col text-right">${total}</div>
                            </div>
                            <button className={styles.btn} onClick={CheckoutProg}>CHECKOUT</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CheckOut

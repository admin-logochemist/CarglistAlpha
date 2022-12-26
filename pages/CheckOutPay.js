import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import CheckoutPro from './CheckoutPro'
import { selectItems, selectTotal } from '../components/features/BasketSlice';
import { selectUser } from '../components/features/UderSlice';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore'; 




const CheckOutPay = () => {





    const [Name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")
    const [Zipcode, setZipCode] = useState("")
    const [state, setState] = useState("")
    const [address, setAddress] = useState("")
    const user = useSelector(selectUser)
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const [usersData, setUsersData] = useState("");
    const stripePromise = loadStripe(`pk_test_51KosFhFwyx0lKIchAhCk1Lua6CU9NQlovXtmseEEmTP02yAILBK9sLNFjehxXq9bhfHQt3U3ZR4HuASJHMJhBAYt00XZvsEuMM`)
    const users = {
    };
    useEffect(() => {
        // Perform localStorage action

        users.name = localStorage.getItem("displayName");

        users.email = localStorage.getItem("email");

        setUsersData(users.email ? users.email : "logged Out");
    }, []);
    const createCheckoutSession = async () => {
        const docRef = await addDoc(collection(db, 'userorder'), {
            name:Name,
            email:usersData,
            country:country,
            zipcode:Zipcode,
            state:state,
            phone:phone,
            address:address,
           
        })
        const stripe = await stripePromise;
        const checkoutSession =
         await axios.post('/api/create-checkout-session',
            {
                name:Name,
                country:country,
                zipcode:Zipcode,
                state:state,
                phone:phone,
                address:address,
                items: items,
                email: usersData,
                
                
            })
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        }

        )
        if (result.error) alert(result.error.message)
    }



    return (
        <>

        <div className='body'>
          <Header />
          <div id="setHeaderBottomGap"></div>

        </div>
        <div className="containerrs mt-5">
        <div className="main_container_form">
            <h6 className="rder-head">Your Order</h6>
            <div className="items_container">

                <div className="itemsss">
                {items && items?.length ? items.map((item, i) => {
                    return <CheckoutPro
                        key={i}
                        img={item?.image || ''}
                        title={item?.title||''} 
                        price={item?.price||''}
                        itemid={item?.itemid||''}
                        remail={item?.remail||''}
                        quantity={item?.quantity ? item?.quantity : 1}
                        price_total={item.price_total||''}
                        description={item?.description}
                            accid={item.accid}
                        /> 
                    }
                    ) : null}
                </div>

            </div>

            <div className="">
                <span className="itemss_borderss" ></span>
                <div className="itemss_totals">
                    <h4>Total : <span className="order_items_totals">${total}</span> </h4>
                </div>
                <span className="itemss_borderss"></span>

                <div className="peyment-method">
               
                    <ul className="card-area">
                        <li>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="payments" id="flexRadioDefault1"   />
                                <label className="form-check-label" >
                                </label>
                            </div>
                            <div className="details">
                                <h6>Payment Method<img src="./img/peyment-card.png" alt="img" /></h6>
                                <p>Pay with visa, Anex, MasterCard, Maestro,Discover and many other credit and debit credit vai paypal</p>
                            </div>
                        </li>
                    </ul>

                 
                </div>
                <button className="orderBtn" onClick={createCheckoutSession}>Place Order</button>
            </div>
        </div>

        <div className="bill-payment-wrap">
            <h5 className="billing-system-head">Billing Details
            </h5>
            <form className="default-form-wrap style-2">
                <div className="row">
                    <div className="col-md-6">
                        <label>Full Name</label>
                        <div className="single-input-wrap">
                            <input type="text" className="form-control" placeholder="Full Name"  onChange={(e) => setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="mt-3">Phone No</label>
                        <div className="single-input-wrap">
                            <input type="text" className="form-control" placeholder="Phone No"  onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="mt-3">Country</label>
                        <div className="single-input-wrap">
                            <input type="text" className="form-control" placeholder="Type Your Country"  onChange={(e) => setCountry(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="mt-3">Zip Code</label>
                        <div className="single-input-wrap">
                            <input type="text" className="form-control" placeholder="Zip Code"  onChange={(e) => setZipCode(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="mt-3">State</label>
                        <div className="single-input-wrap">
                            <input type="text" className="form-control" placeholder="State"  onChange={(e) => setState(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label className="mt-3">Address</label>
                        <div className="single-input-wrap">
                            <input type="text" className="form-control" placeholder="Type Your Address"  onChange={(e) => setAddress(e.target.value)} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

            
        </>
    )
}

export default CheckOutPay

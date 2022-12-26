import React, { useState } from "react";
import styles from '../styles/form.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { auth } from '../firebase';
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { login, logout, } from "../components/features/UderSlice";
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { useId } from "react";
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function FormSignup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bname, setBName] = useState("");
  const [file, setFile] = useState("");
  const [address, setAddress] = useState("")
  const [btype, setBtype] = useState("")
  const [bankac, setBankac] = useState("")
  const [storeName, setStoreName] = useState("")
  const [bweb, setBweb] = useState("")
  const [uids, setUids] = useState("")
  const [userId, setUserId] = useState()
  const [hasError, Error] = useState("");
  const [select, setSelect] = useState();
  const dispatch = useDispatch();
  const router = useRouter()



  const handleCapacity = (e) => {
    setSelect(e.target.value);

  }

  const handleSelectedData = () => {

    if (select) {
      router.push({ query: { userId: select } })

    }
  }
  // const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`)

  const registers = () => {

    createUserWithEmailAndPassword(auth, email, password).then(async (userAuth) => {
      setUids(userAuth.user.uid)
      localStorage.setItem('email', email);
      localStorage.setItem('displayName', name);



      if (select === 'User') {
        console.log("select value", select)

        try {

          const docRef = await addDoc(collection(db, 'userid'), {
            email: email,
            password: password,
            name: name,
            phone: phone,
            select: select,
            bname: bname,
            address: address
          })
          console.log("hellooooooooooo", docRef.id)
          setUids()


          alert("you are registered")
          router.push("/")



        }
        catch (e) {
          console.log("error", e)
        }


      }


      if (select === 'Seller') {
        // const stripe = await stripePromise;

        const RegisterSession =
          await axios.post('/api/connectedaccount',
            {

              email: email,

            })
        const accId = RegisterSession.data.id
        console.log("accId: " + accId)
        localStorage.setItem('accid', accId);
        localStorage.setItem('storename', storeName);
        const link = RegisterSession.data.link
        console.log("link: " + link)
        const docRef = await addDoc(collection(db, 'userid'), {
          email: email,
          password: password,
          name: name,
          phone: phone,
          select: select,
          bname: bname,
          accId: accId,
          store: storeName,
          object: "bank_account",
          country: "US",
          currency: "usd",
          routing_number: "110000000",
          account_number: "000123456789",
          address: address
        })

        await updateDoc(doc(db, "userid", docRef.id), {

          itemid: docRef.id
        })

        localStorage.setItem('userid', docRef.id);
        alert("your are registered")
        router.push('/CreateStore')
      }



      // router.push(select==='user' ? '/' : '/ResturentOwner')
    }).catch(function (error) {
      var errorMessage = error.message;
      console.log("errorMessage: " + errorMessage)
    });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
        }}>
          <img src="signin-test-img2.png" className="w-100" alt="" />
        </div>
        <div className="col-md-6">
          <div className="login-page" id={styles.login_page}>
            <div className="form" id={styles.form}>
              <div className="mb-4">
                <AccountCircleOutlinedIcon style={{ fontSize: 100 + 'px', color: 'white' }} />
              </div>

              <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
              <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
              <select name="" id="" onChange={(e) => setSelect(e.target.value)}>
                <option value="">Select Account</option>
                <option value="User">As User</option>
                <option value="Seller">As Seller</option>
              </select>
              {
                (select === "Seller") && (
                  <div>
                    <input type="text" onChange={(e) => setStoreName(e.target.value)} placeholder="Enter Your StoreName" />
                  </div>
                )
              }
              <button onClick={registers}>create</button>

              <p id={styles.message}>Already Registered? <Link href="/SignIn">Sign In</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
};

export default FormSignup;




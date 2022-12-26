import React, { useState, useEffect } from "react";
import styles from '../../styles/form.module.css'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login, logout, } from "../../components/features/UderSlice";
import { onAuthStateChanged, signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { db } from '../../firebase';
import { updateDoc, collection, onSnapshot, orderBy, query, doc, getDocs, where, getDoc, addDoc, deleteDoc } from 'firebase/firestore'
import { app } from '../../firebase';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import Image from '../../public';
// import fgdd from '../../public/slider3.jpg'

export default function FormSignin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = getAuth(app);
  const data = []




  const logintoApp = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then(async (userAuth) => {
      dispatch(login({
        email: userAuth.user.email,
        password: userAuth.user.password,

      }))
      const querySnapshot = await getDocs(collection(db, "userid"));
      await querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        data.push({ id: doc.id, ...doc.data() })
        // setUserData(userData=>[...userData,doc.data()])
      })
      try {
        const filterData = data.filter((item) => item.email === email)
        if (filterData) {
          if ((filterData.length > 0) && (filterData[0].email === email) && (filterData[0].password === password)) {
            localStorage.setItem('email', filterData[0].email);
            localStorage.setItem('accid', filterData[0].accId);
            localStorage.setItem('displayName', filterData[0].name);
            alert("your are logged In")
            router.push('/')

          }
          else {
            setError('Wrong Email or Password') // if email or password is wrong
          }

        }

      }
      catch (e) {
        console.log(e)
      }

    })

  }
  return (
    <div className="container signin-body">
      <div className="row">

        <div className="col-md-6" style={{
          display: 'flex',
          justifyContent: 'center',
        alignItems: 'center',
  height:'90vh'}}>
        {/* <img src='../../public/slider3.jpg' alt="alpha" /> */}
        <img src="signin-test-img2.png" className="w-100" alt="" />

      </div>

      <div id={styles.login_page} className='col-md-6'>
        <div id={styles.form}>
          <div className="mb-4">
            <AccountCircleOutlinedIcon style={{ fontSize: 100 + 'px', color: 'white' }} />
          </div>
          <form id={styles.login_form}>
            <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <a href="">    <button onClick={logintoApp}>login</button></a>
            <p id={styles.message}>Not registered? <Link href="/Signup">Create an account</Link></p>
          </form>
        </div>
      </div>


    </div>
    </div >

  )
}
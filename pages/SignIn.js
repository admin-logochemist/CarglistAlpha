import React from 'react'
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/Signin.module.css'
import FormSignin from '../components/component/FormSignin'



export default function SignIn() {
    return (
        <div className={styles.bodySignin}>
            <div className={styles.body}>
                <div className="container-fluid" id={styles.container}>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12"    id={styles.head_signin}>
                            <div >
                                <span className={styles.Signin_text}><a href="/"><img src="weblisted-01.png" alt="bot" /> </a> </span>
                            </div>
                            <div id={styles.btn_signin}>
                            <Link href="/Signup"><button id={styles.btn2}>Sign Up</button></Link>
    {/*<button id={styles.btn3}><Link href="/SignInSeller">Sign As Seller</Link></button> */}
                            </div>
                        </div>

                        <div>
                            <FormSignin />
                        </div>       
                    </div>         
                </div>
            </div>
        </div>
    )
}

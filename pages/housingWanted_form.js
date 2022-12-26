// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { textarea, useState, useRef } from 'react'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/resume.module.css"
import { useRouter } from 'next/router';
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../components/features/UderSlice';
// import { data } from '../components/component/data'
import { setUserId } from 'firebase/analytics';



export default function account_fianance() {

    const [elecommuting, setElecommuting] = useState("");
    const [nonprofit, setNonprofit] = useState("");
    const [internship, setInternship] = useState("");
    const [contactbyrecruiters, setContactbyrecruiters] = useState("")
    const [dataFetch, setDataFetch] = useState()
    const [posttitle, setPosttitle] = useState("");
    const [city, setCity] = useState("");
    const [postalcode, setPostalcode] = useState("");
    const [discription, setDiscription] = useState("");
    const [employetype, setEmployetype] = useState("");
    const [jobtitle, setJobtitle] = useState("");
    const [select, setSelect] = useState("");
    const [compensation, setCompensation] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [HowmyPhoneNumber,setHowmyPhoneNumber] = useState('');
    const [PhoneCallsOK,setPhoneCallsOK] = useState('');
    const [TextSmsOK,setTextSmsOK] = useState('');
    const [CLMailRelay, setCLMailRelay ] = useState('');
    const [RealEmail, setRealEmail] = useState('');
    const [NoEmail, setNoEmail] = useState('');
    const user = useSelector(selectUser)
    const router = useRouter()

    const { category } = router.query;
    const { subcategory } = router.query;
    console.log(category)
    console.log(subcategory)
    const handleCapacity = (e) => {

        setSelect(e.target.value);
    }



    const handleSubmit = async (e) => {

        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, 'Form'), {
                CLMailRelay:CLMailRelay,
                RealEmail:RealEmail,
                PhoneCallsOK:PhoneCallsOK,
                NoEmail:NoEmail,
                TextSmsOK:TextSmsOK,
                HowmyPhoneNumber:HowmyPhoneNumber,
                elecommuting: elecommuting,
                nonprofit: nonprofit,
                internship: internship,
                contactbyrecruiters: contactbyrecruiters,
                posttitle: posttitle,
                city: city,
                postalcode: postalcode,
                discription: discription,
                employetype: employetype,
                jobtitle: jobtitle,
                compensation: compensation,
                company: company,
                phone: phone,
                select: select,
                subcategory:subcategory,
                category: category,
            })
            alert("form submited")
            console.log(docRef)
            router.push("/")
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className={styles.body}>
            <Header />
            <div id="setHeaderBottomGap"></div>

            <section id={styles.account_section}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-5" id={styles.input1}>
                                    <span className="option-label">
                                        <span>Post Tilte</span>
                                    </span>

                                    <input value={posttitle} type="text" placeholder="Post Tilte" onChange={(e) => setPosttitle(e.target.value)} />
                                </div>

                                <div className="col-lg-5" id={styles.input1}>
                                    <span className="option-label" >
                                        <span>
                                            <span>
                                            City</span>
                                        </span>
                                    </span>
                                    <input value={city} type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
                                </div>

                                <div className="col-lg-2" id={styles.input1}>
                                    <span className="option-label">
                                        <span>
                                            <span >Postal / Zip Code</span>
                                        </span>
                                    </span>
                                    <input type="text" value={postalcode} placeholder="Postal / Zip Code" onChange={(e) => setPostalcode(e.target.value)} />
                                </div>
                                <div className="col-lg-12 mt-3" id={styles.TextArea}>
                                    <div className="row">
                                        <div className="col-md-6" id={styles.postselectText}>
                                            <span>Only one job description per posting please.</span>
                                            <p>
                                                <b>
                                                    <span className="option-label">
                                                        <span >
                                                            <span >Description </span>
                                                        </span>
                                                    </span>
                                                </b>
                                            </p>
                                        </div>

                                        <div className="col-md-5" id={styles.postselect}>

                                        </div>
                                    </div>
                                    <textarea name="" id="" cols="30" rows="10" value={discription} placeholder="Description" onChange={(e) => setDiscription(e.target.value)} ></textarea>
                                </div>
                            </div>
                            {/* ------form--- */}

                        </div>

                    </div>
                </div>
            </section>
         
      

            <section id={styles.secForm}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="form-bg" id={styles.form_bg2}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-3 form-group" id={styles.form_group2}>
                                            <div className="row" id={styles.secForm_row}>
                                                <div className="col-md-4 ">
                                                    <label className="control-label" id={styles.control_label2}>
                                                        <span className="option-label">
                                                            <span>
                                                                <span>Email    </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <input type="text" placeholder='Enter Your Email' className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} id={styles.form_control2} />
                                                    <div id={styles.form_inside_list}>
                                                        <span><b> email privacy options [?]</b> </span>
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="CLMailRelay"  onClick={(e) => setCLMailRelay(e.target.value)}  /> &nbsp;WL mail relay (recommended)
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="RealEmail"  onClick={(e) => setRealEmail(e.target.value)} /> &nbsp;show my real email address
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="NoEmail" onClick={(e) => setNoEmail(e.target.value)}  /> &nbsp;no replies to this email
                                                        </label>
                                                    </div>


                                                </div>

                                                <div className="col-md-7 col-sm-12" >
                                                    <div className="form-group inside " id={styles.inside2}>
                                                        <div className="radio" id={styles.radio}>
                                                            <label id={styles.radio_label}>
                                                                <input type="radio" name="optionsRadios" id="optionsRadios1" value="HowmyPhoneNumber" onClick={(e) => setHowmyPhoneNumber(e.target.value)} />how my phone number

                                                            </label>
                                                            <label id={styles.radio_label}>
                                                                <input type="radio" name="optionsRadios" id="optionsRadios2" value="PhoneCallsOK" onClick={(e) => setPhoneCallsOK(e.target.value)} />phone calls OK
                                                            </label>
                                                            <label id={styles.radio_label}>
                                                                <input type="radio" name="optionsRadios" id="optionsRadios3" value="TextSmsOK" onClick={(e) => setTextSmsOK(e.target.value)} />text/sms OK
                                                            </label>
                                                            <div>

                                                            </div>
                                                        </div>
                                                        <div id={styles.form_inside}>
                                                            <div className="" id={styles.form_list_input} >
                                                                <label htmlFor="">
                                                                    <span className="option-label">
                                                                        <span >
                                                                            <span > Extension   </span>
                                                                        </span></span>
                                                                </label>
                                                                <input type="text" />
                                                            </div>
                                                            <div className="" id={styles.form_list_input}>
                                                                <label htmlFor="">
                                                                    <span className="option-label" >
                                                                        <span >
                                                                            <span > Contact   </span>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                                <input type="text" />
                                                            </div>
                                                        </div>
                                                        <div id={styles.form_inside2} >
                                                            <div className="" id={styles.form_list_input}>
                                                                <label htmlFor="">
                                                                    <span className="option-label">
                                                                        <span>
                                                                            <span >Phone Number   </span>
                                                                        </span>
                                                                    </span>
                                                                </label>
                                                                <input type="text" />
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
                </div>

            </section>
            <section className={styles.formbuttonsection}>
                <button onClick={handleSubmit} >Form   Submit</button>
            </section>




        </div>
    )
};

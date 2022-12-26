// eslint-disable-next-line react-hooks/exhaustive-deps
import React, { textarea, useState, useRef, useEffect } from 'react'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/account_fianance.module.css"
import { useRouter } from 'next/router';
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';

import { useSelector } from 'react-redux';
import { selectUser } from '../components/features/UderSlice';
// import { data } from '../components/component/data'
import { setUserId } from 'firebase/analytics';



const Account_fianance = () => {



    const [frameSize, setFrameSize] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [rolledOver, setRolledOver] = useState("");
    const [broken, setBroken] = useState("");
    const [cryptocurrency, setCryptocurrency] = useState('');
    const [deliveryAvailable, setDeliveryAvailable] = useState('');
    const [includeMoreAds, setIncludeMoreAds] = useState('');
    const [modelName, setModelName] = useState('');
    const [dimensions, setDimensions] = useState('');
    const [dimensions1, setDimensions1] = useState('');
    const [dimensions2, setDimensions2] = useState('');
    const [dimensions3, setDimensions3] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [Available, setAvailable] = useState('');
    const [evcharging, setEvCharging] = useState("");
    const [airconditioning, setAirConditioning] = useState('');
    const [wheelchairaccessible, setWheelChairaccessible] = useState("");
    const [furnished, setFurnished] = useState("");
    const [nosmoking, setNoSmoking] = useState("");
    const [dogsok, setDogsOk] = useState("");
    const [catsok, setCatsOk] = useState("");
    const [individual, setIndividual] = useState(true);
    const [Weekends, setWeekends] = useState("");
    const [Weekdays, setWeekdays] = useState("");
    const [Overnight, setOvernight] = useState("");
    const [Evening, setEvening] = useState("");
    const [Afternoon, setAfternoon] = useState("");
    const [morning, setMorning] = useState("");
    const [NoPay, setNoPay] = useState("");
    const [pay, setPay] = useState("");
    const [section, setSection] = useState(false);
    const [elecommuting, setElecommuting] = useState("");
    const [nonprofit, setNonprofit] = useState("");
    const [internship, setInternship] = useState("");
    const [contactbyrecruiters, setContactbyrecruiters] = useState("")
    const [dataFetch, setDataFetch] = useState()
    const [posttitle, setPosttitle] = useState("");
    const [city, setCity] = useState();
    const [postalcode, setPostalcode] = useState("");
    const [discription, setDiscription] = useState("");
    const [employetype, setEmployetype] = useState("");
    const [jobtitle, setJobtitle] = useState("");
    const [select, setSelect] = useState("");
    const [compensation, setCompensation] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [upload, setUpload] = useState();
    const [file, setFile] = useState();
    const [userid, setUserid] = useState();

    const [myImageUrl, setMyImageUrl] = useState()
    const [HowmyPhoneNumber, setHowmyPhoneNumber] = useState('');
    const [PhoneCallsOK, setPhoneCallsOK] = useState('');
    const [TextSmsOK, setTextSmsOK] = useState('');
    const [CLMailRelay, setCLMailRelay] = useState('');
    const [RealEmail, setRealEmail] = useState('');
    const [NoEmail, setNoEmail] = useState('');
    const user = useSelector(selectUser)
    const router = useRouter()
    const { category } = router.query;
    const { subcategory } = router.query;
    console.log("Category", category)
    console.log("Sub", subcategory)
    console.log("Sub", posttitle)
    const handleCapacity = (e) => {

        setSelect(e.target.value);
    }

    const handleSection = () => {
        if (community === groups) {
            setSection()

        } else {

        }
    }

    const [usersName, setUsersName] = useState("");





    const Gcity = async () => {

        await fetch("https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572")
            .then(response => response.json())
            .then((data) => {
                const locations = ''
                setCity(data.city)
                if (address && address?.length) {
                    setCity(data.city)
                    //    setCityName(address)
                    //    setLocation(locations)
                } else {
                    //    setCityName(data.city.toLowerCase().replace(/\s/g, ''))
                    setCity(data.city)

                }
            }
            
            )
            .catch((error) => console.error(error))

    }






    // const Gcity = async () => {

    //     await fetch("https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572")
    //         .then(response => response.json())
    //         .then((data) => {
    //             const locations = ''
    //             setCity(data.city.toLowerCase().replace(/\s/g, ''))
    //             if (address && address?.length) {
    //                 setCity(data.city.toLowerCase().replace(/\s/g, ''))
    //                 //    setCityName(address)
    //                 //    setLocation(locations)
    //             } else {
    //                 //    setCityName(data.city.toLowerCase().replace(/\s/g, ''))
    //                 setCity(data.city.toLowerCase().replace(/\s/g, ''))

    //             }
    //         }
            
    //         )
    //         .catch((error) => console.error(error))

    // }
    const uploadImg = (e) => {
        //Banner
        if (e.target.files.length !== 0) {
            setUpload(e.target.files[0])
            setMyImageUrl(URL.createObjectURL(e.target.files[0]))
            const reader = new FileReader();
            if (e.target.files[0]) {
                reader.readAsDataURL(e.target.files[0])
            }
            reader.onload = (readerEvent) => {
                setFile(readerEvent.target.result);

            }
        }
    }
    const clearUploadImg = (e) => {
        setUpload(null)
        setMyImageUrl(null)
        setFile(null)
    }


    const addInagetoPost = () => {
        const reader = new FileReader();
        if (upload) {
            reader.readAsDataURL(upload)
        }
        reader.onload = (readerEvent) => {
            setFile(readerEvent.target.result);

        }
    }








    useEffect(() => {
        // Perform localStorage action
        const users = localStorage.getItem('email')
        console.log(users, "local storage")
        setUsersName(((users !== null) && (users !== undefined)) ? users : "")
        Gcity();
    }, [])

    const handleSubmit = async (e) => {
        let datae = new Date().getDate()
        let month = new Date().getMonth()
        let year = new Date().getFullYear()
        e.preventDefault()
        addInagetoPost()
        try {

            const docRef = await addDoc(collection(db, 'Form'), {

                serialNumber: serialNumber,
                frameSize: frameSize,
                rolledOver: rolledOver,
                broken: broken,
                includeMoreAds: includeMoreAds,
                deliveryAvailable: deliveryAvailable,
                cryptocurrency: cryptocurrency,
                dimensions1: dimensions1,
                dimensions2: dimensions2,
                dimensions3: dimensions3,
                modelName: modelName,
                manufacturer: manufacturer,
                Available: Available,
                evcharging: evcharging,
                airconditioning: airconditioning,
                wheelchairaccessible: wheelchairaccessible,
                nosmoking: nosmoking,
                furnished: furnished,
                dogsok: dogsok,
                catsok: catsok,
                Weekends: Weekends,
                Weekdays: Weekdays,
                Overnight: Overnight,
                Evening: Evening,
                Afternoon: Afternoon,
                morning: morning,
                NoPay: NoPay,
                pay: pay,
                CLMailRelay: CLMailRelay,
                RealEmail: RealEmail,
                PhoneCallsOK: PhoneCallsOK,
                NoEmail: NoEmail,
                TextSmsOK: TextSmsOK,
                HowmyPhoneNumber: HowmyPhoneNumber,
                elecommuting: elecommuting,
                nonprofit: nonprofit,
                internship: internship,
                contactbyrecruiters: contactbyrecruiters,
                posttitle: posttitle,
                // city: city.toLowerCase().replace(/\s/g, ''),
                city: city,
                postalcode: postalcode,
                discription: discription,
                employetype: employetype,
                jobtitle: jobtitle,
                compensation: compensation,
                company: company,
                phone: phone,
                select: select,
                subcategory, subcategory,
                category: category,
                date: `${month + 1}/${datae}/${year}`,
                cuser: usersName,

            })

            const ImageRef = ref(storage, `Form/${docRef.id}/image`);

            await uploadString(ImageRef, file, 'data_url').then(
                async (snapshot) => {
                    const downloadUrl = await getDownloadURL(ImageRef);
                    await updateDoc(doc(db, "Form", docRef.id), {
                        image: downloadUrl,

                    })
                })

            alert("form submited")
            console.log(docRef)
            router.push("/")
        } catch (err) {
            alert(err)
        }
    }

    const JobOff = () => {
        return (
            <section id={styles.account_section} >
                <div className="container">
                    <div className="row" id={styles.roww5}>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10" id={styles.col_account}>
                            <div className="form-bg" id={styles.form_bg}>
                                <div className="row">
                                    <div className="col-md-offset-3 col-md-12" id={styles.col_12}>
                                        <form>
                                            <div className="form-group" id={styles.form_group}>
                                                <label className=" control-label" >
                                                    <span className="option-label">
                                                        <span >
                                                            <span>Employee Type</span>
                                                        </span></span>

                                                </label> <br />
                                                <select name="" id={styles.control_label} onChange={handleCapacity}>
                                                    <option value="full-time">Full-time</option>
                                                    <option value="Part-time">Part-time</option>
                                                    <option value="contract">Contract</option>
                                                    <option value="employee's choice">Employee's Choice</option>
                                                </select>
                                            </div>
                                            <div className="form-group inside" id={styles.inside}>
                                                <div className="checkbox" id={styles.checkbox}>
                                                    <label>
                                                        <input type="checkbox" value="contactbyrecruiters" onClick={(e) => setContactbyrecruiters(e.target.value)} /> direct contact by recruiters is ok
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" value="internship" onClick={(e) => setInternship(e.target.value)} /> internship
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" value="nonprofit" onClick={(e) => setNonprofit(e.target.value)} /> non-profit organization
                                                    </label>
                                                    <label>
                                                        <input type="checkbox" value="elecommuting" onClick={(e) => setElecommuting(e.target.value)} /> elecommuting ok
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>

                    </div>
                </div>
            </section>
        )
    }

    const Job = () => {
        return (

            <section id={styles.job_title}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="row">
                                <div className='form-group'>
                                    <label htmlFor="" id={styles.job_title_label}>
                                        <span className="option-label">
                                            <span >
                                                <span>Job Title</span>
                                            </span></span>
                                    </label>
                                    <div className='form-control' id={styles.job_title_search}>
                                        <input type="text" id={styles.input} className='form-control' value={jobtitle} placeholder="job tittle" onChange={(e) => setJobtitle(e.target.value)} />
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="" id={styles.job_title_label}>
                                        <span className="option-label" >
                                            <span >
                                                <span >compensation </span>
                                            </span></span>
                                    </label>
                                    <div className='form-control' id={styles.job_title_search}>
                                        <input type="text" id={styles.input} className='form-control' value={compensation} placeholder="compensation" onChange={(e) => setCompensation(e.target.value)} />
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="" id={styles.job_title_label}>
                                        <span className="option-label" >
                                            <span >
                                                <span >Company</span>
                                            </span></span>
                                    </label>
                                    <div className='form-control' id={styles.job_title_search}>
                                        <input type="text" id={styles.input} className='form-control' value={company} placeholder="Company" onChange={(e) => setCompany(e.target.value)} />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        )

    }

    const MainForm = () => {
        return (

            <section id={styles.account_section}>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-5" id={styles.input1}>
                                    <span className="option-label" id={styles.MainForm}>
                                        <span>Post Title</span>
                                    </span>

                                    <input type="text" value={posttitle} placeholder="Post Title" onChange={(e) => setPosttitle(e.target.value)} />
                                </div>

                                <div className="col-lg-5" id={styles.input1}>
                                    <span className="option-label">
                                        <span className={styles.MainForm}>
                                            <span>City</span>
                                        </span>
                                    </span>
                                    <input value={city} type="text" placeholder="City" />
                                </div>

                                <div className="col-lg-2" id={styles.input1}>
                                    <span className="option-label" >
                                        <span className={styles.MainForm}>
                                            <span >Postal / Zip Code</span>
                                        </span>
                                    </span>
                                    <input type="text" value={postalcode} placeholder="Postal / Zip Code" onChange={(e) => setPostalcode(e.target.value)} />
                                </div>
                                <div className="col-lg-12 mt-3" id={styles.TextArea}>
                                    <div className="row">
                                        <div className="col-md-6" id={styles.postselectText}>
                                            <span>Only one job description per posting please.</span>
                                            <a href="">Please see our FAQ for job posters</a>
                                            <p>
                                                <b>
                                                    <span className="option-label">
                                                        <span className={styles.MainForm}>
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

        )
    }

    const GigOffCS = () => {
        return (
            <section id={styles.account_section} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10" id={styles.col_account}>
                            <div className="form-bg" id={styles.form_bg}>
                                <div className="row">
                                    <div className="col-md-offset-3 col-md-12" id={styles.col_12}>
                                        <form>
                                            <div className="form-group" id={styles.form_group}>
                                                <label>
                                                    <input type="checkbox" value="contactbyrecruiters" onClick={(e) => setContactbyrecruiters(e.target.value)} /> direct contact by recruiters is ok
                                                </label>
                                            </div>
                                        </form>
                                        <div className='form-group'>
                                            <label className={styles.paylabel}>
                                                <input type="radio" value="NoPay" onClick={(e) => setNoPay(e.target.value)} /> No Pay &nbsp;&nbsp;
                                                <input type="radio" value="pay" onClick={(e) => setPay(e.target.value)} /> Pay
                                            </label><br />
                                            <label htmlFor="" id={styles.job_title_label}>
                                                <span className="option-label" >
                                                    <span >
                                                        <span >compensation</span>
                                                    </span></span>
                                            </label>
                                            <div className='form-control' id={styles.job_title_search}>
                                                <input type="text" id={styles.input} className='form-control' value={compensation} placeholder="compensation" onChange={(e) => setCompensation(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )

    }

    const HousingOffRS = () => {
        return (

            <section>
                <div className="container" id={styles.property_form_fields}>
                    <div className="row">
                        <div className="container" id={styles.property_form_fields1}>
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-lg-3 " id={styles.fields_search}>
                                    per
                                    <input type="number" />
                                    <select name="" id={styles.list_pro} onChange={handleCapacity}>
                                        <option value="-">- </option>
                                        <option value="day">day</option>
                                        <option value="week">week</option>
                                        <option value="duplex">month</option>

                                    </select>
                                    sqft
                                    <input type="number" />
                                </div>
                                <div className="col-md-3 col-sm-3 col-lg-3" id={styles.fields_select}>
                                    <span>private room</span>
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="">-</option>
                                        <option value="">Room Not Private</option>
                                        <option value="">Room private</option>
                                    </select>
                                    <span>housing type</span>
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="land">land</option>
                                        <option value="condo">condo</option>
                                        <option value="appartment">appartment</option>
                                        <option value="flat">flat</option>
                                        <option value="duplex">duplex</option>
                                    </select>
                                    <span>laundry</span>
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="w/d im unit">w/d im unit</option>
                                        <option value="w/d hookups">w/d hookups</option>
                                        <option value="laundry in bldg">laundry in bldg</option>
                                        <option value="laundry in site">laundry in site</option>
                                        <option value="laundry in site">laundry in site</option>
                                    </select>
                                    <span>parking</span>

                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="carport">carport</option>
                                        <option value="attacted garage">attacted garage</option>
                                        <option value="detached garage">detached garage</option>
                                        <option value="off-street parking">off-street parking</option>
                                        <option value="valet parking">valet parking</option>
                                    </select>
                                    <span>bedrooms</span>

                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <span>bathrooms</span>

                                    <select name="" id="" onChange={handleCapacity} >
                                        <option value="-">-</option>
                                        <option value="shared">shared</option>
                                        <option value="split">split</option>
                                        <option value="1.5">1.5</option>
                                        <option value="2.5">2.5</option>
                                        <option value="4.5">4.5</option>
                                    </select>
                                </div>
                                <div className="col-md-3 col-sm-3 col-lg-3" id={styles.fields_checkbox}>
                                    <span>
                                        <input type="checkbox" name="" id="" value="cats ok" onClick={(e) => setCatsOk(e.target.value)} />&nbsp; cats ok
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" value="dogs ok" onClick={(e) => setDogsOk(e.target.value)} />&nbsp; dogs ok
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" value="furnished" onClick={(e) => setFurnished(e.target.value)} />&nbsp; furnished
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" value="no smoking" onClick={(e) => setNoSmoking(e.target.value)} />&nbsp; no smoking
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" value="wheelchair accessible" onClick={(e) => setWheelChairaccessible(e.target.value)} />&nbsp; wheelchair accessible
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" value="air conditioning" onClick={(e) => setAirConditioning(e.target.value)} />&nbsp; air conditioning
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" value="EV charging" onClick={(e) => setEvCharging(e.target.value)} />&nbsp; EV charging
                                    </span>

                                </div>
                                <div className="col-md-3 col-sm-3 col-lg-3" >

                                    <span >
                                        Available <br />
                                        <input type="text" id={styles.pro_inp_2} value={Available} onChange={(e) => setAvailable(e.target.value)} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const HousingOffAH = () => {
        return (
            <section>
                <div className="container" id={styles.property_form_fields}>
                    <div className="row">
                        <div className="container" id={styles.property_form_fields1}>
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-lg-4  " id={styles.fields_search}>
                                    price
                                    <input type="number" />

                                    <select name="housing type" id={styles.list_pro} onChange={handleCapacity}>
                                        <option value="-">- </option>
                                        <option value="day">day</option>
                                        <option value="week">week</option>
                                        <option value="duplex">month</option>
                                    </select>
                                    sqft
                                    <input type="number" />
                                </div>
                                <div className="col-md-4 col-sm-4 col-lg-4" id={styles.fields_select}>
                                    <span>private room</span>
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="">-</option>
                                        <option value="">Room Not Private</option>
                                        <option value="">Room private</option>
                                    </select>
                                    <span>housing type</span>
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="land">land</option>
                                        <option value="condo">condo</option>
                                        <option value="appartment">appartment</option>
                                        <option value="flat">flat</option>
                                        <option value="duplex">duplex</option>
                                    </select>
                                    <span>laundry</span>
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="w/d im unit">w/d im unit</option>
                                        <option value="w/d hookups">w/d hookups</option>
                                        <option value="laundry in bldg">laundry in bldg</option>
                                        <option value="laundry in site">laundry in site</option>
                                        <option value="laundry in site">laundry in site</option>
                                    </select>
                                    <span>parking</span>

                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="carport">carport</option>
                                        <option value="attacted garage">attacted garage</option>
                                        <option value="detached garage">detached garage</option>
                                        <option value="off-street parking">off-street parking</option>
                                        <option value="valet parking">valet parking</option>
                                    </select>
                                    <span>bedrooms</span>

                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <span>bathrooms</span>

                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="shared">shared</option>
                                        <option value="split">split</option>
                                        <option value="1.5">1.5</option>
                                        <option value="2.5">2.5</option>
                                        <option value="4.5">4.5</option>
                                    </select>
                                </div>
                                <div className="col-md-4 col-sm-4 col-lg-4" id={styles.fields_checkbox}>
                                    <span>
                                        <input type="checkbox" name="" id="" value="cats ok" onClick={(e) => setCatsOk(e.target.value)} />&nbsp; cats ok
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" value="dogs ok" onClick={(e) => setDogsOk(e.target.value)} />&nbsp; dogs ok
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" value="furnished" onClick={(e) => setFurnished(e.target.value)} />&nbsp; furnished
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" value="no smoking" onClick={(e) => setNoSmoking(e.target.value)} />&nbsp; no smoking
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" value="wheelchair accessible" onClick={(e) => setWheelChairaccessible(e.target.value)} />&nbsp; wheelchair accessible
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" value="air conditioning" onClick={(e) => setAirConditioning(e.target.value)} />&nbsp; air conditioning
                                    </span>
                                    <span>
                                        <input type="checkbox" name="" id="" value="EV charging" onClick={(e) => setEvCharging(e.target.value)} />&nbsp; EV charging
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <span></span>
                        <div className="col-md-12 col-sm-12 col-lg-12" >
                            <span >
                                Available <br />
                                <input type="text" id={styles.pro_inp_2} value={Available} placeholder="select date" onChange={(e) => setAvailable(e.target.value)} />
                            </span>

                            <div className={styles.form_pro_sec}>
                                <label htmlFor="" className={styles.form_pro_sec1}>
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="">-</option>
                                        <option value="Monday 2022-6-24">Monday 2022-6-24</option>
                                        <option value="tuesday 2022-6-24">tuesday 2022-6-24</option>
                                        <option value="wednesday 2022-6-24">wednesday 2022-6-24</option>
                                        <option value="thursday 2022-6-24">thursday 2022-6-24</option>
                                        <option value="friday 2022-6-24">friday 2022-6-24</option>
                                    </select>
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="">-</option>
                                        <option value="Monday 2022-6-24">Monday 2022-6-24</option>
                                        <option value="tuesday 2022-6-24">tuesday 2022-6-24</option>
                                        <option value="wednesday 2022-6-24">wednesday 2022-6-24</option>
                                        <option value="thursday 2022-6-24">thursday 2022-6-24</option>
                                        <option value="friday 2022-6-24">friday 2022-6-24</option>
                                    </select>
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="">-</option>
                                        <option value="Monday 2022-6-24">Monday 2022-6-24</option>
                                        <option value="tuesday 2022-6-24">tuesday 2022-6-24</option>
                                        <option value="wednesday 2022-6-24">wednesday 2022-6-24</option>
                                        <option value="thursday 2022-6-24">thursday 2022-6-24</option>
                                        <option value="friday 2022-6-24">friday 2022-6-24</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const HousingOffOC = () => {
        return (
            <section id={styles.account_section} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10" id={styles.col_account}>
                            <div className="form-bg" id={styles.form_bg}>
                                <div className="row">
                                    <div className="col-md-offset-3 col-md-12" id={styles.col_12}>
                                        <form>
                                            <div className="form-group" id={styles.form_group_sec2}>
                                                <label className=" control-label" >
                                                    <span className="option-label">
                                                        <span>rent</span>

                                                    </span>

                                                </label> <br />
                                                <select name="" id={styles.control_label} onChange={handleCapacity}>
                                                    <option value="full-time">-</option>
                                                    <option value="Part-time"></option>
                                                    <option value="contract">contract</option>
                                                    <option value="employee's choice">employee's choice</option>
                                                </select>
                                                <span>per</span>
                                                <select name="" id={styles.control_label} onChange={handleCapacity}>
                                                    <option value="full-time">-</option>
                                                    <option value="Part-time"></option>
                                                    <option value="contract">contract</option>
                                                    <option value="employee's choice">employee's choice</option>
                                                </select>


                                                <span className={styles.form_ooo}>
                                                    <span>sqft</span>
                                                    <input type="number" name='number' onChange={(e) => setAvailable(e.target.value)} />
                                                </span>
                                            </div>
                                            <div className="form-group inside" id={styles.inside}>
                                                <div className="checkbox" id={styles.checkbox}>
                                                    <label>
                                                        <input type="checkbox" value="contactbyrecruiters" onClick={(e) => setContactbyrecruiters(e.target.value)} /> air conditioning
                                                    </label>

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const HousingWanWAp = () => {
        return (
            <section>
                <div className="container" id={styles.house_wan_pos} >
                    <div className="row" id={styles.house_wan_pos2}>
                        <div className="col-lg-1 "></div>
                        <div className="col-lg-10 col-md-12 col-sm-12" id={styles.house_wan_pos3}>
                            <input type="checkbox" name="" id="" value="cats ok" onClick={(e) => setCatsOk(e.target.value)} /> &nbsp; cats ok <br />
                            <input type="checkbox" name="" id="" value="dogs ok" onClick={(e) => setDogsOk(e.target.value)} /> &nbsp;dogs ok <br />
                            <input type="checkbox" name="" id="" value="air conditioning" onClick={(e) => setAirConditioning(e.target.value)} /> &nbsp;air conditioning <br />

                        </div>
                        <div className="col-lg-1  "></div>

                    </div>
                </div>
            </section>
        )
    }

    const HousingWanRE = () => {
        return (
            <section>
                <div className="container" id={styles.house_wan_pos}>
                    <div className="row" id={styles.house_wan_pos2}>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id={styles.house_wan_pos3}>
                            <input type="checkbox" name="" id="" value="air conditioning" onClick={(e) => setAirConditioning(e.target.value)} /> &nbsp; air conditioning<br />
                        </div>
                    </div>
                </div>
            </section>
        )

    }

    const ResumeSE = () => {
        return (
            <section>
                <div className="container" id={styles.container_res} >
                    <div className="row" id={styles.Resume_1}>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10 col-sm-10 col-xs-10 col-md-10" id={styles.col_Resume}>
                            <div className="form-control" id={styles.Resume_input}>
                                <input type="checkbox" value="morning" onClick={(e) => setMorning(e.target.value)} />
                                <label htmlFor="">morning</label>
                                <input type="checkbox" value="Afternoon" onClick={(e) => setAfternoon(e.target.value)} />
                                <label htmlFor="">Afternoon</label>
                                <input type="checkbox" value="Evening" onClick={(e) => setEvening(e.target.value)} />
                                <label htmlFor="">Evening</label>
                                <input type="checkbox" value="Overnight" onClick={(e) => setOvernight(e.target.value)} />
                                <label htmlFor="">Overnight</label>
                                <input type="checkbox" value="Weekdays" onClick={(e) => setWeekdays(e.target.value)} />
                                <label htmlFor="">Weekdays  </label>
                                <input type="checkbox" value="Weekends" onClick={(e) => setWeekends(e.target.value)} />
                                <label htmlFor="">Weekends</label>
                            </div>
                        </div>
                        <div className="col-lg-1 col-lg-1 col-xs-1 col-md-1"></div>

                    </div>
                    <br />
                    <div className="row" id={styles.Resume_post}>
                        <div className="col-lg-5" id={styles.col_Resume_post}>
                            <div className="form-group" id={styles.Resume_input_post}>
                                <select name="" id="" onChange={handleCapacity}>
                                    <option value="-">-</option>
                                    <option value="less the high school">less the high school</option>
                                    <option value="high school/GED<">high school/GED</option>
                                    <option value="some college">some college</option>
                                    <option value="master">master</option>
                                    <option value="bachlor's">bachlor's</option>
                                    <option value="doctoral">doctoral</option>

                                </select>

                            </div>

                        </div>
                        <div className="col-lg-5" id={styles.rsume_post_2}>
                            <div className="form-group" id={styles.Resume_input_post}>
                                <input type="checkbox" /> &nbsp;&nbsp;&nbsp;  direct contact by recruiters is ok
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }

    const MainFooter = () => {
        return (
            <section id={styles.secForm}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <div className="form-bg" id={styles.form_bg2}>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 form-group" id={styles.form_group2}>
                                            <div className="row" id={styles.secForm_row}>
                                                <div className="col-md-4 p-4">
                                                    <label className="control-label" id={styles.control_label2}>
                                                        <span className="option-label">
                                                            <span>
                                                                <span>Email    </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <input type="text" placeholder='Enter Your Email' className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} id={styles.form_control2} />
                                                    <div id={styles.form_inside_list}>
                                                        <span><b> Email privacy options [?]</b> </span>
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="CLMailRelay" onClick={(e) => setCLMailRelay(e.target.value)} /> &nbsp;WL mail relay (recommended)
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="RealEmail" onClick={(e) => setRealEmail(e.target.value)} /> &nbsp;Show my real email address
                                                        </label>
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="NoEmail" onClick={(e) => setNoEmail(e.target.value)} /> &nbsp;No replies to this email
                                                        </label>
                                                    </div>


                                                </div>

                                                <div className="col-md-6 col-sm-12" >
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
                        <div className="col-lg-1">

                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const ForSaleAO = () => {
        return (
            <section>
                <div className="container">
                    <div className="row" id={styles.Forsale_form_row}>
                        <div action="" id={styles.Forsale_form}>
                            <div className="row">
                                <div className="col-md-4 col-lg-4" id={styles.Forsale_col}>
                                    <span>make / manufacturer</span> <br />
                                    <input type="text" onChange={(e) => setManufacturer(e.target.value)} /><br />
                                    <span>model name / number</span> <br />
                                    <input type="text" onChange={(e) => setModelName(e.target.value)} /><br />
                                    <span>size / dimensions</span> <br />
                                    <input type="text" placeholder='length x width x height' value={dimensions} onChange={(e) => setDimensions(e.target.value)} />
                                </div>
                                <div className="col-md-4 col-lg-4" id={styles.Forsale_col}>
                                    <span>condition</span><br />
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="">-</option>
                                        <option value="new">new</option>
                                        <option value="liked new">liked new</option>
                                        <option value="excellent">excellent</option>
                                        <option value="good">good</option>
                                        <option value="fair">fair</option>
                                    </select> <br />
                                    <span>language of posting</span><br />

                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="english">english</option>
                                        <option value="espanol">espanol</option>
                                        <option value="deutsch">deutsch</option>
                                        <option value="italiano">italiano</option>
                                        <option value="nederlands">nederlands</option>
                                    </select>
                                </div>
                                <div className="col-md-4 col-lg-4" id={styles.Forsale_col}>
                                    <span>
                                        <input type="checkbox" value="cryptocurrency ok" onClick={(e) => setCryptocurrency(e.target.value)} /> &nbsp; cryptocurrency ok <br />
                                    </span>
                                    <span>
                                        <input type="checkbox" value="delivery available" onClick={(e) => setDeliveryAvailable(e.target.value)} /> &nbsp;  delivery available <br />
                                    </span>
                                    <span>
                                        <input type="checkbox" value="include more ads by this user link" onClick={(e) => setIncludeMoreAds(e.target.value)} /> &nbsp; include "more ads by this user" link <br />
                                    </span>
                                    <label htmlFor=""></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    const ForSaleAUSM = () => {
        return (
            <section>
                <div className="container">
                    <div className="row" id={styles.Forsale_form_row}>
                        <div action="" id={styles.Forsale_form}>
                            <div className="row">
                                <div className="col-md-4 col-lg-4" id={styles.Forsale_col}>
                                    <span>make / manufacturer</span> <br />
                                    <input type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} /><br />
                                    <span>model name / number</span> <br />
                                    <input type="text" value={modelName} onChange={(e) => setModelName(e.target.value)} /><br />
                                    <span>size / dimensions</span> <br />
                                    <input type="text" value={dimensions1} onChange={(e) => setDimensions1(e.target.value)} /><br />
                                    <span>size2 / dimensions</span> <br />
                                    <input type="text" value={dimensions2} onChange={(e) => setDimensions2(e.target.value)} /><br />
                                    <span>size3 / dimensions</span> <br />
                                    <input type="text" placeholder='(e.g 42,000)' value={dimensions3} onChange={(e) => setDimensions3(e.target.value)} /><br />
                                    <input type="checkbox" name="" id="" value="odometer broken" onClick={(e) => setBroken(e.target.value)} /> &nbsp; odometer broken <br />
                                    <input type="checkbox" name="" id="" value="odometer rolled over" onClick={(e) => setRolledOver(e.target.value)} /> &nbsp; odometer rolled over
                                </div>

                                <div className="col-md-4 col-lg-4" id={styles.Forsale_col}>
                                    <span>condition</span><br />
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="">-</option>
                                        <option value="new">new</option>
                                        <option value="liked new">liked new</option>
                                        <option value="excellent">excellent</option>
                                        <option value="good">good</option>
                                        <option value="fair">fair</option>
                                    </select> <br />
                                    <span>language of posting</span><br />
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="english">english</option>
                                        <option value="espanol">espanol</option>
                                        <option value="deutsch">deutsch</option>
                                        <option value="italiano">italiano</option>
                                        <option value="nederlands">nederlands</option>
                                    </select>
                                </div>
                                <div className="col-md-4 col-lg-4" id={styles.Forsale_col}>
                                    <span>
                                        <input type="checkbox" value="cryptocurrency ok" onClick={(e) => setCryptocurrency(e.target.value)} /> &nbsp; cryptocurrency ok <br />
                                    </span>
                                    <span>
                                        <input type="checkbox" value="delivery available" onClick={(e) => setDeliveryAvailable(e.target.value)} /> &nbsp;  delivery available <br />
                                    </span>
                                    <span>
                                        <input type="checkbox" value="include more ads by this user link" onClick={(e) => setIncludeMoreAds(e.target.value)} /> &nbsp; include "more ads by this user" link <br />
                                    </span>
                                    <label htmlFor=""></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        )

    }

    const ForSaleAWT = () => {
        return (

            <section>
                <div className="container">
                    <div className="row" id={styles.ForsaleAuto_wheel_row}>
                        <div className={styles.ForsaleAuto_wheel}>
                            <div className="row">
                                <div className="col-md-6" id={styles.ForsaleAuto_wheel_col}>
                                    <span>language of posting</span><br />
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="english">english</option>
                                        <option value="afrikaans">afrikaans</option>
                                        <option value="catala">catala</option>
                                        <option value="dansk">dansk</option>
                                        <option value="italiano">-italiano</option>
                                        <option value="norsk">norsk</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <input type="checkbox" name="" id="" value="cryptocurrency ok" onClick={(e) => setCryptocurrency(e.target.value)} />&nbsp;cryptocurrency ok <br />
                                    <input type="checkbox" name="" id="" value="delivery available" onClick={(e) => setDeliveryAvailable(e.target.value)} />&nbsp;delivery available <br />
                                    <input type="checkbox" value="include more ads by this user link" onClick={(e) => setIncludeMoreAds(e.target.value)} />&nbsp;include "more ads by this user" link <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )

    }

    const ForSaleBi = () => {
        return (
            <section>
                <div className="container">
                    <div className="row" id={styles.Forsale_form_row}>
                        <div action="" id={styles.Forsale_form}>
                            <div className="row">
                                <div className="col-md-4 col-lg-4" id={styles.Forsale_col}>
                                    <span>frame size</span> <br />
                                    <input type="text" value="frame size" onChange={(e) => setFrameSize(e.target.value)} /><br />
                                    <span>make / manufacturer</span> <br />
                                    <input type="text" value="make / manufacturer" onChange={(e) => setManufacturer(e.target.value)} /><br />
                                    <span>model name / number</span> <br />
                                    <input type="text" value="model name / number" onChange={(e) => setModelName(e.target.value)} /><br />
                                    <span>serial number</span> <br />
                                    <input type="text" value="serial number" onChange={(e) => setSerialNumber(e.target.value)} />
                                </div>
                                <div className="col-md-4 col-lg-4" id={styles.Forsale_col}>
                                    <span>bicycle type</span><br />
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="bmx">bmx</option>
                                        <option value="cruiser">cruiser</option>
                                        <option value="cyclocross">cyclocross</option>
                                        <option value="kids">kids</option>
                                        <option value="mountain">mountain</option>
                                    </select> <br />
                                    <span>bicycle frame material </span><br />
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="steel">steel</option>
                                        <option value="alloy">alloy</option>
                                        <option value="carbon fiber">carbon fiber</option>
                                        <option value="composite">composite</option>
                                        <option value="titanium">titanium</option>
                                    </select> <br />
                                    <span>wheel size</span><br />
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="10 inch">10 inch</option>
                                        <option value="20 inch">20 inch</option>
                                        <option value="12 inch">12 inch</option>
                                        <option value="14 inch">14 inch</option>
                                        <option value="16 inch">16 inch</option>
                                    </select> <br />
                                    <span>suspension</span><br />
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="non rigid">non rigid</option>
                                        <option value="suspension fork">suspension fork</option>
                                        <option value="frame and fork">frame and fork</option>
                                        <option value="other">other</option>
                                        <option value="">-</option>
                                    </select> <br />
                                    <span>brake type</span><br />
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="">-</option>
                                        <option value="caliper">caliper</option>
                                        <option value="coaster">coaster</option>
                                        <option value="drum">drum</option>
                                        <option value="hydraulic">hydraulic</option>
                                        <option value="u-brakes">u-brakes</option>
                                    </select> <br />
                                    <span>handlebar type</span><br />
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="aero">aero</option>
                                        <option value="bmx">bmx</option>
                                        <option value="bullhorn">bullhorn</option>
                                        <option value="drop">drop</option>
                                        <option value="flat">flat</option>
                                    </select> <br />
                                    <span>electric assist</span><br />
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="none">none</option>
                                        <option value="pedal assist">pedal assist</option>
                                        <option value="throttle">throttle</option>
                                        <option value="other">other</option>
                                        <option value="">-</option>
                                    </select> <br />
                                    <span>condition</span><br />
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="">-</option>
                                        <option value="new">new</option>
                                        <option value="liked new">liked new</option>
                                        <option value="excellent">excellent</option>
                                        <option value="good">good</option>
                                        <option value="fair">fair</option>
                                    </select><br />
                                    <span>language of posting</span><br />
                                    <select name="" id="" onChange={handleCapacity}>
                                        <option value="-">-</option>
                                        <option value="english">english</option>
                                        <option value="espanol">espanol</option>
                                        <option value="deutsch">deutsch</option>
                                        <option value="italiano">italiano</option>
                                        <option value="nederlands">nederlands</option>
                                    </select>

                                </div>
                                <div className="col-md-4 col-lg-4" id={styles.Forsale_col}>
                                    <span>
                                        <input type="checkbox" value="cryptocurrency ok" onClick={(e) => setCryptocurrency(e.target.value)} /> &nbsp; cryptocurrency ok <br />
                                    </span>
                                    <span>
                                        <input type="checkbox" value="delivery available" onClick={(e) => setDeliveryAvailable(e.target.value)} /> &nbsp;  delivery available <br />
                                    </span>
                                    <span>
                                        <input type="checkbox" value="include more ads by this user link" onClick={(e) => setIncludeMoreAds(e.target.value)} /> &nbsp; include "more ads by this user" link <br />
                                    </span>
                                    <label htmlFor=""></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <div className={styles.body}>
            {Header()}

            {MainForm()}
            {/*----------------------section JobOffered ------------>*/}
            {/**/}
            {(category === "JobOffer" && subcategory === "account/finance") && (
                <>
                    {JobOff()}
                    {Job()}
                </>
            )}
            {(category === "JobOffer" && subcategory === "healthcare") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "human resource") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "marketing/advertising/pr") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "retail/wholesale") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "salon/spa/fitness") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "security") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "skilled trades/artisan") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "admin") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "architect/engineer/cad (no IT/computer jobs here please)") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "art/media/design") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "business/mgmt") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "customer service") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "et cetera") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "food/beverage/hospitality") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "general labor") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "legal/paralegal") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}{(category === "JobOffer" && subcategory === "manufacturing") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "nonprofit") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "real estate") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "sales") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "science/biotech") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "software/qa/dba/etc") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "systems/networking") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "technical support") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "transportation") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "tv/film/video/radio") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "JobOffer" && subcategory === "web/html/info design") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )} {(category === "JobOffer" && subcategory === "writing/editing") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {/*----------------end-----------*/}

            {/*----------------------section GigOffered hire service computer------------>*/}
            <div>
                {(category === "GigOffered" && subcategory === "domestic gigs") && (
                    <span>
                        {GigOffCS()}
                    </span>
                )}
                {(category === "GigOffered" && subcategory === "creative gigs") && (
                    <span>
                        {GigOffCS()}
                    </span>
                )}
                {(category === "GigOffered" && subcategory === "crew gigs") && (
                    <span>
                        {GigOffCS()}
                    </span>
                )}
                {(category === "GigOffered" && subcategory === "computer gigs") && (
                    <span>
                        {GigOffCS()}
                    </span>
                )}
                {(category === "GigOffered" && subcategory === "writing gigs") && (
                    <span>
                        {GigOffCS()}
                    </span>
                )}
                {(category === "GigOffered" && subcategory === "talent gigs") && (
                    <span>
                        {GigOffCS()}
                    </span>
                )}
                {(category === "GigOffered" && subcategory === "labor gigs") && (
                    <span>
                        {GigOffCS()}
                    </span>
                )}
                {(category === "GigOffered" && subcategory === "event gigs") && (
                    <span>
                        {GigOffCS()}
                    </span>
                )}
            </div>
            {/*----------------end-----------*/}

            {/*----------------------section housing offer room & share------------>*/}
            {(category === "HousingOffered" && subcategory === "rooms & shares") && (
                <span>
                    {HousingOffRS()}
                </span>
            )}
            {(category === "HousingOffered" && subcategory === "housing swap") && (
                <span>
                    {HousingOffRS()}
                </span>
            )}
            {(category === "HousingOffered" && subcategory === "vacation rentals") && (
                <span>
                    {HousingOffRS()}
                </span>
            )}
            {/**/}

            {/*----------------end-----------*/}

            {/*----------------------section housing offer appartment / house------------>*/}

            {(category === "HousingOffered" && subcategory === "apartments / housing for rent") && (
                <span>
                    {HousingOffAH()}
                </span>
            )}
            {(category === "HousingOffered" && subcategory === "real estate - by broker") && (
                <span>
                    {HousingOffAH()}
                </span>
            )}
            {(category === "HousingOffered" && subcategory === "real estate - by owner") && (
                <span>
                    {HousingOffAH()}
                </span>
            )}
            {(category === "HousingOffered" && subcategory === "sublets & temporary") && (
                <span>
                    {HousingOffAH()}
                </span>
            )}
            {/**/}
            {/*----------------end-----------*/}

            {/*----------------------section housing offer office and commercial------------>*/}
            {(category === "HousingOffered" && subcategory === "office & commercial") && (
                <span>
                    {HousingOffOC()}
                </span>
            )}
            {(category === "HousingOffered" && subcategory === "parking & storage") && (
                <span>{HousingOffOC()}</span>
            )}
            {/**/}

            {/*----------------end-----------*/}
            {/*----------------------section housing want  wanted apts------------>*/}
            {(category === "HousingWanted" && subcategory === "wanted: apts") && (
                <span>{HousingWanWAp()}</span>
            )}
            {/**/}
            {/*----------------end-----------*/}
            {/*----------------------section housing want  wanted real estate------------>*/}
            {(category === "HousingWanted" && subcategory === "wanted: real estate") && (
                <>
                    {HousingWanRE()}

                </>
            )}
            {(category === "HousingWanted" && subcategory === "wanted: sublet/temp") && (
                <span>{HousingWanWAp()}</span>
            )}{(category === "HousingWanted" && subcategory === "wanted: room/share") && (
                <span>{HousingWanWAp()}</span>
            )}
            {/**/}
            {/*----------------end-----------*/}


            {/*----------------------section Resume I'm an individual seeking employment------------>*/}
            {(category === "Resume" && subcategory === "I'm an individual seeking employment") && (
                <ResumeSE />
            )}

            {(category === "Resume" && subcategory === "account/finance") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "healthcare") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "human resource") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "marketing/advertising/pr") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "retail/wholesale") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "salon/spa/fitness") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "security") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "skilled trades/artisan") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "admin") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "architect/engineer/cad (no IT/computer jobs here please)") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "art/media/design") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "business/mgmt") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "customer service") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "et cetera") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "food/beverage/hospitality") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "general labor") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "legal/paralegal") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}{(category === "Resume" && subcategory === "manufacturing") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "nonprofit") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "real estate") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "sales") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "science/biotech") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "software/qa/dba/etc") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "systems/networking") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "technical support") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "transportation") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "tv/film/video/radio") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}
            {(category === "Resume" && subcategory === "web/html/info design") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )} {(category === "Resume" && subcategory === "writing/editing") && (
                <div>
                    {JobOff()}
                    {Job()}
                </div>
            )}

            {/*----------------end-----------*/}
            {/*----------------------section JOB------------>*/}
            {/*{Job()}*/}
            {/*----------------end-----------*/}
            {/*----------------------section For Sale antique ------------>*/}
            {(category === "ForSaleByOwner" && subcategory === "antiques") && (
                <span>{ForSaleAO()}</span>
            )}
            {(category === "ForSaleByOwner" && subcategory === "appliances") && (
                <span>{ForSaleAO()}</span>
            )}
            {(category === "ForSaleByOwner" && subcategory === "arts & crafts") && (
                <span>{ForSaleAO()}</span>
            )}
            {(category === "ForSaleByOwner" && subcategory === "auto parts") && (
                <span>{ForSaleAO()}</span>
            )}
            {(category === "ForSaleByOwner" && subcategory === "baby & kid stuff") && (
                <span>{ForSaleAO()}</span>
            )}
            {(category === "ForSaleByOwner" && subcategory === "bicycle parts") && (
                <span>{ForSaleAO()}</span>
            )}
            {(category === "ForSaleByOwner" && subcategory === "boat parts") && (
                <span>{ForSaleAO()}</span>
            )}
            {/**/}
            {/*----------------end-----------*/}
            {/*----------------------sectionfor sale atvs, utvs, snowmobiles - by owner ------------>*/}
            {(category === "ForSaleByOwner" && subcategory === "atvs/utvs/snowmobiles") && (
                <span>{ForSaleAUSM()}</span>
            )}
            {/**/}

            {/*----------------end-----------*/}
            {/*----------------------section for sale  auto wheels & tires - by owner------------>*/}
            {(category === "ForSaleByOwner" && subcategory === "auto wheels & tires") && (
                <span>{ForSaleAWT()}</span>
            )}
            {(category === "ForSaleByOwner" && subcategory === "aviation") && (
                <span>{ForSaleAWT()}</span>
            )}
            {(category === "ForSaleByOwner" && subcategory === "barter") && (
                <span>{ForSaleAWT()}</span>
            )}
            {/**/}

            {/*----------------end-----------*/}
            {/*----------------------section for sale  bicycle------------>*/}
            {(category === "ForSaleByOwner" && subcategory === "bicycles") && (
                <ForSaleBi />
            )}

            {/**/}
            {/*----------------end-----------*/}




            {/*subcategory === I'm an individual seeking employmen section*/}


            {MainFooter()}


            <section className={styles.formbuttonsection}>
                <input type="file" onChange={(e) => uploadImg(e)} />
                {myImageUrl ?
                    <img src={myImageUrl} className="selectimage" />
                    : ''
                }
                <button onClick={handleSubmit} >Form Submit</button>


            </section>





        </div>
    )
};

export default Account_fianance;

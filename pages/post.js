import React, { main, useState, useEffect } from 'react';
import styles from '../styles/post.module.css'
import Sider from '../components/component/Sider';
import "bootstrap/dist/css/bootstrap.min.css";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from './Header'
import { JobList } from '../components/component/JobList'
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { db } from '../firebase'
import { useRouter } from 'next/router';
import { Category } from 'styled-icons/boxicons-regular';
import { CalendarDate } from 'styled-icons/bootstrap';
import Spinner from '../pages/Spinner'




function post() {
    const router = useRouter()
    useEffect(() => {
        if (!router.isReady) return;

        onSnapshot(
            query(collection(db, "Form"), where("subcategory", "==", openCat !== undefined ? openCat : '')), (snapshot) => {
                setJob(snapshot.docs, "shorty")
            })
    }, [router.isReady]);

    var { openCat, city, date } = router.query;
    const [on, setOn] = useState(true);
    const [posttitle, setPosttitle] = useState('');
    const [calendarDate, setCalendarDate] = useState();
    const [job, setJob] = useState([]);
    const [selectData, setSelectData] = useState();
    const [timeData, setTimeData] = useState();
    console.log(job, "hey");
    console.log(openCat, 'queryfeild1bahar', city, 'queryfeild2', router.query);




    // "subcategory", "==", openCat), 
    // , where("city", "==", city))
    console.log(job)
    const renderPost = () => {
        if (job && job?.length) {
            return job.map((item, index) => {
                // eslint-disable-next-line react/jsx-key
                return <JobList
                    obj={item}
                />
            })
        }
    };



    const handleOn = () => {
        setOn(!on);

    };


    const handleInputChange = (e) => {

        setPosttitle(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let searchQuerys = ''
        if (posttitle && posttitle?.length) {
            searchQuerys = posttitle

        }
        onSnapshot(
            query(collection(db, "Form"), where("posttitle", "==", searchQuerys)), (snapshot) => {
                setPosttitle(snapshot.docs)
                console.log(snapshot.docs, 'this one is ');
            })
    }

    return (
        <>
            <div id={styles.body}>
                <Header />
            <div id="setHeaderBottomGap"></div>
                <div id={styles.app}>
                    <aside id={on ? styles.to_right : ''}>
                        <div className = {styles.doubleArrow} >

                        {on ? <FontAwesomeIcon icon={faAnglesLeft} id={styles.icon} onClick={handleOn} /> :
                            <FontAwesomeIcon icon={faAnglesRight} id={styles.icon} onClick={handleOn} />}
                        </div>
                        <div className='col-md-10 col-sm-10' id={styles.cityName}>
                            <h1>{city}</h1>
                            <div className={`${"form-group my-5"} ${styles.right_side_post}`}>
                                <input type="text" placeholder='Search artists' className={`${""} ${styles.rigth_side_input}`} onChange={handleInputChange} />
                                <FontAwesomeIcon icon={faMagnifyingGlass} id={styles.search_icon} onClick={handleSubmit} />
                            </div>
                        </div>
                        <div className={`${'container my-5'}`}>
                            <div className="row d-flex justify-content-center align-items-center" >
                                <div className='col-lg-4 col-md-4' id={styles.text}>

                                    {!renderPost() ? <Spinner /> : renderPost()}
                                    {/* {renderPost()} */}
                                </div>
                            </div>
                        </div>
                    </aside>
                    {on && <Sider openClass="open" />}
                </div>
            </div>
        </>
    )
}



export default post;
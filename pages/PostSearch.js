/* eslint-disable react-hooks/rules-of-hooks */
import React, { main, useState, useEffect } from 'react';
import styles from '../styles/post.module.css'
import Sider from '../components/component/Sider';
import "bootstrap/dist/css/bootstrap.min.css";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
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






function PostSearch() {

    const router = useRouter()
    const { openCat, city, date, cDate, sinput } = router.query;
    const [on, setOn] = useState(true);
    const [posttitle, setPosttitle] = useState('');
    const [calendarDate, setCalendarDate] = useState();
    const [job, setJob] = useState([]);
    const [selectData, setSelectData] = useState();
    const [error, setError] = useState("Not found");
    const [timeData, setTimeData] = useState();
    // const [cityName,setCityName] = useState();
    console.log("categor", openCat);
    console.log("categor", city);


    useEffect(() => {
        if (!router.isReady) return;

        onSnapshot(
            query(collection(db, "Form"), where("subcategory", "==", openCat !== undefined ? openCat : '')), (snapshot) => {
                setJob(snapshot.docs, "shorty")
            })
    }, [router.isReady]);
    
    const getPost = () => {

        if (!router.isReady) {

            return onSnapshot(
                query(collection(db, "Form"), where("posttitle", "==", sinput), where("date", "==", cDate)), (snapshot) => {
                    setJob(snapshot.docs)


                })
        }


    };
    console.log(job, "asbfjasvfyhavfj")

    const renderPost = () => {

        if (job && job?.length) {
            // setTimeData(job.map(item=>item.data().timestamp))
            // console.log('state', timeData)
            return job.map((item, index) => {
                // eslint-disable-next-line react/jsx-key
                // console.log(new Date(item.data().timestamp.seconds).toLocaleDateString(), "Date")
                return <JobList key={index}
                    obj={item}
                />
            })
        }

    };


    useEffect(() => {


        getPost();


    }, [])

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
                console.log(snapshot.docs);
            })

    }


    // console.log(city, "city")

    return (
        <>
            <div id={styles.body}>
                <Header />
            <div id="setHeaderBottomGap"></div>

                <div id={styles.app}>
                    <aside id={on ? styles.to_right : ''}>
                        <div className='col-md-12' id={styles.cityName}>
                            <h1>{city}</h1>
                            <a href="#" onClick={handleOn}>
                                <FontAwesomeIcon icon={faAnglesRight} id={styles.icon} />
                            </a>
                            <div id={styles.right_side_post}>
                                <input type="text" placeholder='Search artists' id={styles.rigth_side_input} onChange={handleInputChange} />
                                <div id={styles.search_div} >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} id={styles.search_icon} onClick={handleSubmit} />
                                </div>
                                <a href="">save <br /> search</a>
                            </div>
                            <div className='col-lg-10 col-md-10 col-sm-12 col-xm-12' id={styles.content_right}>
                                <select name="select" className="select-option" id={styles.select_option_right_side}>
                                    <option value="">list</option>
                                    <option value="gril">grid</option>
                                </select>
                                <span>no results</span>
                                <button>newest</button>
                            </div>
                            <div className='col-12' id={styles.line}></div>
                            <div className='col-lg-11 col-md-10' id={styles.text}>
                                <h1>{sinput}</h1>
                                <h1>{cDate}</h1>

                                {(job && job.length) ? renderPost() : error}

                            </div>
                            <div className='col-lg-10 col-md-9 ' id={styles.two_btn}>
                                <button>back to top</button>
                                <button>back to top</button>
                            </div>
                        </div>
                    </aside>
                    {on && <Sider openClass="open" />}

                </div>


            </div>

        </>

    )
}

export default PostSearch;

import React, { useState, useRef, useEffect } from 'react'
import Header from './Header'
import Link from "next/link"
import styles from "../styles/create_post.module.css"
import { data } from '../components/component/data'
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/router';
import SendIcon from '@mui/icons-material/Send';


export default function Create_post() {

    const [radioData, setRadioData] = useState([])
    const [selectData, setSelectData] = useState()
    const router = useRouter()
    var data = [];

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "category"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //   console.log(doc.id, " => ", doc.data());
            //   data.push({ id: doc.id, ...doc.data() });
            data.push(Object.values(doc.data()));
            // setUserData(userData=>[...userData,doc.data()])
        })

        setRadioData(data)
        // console.log(data[0],"hello")
    }
    const checkData = (item) => {
        setSelectData(item)

    }
    const handleSelectedData = () => {
        // if(item==='gigOffered'){
        //     router.push({pathname: "/resume_Form", query: { category: selectData }})
        // }
        if (selectData === "GigOffered") {
            router.push({ pathname: "/gigOffered", query: { category: selectData } })

        } else if (selectData === "Resume") {
            router.push({ pathname: "/resume", query: { category: selectData } })
        }
        else if (selectData === "HousingOffered") {
            router.push({ pathname: "/houseOffered", query: { category: selectData } })

        }
        else if (selectData === "HousingWanted") {
            router.push({ pathname: "/housingWanted", query: { category: selectData } })

        }
        else if (selectData === "WantedByOwner") {
            router.push({ pathname: "/Childcar", query: { category: selectData } })

        } else if (selectData === "WantedByDealer") {
            router.push({ pathname: "/Childcar", query: { category: selectData } })

        }
        else if (selectData === "ServiceOffered") {
            router.push({ pathname: "/gigSubCategory", query: { category: selectData } })

        }
        else if (selectData === "ForSaleByOwner") {
            router.push({ pathname: "/ForSaleByOwner", query: { category: selectData } })

        }
        else if (selectData === "ForSaleByDealer") {
            router.push({ pathname: "/ForSaleByOwner", query: { category: selectData } })

        }
        else if (selectData === "Community") {
            router.push({ pathname: "/Community", query: { category: selectData } })

        }
        else if (selectData === "JobOffer") {
            router.push({ pathname: "/Job", query: { category: selectData } })

        }
        else {
            router.push({ pathname: "/Job", query: { category: selectData } })
        }


    }

    useEffect(() => {
        getData();

    }, [])
    return (
        <div>
            <Header />
            <div id="setHeaderBottomGap"></div>

            <div className="container" id={styles.container}>
                <span>please limit each posting to a single area and category, once per 48 hours</span> <br />
                <span> <b> what type of posting is this:</b> (see prohibited list before posting.)</span>

                <div className="col-lg-6 col-md-8">
                    <ul className="selection-list" id={styles.radio_list}>
                        {radioData[0] ? radioData[0].map((item, index) => {

                            return (



                                <li key={index}>
                                    <label>
                                        <span className="left-side">
                                            <input type="radio" name="category" id={item} onChange={() => checkData(item)} key="{index}" />
                                        </span>&nbsp;&nbsp;
                                        <span className="right-side">
                                            {item}
                                        </span>
                                    </label>
                                </li>
                            )
                        })
                            : <span>waiting for data...</span>}
                    </ul>
                    <button className="pickbutton" name="go" value="Continue" id={styles.button_radio} onClick={handleSelectedData}>continue <SendIcon className={styles.btnICon} /></button>
                </div>
            </div>

        </div>
    )
}

import React, { useState, useEffect } from 'react'
import Header from './Header'
import Link from 'next/link'
import styles from "../styles/create_post.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from '../components/component/data'
import { useRouter } from 'next/router';
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc, getDocs } from 'firebase/firestore';
import { Government } from 'styled-icons/remix-line';
import SendIcon from '@mui/icons-material/Send';



const ForSaleByOwner = () => {
    
    const router = useRouter()
    const { category } = router.query
    const [radioData, setRadioData] = useState([])
    const [selectData, setSelectData] = useState()

    var data = [];

    const [dataFetch, setDataFetch] = useState(data)
    

    console.log(category)

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "for sale by owner"));
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
      
        if(selectData === "antiques"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        
        }
        if(selectData === "general for sale"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "bicycles"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "motorcycles/scooter"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "cell phones"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "motorcycle parts"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "boats"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "cds/dvds/vhs"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "barter"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "wanted"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "tickets"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "heavy equipment"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "clothing & accessories"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "computers"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }

        if(selectData === "computer parts"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "auto parts"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "arts & crafts"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "collectibles"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "aviation"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "jewelry"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "furniture"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "auto wheels & tires"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "books & magazines"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "musical instruments"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "boat parts"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "tools"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "electronics"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "business/commercial"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "cars & trucks"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "household items"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "appliances"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "atvs/utvs/snowmobiles"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "garage & moving sales"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "video gaming"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "trailers"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "free stuff"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }if(selectData === "materials"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "baby & kid stuff"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "toys & games"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "farm & garden"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "motorcycle parts"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "rvs"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }

        if(selectData === "photo/video"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        }
        if(selectData === "bicycle parts"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
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
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-10">
                            <div className="new-form" id="new-edit">

                                <div className={styles.json_form}>
                                    <div className={styles.json_form_item}>
                                        <p className={styles.formnote}>
                                            <b>which of these applies?</b>
                                        </p>
                                    </div>

                                    <label className={styles.variant_radio}>
                                        {radioData[0] ? radioData[0].map((item, index) => {
                                            return (
                                                <label className="radio-option" key={index}>
                                                    <input type="radio" className="json-form-input id" name="subcategory" id={item} onChange={()=>checkData(item)} key="{index}"/>
                                                    <div>
                                                        <span >{item}</span>
                                                    </div>
                                                </label>
                                            )
                                        }
                                        ) : <span>waiting for data...</span>}
                                    </label>

                                    <div className={styles.json_form_item}>

                                    </div>
                                    <div className={styles.json_form_group}>
                                        <div className={styles.submit_button}>
                                            <button  name="go" value="Continue" className={styles.go_pickbutton} onClick={handleSelectedData}>continue <SendIcon  className={styles.btnICon} /></button>

                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default ForSaleByOwner;

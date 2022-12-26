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





const houseOffered = () => {
    
    const router = useRouter()
    const { category } = router.query
    const [radioData, setRadioData] = useState([])
    const [selectData, setSelectData] = useState()

    var data = [];

    const [dataFetch, setDataFetch] = useState(data)
    

    console.log(category)

    const getData = async () => {
        const querySnapshot = await getDocs(collection(db, "housing offered"));
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
      
        if(selectData === "rooms & shares"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        
        }
        if(selectData === "apartments / housing for rent"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        
        }   if(selectData === "housing swap"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        
        }
        if(selectData === "office & commercial"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        
        }
        if(selectData === "parking & storage"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        
        }
        if(selectData === "real estate - by broker"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        
        }
        if(selectData === "real estate - by owner"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        
        }
        if(selectData === "sublets & temporary"){
            router.push({pathname: "/Account_fianance", query: { subcategory: selectData,category:category }})
        
        }
        if(selectData === "vacation rentals"){
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




export default houseOffered;

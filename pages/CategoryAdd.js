import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/router';
import styles from '../styles/ProductAdd.module.css'
import { addDoc, getDocs, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import Topbar from '../components/component/Topbar/Topbar'
import Sidebar2 from '../components/component/Siderbar/Sidebar2'

function CategoryAdd() {
    
    const [category, setCategory] = useState('')
    const [ProductData, setProductData] = useState([]);
    const [file, setFile] = useState('');
    const [flag, setFlag] = useState(false)
    const router = useRouter()

    var data = [];

    const handleCapacity = (e) => {
        setCategory(e.target.value);

    }
    const addInagetoPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setFile(readerEvent.target.result);

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, 'ProductCat'), {
                category: category,
                time: serverTimestamp(),
            })

            const ImageRef = ref(storage, `ProductCat/${docRef.id}/image`);
            //  await uploadString(ImageRef,file,"data_url").then(async (snapshot)=>{
            //      const downloadUrl=await getDownloadURL(ImageRef);
            //      await updateDoc(doc(db,"resturant",docRef.id),{
            //          image:downloadUrl
            //      })
            //  }
            await uploadString(ImageRef, file, 'data_url').then(
                async (snapshot) => {
                    const downloadUrl = await getDownloadURL(ImageRef);
                    await updateDoc(doc(db, "ProductCat", docRef.id), {
                        image: downloadUrl,
                        itemid: docRef.id
                    })
                }

            )
            alert("form submited")
            router.push("/")
        } catch (err) {
            alert(err)
        }
    }

    const [on, setOn] = useState(true);


    return (
        <>
            <div>
                <Topbar />
                <div className="container-fluid">
                    <div className="row" id={styles.container} >
                        {/* <div id={stylesMenu.MenuBARIcon} style={{ width: on == true ? '274px' : '90px' }}>
            <Menu className={stylesMenu.sidebarMenuIcon} onClick={() => setOn(!on)} />
          </div> */}
                    </div>

                    {
                        on ?
                            <div  >

                                <div className="col-lg-3 col-md-3 col-sm-3" >
                                    {/* <Sidebar /> */}
                                    <Sidebar2 />
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-9 " style={{ marginLeft: '10%', paddingTop: '5%' }} >
                                    <div className={`${styles.mainhead} my-5 text-center d-flex justify-content-center align-items-center`} style={{ marginLeft: '12% !important' }}>
                                        <h1 className={` py-4`} >ADD CATEGORY</h1>
                                    </div>
                                    <div className="col-lg-12" id={styles.ProductAddForm} >
                                        <div className="container">
                                            <section className="panel panel-default">
                                                <div className="panel-heading">
                                                </div>
                                                <div className="panel-body">
                                                    <div action="designer-finish.html" className="form-horizontal" role="form">
                                                        <div className="form-group my-3">
                                                            <label className="col-sm-3 control-label">Category</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                                                            </div>
                                                        </div>


                                                        <div className="form-group my-3">
                                                            <label className="col-sm-3 control-label">Image Upload</label>
                                                            <div className="col-sm-3">
                                                                <input type="file" className="form-control" onChange={addInagetoPost} />
                                                            </div>

                                                        </div>


                                                        <div className="form-group my-3">
                                                            <div className="col-sm-offset-3 col-sm-9">
                                                                <button type="submit" className="btn" id={styles.addCatFormBtn} onClick={handleSubmit}>Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            :
                            <div className="row"  >
                                <div className="col-lg-1 col-md-2 col-sm-2 no-gutters">
                                    {/* <SideBarTwo /> */}
                                    <Sidebar2 />

                                </div>

                                <div className="col-lg-11 col-md-10 col-sm-10" >
                                    <div className={`${styles.mainhead} my-5 text-center d-flex justify-content-center align-items-center`} style={{ marginLeft: '12% !important' }}>
                                        <h1 className={` py-4`} >ADD CATEGORY</h1>
                                    </div>

                                    <div className="col-lg-12" id={styles.ProductAddForm}  >
                                        <div className="container">
                                            <section className="panel panel-default">
                                                <div className="panel-heading">
                                                </div>
                                                <div className="panel-body">
                                                    <div action="designer-finish.html" className="form-horizontal" role="form">
                                                        <div className="form-group" >
                                                            <label className="col-sm-3 control-label">Category</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                                                            </div>
                                                        </div>


                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label">Image Upload</label>
                                                            <div className="col-sm-3">
                                                                <input type="file" className="form-control" onChange={addInagetoPost} />
                                                            </div>

                                                        </div>


                                                        <div className="form-group" style={{ width: '280% !important' }}>
                                                            <div className="col-sm-offset-3 col-sm-9">
                                                                <button type="submit" className="btn  catFormBtn" onClick={handleSubmit}>Submit</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }

                </div>

            </div>


        </>
    );
}

export default CategoryAdd;
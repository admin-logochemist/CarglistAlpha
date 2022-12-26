import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/router';
import Topbar from '../components/component/Topbar/Topbar'
import Sidebar2 from '../components/component/Siderbar/Sidebar2'
import styles from '../styles/ProductAdd.module.css'
import { addDoc, getDocs, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function SubcatAdd() {
    const [category, setCategory] = useState('')
    const [ProductData, setProductData] = useState([]);
    const [file, setFile] = useState('');
    const [flag, setFlag] = useState(false);
    const [categoryIdForSub, setCategoryIdForSub] = useState("");
    const [categoryForSub, setCategoryForSub] = useState("");
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
    // //////////////////////////////////////////////////////////////
 
    /////////////////////////////////////////////////////////////////////
    // sub category old database start
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, 'ProductSubCat'), {
                subcategory: category,
                category:categoryForSub, 
                time: serverTimestamp(),
            })

            const ImageRef = ref(storage, `ProductSubCat/${docRef.id}/image`);
            //  await uploadString(ImageRef,file,"data_url").then(async (snapshot)=>{
            //      const downloadUrl=await getDownloadURL(ImageRef);
            //      await updateDoc(doc(db,"resturant",docRef.id),{
            //          image:downloadUrl
            //      })
            //  }
            await uploadString(ImageRef, file, 'data_url').then(
                async (snapshot) => {
                    const downloadUrl = await getDownloadURL(ImageRef);
                    await updateDoc(doc(db, "ProductSubCat", docRef.id), {
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
// sub category old database end


    const [on, setOn] = useState(true);

/////////////////////////////////////////////////////////
//  get all category for sub product...
/////////////////////////////////////////////////////////
const handleCatCapacity = (e) => {

    setCategoryForSub(e.target.value);
    setCategoryIdForSub(e.target.id);
    console.log('this is selected category for sub category', categoryForSub)
  };


const getProduct = async () => {

    const querySnapshot = await getDocs(collection(db, "ProductCat"),)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // data.push(Object.values(doc.data()))
      data.push({ id: doc.id, ...doc.data() });
      //   setUserData(userData=>[...userData,doc.data()])
    })

   
    setProductData(data);
    // console.log(ProductData, "my category data");
    // console.log(ProductData.itemid === 'iyW4OLiq10E00sRDSjAv')

  }

  useEffect(() => {
    getProduct()
  }, [])

  

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
                                        <h1 className={` py-4`} >ADD SUBCATEGORY</h1>
                                    </div>
                                    <div className="col-lg-12" id={styles.ProductAddForm} >
                                        <div className="container">
                                            <section className="panel panel-default">
                                                <div className="panel-heading">
                                                </div>
                                                <div className="panel-body">
                                                    <div action="designer-finish.html" className="form-horizontal" role="form">
                                                        <div className="form-group my-3">
                                                            <label className="col-sm-3 control-label">Sub Category</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                                                            </div>
                                                        </div>

                                                         {/* select catergory for subcategory */}

                                                         <div className="form-group my-3">
                                                            <div className="col-sm-9">

                                                           
                                                            <label className="col-sm-3 control-label">Category</label>

                                                            <select className="form-select selectCatforSubCat" aria-label="Default select example">
                                                            {ProductData.length &&
                                                                ProductData.map((item, index) => {
                                                                return (


                                                                    <option key={index} value={item?.category}>{item?.category}</option>

                                                                );
                                                                })}
                                                            
                                                            </select>
                                                            </div>
                                                        </div>

                                                         {/* ---------------------------- */}
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

                                <div className="col-lg-11 col-md-10 col-sm-10" style={{ marginTop: '-100% !important' }} >
                                    <div className={`${styles.mainhead} my-5 text-center d-flex justify-content-center align-items-center`} style={{ marginLeft: '12% !important' }}>
                                        <h1 className={` py-4`} >ADD SUBCATEGORY</h1>
                                    </div>
                                    <div className="col-lg-12" id={styles.ProductAddForm} >
                                        <div className="container">
                                            <section className="panel panel-default">
                                                <div className="panel-heading">
                                                </div>
                                                <div className="panel-body">
                                                    <div action="designer-finish.html" className="form-horizontal" role="form">
                                                        <div className="form-group my-3">
                                                            <label className="col-sm-3 control-label">SubCategory</label>
                                                            <div className="col-sm-9">
                                                                <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                                                            </div>
                                                        </div>

                                                         {/* select catergory for subcategory */}

                                                         <div className="form-group my-3">
                                                            <label className="col-sm-3 control-label">Sub Category</label>
                                                            <div className="col-sm-9">

                                                           
                                                            <label className="col-sm-3 control-label">Category</label>

                                                            <select className="form-select selectCatforSubCat" aria-label="Default select example">
                                                            {ProductData.length &&
                                                                ProductData.map((item, index) => {
                                                                return (


                                                                    <option key={index} value={item?.category}>{item?.category}</option>

                                                                );
                                                                })}
                                                            
                                                            </select>
                                                            </div>
                                                        </div>


                                                         {/* ---------------------------- */}
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
                    }

                </div>

            </div>

        </>
    );
}


export default SubcatAdd;
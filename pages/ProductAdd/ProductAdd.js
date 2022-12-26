import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from '../../pages/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../../styles/ProductAdd.module.css'
import { TextareaAutosize } from '@mui/material';
import { Grid } from '@mui/material';
import { addDoc, getDocs, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db, storage } from '../../firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
function ProductAdd() {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [weight, setWeight] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [dateStart, setDateStart] = useState('')
    const [dateend, setDateEnd] = useState('');
    const [ProductData, setProductData] = useState([]);
    const [file, setFile] = useState('');
    const [category, setCategory] = useState([]);
    const [flag, setFlag] = useState(false);
    
    var data = [];



    const getProduct = async () => {

        const querySnapshot = await getDocs(collection(db, "category"),)
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //   console.log(doc.id, " => ", doc.data());
            data.push(Object.values(doc.data()))
            //   setUserData(userData=>[...userData,doc.data()])
        })


        setProductData(data);
        console.log(ProductData);

    }
    useEffect(() => {
        getProduct()
    }, [])
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
            const docRef = await addDoc(collection(db, 'addProduct'), {
                title: title,
                price: price,
                description: description,
                weight: weight,
                width: width,
                height: height,
                dateStart: dateStart,
                dateend: dateend,
                category: category,
                remail: "ghayas110@gmail.com",
                time: serverTimestamp(),
            })

            const ImageRef = ref(storage, `addProduct/${docRef.id}/image`);
            //  await uploadString(ImageRef,file,"data_url").then(async (snapshot)=>{
            //      const downloadUrl=await getDownloadURL(ImageRef);
            //      await updateDoc(doc(db,"resturant",docRef.id),{
            //          image:downloadUrl
            //      })
            //  }
            await uploadString(ImageRef, file, 'data_url').then(
                async (snapshot) => {
                    const downloadUrl = await getDownloadURL(ImageRef);
                    await updateDoc(doc(db, "addProduct", docRef.id), {
                        image: downloadUrl,
                        itemid: docRef.id
                    })
                }

            )
            alert("form submited")
            setTitle('')
            setPrice('')
            setWeight('')
            setHeight('')
            setWidth('')
            setDescription('')
            setCategory()
        } catch (err) {
            alert(err)
        }
    }

    return (
        <>
            <div className={styles.ProductAdd}>
                <Header />
            <div id="setHeaderBottomGap"></div>

            </div>

            <div>
                <h3 className={styles.productAddHeading}>Product Add</h3>
                <div className="col-lg-12" id={styles.ProductAddForm} >
                    <div className="container">
                        <section className="panel panel-default">
                            <div className="panel-heading">
                            </div>
                            <div className="panel-body" >
                                <div action="designer-finish.html" className="form-horizontal" role="form">
                                    <div className="form-group" >
                                        <label className="col-sm-3 control-label">Title</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Product Name" value={title} onChange={(e) => setTitle(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Price</label>
                                        <div className="col-sm-9">
                                            <input type="Number" className="form-control" name="name" id="name" placeholder="Product Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Category</label>
                                        <div className="col-sm-9">

                                            <select onChange={handleCapacity}>
                                                <option value="">Select Category</option>
                                                {ProductData[0]?.map((item, index) => {

                                                    return (

                                                        <option key={index}>{item}</option>

                                                    )
                                                })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Description</label>
                                        <div className="col-sm-9">
                                            <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group" id={styles.productSizing}>
                                        <label className="col-sm-3 control-label">Weight</label>
                                        <div className="col-sm-3">
                                            <input type="text" className="form-control" name="qty" id="qty" placeholder="Weight_" value={weight} onChange={(e) => setWeight(e.target.value)} />
                                        </div>
                                        <label className="col-sm-3 control-label"> Width</label>
                                        <div className="col-sm-3">
                                            <input type="text" className="form-control" name="qty" id="qty" placeholder="Width" value={width} onChange={(e) => setWidth(e.target.value)} />
                                        </div>
                                        <label className="col-sm-3 control-label"> Height</label>
                                        <div className="col-sm-3">
                                            <input type="text" className="form-control" name="qty" id="qty" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Duration</label>
                                        <div className="col-sm-3">
                                            <label className="control-label small" >Date Start </label>
                                            <input type="text" className="form-control" name="date_start" id="date_start" placeholder="Date Start" value={dateStart} onChange={(e) => setDateStart(e.target.value)} />
                                        </div>
                                        <div className="col-sm-3">
                                            <label className="control-label small" >Date End</label>
                                            <input type="text" className="form-control" name="date_finish" id="date_finish" placeholder="Date End" value={dateend} onChange={(e) => setDateEnd(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-3 control-label">Image Upload</label>
                                        <div className="col-sm-3">
                                            <input type="file" className="form-control" onChange={addInagetoPost} />
                                        </div>

                                    </div>


                                    <div className="form-group">
                                        <div className="col-sm-offset-3 col-sm-9">
                                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductAdd;
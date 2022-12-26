import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../pages/Header'
import { addDoc, getDocs, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import Router from 'next/router';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router'
import Footer from '../components/component/Footer';


const CreateStore = () => {

    const [name, setName] = useState();
    const [storeName, setStoreName] = useState();
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();
    const [details, setDetails] = useState();
    const [zip, setZip] = useState();
    const [file, setFile] = useState('');
    const [profilefile, setProfileFile] = useState('');
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [userid, setUserid] = useState();
    const [myUpload, setMyUpload] = useState()
    const [myProfileUpload, setMyProfileUpload] = useState()
    const [myImageUrl, setMyImageUrl] = useState()
    const [myImageUrlp, setMyImageUrlP] = useState()
    const [email, setEmail] = useState();


    const router = useRouter()
    const { select } = router.query

    useEffect(() => {
        const usersEmail = localStorage.getItem("email");
        setEmail(usersEmail)
        const users = localStorage.getItem("userid");
        setUserid(users)
        console.log(users, "aaaaaaID", email)

    }, []);










    const uploadImg = (e) => {
        //Banner
        if (e.target.files.length !== 0) {
            setMyUpload(e.target.files[0])
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
        setMyUpload(null)
        setMyImageUrl(null)
        setFile(null)
    }


    const uploadImg2 = (e) => {
        //profile
        if (e.target.files.length !== 0) {
            setMyProfileUpload(e.target.files[0])
            setMyImageUrlP(URL.createObjectURL(e.target.files[0]))
            const reader = new FileReader();
            if (e.target.files[0]) {
                reader.readAsDataURL(e.target.files[0])
            }
            reader.onload = (readerEvent) => {
                setProfileFile(readerEvent.target.result);

            }
        }
    }



    const clearUploadImg2 = (e) => {
        setMyProfileUpload(null)
        setMyImageUrlP(null)
        setProfileFile(null)
    }


    const addInagetoPost = () => {
        const reader = new FileReader();
        if (myUpload) {
            reader.readAsDataURL(myUpload)
        }
        reader.onload = (readerEvent) => {
            setFile(readerEvent.target.result);

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        addInagetoPost()

        const docRef = await addDoc(collection(db, 'SellerStore'), {
            email: email,
            name: name,
            storeName: storeName,
            address: address,
            contact: contact,
            zip: zip,
            city: city,
            country: country,
            details: details,
            time: serverTimestamp(),
            userid: userid,
        })
        await updateDoc(doc(db, "userid", userid), {

            userid: userid
        })

        const ImageRef = ref(storage, `SellerStore/${docRef.id}/image`);
        const ImageProfileRef = ref(storage, `SellerStore/${docRef.id}/imageProfile`);

        await uploadString(ImageRef, file, 'data_url').then(
            async (snapshot) => {
                const downloadUrl = await getDownloadURL(ImageRef);
                await updateDoc(doc(db, "SellerStore", docRef.id), {
                    image: downloadUrl,

                })
            })




        await uploadString(ImageProfileRef, profilefile, 'data_url').then(
            async (snapshot) => {
                const downloadProfileUrl = await getDownloadURL(ImageProfileRef);
                await updateDoc(doc(db, "SellerStore", docRef.id), {
                    bannerImage: downloadProfileUrl,
                })
            })
        alert('submited')
        Router.push('/Dashboard/SellerDashboard')





    }













    return (
        <>
            <section className='sectionStoreForm'>
                <Header />
            <div id="setHeaderBottomGap"></div>

                <div className="container CreateStoreContainer mb-5">
                    <div className="row CreateStoreRow">
                        <div className="col-lg-5 col-md-8 col-sm-8 CreateStoreForm" >
                            <div className='CreateStoreForm1'>
                                <h3>Create Store</h3>

                                <div className="form-group CreateStoreInputGroup">
                                    <div className="form-group CreateStoreInputGroup1">
                                        <input type="text" name="" id="" className='form-control CreateStoreInput1' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                                        <input type="text" name="" id="" className='form-control CreateStoreInput1' placeholder='Enter Store Name' value={storeName} onChange={(e) => setStoreName(e.target.value)} />
                                    </div>
                                    <span className='flr'>Profile Image</span>
                                    <Button color="secondary" onClick={() => clearUploadImg2()}>
                                        Clear
                                    </Button>
                                    <input type="file" id="" className='CreateStoreFile' onChange={(e) => uploadImg2(e)} />
                                    {myImageUrlp ?
                                        <img src={myImageUrlp} className="selectimage" />
                                        : ''
                                    }
                                    <input type="text" id="" className='form-control CreateStoreInput' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                                    <input type="text" id="" className='form-control CreateStoreInput' placeholder='Contact' value={contact} onChange={(e) => setContact(e.target.value)} />
                                    <input type="text" id="" className='form-control CreateStoreInput' placeholder='Country' value={country} onChange={(e) => setCountry(e.target.value)} />
                                    <input type="text" id="" className='form-control CreateStoreInput' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
                                    <input type="text" id="" className='form-control CreateStoreInput' placeholder='Zip Code / Postal Code' value={zip} onChange={(e) => setZip(e.target.value)} />

                                    <span>Store Image</span>

                                    <Button color="secondary" onClick={() => clearUploadImg()}>
                                        Clear
                                    </Button>
                                    <br />
                                    <div className='uploadimages'>
                                        <input type="file" id="" className='CreateStoreFile' onChange={(e) => uploadImg(e)} />

                                    </div>

                                    {myImageUrl ?
                                        <img src={myImageUrl} className="selectimage" />
                                        : ''
                                    }

                                    <textarea name="" id="" cols="70" rows="5" placeholder='Store Description' className='form-control CreateStoreInput' value={details} onChange={(e) => setDetails(e.target.value)} ></textarea>
                                </div>
                                <div className='CreateStorebtn'>
                                    <button onClick={handleSubmit}>Submit</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default CreateStore
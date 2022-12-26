import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import { collection, getDoc } from 'firebase/firestore';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import CancelIcon from '@mui/icons-material/Cancel';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { db, storage } from "../../../firebase";
import { updateDoc, collection, onSnapshot, orderBy, query, doc, getDocs, where, getDoc, addDoc, deleteDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
const Profile = () => {

  const [name, setName] = useState()
  const [address, setAddress] = useState()
  const [contact, setContact] = useState()
  const [description, setDescription] = useState()
  const [file, setFile] = useState()
  const [sellerid, setSellerid] = useState()
  const [sellerStore, setSellerStore] = useState([])
  const [edit, setEdit] = useState(false)
  const [profileFile, setProfileFile] = useState()
  var data = [];

  const [dataFetch, setDataFetch] = useState(data)



  const handleClick = () => {
    setEdit(true)
  }
  const handleSubmit = () => {
    setEdit(false)
  }








  const addImagetoPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setFile(readerEvent.target.result);

    }
  }
  const addImagetoPost2 = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setProfileFile(readerEvent.target.result);

    }
  }

  const firebaseUpdate = async () => {
    const washingtonRef = doc(db, "SellerStore", sellerid[0]);
    // Set the "capital" field of the city 'DC'
    const ImageRef = ref(storage, `SellerStore/${sellerid[0]}/image`);

    file && await uploadString(ImageRef, file, "data_url").then(async (snapshot) => {
      const downloadUrl = await getDownloadURL(ImageRef);

      await updateDoc(doc(db, "SellerStore", sellerid[0]), {
        image: downloadUrl,

      });
    });
    const ImageProfileRef = ref(storage, `SellerStore/${sellerid[0]}/imageProfile`);

    profileFile && await uploadString(ImageProfileRef, profileFile, "data_url").then(async (snapshot) => {
      const downloadProfileUrl = await getDownloadURL(ImageProfileRef);

      await updateDoc(doc(db, "SellerStore", sellerid[0]), {
        bannerImage: downloadProfileUrl,

      });
    });

    await updateDoc(washingtonRef, {
      name: name,
      address: address,
      contact: contact,
      details: description,




    });
    setEdit(false)
    setFile(null)
    setProfileFile(null)
  }
  const setProfile = () => {

    sellerStore && setName(sellerStore[0]?.name)
    sellerStore && setAddress(sellerStore[0]?.address)
    sellerStore && setContact(sellerStore[0]?.contact)
    sellerStore && setDescription(sellerStore[0]?.details)

  }


  const getSellerProfile = () => {
    const uemail = localStorage.getItem('email')
    onSnapshot(
      query(collection(db, "SellerStore"), where("email", "==", uemail))
      , (snapshot) => {
        setSellerStore(snapshot.docs.map(item => item.data()))
        setSellerid(snapshot.docs.map(item => item.id));
      })




  };


  useEffect(() => {
    getSellerProfile();
  }, [])


  useEffect(() => {
    setProfile()
  }, [sellerStore])





  return (
    <div className="container" style={{marginLeft: '-8%'}}>
      <div className="row profile">
        <div className="col-md-3">
          <div className="profile-sidebar">
            <span className='profileedit' onClick={handleClick} >Edit</span>
              {edit ? <div className='Editor'>
                <span className='icon'> <CancelIcon onClick={handleSubmit} className='closeIcon' /></span>
                <span>EDIT PROFILE </span>
                <div className={`${'form-group editprofile'}`}>
                  <span>Name</span>
                  <input type="text" className={`${'form-control'}`} placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                  <span>Address</span>
                  <input type="text" className={`${'form-control'}`} placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                  <span>Phone</span>
                  <input type="text" className={`${'form-control'}`} placeholder='Phone' value={contact} onChange={(e) => setContact(e.target.value)} />
                  <span>Profile Image</span>
                  <input type="file" name="" id="" onChange={addImagetoPost} />
                  <span>Store Image</span>
                  <input type="file" name="" id="" onChange={addImagetoPost2} />
                  <span>Description</span>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Description' className='discriptionsss ' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                  <button className='editbutton' onClick={firebaseUpdate}>Submit</button>

                </div>
              </div>
                :
                <div>
                  <span></span>
                </div>
              }
            <div className="profile-userpic">
              <img src={sellerStore[0]?.bannerImage} className="img-responsive" alt="" />
            </div>

            <div className="profile-usertitle">

              <div className="profile-usertitle-name" >
                <span>{sellerStore[0]?.name}</span>
              </div>
              <div className="profile-usertitle-job">
                <span>jason divid</span>
              </div>
            </div>


            <div className="profile-userbuttons">
            </div>
            {/*       <div className="profile-usermenu">
              <ul className="nav">
                <li className="active">
                  <a href="#">
                    <i className="glyphicon glyphicon-home"></i>
                    Overview </a>
                </li>
                <li>
                  <a href="">
                    <i className="glyphicon glyphicon-user"></i>
                    Account Settings </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="glyphicon glyphicon-ok"></i>
                    Tasks </a>
                </li>
                <li>
                  <a href="#">
                    <i className="glyphicon glyphicon-flag"></i>
                    Help </a>
                </li>
              </ul>
          </div> */}

            <div className="portlet light bordered">
              <div className="row list-separated profile-stat">
                <div className="col-md-4 col-sm-4 col-xs-6">
                  <div className="uppercase profile-stat-title"> 37 </div>
                  <div className="uppercase profile-stat-text"> Projects </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-6">
                  <div className="uppercase profile-stat-title"> 51 </div>
                  <div className="uppercase profile-stat-text"> Tasks </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-6">
                  <div className="uppercase profile-stat-title"> 61 </div>
                  <div className="uppercase profile-stat-text"> Uploads </div>
                </div>
              </div>
              <div>
                <h4 className="profile-desc-title">About Jason Davis</h4>
                <span className="profile-desc-text"> Lorem ipsum dolor sit amet diam nonummy nibh dolore. </span>
          {   /*   <div className="margin-top-20 profile-desc-link">
                  <FacebookIcon className='storeicon' /> &nbsp;
                  <a href="">apollowebstudio</a>
                </div>
                <div className="margin-top-20 profile-desc-link">
                  <TwitterIcon className='storeicon' /> &nbsp;
                  <a href="">@jasondavisfl</a>
                </div>
                <div className="margin-top-20 profile-desc-link">
                  <InstagramIcon className='storeicon' /> &nbsp;
                  <a href="">JasonDavisFL</a>
                 </div>  */}
        </div> 
            </div>



          </div>
        </div>
        <div className="col-md-9">


          <div className="profile-content">
            <div className='storeprofile'>
              <img src={sellerStore[0]?.image} alt="" className='storecover' />
            </div>
            <div className='storedetails'>
              <h4>{sellerStore[0]?.storeName}</h4>
              <span><PlaceIcon className='storeicon' />  {sellerStore[0]?.address}</span> <br />
              <span><PhoneIcon className='storeicon' />  {sellerStore[0]?.contact}</span>
            </div>
            <div className='discription'>
              <span>{sellerStore[0]?.details}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile

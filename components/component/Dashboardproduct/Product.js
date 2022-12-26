import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../../../styles/UserDetails.module.css';
import { db, storage } from '../../../firebase';
import Chip from '@mui/material/Chip';
import { auth } from '../../../firebase'
import { createUserWithEmailAndPassword, getAuth, deleteUser } from 'firebase/auth'
import { updateDoc, collection, onSnapshot, orderBy, query, doc, getDocs, where, getDoc, addDoc, deleteDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { faCheck, faAnglesLeft, faAnglesRight, faEye, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-bootstrap/Modal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Product = () => {
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [visible, setVisible] = useState(false)
  // const [userModal, setUserModal] = useState()
  const [changeData, setChangeData] = useState()
  const [fdata, setFData] = useState()
  const [userData, setUserData] = useState([])
  const [status, setStatus] = useState(false)
  const [email, setEmail] = useState('')
  const [flag, setFlag] = useState(false)
  const [file, setFile] = useState()
  const [files, setFiles] = useState()
  const [fDataVariation, setFDataVariation] = useState()
  const [variationIndex, setVariationIndex] = useState()

  var data = [];
  const [imageId, setImageId] = useState("")
  const [myUpload, setMyUpload] = useState()
  const [myProductUpload, setMyProductUpload] = useState()
  const [myImageUrls, setMyImageUrls] = useState()
  const [myImageUrl, setMyImageUrl] = useState()
  let varData = []
  const [variationObjectData, setVariationObjectData] = useState()
  const [featured, setFeatured] = useState(fdata?.image);
  const [productData, setProductData] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState();


  const getAllProduct = () => {
    const uemail = localStorage.getItem('email')
    onSnapshot(
      query(collection(db, "ProductData"), where("remail", "==", uemail))
      , (snapshot) => {
        setProductData(snapshot.docs.map(item => item.data()))
        console.log(snapshot.docs);
      })
  };


  useEffect(() => {


    getAllProduct();



  }, [])


  const uploadImg = (e) => {
    setMyUpload(e.target.files[0])
    if (e.target.files.length !== 0) {
      setMyImageUrl(URL.createObjectURL(e.target.files[0]))
    }
  }
  const clearUploadImg = (e) => {
    setMyUpload(null)
    setMyImageUrl(null)
  }

  //   console.log(productData,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  //   const renderproductData = () => {
  //     if (productData &&  productData?.length) {


  //       return productData.map((item, index) => {
  //         // eslint-disable-next-line react/jsx-key
  //         return <Order
  //           obj={item}
  //         />

  //       })
  //     }
  //   }; 
  // useEffect(() => {
  //     try {

  //       getUser();
  //       const auth = getAuth();
  //       const admin=auth.currentUser


  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }, [flag])

  //   const getUser = async () => {
  //     const Email = localStorage.getItem("email")
  //     console.log(Email)
  //     let advertize = collection(db, 'ProductData');
  //     let q = query(advertize,where('remail','==',Email))
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots

  //       data.push({ id: doc.id, ...doc.data() })
  //       // setUserData(userData=>[...userData,doc.data()])
  //     })
  //     if (data) {
  //         console.log(data,"data found")
  //         setUserData(data);

  //     }
  //   }



  // const handleModal = async (e) => {
  //   let modalData = await userData.filter(item => e.target.id == item.id)
  //   await setFData(modalData[0])
  //   setVisible(!visible)
  // }
  // const handleData = (e) => {
  //   setFData(
  //     {
  //       ...fdata, [e.target.name]: e.target.value
  //     }
  //   )
  // }


  // const checkStatus = (e) => {
  //   if (e.target.name === "edit") {

  //     setStatus(true) // for edit Button 
  //     handleModal(e)
  //   }
  //   if (e.target.name === "addUser") {

  //     setStatus(false)  // for add Button
  //     handleModal(e)
  //   }
  // }



  // const firebaseUpdate = async () => {
  //   const washingtonRef = doc(db, "ProductData", fdata.id);
  //   // Set the "capital" field of the city 'DC'
  //   await updateDoc(washingtonRef, {
  //     name: fdata.name,
  //     email: fdata.email,
  //     password: fdata.password,
  //     phone: fdata.phone,

  //   });
  //   setVisible(false)
  //   setFlag(!flag)
  // }



  // const firebaseAdd = async () => {
  //   await createUserWithEmailAndPassword(auth, fdata.email, fdata.password)
  //   .then((userCredential) => {

  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });
  //   // Add a new document with a generated id.
  //   const docRef = await addDoc(collection(db, "ProductData"), {
  //     name: fdata.name,
  //     email: fdata.email,
  //     password: fdata.password,
  //     phone: fdata.phone,
  //     select : "business",


  //   });

  //   setVisible(false)
  //   setFlag(!flag)

  // }
  const handleModal = async (e) => {

    let modalData = await productData.filter(item => e.target.id === item.itemid)
    console.log(e.target.id, "ididid")
    setFData(modalData[0])
    setShow(!show);
  }
  const handleVariationModal = async (e) => {

    // let modalData = await fdata.variation.filter(item => e.target.id === item.itemid)
    let modalVariationData = await fdata.variation[e.target.id]
    setVariationIndex(e.target.id)
    setFDataVariation(modalVariationData)


  }



  const handleData = (e) => {
    setFData(
      {
        ...fdata, [e.target.name]: e.target.value
      }
    )
  }
  const handleVariationData = (e) => {

    setFDataVariation(
      {
        ...fDataVariation, [e.target.name]: e.target.value
      }
    )
  }

  console.log(productData)
  const firebaseUpdate = async () => {
    const washingtonRef = doc(db, "ProductData", fdata.itemid);
    // Set the "capital" field of the city 'DC'
    const ImageRef = ref(storage, `ProductData/${fdata.itemid}/image`);

   file && await uploadString(ImageRef, file, "data_url").then(async (snapshot) => {
      const downloadUrl = await getDownloadURL(ImageRef);
      setFeatured(downloadUrl)
      await updateDoc(doc(db, "ProductData", fdata.itemid), {
        image: downloadUrl,

      });
    });
    const Imagecol = ref(storage, `ProductCol/${fdata.itemid}/images`);

   files && await uploadString(Imagecol, files, "data_url").then(async (snapshot) => {
      const downloadUrls = await getDownloadURL(Imagecol);
      await updateDoc(doc(db, "ProductData", fdata.itemid), {
        images: downloadUrls,

      });
    });
    await updateDoc(washingtonRef, {
      price: fdata.price,
      title: fdata.title,
      description: fdata.description,
      category: fdata.category,
      color: color,
      size: size,


    });

    setShow(false);
    setFlag(!flag)
    setMyImageUrl(null)
    setFiles(null)
    setFile(null)
  }
  // variation: [{ variationName: fdata.variation[0].variationName  }]

  const firebaseVariationUpdates = async () => {



    varData = fdata.variation
    varData.splice(variationIndex, 1, fDataVariation)

    // fdata.variation=varData
    setFData(
      {
        ...fdata,
        [fdata.variation]: varData

      },
    )
    const washingtonRef = doc(db, "ProductData", fdata.itemid);
    // Set the "capital" field of the city 'DC'

    await updateDoc(washingtonRef, {
      variation: varData

    });
    console.log(fdata, "ddddddddddddddddddddd")
    setFlag(!flag)
    setOpen(!open);
  }


  const firebaseAdd = async () => {
    await createUserWithEmailAndPassword(auth, fdata.email, fdata.password)
      .then((userCredential) => {

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "ProductData"), {



    });

    setShow(false);
    setFlag(!flag)

  }

  const addImagetoPost = async (e) => {
    const reader = new FileReader();
    setMyUpload(e.target.files[0])
    if (e.target.files[0]) {
      if (e.target.files.length !== 0) {
        setMyImageUrl(URL.createObjectURL(e.target.files[0]))
      }
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setFile(readerEvent.target.result);

    }



  }
  const Productcol = async (e) => {
    const reader = new FileReader();
    setMyProductUpload(e.target.files[0])
    if (e.target.files[0]) {
      if (e.target.files.length !== 0) {
        setMyImageUrls(URL.createObjectURL(e.target.files[0]))
      }
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setFiles(readerEvent.target.result);

    }



  }
  const checkStatus = (e) => {
    if (e.target.name === "edit") {

      setStatus(true) // for edit Button 

      handleModal(e)
    }
    if (e.target.name === "addUser") {

      setStatus(false)  // for add Button
      handleModal(e)
    }
    if (e.target.name === "editvar") {

      setStatus(false)  // for add Button
      setOpen(!open);
    }
  }
  const checkVariationStatus = (e) => {
    if (e.target.name === "edit") {

      setStatus(true) // for edit Button 

      handleModal(e)
    }
    if (e.target.name === "addUser") {

      setStatus(false)  // for add Button
      handleModal(e)
    }
    if (e.target.name === "editvar") {
      handleVariationModal(e)
      setStatus(false)  // for add Button
      setOpen(!open);
    }
  }

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const closeButtons = () => {

   setShow(false);
    setFlag(!flag)
    setMyImageUrl(null)
    setFiles(null)
    setFile(null)
  }
  const delUser = async (e) => {
    const id = e.target.id

    await deleteDoc(doc(db, "ProductData", id)).then(doc => console.log(doc));
    setFlag(!flag)
  }
  console.log(productData, "prodddddddddddddddd")


  return (
    <div className={styles.body}>
      <div id={styles.Maincontainer11} >
        <div className="container">
          <div className="row">

            <div className="col=lg-12" id={styles.OrderDetails}>
              <div className="row">

                <div className="col-md-12">
                  <div className='form-control' id={styles.FormControl}>

                    <input type="text" placeholder='Search' className={styles.SearchInput} />
                    <FontAwesomeIcon icon={faSearch} className={styles.SearchIcon} />

                  </div>
                  <div className={`${styles.Order_panel}`}>
                    <div className={`${styles.Order_panel_heading}`}>
                      <div className="row">
                        <div className="col col-sm-5 col-xs-12">
                          <h4 className={`${styles.panel_title}`}>All Products</h4>
                        </div>
                      </div>

                    </div>
                    <div className={`${styles.order_panel_body}`}>

                      <table className={`${styles.order_table}`}>
                        <thead>
                          <tr className={styles.tr}>
                            <th>Serial No</th>
                            <th>title</th>
                            <th>price</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>

                          {productData && productData?.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.title}
                                </td>

                                <td>${item.price}
                                </td>
                                <td>{item.category}
                                </td>
                                <td>{item.totalRating}</td>
                                <td>

                                  <Button className="primary" id={item.itemid} name="edit" onClick={e => checkStatus(e)}><EditIcon onClick={e => checkStatus(e)}/></Button>
                                  <Button className="primary" id={item.itemid} name="delete" onClick={e => delUser(e)}><DeleteIcon /></Button>
                                </td>

                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                        <Modal.Header closeButton>
                          <Modal.Title>Modal</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                          <div >
                            <Stack spacing={3} sx={{ width: 500 }}>
                              <label htmlFor="userName">Title</label>
                              <input type="text" name="title" id="title" onChange={handleData} value={fdata?.title} />
                              <label htmlFor="Price">Price</label>
                              <input type="text" name="price" id="price" onChange={handleData} value={fdata?.price} />
                              <label htmlFor="Description">Description</label>
                              <input type="text" name="description" id="description" onChange={handleData} value={fdata?.description} />
                              <label htmlFor="category">Category</label>
                              <input type="text" name="category" id="category" onChange={handleData} value={fdata?.category} />

                              <Autocomplete
                                multiple
                                id="tags-filled"
                                options={Colors.map((option) => option.title)}
                                defaultValue={fdata?.color}
                                freeSolo
                                renderTags={(value, getTagProps) =>

                                  value.map((option, index) => {
                                    setColor(value)
                                    console.log(color)
                                    return (
                                      <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />
                                    )
                                  })

                                }

                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    variant="filled"
                                    label="Color"
                                    placeholder="Color"

                                  />
                                )}
                              />

                              <Autocomplete
                                multiple
                                id="tags-filled"
                                options={Sizes.map((option) => option.title)}
                                defaultValue={fdata?.size}
                                freeSolo
                                renderTags={(values, getTagProps) =>

                                  values.map((option, index) => {
                                    setSize(values)
                                    console.log(size)
                                    return (
                                      <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />
                                    )
                                  })

                                }

                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    variant="filled"
                                    label="Size"
                                    placeholder="Size"

                                  />
                                )}
                              />

                            </Stack>
                            <p>Featured Image</p>
                            <Stack direction="row" alignItems="center" spacing={2}>

                              <Button variant="contained" component="label">
                                Upload
                                <input hidden accept="image/*" multiple type="file" onChange={addImagetoPost} />
                              </Button>

                              <img src={myImageUrl ? myImageUrl : fdata?.image} style={{ "width": 50 }} />
                            </Stack>
                            <p>Product Collection</p>
                            <Stack direction="row" alignItems="center" spacing={2}>

                              <Button variant="contained" component="label">
                                Upload
                                <input hidden accept="image/*" multiple type="file" onChange={Productcol} />
                              </Button>

                              <img src={myImageUrls ? myImageUrls : fdata?.images} style={{ "width": 50 }} />
                            </Stack>
                          </div>
                          <Button color="secondary" onClick={closeButtons}>
                            Close
                          </Button>
                          {
                            status === true ?
                              <Button color="primary" onClick={firebaseUpdate}>Save changes</Button>
                              :
                              <Button color="primary" onClick={firebaseAdd} >Add Restraunt Owner</Button>

                          }
                          <div className={`${styles.order_panel_body}`}>



                          </div>

                        </Modal.Body>


                      </Modal>





                    </div>

                    <Modal show={open} onHide={() => setOpen(false)}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>

                        <div>
                          <label htmlFor="variationName">Color</label>
                          <input type="text" name="variationName" id="variationName" onChange={handleVariationData} value={fDataVariation?.variationName} />
                          <br />
                          <label htmlFor="variationPrice">Price</label>
                          <input type="text" name="variationPrice" id="variationPrice" onChange={handleVariationData} value={fDataVariation?.variationPrice} />
                          <br />
                          <label htmlFor="variationSize">Size</label>
                          <input type="text" name="variationSize" id="variationSize" onChange={handleVariationData} value={fDataVariation?.variationSize} />
                          <br />
                          <label htmlFor="variationWidth">Width</label>
                          <input type="text" name="variationWidth" id="variationWidth" onChange={handleVariationData} value={fDataVariation?.variationWidth} />
                          <br />
                          <label htmlFor="variationHeight">Height</label>
                          <input type="text" name="variationHeight" id="variationHeight" onChange={handleVariationData} value={fDataVariation?.variationHeight} />
                          <br />
                          <label htmlFor="variationWeight">Weight</label>
                          <input type="text" name="variationWeight" id="variationWeight" onChange={handleVariationData} value={fDataVariation?.variationWeight} />
                          <br />
                          <div>
                            <Button color="secondary" onClick={() => clearUploadImg()}>
                              Clear
                            </Button>
                            <label htmlFor="variationSize">File Upload</label>
                            <input type="file" name="variationSize" id="variationSize" onChange={(e) => uploadImg(e)} />
                            <br />
                            <img src={fdata?.image} />
                            <br />
                          </div>

                          <Button color="primary" onClick={firebaseVariationUpdates}>Save changes</Button>
                        </div>
                      </Modal.Body>
                    </Modal>

                    <div className={`${styles.panel_footer}`}>

                   

                    </div>

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
const Colors = [
  { title: 'Blue' },
  { title: 'Green' },
  { title: 'Orange' },
  { title: 'Red' },
  { title: 'Black' },
];
const Sizes = [
  { title: 'Small' },
  { title: 'Meduim' },
  { title: 'Large' },
  { title: 'Extra Large' },
];
export default Product;

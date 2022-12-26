import React, { useState, useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';


import {
  addDoc,
  getDocs,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

import { db, storage } from "../../../firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Tags() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [files, setFiles] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [usersName, setUsersName] = useState("");
  const [usersEmail, setUsersEmail] = useState("");
  const [usersStore, setUsersStore] = useState("");
  const [usersAccid, setUsersAccid] = useState("");
  const [ProductData, setProductData] = useState([]);
  const [subCatData, setSubCatData] = useState([]);
  const [myUpload, setMyUpload] = useState()
  const [myProductUpload, setMyProductUpload] = useState()
  const [myImageUrls, setMyImageUrls] = useState()
  const [myImageUrl, setMyImageUrl] = useState()
  var data = [];

  
  useEffect(() => {
    // Perform localStorage action
    const usersEmail = localStorage.getItem("email")
    const users = localStorage.getItem('displayName')
    const store = localStorage.getItem("storename")
    const accid = localStorage.getItem("accid")
    console.log(users, "local storage")

    setUsersStore(((store !== null) && (store !== undefined)) ? store : "")
    setUsersEmail(((usersEmail !== null) && (usersEmail !== undefined)) ? usersEmail : "")
    setUsersName(((users !== null) && (users !== undefined)) ? users : "")
    setUsersAccid(((accid !== null) && (accid !== undefined)) ? accid : "")
  }, [])
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(
      title !== "" && price !== "" && description !== ""
      && category !== "" && subcategory !== "" && 
      color !== [] && size !== [] 
      )
      {
        console.log(file, "Ghays");
        try {
          const docRef = await addDoc(collection(db, "ProductData"), {
    
            title: title,
            price: price,
            description: description,
            category: category,
            subcategory: subcategory,
            totalRating: 0,
            sellername: usersName,
            remail: usersEmail,
            store: usersStore,
            color: color,
            size: size,
            accid: usersAccid,
            time: serverTimestamp(),
          });
    
          const ImageRef = ref(storage, `ProductData/${docRef.id}/image`);
    
          await uploadString(ImageRef, file, "data_url").then(async (snapshot) => {
            const downloadUrl = await getDownloadURL(ImageRef);
            await updateDoc(doc(db, "ProductData", docRef.id), {
              image: downloadUrl,
              itemid: docRef.id,
            });
          });

          const Imagecol = ref(storage, `ProductCol/${docRef.id}/image`);
    
          await uploadString(Imagecol, files, "data_url").then(async (snapshot) => {
            const downloadUrls = await getDownloadURL(Imagecol);
            await updateDoc(doc(db, "ProductData", docRef.id), {
              images: downloadUrls,
    
            });
          });
    
          alert("form submited");
          setTitle("");
          setPrice("");
          setDescription("");
    
          setCategory("");
        } catch (err) {
          alert(err);
        }
      }else{
        alert('plz fill all the fields')
      }
      
 
  };

  const ImageCollection = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setFiles(readerEvent.target.result);
    };
  };

  const handleCapacity = (e) => {
    setCategory(e.target.value);
    setCategoryId(e.target.id);
  };
  const handleSubCapacity = (e) => {
    setSubCategory(e.target.value);

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
    console.log(ProductData, "my cat data");
    // console.log(ProductData.itemid === 'iyW4OLiq10E00sRDSjAv')

  }
  const getSubProduct = async () => {

    const querySnapshot = await getDocs(collection(db, "ProductSubCat"),)
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // data.push(Object.values(doc.data()))
      data.push({ id: doc.id, ...doc.data() });
      //   setUserData(userData=>[...userData,doc.data()])
    })


    setSubCatData(data);
    console.log(subCatData, "my Sub cat data");

  }
  useEffect(() => {
    getProduct()
    getSubProduct()
  }, [])


  return (
    <>
      <div className='d-grid place-items-center place-content-center' id='form-responsive' style={{ paddingTop: 10 }}>
        <Stack spacing={3} sx={{ width: '70% !important'}}>

          <TextField style={{ borderRadius: '10px !important' }} id="outlined-basic" label="ProductTitle" variant="outlined" onChange={(e) => setTitle(e.target.value)} />


          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleCapacity}
            >
              {ProductData.length &&
                ProductData.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item?.category}>{item?.category}</MenuItem>
                  );
                })}
            </Select>
          </FormControl>
          

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"> Sub Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={subcategory}
              label="SubCategory"
              onChange={handleSubCapacity}
            >
              {subCatData.length &&

                 subCatData.filter((item)=> item.category === category).map((item, index)=>{
                  return (
                    <MenuItem key={index} value={item?.subcategory}>{item?.subcategory}</MenuItem>
                  );
                 })

                }
            </Select>
          </FormControl>

          <TextField
            id="outlined-number"
            label="Price"
            type="number"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            variant="outlined"
            onChange={(e) => setPrice(e.target.value)}
          />
      
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Autocomplete
            multiple
            id="tags-filled"
            options={Sizes.map((option) => option.title)}

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
          <Autocomplete
            multiple
            id="tags-filled"
            options={Colors.map((option) => option.title)}

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
        </Stack>
        <p>Featured Image</p>
        <Stack direction="row" alignItems="center" spacing={2}>

          <Button variant="contained" component="label" style={{ background: "#2b6777" }} >
            Upload
            <input hidden accept="image/*" multiple type="file" onChange={addImagetoPost} />
          </Button>

          <img src={myImageUrl} style={{ "width": 50 }} />
        </Stack>
        <p>Product Collection</p>
        <Stack direction="row" alignItems="center" spacing={2}>

          <Button style={{ background: "#2b6777" }} variant="contained" component="label" >
            Upload
            <input hidden accept="image/*" multiple type="file" onChange={Productcol} />
          </Button>

          <img src={myImageUrls} style={{ "width": 50 }} />
        </Stack>
        <div style={{ paddingTop: 15 }}>
          <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit} style={{ background: "#2b6777" }} >
            Submit Product
          </Button>
        </div>
      </div>
    </>
  );
}


const Sizes = [
  { title: 'Small' },
  { title: 'Meduim' },
  { title: 'Large' },
  { title: 'Extra Large' },
];
const Colors = [
  { title: 'Blue' },
  { title: 'Green' },
  { title: 'Orange' },
  { title: 'Red' },
  { title: 'Black' },
];
import React, { useState, useEffect } from 'react'
import styles from '../styles/store.module.css'
import { selectResturant } from './features/ResSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToBasket } from './features/BasketSlice';
import Router from 'next/router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { selectOpenResturant } from '../components/features/ResSlice';
import { db, storage } from '../firebase';
import { getDocs, addDoc, collection, serverTimestamp, updateDoc, doc, onSnapshot, query, where } from 'firebase/firestore';

function ProductSale({ obj }) {
  console.log(obj);
  const dispatch = useDispatch();
  const router = useRouter();
  const openResturant = () => {
    let payload = obj
    dispatch(selectResturant(payload));
    router.push({ pathname: "/Products", obj });
    console.log(obj)
  }
  const addItemsToBasket = () => {

    const product = obj.data()

    dispatch(addToBasket(product));

    // localStorage.setItem('remail', productemail);

    // if(localStorage.getItem("remail")===productemail){   

    // }else{

    // }

  }

  function handleClickedd() {
    router.push({ pathname: "/addFood", state: obj });

  }
  console.log(obj);







  return (
    //     <div className={styles.cart}>
    //     <img src={obj.data().image} alt="" />
    //     <span>{obj.data().title}</span>
    //     <span className={styles.text}>{obj.data().price}</span>
    //     <button  onClick={addItemsToBasket}>Add To Cart</button>
    //     <button onClick={openResturant}>See More</button>
    // </div>


    // <div className='col'>
    //   <Card style={{ width: '18rem', marginTop: '1rem', cursor: 'pointer', }}>
    //     <Card.Img className={styles.imgsize} variant="top" src={obj.data().image} />
    //     <Card.Body>
    //       <Card.Title>{`${obj.data().title.substring(0, 24)}...`}</Card.Title>
    //       <ReactStars
    //         count={5}
    //         size={24}
    //         value={obj.data().totalRating}
    //         color2={'#ffd700'} />
    //       <div className={styles.spaciz}>
    //         <Button onClick={addItemsToBasket} className={styles.btzxp} variant="primary">Add to cart</Button>
    //         <Button onClick={openResturant} className={styles.btzxp} variant="primary">View item</Button>
    //       </div>
    //     </Card.Body>
    //   </Card>
    // </div> 
    <>
      <div className={`${"col-sm-4 col-md-3 hidden-sm hidden-xs"} ${styles.box_product_outer}`} >
        <div className={styles.box_product}  >
          <div className={styles.img_wrapper}>
            <span >
              <img alt="Product" src={obj.data().image} />
            </span>
            {/*
              <div className={styles.tags}>
              <span className={styles.label_tags}><span className="label label-danger">Sale</span></span>
              <span className={styles.label_tags}><span className="label label-success">Collection</span></span>
              </div> 
            */}
            <div className={styles.option}>
              <a data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Add to Cart"> <ShoppingCartIcon className={styles.producticon} onClick={addItemsToBasket} /></a>
              <a data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Compare"> <VisibilityIcon className={styles.producticon} onClick={openResturant} /></a>
              <a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Wishlist"><i className="ace-icon fa fa-heart"></i></a>
            </div>
          </div>
          <h6 role="button" onClick={openResturant}>{obj.data().title}</h6>
          <div className={styles.price}>
            <div>{obj?.data().price} <span className={styles.price_down}> -10% </span></div>
            <span className={styles.price_old}>$15.00</span>
          </div>
          <div className={styles.rating}>
            <StarBorderIcon className={styles.ratingicon} />
            <StarBorderIcon className={styles.ratingicon} />
            <StarBorderIcon className={styles.ratingicon} />
            <StarBorderIcon className={styles.ratingicon} />
            <StarBorderIcon className={styles.ratingicon} />

            <a href="#">(5 reviews)</a>
          </div>
        </div>
      </div>
    </>
  )
}



export default ProductSale;
import React, { useState } from 'react'
import styles from '../../styles/store.module.css'
import { selectResturant } from '../features/ResSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../features/BasketSlice';
import Router from 'next/router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'
import ProductList from '../../pages/ProductList';
import { CardContent } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import Grid from '@material-ui/core';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function CategorySale({ obj }) {

  console.log(obj);
  const router = useRouter();
  const dispatch = useDispatch();
  const [categorys, setCategory] = useState();

  const ProductCategory = (e) => {
    // setSubcat(e.target.id)
    setCategory(obj.data().category)
    // console.log(e.target.id)
    router.push({ pathname: '/ProductList', query: { categorys: obj.data().category } })
  }







  const openResturant = () => {
    let payload = obj
    dispatch(selectResturant(payload));
    router.push('/Products', obj)
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

    <>
      <div className={`${"col-sm-4 col-md-12 col-sm-12 hidden-sm hidden-xs"} ${styles.box_product_outer}`} onClick={ProductCategory} >
        <div className={styles.box_product}  >
          <div className={styles.img_wrapper}>
            <span >
              <img alt="Product" src={obj.data().image} />
            </span>

          </div>
          <h6 role="button" onClick={ProductCategory}><a>{obj.data().category}</a></h6>

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

export default CategorySale;
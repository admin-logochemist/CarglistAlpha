import React, { useState } from 'react';
import styles from '../../styles/Home.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Router from 'next/router';
import { selectResturant } from '../features/ResSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../features/BasketSlice';


function BannerBox({ obj }) {



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
      <div className="col-lg-3 col-md-6 col-sm-6 col-xm-6" id={styles.bannerboxFixed} >
        <div className={styles.BannerBox} onClick={ProductCategory}>
          <img src={obj.data().image} className='bannerBoxImg' alt="" />
          <span>{obj.data().category} <ArrowForwardIosIcon className={styles.buttonIcon} /></span>
        </div>
      </div>
    </>
  )
}

export default BannerBox;

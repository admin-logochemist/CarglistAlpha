import React from 'react'
import styles from '../../styles/Products.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { StarRate, ShareSharp, Favorite } from '@material-ui/icons'
import ReactStars from 'react-stars' 
import { useDispatch } from 'react-redux';
import { updateBasket } from '../features/BasketSlice';
import { selectItems, selectTotal } from '../features/BasketSlice';
import { useSelector } from 'react-redux';
// import Button from 'react-bootstrap/Button';
const ProductDetail = ({itemid,quantity,title,category,price,description,ratings,variation}) => {
    const dispatch = useDispatch()
    const items = useSelector(selectItems);
    let itemAction;
    const UpdateQuantity = (itemid, itemAction, quantity) => {
        console.log(itemid, itemAction,"qqqqqqqqqqqqqqqqqqqq")
        dispatch(updateBasket({ itemid, itemAction, quantity }))
     }
    return (
        <>
      
        <div className='container'>
        <div className='row'>
            <div className='col-8'>
                <span className={styles.HeadingProduct}>{title}</span>
            </div>

            <div className='col-8'>
            <div className={styles.IconSec}>
            <ReactStars
            count={5}
            size={24}
            value={ratings}
            color2={'#ffd700'} />
            </div>
            </div>

            <div className='col-8'>
                <span className={styles.Brand}>Brand:{category}</span>
            </div>

            <div className='col-8'>
            <div className={styles.Rate}>
                <h2 className={styles.price}>${price}</h2>
              
            </div>
            </div>

            
            <div className={styles.ProductDetailImgdiv}>
                        <div className="row">
                            <div className="col-lg-12" id={styles.ProductImgcol}>
                             <span>{description}</span>
                            
                            </div>
                        {/*    <div className={styles.bozie}>
                            <div className={styles.button}>
                                <button onClick={() => UpdateQuantity(itemid, itemAction = false, quantity)} >-</button>
                                <span className="option-label">{items[0]?.quantity ? items[0]?.quantity : 1}</span>
                                <button onClick={() => UpdateQuantity(itemid, itemAction = true, quantity)} >+</button>
                            </div>
                            </div>
    */}

                         
                            
                        </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default ProductDetail

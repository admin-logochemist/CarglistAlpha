
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../components/features/BasketSlice';
import { updateBasket } from '../components/features/BasketSlice';
import styles from '../styles/CheckOut.module.css'



function CheckoutPro({ img, title, category, description, price, itemid, remail, quantity, price_total }) {
    const dispatch = useDispatch()
    let itemAction;
    const removeItemFromBasket = (itemid) => {
        dispatch(removeFromBasket({ itemid }))
    }


    const UpdateQuantity = (itemid, itemAction, quantity) => {
        console.log(itemid, itemAction, "qqqqqqqqqqqqqqqqqqqq")
        dispatch(updateBasket({ itemid, itemAction, quantity }))
    }
    return (
        <div className="row main align-items-center" id={styles.row}>
            <div className="col-2" id={styles.col_2}><img className={styles.img_fluid} src={img} /></div>
            <div className="col" id={styles.col}>
                <div className="row text-muted" id={styles.row}>{category}</div>
                <div className="row" id={styles.row}>{title}</div>
            </div>
            <div className="col" id={styles.col} >
                <h5 className="pricetags">${price}x{quantity} = ${price_total} </h5>
                <button style={{ width: 25, height: 25, backgroundColor: '#ff0000', color: '#fff', fontWeight: 500 }} onClick={() => UpdateQuantity(itemid, itemAction = false, quantity)}>-</button>
                <input type="text" style={{ width: 50, textAlign: "center", height: "25px" }} value={quantity} />
                <button style={{ width: 25, height: 25, backgroundColor: '#00ff00', color: '#fff', fontWeight: 500 }} onClick={() => UpdateQuantity(itemid, itemAction = true, quantity)}>+</button>
            </div>
            <div className="col" id={styles.col} onClick={() => removeItemFromBasket(itemid)}>${price} <span className={styles.close} >ccccc&#10005;</span></div>
        </div>
    )
}

export default CheckoutPro

import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../../styles/customercare.module.css'


const CustomerCareCard = (item) => {
    return (
        <div className={styles.card}>
            <img src={item.img} alt="" />
            <span>{item.text}</span>
        </div>
    )
}

export default CustomerCareCard

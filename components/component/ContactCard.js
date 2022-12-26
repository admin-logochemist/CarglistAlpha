import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../../styles/customercare.module.css'


const ContactCard = (item) => {
    return (
        <div className={styles.ContactCard}>
            <img src={item.img} alt="" />
            <span>{item.text} <br /> <p>{item.p}</p></span>

        </div>
    )
}

export default ContactCard

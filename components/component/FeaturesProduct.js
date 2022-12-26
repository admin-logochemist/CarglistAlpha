import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../../styles/Featureproduct.module.css'

const FeaturesProduct = (items) => {
    return (

        <div className={`${styles.features}`}>
            <div className={styles.FeaturesProduct}>
                <img src={items.image} alt="" />
                <p>{items.title}</p>
            </div>
        </div>

    )
}

export default FeaturesProduct;



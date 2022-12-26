
import React from 'react'
import styles from '../../styles/Order.module.css'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";

function OrderList() {




    return (
        <>
            <p>orders</p>
            <div className={styles.order_box}>
                <div className={styles.order_head}>
                    <div className={styles.header_txt}>
                        <h6>Order Placed by</h6>
                    </div>&nbsp;&nbsp;
                    <div className={styles.header_txt}>
                        <h6> - Date of Delivery </h6>
                    </div>
                    <div className={styles.header_txt}>
                        <h6>Total $ 1</h6>
                    </div>
                </div>
                <div className={styles.order_content}>
                    <div className={styles.fromcontent}>
                        <div>
                            <img className={styles.order_img} src='https://i.pinimg.com/564x/dd/20/a3/dd20a37f03b8ae6aa3e795e01eb2fcba.jpg' loading="lazy" alt="" />
                            <span className={styles.order_q}>
                                <p>Arial Matic</p>
                                <span>
                                    <p>Qty</p>
                                    <p>&nbsp;|&nbsp; 1</p>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderList;
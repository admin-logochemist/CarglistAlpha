import React, { useState } from 'react'
import styles from '../../../styles/systemStatus.module.css'
import AddIcon from '@mui/icons-material/Add';


const myAccordion = ({ Question, Answer }) => {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className={styles.accordion} onClick={() => setShow(!show)}>
                <AddIcon onClick={() => setShow(!show)} />
                <h6>{Question}</h6>
            </div>
            {show && <p className={styles.answer}>{Answer}</p>}


        </>
    )
}

export default myAccordion

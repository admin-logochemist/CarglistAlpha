import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../../../styles/systemStatus.module.css'
import AddIcon from '@mui/icons-material/Add';
import { Questions } from '../Accordion/Api'
import MyAccordion from '../Accordion/myAccordion'

const Accordian = () => {
    const [data, SetData] = useState(Questions)



    return (
        <>
            <section>
                {data.map((curElem) => {
                    const { id } = curElem;
                    return <MyAccordion key={id} {...curElem} />
                })}
            </section>

        </>
    )
}

export default Accordian

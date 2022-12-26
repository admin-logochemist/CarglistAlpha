import React from 'react'
import styles from '../../../styles/WidgetSm.module.css'
import {Visibility} from '@material-ui/icons'

function WidgetSm() {
    return (
        <div className={styles.WidgetSm}>
         <span className={styles.WidgetSmTitle}>New join Members </span>
         <ul className={styles.WidgetSMList}>
          <li className={styles.WidgetSmListItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU" alt="" className={styles.WidgeSmImg} />
            <div className={styles.WidgetSmUser}>
                    <span className={styles.WidgetSmUserName}>Anna keller</span>
                    <span className={styles.WidgetSmUserTitle}>Software Engineer</span>
            </div>
            <button className={styles.WidgeSmButton}>
                <Visibility className={styles.WidgeSmIcon} />
                display
            </button>
          </li>
          <li className={styles.WidgetSmListItem}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU" alt="" className={styles.WidgeSmImg} />
          <div className={styles.WidgetSmUser}>
                  <span className={styles.WidgetSmUserName}>Anna keller</span>
                  <span className={styles.WidgetSmUserTitle}>Software Engineer</span>
          </div>
          <button className={styles.WidgeSmButton}>
              <Visibility  className={styles.WidgeSmIcon}/>
              display
          </button>
        </li>
        <li className={styles.WidgetSmListItem}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU" alt="" className={styles.WidgeSmImg} />
        <div className={styles.WidgetSmUser}>
                <span className={styles.WidgetSmUserName}>Anna keller</span>
                <span className={styles.WidgetSmUserTitle}>Software Engineer</span>
        </div>
        <button className={styles.WidgeSmButton}>
            <Visibility  className={styles.WidgeSmIcon}/>
            display
        </button>
      </li>
      <li className={styles.WidgetSmListItem}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU" alt="" className={styles.WidgeSmImg} />
      <div className={styles.WidgetSmUser}>
              <span className={styles.WidgetSmUserName}>Anna keller</span>
              <span className={styles.WidgetSmUserTitle}>Software Engineer</span>
      </div>
      <button className={styles.WidgeSmButton}>
          <Visibility  className={styles.WidgeSmIcon}/>
          display
      </button>
    </li>
    <li className={styles.WidgetSmListItem}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU" alt="" className={styles.WidgeSmImg} />
    <div className={styles.WidgetSmUser}>
            <span className={styles.WidgetSmUserName}>Anna keller</span>
            <span className={styles.WidgetSmUserTitle}>Software Engineer</span>
    </div>
    <button className={styles.WidgeSmButton}>
        <Visibility  className={styles.WidgeSmIcon}/>
        display
    </button>
  </li>
          
         </ul>
    </div>
    )
}

export default WidgetSm

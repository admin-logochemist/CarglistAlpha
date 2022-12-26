import styles from '../../styles/SideBarTwo.module.css'
import React, { useState, useEffect } from 'react'
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
    Menu
} from '@material-ui/icons'

function SideBarTwo() {



    // useEffect(() => {
    //    if(on !== true){
    //         setOn(false)
    //    }else{
    //    }

    // }, )


    return (
        <>
            <div className={styles.sidebar} >


                <div>
                    <div className={styles.sidebarWrapper}>
                        <div className={styles.sidebarMenu}>
                            <ul className={styles.sidebarList}>
                                <span>
                                    
                                </span>
                                <span className={`${styles.sidebarListitem} ${styles.active} `}  >
                                    <LineStyle className={styles.sidebarIcon} />

                                </span>
                                <span className={`${styles.sidebarListitem} py-3`}>
                                    <Timeline className={styles.sidebarIcon} />
                                </span>
                                <span className={`${styles.sidebarListitem} py-3`}>
                                    <TrendingUp className={styles.sidebarIcon} />
                                </span>

                                <span className={`${styles.sidebarListitem} py-3`}>
                                    <PermIdentity className={styles.sidebarIcon} />
                                </span>
                                <span className={`${styles.sidebarListitem} py-3`}>
                                    <Storefront className={styles.sidebarIcon} />
                                </span>
                                <span className={`${styles.sidebarListitem} py-3`}>
                                    <AttachMoney className={styles.sidebarIcon} />
                                </span>
                                <span className={`${styles.sidebarListitem} py-3`}>
                                    <BarChart className={styles.sidebarIcon} />
                                </span>
                            </ul>
                        </div>
                        <div className={styles.sidebarMenu}>
                            <ul className={styles.sidebarList}>
                                <span className={`${styles.sidebarListitem}`}>
                                    {/* <PermIdentity className={styles.sidebarIcon} /> */}
                                </span>
                                <span className={styles.sidebarListitem}>
                                    {/* <Storefront className={styles.sidebarIcon} /> */}
                                </span>
                                <span className={styles.sidebarListitem}>
                                    {/* <AttachMoney className={styles.sidebarIcon} /> */}
                                </span>
                                <span className={styles.sidebarListitem}>
                                    {/* <BarChart className={styles.sidebarIcon} /> */}
                                </span>
                            </ul>
                        </div>
                        <div className={styles.sidebarMenu}>
                            <ul className={styles.sidebarList}>
                                <span className={`${styles.sidebarListitem} `}>
                                    {/* <MailOutline className={styles.sidebarIcon} /> */}

                                </span>
                                <span className={styles.sidebarListitem}>
                                    {/*<DynamicFeed className={styles.sidebarIcon} />*/}

                                </span>
                                <span className={styles.sidebarListitem}>
                                    {/* <ChatBubbleOutline className={styles.sidebarIcon} />*/}
                                </span>
                            </ul>
                        </div>
                        <div className={styles.sidebarMenu}>
                            <ul className={styles.sidebarList}>
                                <span className={`${styles.sidebarListitem}`}>

                                    {/* <WorkOutline className={styles.sidebarIcon} /> */}
                                </span>
                                <span className={styles.sidebarListitem}>
                                    {/*<Timeline className={styles.sidebarIcon} />*/}
                                </span>
                                <span className={styles.sidebarListitem}>
                                    {/* <Report className={styles.sidebarIcon} />*/}
                                </span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SideBarTwo;

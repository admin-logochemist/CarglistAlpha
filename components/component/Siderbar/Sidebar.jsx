import styles from '../../../styles/sidebar.module.css'
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
import DashboardProductAddForm from '../DashboardProductAddForm/DashboardProductAddForm'

function Sidebar() {


    const [isopen, setIsopen] = useState(true)


    return (
        <>
            <div className={styles.sidebar} >


                <div>
                    <div className={styles.sidebarWrapper}>
                        <div className={styles.sidebarMenu}>
                            <h3 className={styles.sidebarTitle}>Dashboard</h3>
                            <ul className={styles.sidebarList}>
                                <span className={`${styles.sidebarListitem} `}  >
                                    <LineStyle className={styles.sidebarIcon} />
                                    <a href="/Dashboard/SellerDashboard" > Home</a>
                                </span>
                                <span className={`${styles.sidebarListitem} `}>
                                    <Timeline className={styles.sidebarIcon} />
                                    <a href='/Dashboard/ProductAddPage' >Add product</a>
                                </span>
                                <span className={styles.sidebarListitem}>
                                    <TrendingUp className={styles.sidebarIcon} />
                                    <a href="/Dashboard/Sales">Sales</a>
                                </span>
                                <span className={styles.sidebarListitem}>
                                    <Storefront className={styles.sidebarIcon} />
                                    <a href='/Dashboard/Products'>Products</a>
                                </span>
                            </ul>
                        </div>
                        <div className={styles.sidebarMenu}>
                            <h3 className={styles.sidebarTitle}>Quick Menu</h3>
                            <ul className={styles.sidebarList}>
                                <span className={`${styles.sidebarListitem}`}>
                                    <PermIdentity className={styles.sidebarIcon} />
                                    <a href="/Dashboard/Profile">
                                        Profile
                                    </a>
                                </span>

                                <span className={styles.sidebarListitem}>
                                    <AttachMoney className={styles.sidebarIcon} />
                                    Transaction
                                </span>
                                <span className={styles.sidebarListitem}>
                                    <BarChart className={styles.sidebarIcon} />
                                    Reports
                                </span>
                            </ul>
                        </div>
                        {/*        <div className={styles.sidebarMenu}>
                            <h3 className={styles.sidebarTitle}>Notifications</h3>
                            <ul className={styles.sidebarList}>
                                <span className={`${styles.sidebarListitem}`}>
                                    <MailOutline className={styles.sidebarIcon} />
                                    Mail
                                </span>
                                <span className={styles.sidebarListitem}>
                                    <DynamicFeed className={styles.sidebarIcon} />
                                    Feedback
                                </span>
                                <span className={styles.sidebarListitem}>
                                    <ChatBubbleOutline className={styles.sidebarIcon} />
                                    Messages                    </span>
                            </ul>
                        </div>
                        <div className={styles.sidebarMenu}>
                           <h3 className={styles.sidebarTitle}>Staff</h3>
                            <ul className={styles.sidebarList}>
                                <span className={`${styles.sidebarListitem}`}>
                                    <WorkOutline className={styles.sidebarIcon} />
                                    Manage
                                </span>
                                <span className={styles.sidebarListitem}>
                                    <Timeline className={styles.sidebarIcon} />
                                    Analytics
                                </span>
                                <span className={styles.sidebarListitem}>
                                    <Report className={styles.sidebarIcon} />
                                    Reports
                                </span>
                            </ul>
    </div> */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Sidebar

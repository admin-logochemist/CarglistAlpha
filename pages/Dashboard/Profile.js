import React, { useState } from 'react'
import Sidebar from '../../components/component/Siderbar/Sidebar'
import Topbar from '../../components/component/Topbar/Topbar'
import styles from '../../styles/SellerDashboard.module.css'
import Home from '../Home/Home'
import SideBarTwo from '../../components/component/SideBarTwo'
import UserList from '../UserList/UserList';
import Sidebar2 from '../../components/component/Siderbar/Sidebar2'
import "bootstrap/dist/css/bootstrap.min.css";
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
import stylesMenu from '../../styles/sidebar.module.css'
import DashboardProductAddForm from '../../components/component/DashboardProductAddForm/DashboardProductAddForm'
import SellerProfile from '../../components/component/Dashboardproduct/SellerProfile'



function Profile() {

  const [on, setOn] = useState(true);
  return (
    <div>
      <Topbar />
      <div className="container-fluid" >
        <div className="row" id={styles.container}>
          {/* <div className="col-lg-12" id={stylesMenu.MenuBARIcon} style={{ width: on == true ? '274px' : '90px' }}>
            <Menu className={stylesMenu.sidebarMenuIcon} onClick={() => setOn(!on)} />
          </div> */}
        </div>

        {
          on ?
            <div className="row" id={styles.container} style={{ display: "flex", flexWrap: "wrap" }}>

              <div className="col-lg-3 col-md-3 col-sm-3" id='hideOnMob' >
                <Sidebar2 />
              </div>
              <div className="col-lg-9 col-md-9 col-sm-9"  >
                <div className={`${styles.mainhead} mt-5 mb-5 text-center d-flex justify-content-center align-items-center`}>
                  <h1 className={` py-4 `} id='hideOnMob'>PROFILE</h1>
                </div>
                <SellerProfile />
              </div>
            </div>
            :
            <div className="row" id={styles.container} >
              <div className="col-lg-1 col-md-2 col-sm-2">
                <Sidebar2 />
              </div>
              <div className="col-lg-11 col-md-10 col-sm-10" >
                <div className={`${styles.mainhead} mt-5 mb-5 text-center d-flex justify-content-center align-items-center`}>
                  <h1 className={` py-4`} >PROFILE</h1>
                </div>
                <SellerProfile />

              </div>
            </div>
        }

      </div>
    </div>
  )
}

export default Profile;
// import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
// import { NavLink } from 'react-router-dom';
// import styles from '../../../styles/sidebar.module.css'



const DashBoardSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/Dashboard/SellerDashboard",
            name: "Home",
            icon: <FaTh />
        },
        {
            path: "/Dashboard/ProductAddPage",
            name: "Add Product",
            icon: <FaUserAlt />
        },
        {
            path: "/Dashboard/Sales",
            name: "Sales",
            icon: <FaRegChartBar />
        },
        {
            path: "/Dashboard/Products",
            name: "Products",
            icon: <FaCommentAlt />
        },
        {
            path: "/CategoryAdd",
            name: "Add Category",
            icon: <FaCommentAlt />
        },
        {
            path: "/SubcatAdd",
            name: "Add SubCategory",
            icon: <FaCommentAlt />
        }



    ]

    const quickLinks = [
        {
            path: "/Dashboard/Profile",
            name: "Profile",
            icon: <FaUserAlt />
        },
        {
            path: "/",
            name: "Transaction",
            icon: <FaThList />
        },
        {
            path: "/",
            name: "Reports",
            icon: <FaThList />
        }
    ]
    return (
        <>
            <div style={{ float: 'left' }} className="sidebarAlign position-fixed" >
                <div style={{ width: isOpen ? "230px" : "50px", marginLeft: isOpen ? "-6%" : "-24%" }} className="dashboardSidebar">
                    <div className="top_section">
                        <img style={{ display: isOpen ? "block" : "none" }} src='/weblisted-01.png' className="w-50"/>
                        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                            <FaBars role='button' onClick={toggle} />
                        </div>
                    </div>

                    <div>
                        <h3 className='p-3' style={{ display: isOpen ? "block" : "none" }}>Dashboard</h3>
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <a href={item.path} key={index} className="link" >
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </a>
                        ))
                    }

                    <div className='mt-3'>
                        <h3 className='p-3' style={{ display: isOpen ? "block" : "none" }}>Quick Links</h3>
                    </div>

                    {
                        quickLinks.map((item, index) => (
                            <a href={item.path} key={index} className="link">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </>
    );
};


export default DashBoardSideBar;
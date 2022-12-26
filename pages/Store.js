import React, { useState, useEffect } from 'react'
import Header from '../pages/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/store.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from 'react-bootstrap/Carousel';
import ProductSale from '../components/ProductSale'
import CategorySale from '../components/component/CategorySale'
import { collection, onSnapshot, orderBy, query, where, limit, startAfter } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from '../components/features/BasketSlice';
import Link from 'next/link'
import ReactStars from 'react-stars'
import HeaderStore from '../components/component/HeaderStore';
import HeaderEbey from '../components/component/HeaderEbey';
import HeadTabs from '../components/component/HeadTabs';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '../components/component/Footer'
import Card from 'react-bootstrap/Card';

function Store() {
    
    const items = useSelector(selectItems);
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [page, setPage] = useState(1);
    const [startItem, setStartItem] = useState(0);
    const [stopItem, setStopItem] = useState(8);
    const [openApp, setOpenApp] = useState(false);


    const handleClick = () => {
        if (openApp === openApp) {
            setOpenApp(!openApp)
        }
    }

    useEffect(() => {
        getProduct()
        getCategory()
    }, [])

    const handlePagination = (e) => {
        console.log("mycurtrent page", e.target.textContent)
        let pageNumber = parseInt(e.target.textContent)
        if (pageNumber === 1) {
            // p1, 1-10
            setStartItem(pageNumber - 1)
            setStopItem((pageNumber * 9) - 1)
        }

        else {
            //p2, 
            setStartItem(((8 * pageNumber) - 8 - 1))
            setStopItem((pageNumber * 8) - 1)
        }

    }

    const renderProductSale = () => {
        return product.slice(startItem, stopItem).map((item, index) => {

            // eslint-disable-next-line react/jsx-key
            return <ProductSale
                obj={item}
            />
        })
    }

    const renderCategorySale = () => {
        return category.slice(startItem, stopItem).map((item, index) => {
            // eslint-disable-next-line react/jsx-key
            return <CategorySale
                obj={item}
            />
        })

    }
    const getProduct = () => {


        onSnapshot(
            query(collection(db, "ProductData"), orderBy("time", "desc")), (snapshot) => {
                setProduct(snapshot.docs)


            })
    };
    const getCategory = () => {


        onSnapshot(
            query(collection(db, "ProductCat")), (snapshot) => {
                setCategory(snapshot.docs)

            })
    };



    return (
        <>
            <Header />
                    <div id="setHeaderBottomGap"></div>
            <div className={styles.body}>

                <div className={styles.header00}>

                </div>
                <div className={`${"container-fluid"} ${styles.headercontainer}`}>
                   
                    <div className="row" id={styles.collist}>
                        <div className='col-lg-1'></div>
                        <div className="col-lg-11" id={styles.Head2nd}>
                            <ul className={styles.storeheadul}>
                                <li onClick={handleClick}> <a href=""> SAVE MORE ON APP</a></li>
                                <li> <a href="/Affiliated">AFFILIATE PROGRAM</a></li>
                                <li> <a href="/Store"> SELL ON WEBLISTED </a></li>
                                <li> <a href="/CustomerCare">CUSTOMER CARE </a></li>
                                <li> <a href="/ListAdd">LIST ITEM</a></li>
                            </ul>
                        </div>
                        {openApp && <div className="col-lg-1">
                            <div className={styles.openApp}>
                                <span>Download the App</span>
                                <div className={styles.Popup}>
                                    <span className={styles.barcode}>
                                        <img src="barcode.png" alt="" />
                                    </span>
                                    <span>
                                        <p>Shop through our app to enjoy:</p>
                                        <ul>
                                            <li>Exclusive Vouchers</li>
                                            <li>Better deals</li>
                                            <li>personalized recommendations</li>
                                            <li>Find out first</li>
                                        </ul>
                                    </span>
                                </div>
                                <div className={styles.links}>
                                    <span>
                                        <img src="google store.png" alt="" />
                                    </span>
                                    <span>
                                        <img src="ios store.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    <HeaderStore />
                </div>

                <div className={`${"container-fluid"} ${styles.carousel}`}>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 ">
                            <Carousel variant="light">
                                <Carousel.Item className={`${styles.Carousel_Item}`} >
                                    <img
                                        className="d-block w-100"
                                        src="/weblisted_banner1.jpg"
                                        alt="First slide"
                                        id={styles.sliderImgz}
                                    />

                                </Carousel.Item>
                                <Carousel.Item className={styles.Carousel_Item}>
                                    <img
                                        className="d-block w-100"
                                        src="/weblisted_banner2.jpg"
                                        alt="Second slide"
                                        id={styles.sliderImg}

                                    />

                                </Carousel.Item>
                                <Carousel.Item className={styles.Carousel_Item}>
                                    <img
                                        className="d-block w-100"
                                        src="/weblisted_banner3.jpg"
                                        alt="Third slide"
                                        id={styles.sliderImg}

                                    />

                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>

                {/* <div className="container">
                <div className="row" id={styles.rowmart}>
                    <div className="col-lg-3 col-md-4 col-sm-4" id={styles.banner}>
                        <button className={styles.btns} >
                            <img src="/martlogo.png" alt="" />
                            <span>MART </span>
                        </button>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.btnsIcon} />

                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4" id={styles.banner}>
                        <button className={styles.btns} >
                            <img src="/martlogo.png" alt="" />
                            <span>FASHION</span>
                        </button>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.btnsIcon} />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4" id={styles.banner}>
                        <button className={styles.btns} >
                            <img src="/martlogo.png" alt="" />
                            <span>BEAUTY</span>
                        </button>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.btnsIcon} />
                    </div>
                </div>
            </div> 
    */}


                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-lg-12">
                            <a className={styles.backIcon} href="/"> <ArrowBackIcon className={styles.backIcon2} /> </a>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className={`${"row"}`}>
                        <div className={`${"col-lg-12 col-md-12 col-sm-12 xs-hidden"} ${styles.topse}`}>
                            <div className={`${styles.content} mx-1`}>
                                <a href=""> <img src="rice-bowl.png" alt="" /> Mart</a> <ArrowForwardIcon className={styles.topsecicon} />
                            </div>
                            <div className={`${styles.content} mx-1`}>
                                <a href=""> <img src="dress.png" alt="" /> Fashion</a> <ArrowForwardIcon className={styles.topsecicon} />
                            </div>
                            <div className={`${styles.content} mx-1`}>
                                <a href=""> <img src="house-decoration.png" alt="" /> Home & Decor</a> <ArrowForwardIcon className={styles.topsecicon} />
                            </div>
                            <div className={`${styles.content} mx-1`}>
                                <a href=""><img src="cosmetics.png" alt="" /> Beauty</a> <ArrowForwardIcon className={styles.topsecicon} />
                            </div>
                            <div className={`${styles.content} mx-1`}>
                                <a href="Dashboard/ProductAddPage"><img src="cosmetics.png" alt="" /> Add Products</a> <ArrowForwardIcon className={styles.topsecicon} />
                            </div>
                            <div className={`${styles.content} mx-1`}>
                                <a href="/CategoryAdd"><img src="cosmetics.png" alt="" /> Add Category</a> <ArrowForwardIcon className={styles.topsecicon} />
                            </div>
                            <div className={`${styles.content} mx-1`}>
                                <a href="/SubcatAdd"><img src="cosmetics.png" alt="" /> Add Subcategory</a> <ArrowForwardIcon className={styles.topsecicon} />
                            </div>
                        </div>

                    </div>
                </div>


                <div className={`${'container-fluid pt-5'}`} >
                    <div className={`${"row pb-5 my-3"} d-flex justify-content-center`}>
                        <div className='col-lg-12 mb-5 d-flex justify-content-center'>
                            <h5 className={`text-center p-4 text-light h1 ${styles.mainhead}` } > FEATURE CATEGORY </h5>
                        </div>
                        {renderCategorySale()}

                    </div>
                    <div className='category-pagination mb-3'>
                        <Stack className=' text-center' spacing={2}>
                            <Pagination count={10} variant="outlined" color="primary" onChange={e => handlePagination(e)} defaultPage={1} />
                        </Stack>
                    </div>
                </div>




                <div className={`${'container-fluid pt-5'}`} >
                    <div className={`${"row pb-5 my-3"} d-flex justify-content-center`}>
                        <div className='col-lg-12 mb-5 d-flex justify-content-center'>
                            <h5 className={`text-center p-4 text-light h1 ${styles.mainhead}`} > PRODUCTS </h5>
                        </div>
                        {renderProductSale()}
                    </div>
                    <div className='category-pagination my-3 pb-5'>
                        <Stack className=' text-center' spacing={2}>
                            <Pagination count={10} variant="outlined" color="primary" onChange={e => handlePagination(e)} defaultPage={1} />
                        </Stack>
                    </div>
                </div>



            </div>
            <Footer />
        </>
    )
}

export default Store;
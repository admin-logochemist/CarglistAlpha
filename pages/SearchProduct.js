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
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from '../components/features/BasketSlice';
import Link from 'next/link'
import ReactStars from 'react-stars'
import HeaderStore from '../components/component/HeaderStore';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRouter } from 'next/router';
import { FormGroup } from '@material-ui/core'
import { FormControlLabel } from '@material-ui/core'
import { Checkbox } from '@material-ui/core';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Footer from '../components/component/Footer'



function SearchProduct() {

    const router = useRouter()
    const { Searchdata } = router.query;
    const items = useSelector(selectItems);
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const { search, Scategory } = router.query

    const getProductList = () => {
        if (search && Scategory) {

            onSnapshot(

                query(collection(db, "ProductData"), where('title', '==', search), where("subcategory", " == ", Scategory)), (snapshot) => {
                    setCategory(snapshot.docs, "tt")


                })
        }
        else if (!Scategory) {

            onSnapshot(

                query(collection(db, "ProductData"), where('title', '==', search)), (snapshot) => {
                    setCategory(snapshot.docs, "tt")


                })
        }
        else if (!search) {

            onSnapshot(

                query(collection(db, "ProductData"), where("subcategory", "==", Scategory)), (snapshot) => {
                    setCategory(snapshot.docs, "tt")


                })
        }
    };
    useEffect(() => {
        getProductList()
    }, [])
    // console.log(product)
    // const renderProduct = () => {
    //     if (categoryId && categoryId?.length) {
    //         // setTimeData(job.map(item=>item.data().timestamp))
    //         // console.log('state', timeData)
    //         return categoryId.map((item, index) => {
    //             // eslint-disable-next-line react/jsx-key
    //             console.log(new Date(item.data().timestamp.seconds).toLocaleDateString(), "Date")
    //             return <ProductSale
    //                 obj={item}
    //             />
    //         })
    //     }
    // };




    // }, [])

    const renderProductSale = () => {

        return category.map((item, index) => {
            // eslint-disable-next-line react/jsx-key
            return <ProductSale
                obj={item}
            />

        })
    }
    const renderCategorySale = () => {

        return category.map((item, index) => {
            // eslint-disable-next-line react/jsx-key
            return <CategorySale
                obj={item}
            />

        })
    }
    // const getProduct = () => {


    //     onSnapshot(
    //         query(collection(db, "addProduct"), where('category', '==', categorys)), (snapshot) => {
    //             setProduct(snapshot.docs)

    //         })
    // };


    
    return (
        <>
            <Header />
            <div id="setHeaderBottomGap"></div>

            <div className="container-fluid">
                <div className="row" id={styles.collist}>
                    <div className='col-lg-1'></div>
                    <div className="col-lg-11" >
                        <ul className={styles.storeheadul}>
                            <li>SAVE MORE ON APP</li>
                            <li>AFFILIATE PROGRAM</li>
                            <li>SELL ON weblisted</li>
                            <li>CUSTOMER CARE</li>
                            <li>TRACK MY ORDER</li>
                        </ul>
                    </div>
                </div>
            </div>
            <HeaderStore />

            <div className='container-fluid' id={styles.Mallcatlist}>
                <h5>CATEGORY</h5>
                <div className={`${'row'} ${styles.productlistrow}`} >
                    <div className={`${"col-lg-3 col-md-3 col-sm-3"} ${styles.colleft}`}>
                        <div className={styles.ListCheckBox}>
                            <h6>Brand</h6>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox size='small' style={{ color: "#235789" }} />} label="Apple" />
                                <FormControlLabel control={<Checkbox size='small' style={{ color: "#235789" }} />} label="Samsung" />
                                <FormControlLabel control={<Checkbox size='small' style={{ color: "#235789" }} />} label="Huwawe" />
                                <FormControlLabel control={<Checkbox size='small' style={{ color: "#235789" }} />} label="Motorola" />
                                <FormControlLabel control={<Checkbox size='small' style={{ color: "#235789" }} />} label="Xeomi" />
                                <FormControlLabel control={<Checkbox size='small' style={{ color: "#235789" }} />} label="BitLap" />
                            </FormGroup>
                        </div>
                        <div className={styles.ListCheckBox}>
                            <h6>Category</h6>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox size='small' style={{ color: "#235789" }} />} label="Electronics" />
                                <FormControlLabel control={<Checkbox size='small' style={{ color: "#235789" }} />} label="Womens" />
                                <FormControlLabel control={<Checkbox size='small' style={{ color: "#235789" }} />} label="Stationary" />
                                <FormControlLabel control={<Checkbox size='small' style={{ color: "#235789" }} />} label="Medicine And Aid" />
                                <FormControlLabel control={<Checkbox size='small' style={{ color: "#235789" }} />} label="Automobiles" />
                                <FormControlLabel control={<Checkbox size='small' style={{ color: "#235789" }} />} label="Mens" />
                            </FormGroup>
                        </div>


                    </div>

                    <div className='col-lg-9'>

                        <div className="row">
                            {renderProductSale()}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Stack spacing={2} style={{ marginTop: 20 }}>
                            <Pagination count={10} variant="outlined" color="primary" onChange={e => handlePagination(e)} defaultPage={1} />
                        </Stack>
                    </div>
                </div>
            </div>
            <Footer />


        </>
    )
}

export default SearchProduct;
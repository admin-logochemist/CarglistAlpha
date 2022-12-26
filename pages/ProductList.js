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



function ProductList() {

    const router = useRouter()
    const { ProductCategory } = router.query;
    const items = useSelector(selectItems);
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const { categorys } = router.query

    const getProductList = () => {


        onSnapshot(

            query(collection(db, "ProductData"), where('category', '==', categorys)), (snapshot) => {
                setCategory(snapshot.docs, "tt")


            })
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



    const objArr =
        [
            {
                text: 'soap1',
                image: 'https://images.philips.com/is/image/PhilipsConsumer/TAKH402PK_00-IMS-en_PK?$jpglarge$&wid=1250',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope2',
                image: 'https://media1.popsugar-assets.com/files/thumbor/yB0aMusFqZ55vNPX2GmL-aePMPQ/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/03/29/961/n/1922507/62692a665eb11019_netimg5NIAFJ/i/Fun-Print-Vizliter-TWS-Deep-Bass-Wireless-Headphones-50.jpg',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope3',
                image: 'https://www.czone.com.pk/images/thumbnails-large/1-czone.com.pk-1540-10975-280121091957-1540-10975-050421043210.jpg',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope4',
                image: 'https://allmytech.pk/wp-content/uploads/2020/02/wh-xb700-blue-square.jpg',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            // {
            //     text: 'rope6',
            //     image: 'image2',
            //     content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            // }
            // ,
            // {
            //     text: 'rope6',
            //     image: 'image2',
            //     content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            // }
            // ,
            // {
            //     text: 'rope6',
            //     image: 'image2',
            //     content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            // }
            // ,
            // {
            //     text: 'rope6',
            //     image: 'image2',
            //     content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            // }

        ]

    const objArrz =
        [
            {
                text: 'mini bluethoot',
                image: 'image1',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'mini bluethoot',
                image: 'image2',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'mini bluethoot2',
                image: 'image3',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'mini bluethoot3',
                image: 'image4',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'mini bluethoot4',
                image: 'image5',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'mini bluethoot5',
                image: 'image2',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }


        ]
    const forSale =
        [
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair.. ',
                image: 'https://thumbs.dreamstime.com/b/composition-variety-grocery-products-white-background-31618939.jpg',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair. 2',
                image: 'https://media.gettyimages.com/photos/unbranded-canned-goods-conserves-sauces-and-oils-picture-id168383797?s=612x612',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..3',
                image: 'https://previews.123rf.com/images/belchonock/belchonock1804/belchonock180430008/98944480-different-cooking-utensils-on-white-background.jpg',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..4',
                image: 'https://img.freepik.com/premium-vector/set-kitchen-utensils-isolated-vector-illustration-white-background_125494-1090.jpg?w=2000',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..5',
                image: 'https://s3.envato.com/files/348051170/cc46.jpg',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..6',
                image: 'https://elements-twenty20-photos-0.imgix.net/production/uploads/items/d5b18cdf-39e6-4dd1-b33d-9fc3aa3a36e0/source?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=2d57e6ffa963791127efbd06c7d9fe56',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..6',
                image: 'https://media.istockphoto.com/photos/brown-antique-table-with-round-table-top-picture-id131936828?k=20&m=131936828&s=612x612&w=0&h=nHlkXsyAuvGgSZ7FJNBHQd8XHXDPzWQfCzz816KxXnk=',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..6',
                image: 'https://media.istockphoto.com/photos/concept-of-product-categories-furniture-and-decor-on-white-background-picture-id1135527778',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }

        ]

    // useEffect(() => {


    //     getProduct()

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

export default ProductList;
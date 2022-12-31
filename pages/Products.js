import React, { useState, useEffect } from 'react'
//component
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from '../pages/Header'
import Header from './Header'
import ReactImageMagnify from 'react-image-magnify';
import styles from '../styles/Products.module.css'
// import styles from '../../styles/Product.module.css'
// import ProductDetail from '../components/component/ProductDetail';
import ProductDetail from '../components/component/ProductDetail';
import Reviews from '../components/component/Reviews';
import { useSelector } from 'react-redux';
import ReactStars from 'react-stars'
import { selectOpenResturant } from '../components/features/ResSlice';
// import { selectOpenResturant } from '../components/features/ResSlice';
import { db, storage } from '../firebase';
import { useDispatch } from 'react-redux';
import { getDocs, addDoc, collection, serverTimestamp, updateDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import HeaderStore from '../components/component/HeaderStore';
// import HeaderStore from '../HeaderStore';
import ToggleButton from 'react-bootstrap/ToggleButton';
// import { addToBasket } from '../components/features/BasketSlice';
import { addToBasket } from '../components/features/BasketSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Footer from '../components/component/Footer';
function Products() {

    const [review, setReview] = useState("");
    const [activeColor, setActiveColor] = useState(false);
    const [activeSize, setActiveSize] = useState(false);
    const [size, setSize] = useState(undefined);
    const [color, setColor] = useState(undefined);
    const [product, setProduct] = useState([]);
    const [usersName, setUsersName] = useState("");
    const [rating, setRating] = useState(0);
    const [resReviews, setResReviews] = useState();
    const [userData, setUserData] = useState([])
    const [updateFlag, setUpdateFlag] = useState(false)
    const [tRating, setTRating] = useState(0)
    const [quan, setQuan] = useState(1)
    const [uData, setUData] = useState()
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const [sizeValue, setSizeValue] = useState('1');
    const [bidopen, setBidopen] = useState('');

    const datas = []
    const dispatch = useDispatch();
    const selectResturant = useSelector(selectOpenResturant)
    const IncQuan = () => {
        setQuan(quan + 1)
    }
    const DecQuan = () => {
        setQuan(quan - 1)
    }
    const getReviews = () => {
        onSnapshot(
            query(collection(db, "review"), where("id", "==", selectResturant?.id)), (snapshot) => {
                setProduct(snapshot.docs)
            })
        // console.log(selectResturant.data())
    }

    useEffect(() => {
        getReviews()
        const users = localStorage.getItem('displayName')
        console.log(users, "local storage")
        setUsersName(((users !== null) && (users !== undefined)) ? users : "Login")
        if (!selectResturant.id) {
            alert("Please add Data")
        }
    }, [])



    const handleSubmit = async (e) => {

        try {
            const docRef = await addDoc(collection(db, 'review'), {
                review: review,
                usersName: usersName,
                ratings: rating,
                id: selectResturant.id


            })
            addReviews()


            alert("Review submited")
        } catch (err) {
            alert(err)
        }


    }

    const addItemsToBasket = () => {
        let colorChecker = false;
        let sizeChecker = false;
        const product = selectResturant?.data()
        // setUData({...product,quantity : quan})
        console.log(product.color)


        if (product.color) {
            if (color) {
                colorChecker = true
            }
            else {
                colorChecker = false
                return alert("Please select color")
            }
        }
        if (product.size) {
            if (size) {
                sizeChecker = true
            }
            else {
                sizeChecker = false
                return alert("Please select size")
            }
        }
        if (product.size === undefined && product.color === undefined) {
            sizeChecker = true
            colorChecker = true

        }

        if (colorChecker === true && sizeChecker === true) {

            let quantity = parseInt(quan)
            let dta = { ...product, quantity: quantity, price_total: parseInt(product.price * quantity), size: size, color: color }
            console.log(dta)

            dispatch(addToBasket(dta));
            //  dispatch(addToBasket(product));
        }
        else {
            console.log("Something is missing")
        }


    }

    const addReviews = () => {

        const totalRating = selectResturant?.data()?.totalRating
        const total = totalRating + rating
        const ratings = product.length
        const totalRat = total / ratings
        const reviewsRef = doc(db, "addProduct", selectResturant.id);
        // Set the "capital" field of the city 'DC'
        updateDoc(reviewsRef, {
            totalRating: totalRat
            // address: fdata.address,
        });
        //   setTRating(totalRat)
        setUpdateFlag(!updateFlag)
    }
    const renderReviews = () => {

        return product?.map((item, index) => {
            // eslint-disable-next-line react/jsx-key
            return <Reviews
                obj={item}
            />

        })
    }

    product && console.log(product.length)
    // console.log(selectResturant?.data()?.variation[0].variationName, "Ghayasd")



    const handleClick = async (e) => {
        setBidopen()
    }


    return (
        <>
            <Header />
            <div id="setHeaderBottomGap"></div>

            <HeaderStore />
            <div className="container welistedBannerAffilated" id={styles.Fluid}>
                <div className="row mb-5" id={styles.ReviewsRow}>
                    <div className="col-lg-10" id={styles.ProductsDetails}>
                        <div className={styles.proimg} >
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: selectResturant?.data().image,
                                },
                                largeImage: {
                                    src: selectResturant?.data().image,
                                    width: ' 0%',
                                    height: 400,
                                    overflow: "hidden",
                                    border: "none quick",
                                    display: "none quick",
                                }
                            }} />
                        </div>
                        <div id={styles.detailsSection}>
                            <ProductDetail
                                itemid={selectResturant?.id}
                                title={selectResturant?.data().title}
                                description={selectResturant?.data().description}
                                category={selectResturant?.data().category}
                                price={selectResturant?.data().price}
                                ratings={selectResturant?.data().totalRating}
                                quantity={selectResturant?.data().quantity ?
                                    selectResturant?.data().quantity : 1} />
                            <div>
                            </div>
                            Avalible Color
                            {(selectResturant?.data().color) ? (<div style={{ display: "flex" }}>

                                {selectResturant?.data().color.map((item, index) => {
                                    return (
                                        <div key={index} style={{ display: "flex", flexDirection: "row", paddingRight: 10 }}>
                                            {/*    <button value={item} id={`c${index}`} onClick={(e) => setColor(e.target.value) && setActiveColor(e.target.id)} 
                                                    style={
                                                        { color: (activeColor === `c${index}`) ? "red" : "blue" }
                                                        // { color:  "red"  }
                                                    }>{item}</button>*/}
                                            <ToggleButton
                                                key={index}
                                                id={`item-${index}`}
                                                type="radio"
                                                className={styles.variants}
                                                name="item"
                                                value={item}
                                                checked={color === item}
                                                onChange={(e) => setColor(e.currentTarget.value)}
                                            >
                                                {item}
                                            </ToggleButton>
                                        </div>

                                    )
                                })}
                            </div>) : <div> </div>}

                            <div style={{ paddingTop: 30, paddingBottom: 20 }}>
                                Avalible Size

                                {(selectResturant?.data().size) ? (<div style={{ display: "flex" }}>

                                    {selectResturant?.data().size.map((item, index) => {
                                        return (

                                            <div key={index} style={{ display: "flex", flexDirection: "row", paddingRight: 10 }}>
                                                {/*  <Button value={item} onClick={(e) => setSize(e.target.value) && setActiveSize(true)} style={{ backgroundColor: activeSize === true ? "Red" : "blue" }}>{item}</Button>*/}
                                                <ToggleButton
                                                    key={index}
                                                    id={`itemc-${index}`}
                                                    type="radio"
                                                    className={styles.variants}
                                                    name="item1"

                                                    value={item}
                                                    checked={size === item}
                                                    onChange={(e) => setSize(e.currentTarget.value)}
                                                >
                                                    {item}
                                                </ToggleButton>
                                            </div>

                                        )
                                    })}
                                </div>) : <div> </div>}

                            </div>
                            <div style={{ paddingTop: 30, paddingBottom: 20 }} className={styles.btnsss}>
                                <Button onClick={DecQuan} className={styles.variants} >-</Button>
                                <input type="text" value={quan} style={{ width: 100 }} />
                                <Button onClick={IncQuan} className={styles.variants}>+</Button>

                            </div>
                            <Button onClick={addItemsToBasket} className={styles.variants} >Add To Cart</Button>
                        </div>


                    </div>
                </div>
                <div className="row mt-5" id={styles.ReviewsRow}>
                    <div className={`${'col-lg-10'} ${styles.col10}`}>

                        <Card style={{ width: '28rem', marginBottom: '50px' }} className={styles.reviewCard}>
                            <Card.Body>
                                <Card.Title>Write Review-- {usersName}  </Card.Title>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    <div className='col' id={styles.ceitre}>
                                    </div>
                                </Card.Text>
                                <textarea type="text" value={review} onChange={(e) => setReview(e.target.value)} className={styles.textarea} placeholder="Write Your Review" />
                                <ReactStars
                                    count={5}
                                    size={24}
                                    onChange={(e) => setRating(e)}
                                    color2={'#ffd700'} />
                                <Button onClick={handleSubmit} className={styles.variants}
                                >Submit Review</Button>
                            </Card.Body>
                        </Card>

                        <div className={styles.resReviews}>
                            <h6 className={styles.HeadingProducts}>Total Ratings</h6>
                            <ReactStars
                                count={5}
                                size={30}
                                value={selectResturant?.data().totalRating}
                                color2={'#ffd700'}
                            />

                        </div>
                    </div>
                    <div className={`${'col-lg-10'} ${styles.userreviews}`}>
                        {renderReviews()}
                    </div>
                </div>

            </div>
            <Footer/>
        </>

    )
}




export default Products;
import React, { useState, useEffect } from 'react';
import BannerBox from '../components/component/BannerBox';
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import { useRouter } from 'next/router';
import Header from './Header'
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc, getDocs, where, query, onSnapshot, } from 'firebase/firestore';
import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-calendar/dist/Calendar.css";
import Script from 'next/script';
import DatePicker from 'sassy-datepicker';
// import JobList from "../components/component/JobList";
import { auth } from '../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { logout, selectUser } from '../components/features/UderSlice.js';
import { async } from '@firebase/util';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Slider from '../components/component/Slider';
import { SideBanner } from '../components/component/SideBanner';
import styless from '../styles/store.module.css';
import Footer from '../components/component/Footer'
import HeaderEbey from '../components/component/HeaderEbey'
import HeadTabs from '../components/component/HeadTabs'
import CategorySale from '../components/component/CategorySale'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import FeaturesProduct from '../components/component/FeaturesProduct'
import MenuIcon from '@mui/icons-material/Menu';
function Home() {

  const router = useRouter();

  const [Datecalendar, setDateCalender] = useState("");
  const [details, setDetails] = useState(null);
  const [searchPost, setSearchPost] = useState()
  const [housingOffered, setHousingOffered] = useState([])
  const [community, setCommunity] = useState([])
  const [radioData, setRadioData] = useState([])
  const [services, setServices] = useState([])
  const [cityName, setCityName] = useState();
  const [sale, setSale] = useState([])
  const [address, setAddress] = useState("")
  const [location, setLocation] = useState("")
  const [selectData, setSelectData] = useState()
  const [subcat, setSubcat] = useState()
  const [menu, setMenu] = useState(false)
  const [category, setCategory] = useState([]);
  var data = [];
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [usersName, setUsersName] = useState("");
  const [openApp, setOpenApp] = useState(false)


  const handleClick = () => {
    if (openApp === openApp) {
      setOpenApp(!openApp)
    }

  }
  const handleClick2 = (e) => {
    if (menu === menu) {
      setMenu(!menu)
    }
  }

  useEffect(() => {
    // Perform localStorage action

    const users = localStorage.getItem('displayName')
    console.log(users, "local storage")
    setUsersName(((users !== null) && (users !== undefined)) ? users : "")
  }, [])

  const postdata = (e) => {
    console.log(e.target.id)
    router.push({ pathname: '/post', query: { openCat: e.target.id, city: cityName, date: Datecalendar }})
  }


  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.clear()
      dispatch(logout())

      router.push("/SignIn");
    })
  }


  const handleCapacity = (e) => {
    setCityName(e.target.value);
  }





  const checkData = (item) => {
    setSelectData(item)

  }

  const city = async () => {

    await fetch("https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572")
      .then(response => response.json())
      .then((data) => {
        const locations = ''
        if (address && address?.length) {
          setCityName(address)
          setLocation(locations)
        } else {
          setCityName(data.city.toLowerCase().replace(/\s/g, ''))

        }
      }
      )
      .catch((error) => console.error(error))

  }
  useEffect(() => {

    city();
    getCategory();

  }, [])







  const onChange = (date) => {
    let calendarDate = new Date(date).toLocaleDateString();
    // var timestamp2 = new Date(date)
    // console.log(timestamp2.getUTCDate(), "Date")
    setDateCalender(calendarDate)
    console.log(Datecalendar, "Datess")

  };
  const currentDate = () => {
    let calendarDate = new Date(Date.now());
    // console.log(date.toString());
    console.log(calendarDate.toLocaleDateString(), "Date")

  };


  const handleSubmit = () => {
    router.push({ pathname: "/PostSearch", query: { cDate: Datecalendar, sinput: searchPost } })
  }


  const getCategory = () => {


    onSnapshot(
      query(collection(db, "ProductCat")), (snapshot) => {
        setCategory(snapshot.docs)

      })
  };
  const renderCategorySale = () => {

    return category.slice(0, 8).map((item, index) => {
      // eslint-disable-next-line react/jsx-key
      return <BannerBox
        obj={item}
      />
    })

  }

  return (

    <>

      <div className={`${"container-fluid"} ${styless.headercontainer2}`}>

        <div className="row" id={styless.collist2}>

          <div className="col-lg-12 col-md-12 col-sm-12" id={styless.Head2nd}>
            <ul className={styless.storeheadul}>
              <li onClick={handleClick} > SAVE MORE ON APP</li>
              <li> <a href="/Affiliated">AFFILIATE PROGRAM</a></li>
              <li> <a href="/Store"> SELL ON WEBLISTED</a></li>
              <li> <a href="/CustomerCare"> CUSTOMER CARE</a></li>
              {((usersName !== null) && (usersName !== "")) ?
                <li> <a href="/ListAdd"> LIST ITEM </a></li> : ""}
            </ul>
            <MenuIcon className={styless.menuicon} onClick={handleClick2} />
          </div>
          {menu && <div className={styless.listonclick}>
            <ul className={styless.listclick}>
              <li onClick={handleClick} > SAVE MORE ON APP</li>
              <li> <a href="/Affiliated">AFFILIATE PROGRAM</a></li>
              <li> <a href="/Dashboard/ProductAddPage"> SELL ON WEBLISTED</a></li>
              <li> <a href="/CustomerCare"> CUSTOMER CARE</a></li>
              <li>  <a href="/ListAdd">LIST ITEM </a></li>
            </ul>
          </div>}
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

      </div>

      <div className="container-fluid" id={styles.fluid}>
        <div className='row' id={styles.home_row}>
          <div className='col-lg-2 col-md-12 col-sm-12' id={styles.bg_1}>
            <div className={` ${styles.sideondiv}`}>
              <span className={styles.sidebarAC}>
                {((usersName !== null) && (usersName !== "")) ?
                  <a href="/Create_post" className={styles.a_1}>
                    Create a posting
                  </a>
                  :
                  <a href="/SignIn" className={styles.a_1}>
                    Create a posting
                  </a>}
                {((usersName !== null) && (usersName !== "")) ?
                  <a href="/Mypost" className={`${styles.a_1} ${"mt-1"}`}>
                    My Post
                  </a>
                  :
                  ""
                }
              </span>

            </div>
            <span>
              <div className='form-group' id={styles.siderSearch} >
                <input onChange={(e) => setSearchPost(e.target.value)} value={searchPost} type="text" placeholder='Search' className={`${styles.homesidebar} ${"form-control"}`} />
                <button onClick={handleSubmit}><FontAwesomeIcon icon={faSearch} /></button>
              </div>

            </span>
            <span className={`${"mt-4"} `}>
            </span>
            <div className={`${"mt-5"} ${styles.calendar_main}`}>
              <a href="http://google.com/" className={styles.a_2}>
                Event calendar
              </a>
              <DatePicker onChange={onChange} className={styles.calendardate} />

              <SideBanner />
            </div>
          </div>

          {/*-------rehman code-----*/}

          <div className="col-lg-8 col-md-12 col-sm-12" id={styles.index_content}>
            <div className="row" id={styles.slider}>
              <HeaderEbey />
              <HeadTabs />

              <h3 className={styles.Head}>{cityName}</h3>
              <Slider />
              <h3 className={styles.webheading}>WEB LISTED STORE</h3>
              {renderCategorySale()}
              {/* <BannerBox Title="Electonics" image="Home-Appliance.png" />
              <BannerBox Title="Dress" image="Wedding-Dress.png" />
              <BannerBox Title="Beauty Picks" Image="Luxury-Cosmetics-Transparent-Background.png" />
              <BannerBox Title="Easy Buy" Image="Buy-PNG-Image.png" />
              <BannerBox Title="Mens Fashion" Image="Mens-Fashion-PNG-Clipart.png" />
              <BannerBox Title="Tools" Image="Tools-Transparent-PNG.png" />
              <BannerBox Title="Automotive" Image="Car-PNG-Transparent-Image.png" />
              <BannerBox Title="Arts & Craft" Image="pngegg.png" /> */}
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className={styles.FeaturesProducthead}>
                  <h3>Explore Feature Categories</h3>
                  <div className="d-flex p-5">
                    <FeaturesProduct image="sneakers.avif" title="Sneakers" />
                    <FeaturesProduct image="beauty.avif" title="Beauty" />
                    <FeaturesProduct image="wristwatch.avif" title="Wristwatches" />
                    <FeaturesProduct image="Fishing.avif" title="Fishing" />
                    <FeaturesProduct image="collectibles.jpg" title="Collectible" />
                    <FeaturesProduct image="Phone.avif" title="Smart Phone" />
                    <FeaturesProduct image="sell.avif" title="Sell" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <h3 className={styles.webheading}>WEB LISTED</h3>

              <div className="col-lg-9">
                <div className="row">

                  <div className="col-md-6 col-12" id={styles.weblistedSec} >
                    <h6 className={styles.comhead}>Community <i className="fa fa-globe" aria-hidden="true"></i></h6>
                    <div className="row" id={styles.homecat1}>
                      <div className="col-md-6">
                        <ul>
                          <li onClick={(e) => postdata(e)} id="activity partners" className={styles.comlist}>
                            activites
                          </li><li onClick={(e) => postdata(e)} id="artists" className={styles.comlist}>
                            artists
                          </li><li onClick={(e) => postdata(e)} id="childcare" className={styles.comlist}>
                            childcare
                          </li><li onClick={(e) => postdata(e)} id="classes" className={styles.comlist}>
                            classes
                          </li>
                          <li onClick={(e) => postdata(e)} id="events" className={styles.comlist}>
                            events
                          </li>
                          <li onClick={(e) => postdata(e)} id="general" className={styles.comlist}>
                            general
                          </li>
                          <li onClick={(e) => postdata(e)} id="groups" className={styles.comlist}>
                            groups
                          </li>
                          <li onClick={(e) => postdata(e)} id="local news and views" className={styles.comlist}>
                            local news and views
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6" id={styles.weblistedSec}>
                        <ul>


                          <li onClick={(e) => postdata(e)} id="lost+found" className={styles.comlist}>
                            lost+found
                          </li><li onClick={(e) => postdata(e)} id="misssed" className={styles.comlist}>
                            misssed
                          </li>
                          <li onClick={(e) => postdata(e)} id="connections" className={styles.comlist}>
                            connections
                          </li>
                          <li onClick={(e) => postdata(e)} id="musicians" className={styles.comlist}>
                            musicians
                          </li><li onClick={(e) => postdata(e)} id="pets" className={styles.comlist}>
                            pets
                          </li><li onClick={(e) => postdata(e)} id="politics" className={styles.comlist}>
                            politics
                          </li><li onClick={(e) => postdata(e)} id="rant & raves" className={styles.comlist}>
                            rant & raves
                          </li><li onClick={(e) => postdata(e)} id="rideshare" className={styles.comlist}>
                            rideshare
                          </li>
                          <li onClick={(e) => postdata(e)} id="volunteers" className={styles.comlist}>
                            volunteers
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6" id={styles.weblistedSec}>
                    <h6 className={styles.comhead}>Housing</h6>
                    <ul>


                      <li onClick={(e) => postdata(e)} id="apartments / housing for rent" className={styles.comlist}>
                        apts / housing
                      </li> <li onClick={(e) => postdata(e)} id="housing swap" className={styles.comlist}>
                        housing swap
                      </li> <li onClick={(e) => postdata(e)} id="housing wanted" className={styles.comlist}>
                        housing wanted
                      </li>
                      <li onClick={(e) => postdata(e)} id="office & commercial" className={styles.comlist}>
                        office / commercial
                      </li>
                      <li onClick={(e) => postdata(e)} id="parking & storage" className={styles.comlist}>
                        parking / storage
                      </li>
                      <li onClick={(e) => postdata(e)} id="real estate - by broker" className={styles.comlist}>
                        real estate for sale
                      </li>
                      <li onClick={(e) => postdata(e)} id="rooms & shares" className={styles.comlist}>
                        rooms / shared
                      </li>
                      <li onClick={(e) => postdata(e)} id="rooms wanted" className={styles.comlist}>
                        rooms wanted
                      </li>
                      <li onClick={(e) => postdata(e)} id="sublets & temporary" className={styles.comlist}>
                        sublet / temporary
                      </li>
                      <li onClick={(e) => postdata(e)} id="vacation rentals" className={styles.comlist}>
                        vocation rentals
                      </li>


                    </ul>
                  </div>

                  <div className="col-lg-12" id={styles.weblistedSec}>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6" id={styles.weblistedSec}>
                    <h6 className={styles.comhead}>Services</h6>
                    <ul>
                      <li onClick={(e) => postdata(e)} id="automotive services" className={styles.comlist}>
                        automotive services
                      </li>
                      <li onClick={(e) => postdata(e)} id="beauty services" className={styles.comlist}>
                        beauty services
                      </li>
                      <li onClick={(e) => postdata(e)} id="cell phone / mobile services" className={styles.comlist}>
                        cell phone / mobile services
                      </li>
                      <li onClick={(e) => postdata(e)} id="computer services" className={styles.comlist}>
                        computer services
                      </li>
                      <li onClick={(e) => postdata(e)} id="creative services" className={styles.comlist}>
                        <span >creative services</span>
                      </li> <li onClick={(e) => postdata(e)} id="cycle services" className={styles.comlist}>
                        cycle services
                      </li>
                      <li onClick={(e) => postdata(e)} id="event services" className={styles.comlist}>
                        event services
                      </li>
                      <li onClick={(e) => postdata(e)} id="farm & garden services" className={styles.comlist}>
                        farm & garden services
                      </li>
                      <li onClick={(e) => postdata(e)} id="financial services" className={styles.comlist}>
                        financial services
                      </li>
                      <li onClick={(e) => postdata(e)} id="health/wellness services" className={styles.comlist}>
                        health/wellness services
                      </li>
                      <li onClick={(e) => postdata(e)} id="household services" className={styles.comlist}>
                        household services
                      </li>
                      <li onClick={(e) => postdata(e)} id="labor / hauling / moving" className={styles.comlist}>
                        labor / hauling / moving
                      </li>
                      <li onClick={(e) => postdata(e)} id="legal services" className={styles.comlist}>
                        legal services
                      </li> <li onClick={(e) => postdata(e)} id="lessons & tutoring " className={styles.comlist}>
                        lessons & tutoring
                      </li>
                      <li onClick={(e) => postdata(e)} id="marine services" className={styles.comlist}>
                        marine services
                      </li>
                      <li onClick={(e) => postdata(e)} id="pets" className={styles.comlist}>
                        pet
                      </li>
                      <li onClick={(e) => postdata(e)} id="real estate services" className={styles.comlist}>
                        real estate services
                      </li>
                      <li onClick={(e) => postdata(e)} id="skilled trade services" className={styles.comlist}>
                        skilled trade services
                      </li>
                      <li onClick={(e) => postdata(e)} id="small biz ads" className={styles.comlist}>
                        small biz ads
                      </li>
                      <li onClick={(e) => postdata(e)} id="travel/vacation services" className={styles.comlist}>
                        travel/vacation services
                      </li>
                      <li onClick={(e) => postdata(e)} id="writing / editing / translation" className={styles.comlist}>
                        writing / editing / translation
                      </li>

                    </ul>
                  </div>
                  <div className="col-md-6 " id={styles.weblistedSec}>
                    <div className="row">
                      <h6 className={styles.comhead}>For Sale</h6>
                      <div className="col-md-6">
                        <ul>
                          <li onClick={(e) => postdata(e)} id="photo/video" className={styles.comlist}>
                            photo/video
                          </li>
                          <li onClick={(e) => postdata(e)} id="free stuff" className={styles.comlist}>
                            free stuff
                          </li>

                          <li onClick={(e) => postdata(e)} id="motorcycle parts" className={styles.comlist}>
                            motorcycle parts
                          </li>

                          <li onClick={(e) => postdata(e)} id="business/commercial" className={styles.comlist}>
                            business/commercial
                          </li>

                          <li onClick={(e) => postdata(e)} id="barter" className={styles.comlist}>
                            barter
                          </li>

                          <li onClick={(e) => postdata(e)} id="tickets" className={styles.comlist}>
                            tickets
                          </li>

                          <li onClick={(e) => postdata(e)} id="health and beauty" className={styles.comlist}>
                            health and beauty
                          </li>

                          <li onClick={(e) => postdata(e)} id="video gaming" className={styles.comlist}>
                            video gaming
                          </li>

                          <li onClick={(e) => postdata(e)} id="computers" className={styles.comlist}>
                            computers
                          </li>

                          <li onClick={(e) => postdata(e)} id="cars & trucks" className={styles.comlist}>
                            cars & trucks
                          </li>

                          <li onClick={(e) => postdata(e)} id="garage & moving sales" className={styles.comlist}>
                            garage & moving sales
                          </li>

                          <li onClick={(e) => postdata(e)} id="bicycles" className={styles.comlist}>
                            bicycles
                          </li>

                          <li onClick={(e) => postdata(e)} id="wanted" className={styles.comlist}>
                            wanted
                          </li>

                          <li onClick={(e) => postdata(e)} id="farm & garden" className={styles.comlist}>
                            farm & garden
                          </li>


                          <li onClick={(e) => postdata(e)} id="bicycle parts" className={styles.comlist}>
                            bicycle parts
                          </li>

                          <li onClick={(e) => postdata(e)} id="tools" className={styles.comlist}>
                            tools
                          </li>

                          <li onClick={(e) => postdata(e)} id="antiques" className={styles.comlist}>
                            antiques
                          </li>

                          <li onClick={(e) => postdata(e)} id="appliances" className={styles.comlist}>
                            appliances
                          </li>
                          <li onClick={(e) => postdata(e)} id="atvs/utvs/snowmobiles" className={styles.comlist}>
                            atvs/utvs/snowmobiles
                          </li>
                          <li onClick={(e) => postdata(e)} id="books & magazines" className={styles.comlist}>
                            books & magazines
                          </li>
                          <li onClick={(e) => postdata(e)} id="jewelry" className={styles.comlist}>
                            jewelry
                          </li>
                          <li onClick={(e) => postdata(e)} id="clothing & accessories" className={styles.comlist}>
                            clothing&accessories
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6" id={styles.weblistedSec}>
                        <ul>

                          <li onClick={() => postdata} id="rvs" className={styles.comlist}>
                            rvs
                          </li>
                          <li onClick={(e) => postdata(e)} id="household items" className={styles.comlist}>
                            household items
                          </li>
                          <li onClick={(e) => postdata(e)} id="auto wheels & tires" className={styles.comlist}>
                            auto wheels & tires
                          </li>
                          <li onClick={(e) => postdata(e)} id="motorcycles/scooter" className={styles.comlist}>
                            motorcycles/scooter
                          </li>
                          <li onClick={(e) => postdata(e)} id="cell phones" className={styles.comlist}>
                            cell phones
                          </li>

                          <li onClick={(e) => postdata(e)} id="arts & crafts" className={styles.comlist}>
                            arts & crafts
                          </li>  <li onClick={(e) => postdata(e)} id="boats" className={styles.comlist}>
                            boats
                          </li>

                          <li onClick={(e) => postdata(e)} id="trailers" className={styles.comlist}>
                            trailers
                          </li>
                          <li onClick={(e) => postdata(e)} id="toys & games" className={styles.comlist}>
                            toys & games
                          </li>
                          <li onClick={(e) => postdata(e)} id="electronics" className={styles.comlist}>
                            electronics
                          </li>

                          <li onClick={(e) => postdata(e)} id="boat parts" className={styles.comlist}>
                            boat parts
                          </li>
                          <li onClick={(e) => postdata(e)} id="collectibles" className={styles.comlist}>
                            collectibles
                          </li>
                          <li onClick={(e) => postdata(e)} id="heavy equipment" className={styles.comlist}>
                            heavy equipment
                          </li>
                          <li onClick={(e) => postdata(e)} id="auto parts" className={styles.comlist}>
                            auto parts
                          </li>
                          <li onClick={(e) => postdata(e)} id="aviation" className={styles.comlist}>
                            aviation
                          </li>
                          <li onClick={(e) => postdata(e)} id="furniture" className={styles.comlist}>
                            furniture
                          </li>
                          <li onClick={(e) => postdata(e)} id="cds/dvds/vhs" className={styles.comlist}>
                            cds/dvds/vhs
                          </li>
                          <li onClick={(e) => postdata(e)} id="baby & kid stuff" className={styles.comlist}>
                            baby & kid stuff
                          </li>
                          <li onClick={(e) => postdata(e)} id="musical instruments" className={styles.comlist}>
                            musical instruments
                          </li>
                          <li onClick={(e) => postdata(e)} id="materials" className={styles.comlist}>
                            materials
                          </li>
                          <li onClick={(e) => postdata(e)} id="general for sale" className={styles.comlist}>
                            general for sale
                          </li>
                          <li onClick={(e) => postdata(e)} id="computer parts" className={styles.comlist}>
                            computer part
                          </li>

                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-12">
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3" >
                <div className='col-md-12' id={styles.weblistedSec} >
                  <h6 className={styles.comhead}>Jobs</h6>
                  <ul>
                    <li onClick={(e) => postdata(e)} id="et cetera" className={styles.comlist}>
                      et cetera
                    </li>
                    <li onClick={(e) => postdata(e)} id="software/qa/dba/etc" className={styles.comlist}>
                      software/qa/dba/etc
                    </li>
                    <li onClick={(e) => postdata(e)} id="science/biotech" className={styles.comlist}>
                      science/biotech
                    </li>
                    <li onClick={(e) => postdata(e)} id="salon/spa/fitness" className={styles.comlist}>
                      salon/spa/fitness
                    </li>
                    <li onClick={(e) => postdata(e)} id="food/beverage/hospitality" className={styles.comlist}>
                      food/beverage/hospitality
                    </li>
                    <li onClick={(e) => postdata(e)} id="real estate" className={styles.comlist}>
                      real estate
                    </li>
                    <li onClick={(e) => postdata(e)} id="skilled trades/artisan" className={styles.comlist}>
                      skilled trades/artisan
                    </li>
                    <li onClick={(e) => postdata(e)} id="writing/editing" className={styles.comlist}>
                      writing/editing
                    </li>
                    <li onClick={(e) => postdata(e)} id="nonprofit" className={styles.comlist}>
                      nonprofit
                    </li>
                    <li onClick={(e) => postdata(e)} id="marketing/advertising/pr" className={styles.comlist}>
                      marketing/advertising/pr
                    </li>
                    <li onClick={(e) => postdata(e)} id="admin" className={styles.comlist}>
                      admin
                    </li>
                    <li onClick={(e) => postdata(e)} id="general labor" className={styles.comlist}>
                      general labor
                    </li>
                    <li onClick={(e) => postdata(e)} id="government" className={styles.comlist}>
                      government
                    </li>
                    <li onClick={(e) => postdata(e)} id="manufacturing" className={styles.comlist}>
                      manufacturing
                    </li>
                    <li onClick={(e) => postdata(e)} id="retail/wholesale" className={styles.comlist}>
                      retail/wholesale
                    </li>
                    <li onClick={(e) => postdata(e)} id="legal/paralegal" className={styles.comlist}>
                      legal/paralegal
                    </li>
                    <li onClick={(e) => postdata(e)} id="human resource" className={styles.comlist}>
                      human resource
                    </li>

                    <li onClick={(e) => postdata(e)} id="customer service" className={styles.comlist}>
                      customer service
                    </li><li onClick={(e) => postdata(e)} id="tv/film/video/radio" className={styles.comlist}>
                      tv/film/video/radio
                    </li>

                    <li onClick={(e) => postdata(e)} id="healthcare" className={styles.comlist}>
                      healthcare
                    </li>
                    <li onClick={(e) => postdata(e)} id="art/media/design" className={styles.comlist}>
                      art/media/design
                    </li>

                    <li onClick={(e) => postdata(e)} id="architect/engineer/cad" className={styles.comlist}>
                      architect/engineer/cad (no IT/computer jobs here please)
                    </li>

                    <li onClick={(e) => postdata(e)} id=">web/html/info design" className={styles.comlist}>
                      web/html/info design
                    </li>

                    <li onClick={(e) => postdata(e)} id="technical support" className={styles.comlist}>
                      technical support
                    </li>
                    <li onClick={(e) => postdata(e)} id="education/teaching" className={styles.comlist}>
                      education/teaching
                    </li>
                    <li onClick={(e) => postdata(e)} id="systems/networking" className={styles.comlist}>
                      systems/networking
                    </li>
                    <li onClick={(e) => postdata(e)} id="sales" className={styles.comlist}>
                      sales
                    </li>
                    <li onClick={(e) => postdata(e)} id="transportation" className={styles.comlist}>
                      transportation
                    </li>
                    <li onClick={(e) => postdata(e)} id="business/mgmt" className={styles.comlist}>
                      business/mgmt
                    </li><li onClick={(e) => postdata(e)} id="security" className={styles.comlist}>
                      security
                    </li>
                    <li onClick={(e) => postdata(e)} id="account/finance" className={styles.comlist}>
                      account/finance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*-------end code-----*/}


          <div className='col-lg-2 col-md-12 col-sm-12' id={styles.bg_2}>



            <span className={`${styles.sidebarRS}`}>
              {((usersName !== null) && (usersName !== "")) ?
                <p onClick={signOut} className={`${'text-center'}  ${styles.a_1}`}>
                  {usersName}
                  <AccountCircleOutlinedIcon className={`${styles.pficon}`} />
                  <div>
                    <button className={styles.logoutbtn}>Logout</button>

                  </div>

                </p>
                :

                <a href="/SignIn" style={{ backgroundColor: 'white', color: '#2b6777 !important', border: 'none', padding: '10px', borderRadius: '6px !important' }}>
                  Sign In
                </a>
              }
            </span>

            <span className={`${styles.sidebarRS}`}>
              {((usersName !== null) && (usersName !== "")) ?
                <div>
                  <button style={{ backgroundColor: 'white', color: '#2b6777', border: 'none', padding: '10px', borderRadius: '6px !important' }}><a href='Dashboard/SellerDashboard'>My Dashboard</a></button>
                </div>
                :
                <a href="/SignIn" style={{display:'none'}} className={styles.a_1}>
                  Sign In
                </a>
              }
            </span>


            <p className="P_1">
              {/*  <select name="lang" id="chlang" className='js-only' >
                <option value="?lang=da&amp;setlang=1">dansk</option>
                <option value="?lang=de&amp;setlang=1">deutsch</option>
                <option selected="" value="?lang=en&amp;setlang=1">
                  English
                </option>
                <option value="?lang=es&amp;setlang=1">español</option>
                <option value="?lang=fr&amp;setlang=1">français</option>
                <option value="?lang=it&amp;setlang=1">italiano</option>
                <option value="?lang=pt&amp;setlang=1">português</option>
                <option value="?lang=fi&amp;setlang=1">suomi</option>
                <option value="?lang=sv&amp;setlang=1">svenska</option>
                <option value="?lang=vi&amp;setlang=1">tiếng việt</option>
                <option value="?lang=tr&amp;setlang=1">türkçe</option>
                <option value="?lang=ru&amp;setlang=1">русский</option>
                <option value="?lang=zh&amp;setlang=1">中文</option>
                <option value="?lang=ja&amp;setlang=1">日本語</option>
                <option value="?lang=ko&amp;setlang=1">한국말</option>
      </select> */}
            </p>

            <div className={`${"mt-5"} ${styles.RightSide}`}>
              <div className={styles.home_select_div}>
                <span>
                  USA
                </span> <br />
                <select id="" className={styles.home_select} onClick={handleCapacity}>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona"> Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Dc">Dc</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Florida">Florida</option>
                  <option value="Guam">Guam</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Mass">Mass</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="N Carolina">N Carolina</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="N Hampshire">N Hampshire</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="S Carolina">S Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginiac">West Virginiac</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>

                </select>
              </div>
              <div className={styles.home_select_div}>
                <span>
                  Asia / Pacific
                </span> <br />
                <select id="" className={styles.home_select} onClick={handleCapacity}>
                  <option value="Adelaide"> Adelaide</option>
                  <option value="Auckland">Auckland</option>
                  <option value="Bangladesh"> Bangladesh</option>
                  <option value="Beijing">Beijing</option>
                  <option value="Brisbane">Brisbane</option>
                  <option value="Canberra">Canberra</option>
                  <option value="Christchurch">Christchurch</option>
                  <option value="Darwin">Darwin</option>
                  <option value="Guangzhou">Guangzhou</option>
                  <option value="Hangzhou">Hangzhou</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Malaysia"> Malaysia</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Manila">Manila</option>
                  <option value="Melbourne">Melbourne</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Okinawa">Okinawa</option>
                  <option value="Osaka">Osaka</option>
                  <option value="Perth">Perth</option>
                  <option value="Seoul">Seoul</option>
                  <option value="Shanghai">Shanghai</option>
                  <option value="Shenzhen">Shenzhen</option>
                  <option value="Sydney">Sydney</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tasmania">Tasmania</option>
                  <option value="vietnam">vietnam</option>
                  <option value="Thailand"> Thailand</option>
                  <option value="Tokyo">Tokyo</option>
                  <option value="Wellington">Wellington</option>

                </select>
              </div>

              <div className={styles.home_select_div}>
                <span>
                  WL Worldwide
                </span> <br />
                <select name="" id="" className={styles.home_select} onClick={handleCapacity} >
                  <option value="africa">Africa</option>
                  <option value="americas">Americas</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="middle east">Middle east</option>
                  <option value="oceania">Oceania</option>

                </select>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div  id="AddGapAboveFooter"></div>
      <div className={styles.footeriii}>
        <Footer />
      </div>

    </>
  );
}

export default Home;
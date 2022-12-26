import React, { useState } from 'react'
import styles from '../../styles/Header.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { router } from 'next/router';
import { selectResturant } from '../features/ResSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../features/BasketSlice';

const HeaderEbey = () => {

    const [category, setCategory] = useState('')


    const [search, setSearch] = useState("")

    const Searchdata = () => {
        if (search || category) {

            router.push({ pathname: '/SearchProduct', query: { search: search, Scategory: category } })
        }
    }


    const ProductCategory = (e) => {
        // setSubcat(e.target.id)
        setCategory(e.target.id)
        console.log(e.target.id, "check")
        router.push({ pathname: '/SubProductList', query: { categorys: e.target.id } })
    }


    return (
        <div className={`${'container-fluid'}`}>
            <div className="row">
                <div className={`${"col-lg-12 col-md-12 col-sm-12"} ${styles.headerEbey}`}>
                    <span className={styles.EbeyImage}>
                        <img src="weblisted-store-logo.png" alt="" />
                    </span>
                    <span>
                        <div className={styles.dropdown}>
                            <span className={styles.heading}>Category <KeyboardArrowDownIcon /> </span>
                            <div className={styles.dropdown_content}>
                                <div className={styles.game}>
                                    <span className={styles.ulhead}>
                                        <ul>
                                            <p>Collectibles & art <ArrowRightIcon className={styles.arrowicon} /></p>
                                            <li id="Collectibles" onClick={(e) => ProductCategory(e)} >Collectibles</li>
                                            <li id="Antiques" onClick={(e) => ProductCategory(e)} >Antiques</li>
                                            <li id="Sports memorabiliaa" onClick={(e) => ProductCategory(e)} >Sport Memorabilia</li>
                                            <li id="Art" onClick={(e) => ProductCategory(e)}>Art</li>
                                        </ul>
                                        <ul>
                                            <p>Home & Garden<ArrowRightIcon className={styles.arrowicon} /></p>
                                            <li id="Patio, garden and outdoors" onClick={(e) => ProductCategory(e)}>Yard, Garden & outdoor</li>
                                            <li id="Crafts" onClick={(e) => ProductCategory(e)}>Crafts</li>
                                            <li id="Home improvement" onClick={(e) => ProductCategory(e)} >Home Improvement</li>
                                            <li id="Pets" onClick={(e) => ProductCategory(e)}>Pet Supplies</li>
                                        </ul>
                                        <ul>
                                            <p>Sporting Goods<ArrowRightIcon className={styles.arrowicon} /></p>
                                            <li id="Team sports" onClick={(e) => ProductCategory(e)}>Outdoor Sport</li>
                                            <li id="Team sports" onClick={(e) => ProductCategory(e)}>Team Sports</li>
                                            <li id="Fitness, running and yoga" onClick={(e) => ProductCategory(e)}> Exercise & Fitness</li>
                                            <li id="Fitness, running and yoga" onClick={(e) => ProductCategory(e)}>Golf</li>
                                        </ul>
                                    </span>
                                    <span className={styles.ulhead}>
                                        <ul>
                                            <p>Electronics <ArrowRightIcon className={styles.arrowicon} /></p>
                                            <li id="Computers and tablets" onClick={(e) => ProductCategory(e)} >Computers & tables</li>
                                            <li id="Cameras and photos" onClick={(e) => ProductCategory(e)}>Camera & photos</li>
                                            <li id="Video games and consoles" onClick={(e) => ProductCategory(e)}>Tv, audio</li>
                                            <li id="Cell phones and accessories" onClick={(e) => ProductCategory(e)} >Cell phone & accessories</li>
                                        </ul>
                                        <ul>
                                            <p>Auto Parts & Accessories<ArrowRightIcon className={styles.arrowicon} /></p>
                                            <li id="Electronic and GPS" onClick={(e) => ProductCategory(e)}>GPS & Security</li>
                                            <li id="Accessories" onClick={(e) => ProductCategory(e)}>Radar & Laser</li>
                                            <li id="Car Care and Detailing" onClick={(e) => ProductCategory(e)}>Care & Detailing</li>
                                            <li id="Auto and truck parts" onClick={(e) => ProductCategory(e)}>Scooter Parts & Accessories</li>
                                        </ul>
                                        <ul>
                                            <p>Toy & Hobbies<ArrowRightIcon className={styles.arrowicon} /></p>
                                            <li id="Electronic equipment and supplies" onClick={(e) => ProductCategory(e)}>Radio Control</li>
                                            <li id="Toys" onClick={(e) => ProductCategory(e)}>Kid Toys</li>
                                            <li id="Action figures" onClick={(e) => ProductCategory(e)}>Action figures</li>
                                            <li id="Toys" onClick={(e) => ProductCategory(e)}>Doll & Bears</li>
                                        </ul>
                                    </span>
                                    <span className={styles.ulhead}>
                                        <ul>
                                            <p>Fashion<ArrowRightIcon className={styles.arrowicon} /></p>
                                            <li id="Women's clothing" onClick={(e) => ProductCategory(e)}>Women</li>
                                            <li id="Clothes for men" onClick={(e) => ProductCategory(e)}>Men</li>
                                            <li id="Jewelry" onClick={(e) => ProductCategory(e)}>jewelry & watches</li>
                                            <li id="Sneakers" onClick={(e) => ProductCategory(e)}>Shoes</li>
                                        </ul>
                                        <ul>
                                            <p>Musicle Instrument & Gear<ArrowRightIcon className={styles.arrowicon} /></p>
                                            <li>guitar</li>
                                            <li>Pro audio equipment</li>
                                            <li>String</li>
                                            <li>Stage lighting & effect</li>
                                        </ul>
                                        <ul>
                                            <p>Other Category<ArrowRightIcon className={styles.arrowicon} /></p>
                                            <li id="Video games and consoles" onClick={(e) => ProductCategory(e)}>Video Game & consoles</li>
                                            <li id="Health" onClick={(e) => ProductCategory(e)}> Health & Beauty</li>
                                            <li id="Baby" onClick={(e) => ProductCategory(e)}>Baby</li>
                                            <li id="Motors and industrial automation" onClick={(e) => ProductCategory(e)}>Business & industrial</li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </span>
                    <span>
                        <div className={`${"form-group"} ${styles.headSearch}`}>
                            <SearchIcon />
                            <input type="text" className={` ${styles.headInput}`} onChange={(e) => setSearch(e.target.value)} />
                            <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
                                <option value="0">All Categories</option>
                                <option value="Antiques">Antiques</option>
                                <option value="Art">Art</option>
                                <option value="Baby">Baby</option>
                                <option value="Books">Books</option>
                                <option value="Business Industrial">Business Industrial</option>
                                <option value="Cameras Photo">Cameras Photo</option>
                                <option value="Cell Phones Accessories">Cell Phones Accessories</option>
                                <option value="Clothing, Shoes Accessories">Clothing, Shoes Accessories</option>
                                <option value="Coins Paper Money">Coins Paper Money</option>
                                <option value="Collectibles">Collectibles</option>
                                <option value="Computers/Tablets Networking">Computers/Tablets Networking</option>
                                <option value="Consumer Electronics">Consumer Electronics</option>
                                <option value="Crafts">Crafts</option>
                                <option value="Dolls Bears">Dolls Bears</option>
                                <option value="DVDs Movies">DVDs Movies</option>
                                <option value="eBay Motors">eBay Motors</option>
                                <option value="Entertainment Memorabilia">Entertainment Memorabilia</option>
                                <option value="Gift Cards Coupons">Gift Cards Coupons</option>
                                <option value="Health Beaut">Health Beauty</option>
                                <option value="Home Garden">Home Garden</option>
                                <option value="Jewelry Watches">Jewelry Watches</option>
                                <option value="Music">Music</option>
                                <option value="Musical Instruments Gear">Musical Instruments Gear</option>
                                <option value="Pet Supplies">Pet Supplies</option>
                                <option value="Pottery Glass">Pottery Glass</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Specialty Services">Specialty Services</option>
                                <option value="888">Sporting Goods</option>
                                <option value="Sports Mem, Cards Fan Shop">Sports Mem, Cards Fan Shop</option>
                                <option value="Stamps">Stamps</option>
                                <option value="Tickets Experiences">Tickets Experiences</option>
                                <option value="Toys Hobbies">Toys Hobbies</option>
                                <option value="Travel">Travel</option>
                                <option value="Video Games Consoles">Video Games Consoles</option>
                                <option value="Everything Else">Everything Else</option>

                            </select>
                        </div>
                    </span>
                    <span>
                        <button className={styles.Searchbutton} onClick={Searchdata}>Search</button>
                    </span>

                </div>
            </div>
        </div>
    )
}

export default HeaderEbey;

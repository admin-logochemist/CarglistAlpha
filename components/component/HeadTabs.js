import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../../styles/Header.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { router } from 'next/router';
import { selectResturant } from '../features/ResSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../features/BasketSlice';

const HeadTabs = ({ obj }) => {

    const [category, setCategory] = useState('')


    const ProductCategory = (e) => {
        // setSubcat(e.target.id)
        setCategory(e.target.id)
        console.log(e.target.id, "check")
        router.push({ pathname: '/SubProductList', query: { categorys: e.target.id } })
    }



    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12  col-md-12 p-0">
                    <div className={styles.dropdowntabs}>
                        <div className={styles.pointbreaker}>
                            <span className={styles.headingTabs1}>Home
                                {/*    <div className={styles.dropdown_contentTabs1}>
                                    <div className={styles.game}>
                                        <span className={styles.ulheadTabs}>
                                            <ul>
                                                <p>Collectibles & art <ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Collectibles" onClick={(e) => ProductCategory(e)}>Collectibles</li>
                                                <li id="Antiques" onClick={(e) => ProductCategory(e)} >Antiques</li>
                                                <li>Sport Memorabilia</li>
                                                <li>Art</li>
                                            </ul>
                                            <ul>
                                                <p>Home & Garden<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li>Yard, Garden & outdoor</li>
                                                <li>Crafts</li>
                                                <li>Home Improvement</li>
                                                <li>Pet Supplies</li>
                                            </ul>
                                        </span>
                                        <span className={styles.ulheadTabsImage}>
                                            <img src="collectab.jfif" alt="" />
                                        </span>

                                    </div>
                                </div>  */}
                            </span>
                            <span className={styles.headingTabs2}>Saved
                                {/*   <div className={styles.dropdown_contentTabs2}>
                                    <div className={styles.gameTabs}>
                                        <span className={styles.ulheadTabs}>
                                            <ul>
                                                <p>Collectibles & art <ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li>Collectibles</li>
                                                <li>Antiques</li>
                                                <li>Sport Memorabilia</li>
                                                <li>Art</li>
                                            </ul>
                                            <ul>
                                                <p>Home & Garden<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li>Yard, Garden & outdoor</li>
                                                <li>Crafts</li>
                                                <li>Home Improvement</li>
                                                <li>Pet Supplies</li>
                                            </ul>
                                        </span>
                                        <span className={styles.ulheadTabsImage}>
                                            <img src="collectab.jfif" alt="" />
                                        </span>

                                    </div>
                                </div> */}
                            </span>
                            <span className={styles.headingTabs3}>Electronics
                                <div className={styles.dropdown_contentTabs3}>
                                    <div className={styles.game}>
                                        <span className={styles.ulheadTabs}>
                                            <ul>
                                                <p>Most popular categories<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Cell phones and accessories" onClick={(e) => ProductCategory(e)} >Cell phones and accessories</li>
                                                <li id="Video games and consoles" onClick={(e) => ProductCategory(e)} >Video games and consoles</li>
                                                <li id="Computers and tablets" onClick={(e) => ProductCategory(e)} >Computers and tablets</li>
                                                <li id="Cameras and photos" onClick={(e) => ProductCategory(e)} >Cameras and photos</li>
                                                <li id="Camera drones" onClick={(e) => ProductCategory(e)} >Camera drones</li>
                                                <li id="Asian Brands" onClick={(e) => ProductCategory(e)}>Asian Brands</li>
                                                <li id="Smart home" onClick={(e) => ProductCategory(e)}>Smart home</li>

                                            </ul>
                                            <ul>
                                                <p>More categories<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Apple" onClick={(e) => ProductCategory(e)}>Apple</li>
                                                <li id="Samsung" onClick={(e) => ProductCategory(e)}>Samsung</li>
                                                <li id="Xiaomi" onClick={(e) => ProductCategory(e)}>Xiaomi</li>
                                                <li id="Portable audio and headphones" onClick={(e) => ProductCategory(e)}>Portable audio and headphones</li>
                                                <li id="Smart watches" onClick={(e) => ProductCategory(e)}>Smart watches</li>
                                                <li id="Deals" onClick={(e) => ProductCategory(e)}>Deals</li>
                                                <li id="Sell on eBay" onClick={(e) => ProductCategory(e)}>Sell on eBay</li>
                                            </ul>
                                        </span>
                                        <span className={styles.ulheadTabsImage}>
                                            <img src="Tabs1.jfif" alt="" />
                                        </span>

                                    </div>
                                </div>
                            </span>
                            <span className={styles.headingTabs4}>Fashion
                                <div className={styles.dropdown_contentTabs4}>
                                    <div className={styles.game}>
                                        <span className={styles.ulheadTabs}>
                                            <ul>
                                                <p>Most popular categories <ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Footwear" onClick={(e) => ProductCategory(e)} >Footwear</li>
                                                <li id="Women's clothing" onClick={(e) => ProductCategory(e)}>Women's clothing</li>
                                                <li id="Footwear for women" onClick={(e) => ProductCategory(e)}>Footwear for women</li>
                                                <li id="Clothes for men" onClick={(e) => ProductCategory(e)}>Clothes for men</li>
                                                <li id="Men's footwear" onClick={(e) => ProductCategory(e)}>Men's footwear</li>
                                                <li id="Watches" onClick={(e) => ProductCategory(e)}>Watches</li>
                                                <li id="Jewelry" onClick={(e) => ProductCategory(e)}>Jewelry</li>
                                            </ul>
                                            <ul>
                                                <p>More categories<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Accessories for men" onClick={(e) => ProductCategory(e)}>Accessories for men</li>
                                                <li id="Accessories for women" onClick={(e) => ProductCategory(e)}>Accessories for women</li>
                                                <li id="Bags and wallets for women" onClick={(e) => ProductCategory(e)}>Bags and wallets for women</li>
                                                <li id="Mens sunglasses" onClick={(e) => ProductCategory(e)}>Mens sunglasses </li>
                                                <li id="Womens sunglasess" onClick={(e) => ProductCategory(e)}>Womens sunglasess</li>
                                                <li id="Sneakers" onClick={(e) => ProductCategory(e)}>Sneakers</li>
                                                <li id="Deals" onClick={(e) => ProductCategory(e)}>Deals</li>
                                                <li id="Sell on eBay" onClick={(e) => ProductCategory(e)}>Sell on eBay</li>
                                            </ul>
                                        </span>
                                        <span className={styles.ulheadTabsImage}>
                                            <img src="fashionTabs.jfif" alt="" />
                                        </span>
                                    </div>
                                </div>
                            </span>
                            <span className={styles.headingTabs5}>Health & Beauty
                                <div className={styles.dropdown_contentTabs5}>
                                    <div className={styles.game}>
                                        <span className={styles.ulheadTabs}>
                                            <ul>
                                                <p>Most popular categories<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Beauty" onClick={(e) => ProductCategory(e)}>Beauty</li>
                                                <li id="Makeup" onClick={(e) => ProductCategory(e)}>Makeup</li>
                                                <li id="Health" onClick={(e) => ProductCategory(e)}>Health</li>
                                                <li id="K-Beauty" onClick={(e) => ProductCategory(e)}>K-Beauty</li>
                                                <li id="Manicure and pedicure" onClick={(e) => ProductCategory(e)}>Manicure and pedicure</li>
                                                <li id="Hair products" onClick={(e) => ProductCategory(e)}>Hair products</li>
                                                <li id="Skin products" onClick={(e) => ProductCategory(e)}>Skin products</li>
                                                <li id="Orthopedic products" onClick={(e) => ProductCategory(e)}>Orthopedic products</li>
                                            </ul>
                                            <ul>
                                                <p>More categories<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Vitamins and food supplements" onClick={(e) => ProductCategory(e)}>Vitamins and food supplements</li>
                                                <li id="Shaving and waxing" onClick={(e) => ProductCategory(e)}>Shaving and waxing</li>
                                                <li id="Bath and personal hygienet" onClick={(e) => ProductCategory(e)}>Bath and personal hygienet</li>
                                                <li id="Oral hygiene" onClick={(e) => ProductCategory(e)}>Oral hygiene</li>
                                                <li id="Massagers" onClick={(e) => ProductCategory(e)}>Massagers</li>
                                                <li id="Deals" onClick={(e) => ProductCategory(e)}>Deals</li>
                                                <li id="Sell on eBay" onClick={(e) => ProductCategory(e)}>Sell on eBay</li>
                                            </ul>
                                        </span>
                                        <span className={styles.ulheadTabsImage}>
                                            <img src="healthTabs.jfif" alt="" />
                                        </span>

                                    </div>
                                </div>
                            </span>
                        </div>
                        <div className={styles.pointbreaker}>
                            <span className={styles.headingTabs6}>Home & Garden
                                <div className={styles.dropdown_contentTabs6}>
                                    <div className={styles.game}>
                                        <span className={styles.ulheadTabs}>
                                            <ul>
                                                <p>Most popular categories<ArrowRightIcon className={styles.arrowicon} /></p>

                                                <li id="Workshop Tools and Equipment" onClick={(e) => ProductCategory(e)}>Workshop Tools and Equipment</li>
                                                <li id="Patio, garden and outdoors" onClick={(e) => ProductCategory(e)}>Patio, garden and outdoors</li>
                                                <li id="Home improvement" onClick={(e) => ProductCategory(e)}>Home improvement</li>
                                                <li id="Kitchen, dining and bar" onClick={(e) => ProductCategory(e)}>Kitchen, dining and bar</li>
                                                <li id="Lamps, lights and fans" onClick={(e) => ProductCategory(e)}>Lamps, lights and fans</li>
                                                <li id="Interior decoration" onClick={(e) => ProductCategory(e)}>Interior decoration</li>
                                                <li id="Home organization" onClick={(e) => ProductCategory(e)}>Home organization</li>
                                                <li id="Home appliances" onClick={(e) => ProductCategory(e)}>Home appliances</li>
                                            </ul>
                                            <ul>
                                                <p>More categories<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Toys" onClick={(e) => ProductCategory(e)}>Toys</li>
                                                <li id="Pets" onClick={(e) => ProductCategory(e)}>Pets</li>
                                                <li id="Crafts" onClick={(e) => ProductCategory(e)}>Crafts</li>
                                                <li id="Art supplies" onClick={(e) => ProductCategory(e)}>Art supplies</li>
                                                <li id="Musical instruments" onClick={(e) => ProductCategory(e)}>Musical instruments</li>
                                                <li id="Jewelry and beads" onClick={(e) => ProductCategory(e)}>Jewelry and beads</li>
                                                <li id="Deals" onClick={(e) => ProductCategory(e)}>Deals</li>
                                                <li id="Sell on eBay" onClick={(e) => ProductCategory(e)}>Sell on eBay</li>
                                            </ul>
                                        </span>
                                        <span className={styles.ulheadTabsImage}>
                                            <img src="Gardentab.jfif" alt="" />
                                        </span>

                                    </div>
                                </div>
                            </span>
                            <span className={styles.headingTabs7}>Sports
                                <div className={styles.dropdown_contentTabs7}>
                                    <div className={styles.game}>
                                        <span className={styles.ulheadTabs}>
                                            <ul>
                                                <p>Most popular categories <ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Cycling" onClick={(e) => ProductCategory(e)}>Cycling</li>
                                                <li id="Fitness, running and yoga" onClick={(e) => ProductCategory(e)}>Fitness, running and yoga</li>
                                                <li id="Fitness Tech" onClick={(e) => ProductCategory(e)}>Fitness Tech</li>
                                                <li id="Fishing" onClick={(e) => ProductCategory(e)}>Fishing</li>
                                                <li id="Camping" onClick={(e) => ProductCategory(e)}>Camping</li>
                                                <li id="Scooters" onClick={(e) => ProductCategory(e)}>Scooters</li>
                                                <li id="Team sports" onClick={(e) => ProductCategory(e)}>Team sports</li>
                                            </ul>
                                            <ul>
                                                <p>More categories<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Watersports" onClick={(e) => ProductCategory(e)}>Watersports</li>
                                                <li id="Winter sports" onClick={(e) => ProductCategory(e)}>Winter sports</li>
                                                <li id="Box and MMA" onClick={(e) => ProductCategory(e)}>Box and MMA</li>
                                                <li id="Swimming" onClick={(e) => ProductCategory(e)}>Swimming</li>
                                                <li id="GPS & Running Watches" onClick={(e) => ProductCategory(e)}>GPS & Running Watches</li>
                                                <li id="Garmin" onClick={(e) => ProductCategory(e)}>Garmin</li>
                                                <li id="Deals" onClick={(e) => ProductCategory(e)}>Deals</li>
                                                <li id="Sell on eBay" onClick={(e) => ProductCategory(e)}>Sell on eBay</li>
                                            </ul>
                                        </span>
                                        <span className={styles.ulheadTabsImage}>
                                            <img src="sporttab.jfif" alt="" />
                                        </span>

                                    </div>
                                </div>
                            </span>
                            <span className={styles.headingTabs8}>Collectibles and Art
                                <div className={styles.dropdown_contentTabs8}>
                                    <div className={styles.game}>
                                        <span className={styles.ulheadTabs}>
                                            <ul>
                                                <p>Most popular categories<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Collectibles" onClick={(e) => ProductCategory(e)}>Collectibles</li>
                                                <li id="Art" onClick={(e) => ProductCategory(e)}>Art</li>
                                                <li id="Action figures" onClick={(e) => ProductCategory(e)}>Action figures</li>
                                                <li id="Cartoon characters" onClick={(e) => ProductCategory(e)}>Cartoon characters</li>
                                                <li id="Diecast" onClick={(e) => ProductCategory(e)}>Diecast</li>
                                                <li id="Musical memorabilia" onClick={(e) => ProductCategory(e)}>Musical memorabilia</li>
                                            </ul>
                                            <ul>
                                                <p>More categories<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Sports memorabiliaa" onClick={(e) => ProductCategory(e)}>Sports memorabilia</li>
                                                <li id="Trading card games" onClick={(e) => ProductCategory(e)}>Trading card games</li>
                                                <li id="Antiques" onClick={(e) => ProductCategory(e)}>Antiques</li>
                                                <li id="Comics" onClick={(e) => ProductCategory(e)}>Comics</li>
                                                <li id="Funko pop" onClick={(e) => ProductCategory(e)}>Funko pop</li>
                                                <li id="Deals" onClick={(e) => ProductCategory(e)}>Deals</li>
                                                <li id="Sell on eBay" onClick={(e) => ProductCategory(e)}>Sell on eBay</li>
                                            </ul>
                                        </span>
                                        <span className={styles.ulheadTabsImage}>
                                            <img src="collectab.jfif" alt="" />
                                        </span>
                                    </div>
                                </div>
                            </span>


                            <span className={styles.headingTabs9}>Industrial equipment
                                <div className={styles.dropdown_contentTabs9}>
                                    <div className={styles.game}>
                                        <span className={styles.ulheadTabs}>
                                            <ul>
                                                <p>Most popular categories<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Dental healthcare" onClick={(e) => ProductCategory(e)}>Dental healthcare</li>
                                                <li id="Electronic equipment and supplies" onClick={(e) => ProductCategory(e)}>Electronic equipment and supplies</li>
                                                <li id="Metallurgy and manufacturing" onClick={(e) => ProductCategory(e)}>Metallurgy and manufacturing</li>
                                                <li id="Motors and industrial automation" onClick={(e) => ProductCategory(e)}>Motors and industrial automation</li>
                                                <li id="Heavy equipment parts" onClick={(e) => ProductCategory(e)}>Heavy equipment parts</li>
                                                <li id="Light industrial tools" onClick={(e) => ProductCategory(e)}>Light industrial tools</li>
                                                <li id="Inspection, measurement and testing equipment" onClick={(e) => ProductCategory(e)}>Inspection, measurement and testing equipment</li>
                                            </ul>
                                            <ul>
                                                <p>More categories<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Packing and shipping" onClick={(e) => ProductCategory(e)}>Packing and shipping</li>
                                                <li id="Office supplies and equipment" onClick={(e) => ProductCategory(e)}>Office supplies and equipment</li>
                                                <li id="Printing and graphic arts" onClick={(e) => ProductCategory(e)}>Printing and graphic arts</li>
                                                <li id="Restaurants and food service" onClick={(e) => ProductCategory(e)}>Restaurants and food service</li>
                                                <li id="Maintenance and safety" onClick={(e) => ProductCategory(e)}>Maintenance and safety</li>
                                                <li id="Retail and services" onClick={(e) => ProductCategory(e)}>Retail and services</li>
                                                <li id="Deals" onClick={(e) => ProductCategory(e)}>Deals</li>
                                                <li id="Sell on eBay" onClick={(e) => ProductCategory(e)}>Sell on eBay</li>
                                            </ul>
                                        </span>
                                        <span className={styles.ulheadTabsImage}>
                                            <img src="equiptab.jfif" alt="" />
                                        </span>

                                    </div>
                                </div>
                            </span>
                            <span className={styles.headingTabs10}>Motors
                                <div className={styles.dropdown_contentTabs10}>
                                    <div className={styles.game}>
                                        <span className={styles.ulheadTabs}>
                                            <ul>
                                                <p>Car<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Auto and truck parts" onClick={(e) => ProductCategory(e)}>Auto and truck parts</li>
                                                <li id="Tools and supplies" onClick={(e) => ProductCategory(e)}>Tools and supplies</li>
                                                <li id="Turbo chargers" onClick={(e) => ProductCategory(e)}>Turbo chargers</li>
                                                <li id="Clothing and merchandise" onClick={(e) => ProductCategory(e)}>Clothing and merchandise</li>
                                                <li id="Shock absorbers" onClick={(e) => ProductCategory(e)}>Shock absorbers</li>
                                                <li id="Electronic and GPS" onClick={(e) => ProductCategory(e)}>Electronic and GPS</li>
                                                <li id="Car Care and Detailing" onClick={(e) => ProductCategory(e)}>Car Care and Detailing</li>
                                                <li id="Vintage pieces" onClick={(e) => ProductCategory(e)}>Vintage pieces</li>
                                            </ul>
                                            <ul>
                                                <p>Motorcycle and Offers<ArrowRightIcon className={styles.arrowicon} /></p>
                                                <li id="Motorcycle parts" onClick={(e) => ProductCategory(e)}>Motorcycle parts</li>
                                                <li id="Body and frame" onClick={(e) => ProductCategory(e)}>Body and frame</li>
                                                <li id="Engines and parts" onClick={(e) => ProductCategory(e)}>Engines and parts</li>
                                                <li id="Accessories" onClick={(e) => ProductCategory(e)}>Accessories</li>
                                                <li id="Exhausts and systems" onClick={(e) => ProductCategory(e)}>Exhausts and systems</li>
                                                <li id="Rims" onClick={(e) => ProductCategory(e)}>Rims</li>
                                                <li id="Deals" onClick={(e) => ProductCategory(e)}>Deals</li>
                                                <li id="Sell on eBay" onClick={(e) => ProductCategory(e)}>Sell on eBay</li>
                                            </ul>
                                        </span>
                                        <span className={styles.ulheadTabsImage}>
                                            <img src="mototab.jfif" alt="" />
                                        </span>

                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeadTabs
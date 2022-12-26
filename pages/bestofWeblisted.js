import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/bestofcraigslist.module.css'
import Header from './Header'


export default function bestofWeblisted() {
    return (
        <>
        <Header />
        <div id="setHeaderBottomGap"></div>

            <div className={styles.global_header}>
                <a className={styles.header_logo} name="logoLink" href="/">WL</a>

                <nav className={styles.breadcrumbs_container}>

                    <ul className={styles.breadcrumbs}>
                        <li className={styles.crumb}>
                            <p>
                                <a href="/about/">About</a>&nbsp;
                                <span className={styles.breadcrumb_arrow}>&gt;</span>&nbsp;
                            </p>
                        </li>
                        <li className={styles.crumb}>
                            <p>
                                weblisted Hiring
                            </p>
                        </li>
                    </ul>
                </nav>
            </div>


            <section className={styles.body}>

                <h2 className={styles.bestofwarningheader}>
                    before perusing best-of-weblisted postings below please note:
                </h2>
                <ul className={styles.bestofwarnings}>
                    <li>postings are nominated by weblisted readers, and are not necessarily endorsed by weblisted staff</li>
                    <li>postings may be explicitly sexual, scatological, offensive, graphic, tasteless, and/or not funny</li>
                    <li>if you see copyrighted material not original to weblisted, please <a href="">let us know</a></li>
                    <li>if you are under age 18, please use your 'back' button and seek parental guidance</li>
                    <li>by continuing you release weblisted from any liability arising from your use of best-of-weblisted</li>
                </ul>
                <form method="GET" action="" className={styles.bestof_search}>
                    <input type="text" name="q" value="" size="50" />
                    <input type="submit" value="search" />
                </form>
                <div className={styles.bestof_wrapper}>
                    <table className={styles.bestoftoc}>
                        <tbody><tr>
                            <th>date</th>
                            <th>title</th>
                            <th>category</th>
                            <th>area</th>
                        </tr>
                            <tr>
                                <td className={styles.date}> 6 Aug 2021</td>
                                <td><a href="">Full size replica doctor who dalek</a></td>
                                <td><a href="">collectibles - by owner</a></td>
                                <td><a href="">nottingham</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}> 4 Dec 2020</td>
                                <td><a href="">Jet Powered Volkswagen Beetle</a></td>
                                <td><a href="">cars &amp; trucks - by owner</a></td>
                                <td><a href="">SF bay area</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>12 Sep 2020</td>
                                <td><a href="">IKEA Lamp</a></td>
                                <td><a href="">furniture - by owner</a></td>
                                <td><a href="">SF bay area</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>29 Mar 2020</td>
                                <td><a href="">Toilet paper seeds</a></td>
                                <td><a href="">general for sale - by owner</a></td>
                                <td><a href="">hartford</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}> 8 Jan 2020</td>
                                <td><a href="">"CrapShoot"- Killer New Outdoor Game w/Toilet</a></td>
                                <td><a href="">general</a></td>
                                <td><a href="">sacramento</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>30 Oct 2019</td>
                                <td><a href="">Space Cruiser (Rick and Morty)</a></td>
                                <td><a href="">collectibles - by owner</a></td>
                                <td><a href="">los angeles</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>11 Oct 2019</td>
                                <td><a href="">THIS BEAUTIFUL COMBINATION FIREPLACE / 8-TRACK STEREO!</a></td>
                                <td><a href="">free stuff</a></td>
                                <td><a href="">SF bay area</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>11 Sep 2019</td>
                                <td><a href="">1979 DODGE "STAR WARS" VAN,  ORIGINAL SURVIVOR,  ONE OF A KIND!</a></td>
                                <td><a href="">cars &amp; trucks - by owner</a></td>
                                <td><a href="">austin</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}> 6 Aug 2019</td>
                                <td><a href="">Carolina Hurricanes Organ</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/msg/">musical instruments - by owner</a></td>
                                <td><a href="https://www.weblisted.org/about/best/ral/">raleigh</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>31 May 2019</td>
                                <td><a href="">An open letter to the person who called the police!</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/mis/">missed connections</a></td>
                                <td><a href="https://www.weblisted.org/about/best/van/">vancouver, BC</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>28 May 2019</td>
                                <td><a href="">Moving On is Hard To Do Sale (June 15)</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/fuo/">furniture - by owner</a></td>
                                <td><a href="https://www.weblisted.org/about/best/nyc/">new york</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}> 4 May 2019</td>
                                <td><a href="">**UPDATE** FOUND CAT - NEED OWNERS ASAP!!</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/laf/">lost &amp; found</a></td>
                                <td><a href="https://www.weblisted.org/about/best/ric/">richmond, VA</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}> 5 Feb 2019</td>
                                <td><a href="">Unique challenge for experienced director - PAID</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/cwg/">crew gigs</a></td>
                                <td><a href="https://www.weblisted.org/about/best/lax/">los angeles</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>27 Jan 2019</td>
                                <td><a href="">Spot in lineup</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/spo/">sporting goods - by owner</a></td>
                                <td><a href="https://www.weblisted.org/about/best/sfo/">SF bay area</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>20 Jan 2019</td>
                                <td><a href="">1971 Cadillac Hearse Superior</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/cto/">cars &amp; trucks - by owner</a></td>
                                <td><a href="https://www.weblisted.org/about/best/phx/">phoenix</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>10 Jan 2019</td>
                                <td><a href="https://www.weblisted.org/about/best/pit/6791954114.html">New Holiday proposed</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/com/">general</a></td>
                                <td><a href="https://www.weblisted.org/about/best/pit/">pittsburgh</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}> 4 Dec 2018</td>
                                <td><a href="https://www.weblisted.org/about/best/ybs/6764837183.html">Free Snowman</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/zip/">free stuff</a></td>
                                <td><a href="https://www.weblisted.org/about/best/ybs/">yuba-sutter</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>17 Oct 2018</td>
                                <td><a href="https://www.weblisted.org/about/best/sfo/6725919483.html">Apple Macintosh SE STONE CASTING</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/sys/">computers - by owner</a></td>
                                <td><a href="https://www.weblisted.org/about/best/sfo/">SF bay area</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}> 6 Sep 2018</td>
                                <td><a href="https://www.weblisted.org/about/best/van/6690774296.html">for sale snow cat limo</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/snw/">atvs, utvs, snowmobiles - by owner</a></td>
                                <td><a href="https://www.weblisted.org/about/best/van/">vancouver, BC</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>23 Aug 2018</td>
                                <td><a href="https://www.weblisted.org/about/best/pdx/6679230947.html">Cat Kremlin - Garage Desk - BUCKETS !!!!!!</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/zip/">free stuff</a></td>
                                <td><a href="https://www.weblisted.org/about/best/pdx/">portland</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>26 Jul 2018</td>
                                <td><a href="https://www.weblisted.org/about/best/sfo/6654513433.html">To the 3 surfers who saved my life at Linda Mar 7/13 4 pm</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/mis/">missed connections</a></td>
                                <td><a href="https://www.weblisted.org/about/best/sfo/">SF bay area</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>19 Jun 2018</td>
                                <td><a href="https://www.weblisted.org/about/best/sfo/6621354952.html">bob's burgers hamburger landline phone</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/ele/">electronics - by owner</a></td>
                                <td><a href="https://www.weblisted.org/about/best/sfo/">SF bay area</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}> 8 Jun 2018</td>
                                <td><a href="https://www.weblisted.org/about/best/sfo/6612026346.html">Slow car/huge cargo bike for burning man</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/bik/">bicycles - by owner</a></td>
                                <td><a href="https://www.weblisted.org/about/best/sfo/">SF bay area</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}> 6 Jun 2018</td>
                                <td><a href="https://www.weblisted.org/about/best/dal/6609315518.html">Special needs room seeker</a></td>
                                <td><a href="https://www.weblisted.org/about/best/all/roo/">rooms &amp; shares</a></td>
                                <td><a href="https://www.weblisted.org/about/best/dal/">dallas</a></td>
                            </tr>
                            <tr>
                                <td className={styles.date}>20 May 2018</td>
                                <td><a href="">Prick on the Patio at Wild Wings</a></td>
                                <td><a href="">missed connections</a></td>
                                <td><a href="">charleston</a></td>
                            </tr>

                        </tbody></table>
                    <div className={styles.search_legend}>
                        <div className="" id={styles.paginator}>
                            <span className={styles.resulttotal}>
                                <span className={styles.for_map}>
                                    showing <span className={styles.displaycountShow}>...</span> postings
                                    <span className={styles.zoom_out_for_more} >
                                        -
                                        <a href="">
                                            zoom out for all <span className={styles.total}>5051</span>
                                        </a>
                                    </span>

                                </span>
                            </span>
                            <span className={styles.buttons}>
                                <a href="" className={styles.button_first} title="first page">&lt;&lt;</a>
                                <span className={styles.button_first} title="first page">&lt;&lt;</span>
                                <a href="" className={styles.button_prev} title="previous page">&lt; prev</a>
                                <span className={styles.button_prev} title="previous page">&lt; prev</span>

                                <span className={styles.button_pagenum}>
                                    <span className={styles.range}>
                                        <span className={styles.rangeFrom}>1</span>
                                        -
                                        <span className={styles.rangeTo}>25</span>
                                    </span>
                                    /
                                    <span className={styles.totalcount}>5051</span>
                                </span>

                                <a href="" className={styles.button_next} title="next page">next &gt; </a>
                                <span className={styles.button_next} title="next page"> next &gt; </span>
                            </span>
                        </div>

                        <div className={styles.search_sort}>
                            <span className={styles.buttongroup}>
                                <a className={styles.backtotop_button} href="#page-top">^ back to top</a>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <ul className={styles.clfooter}>
                    <li>© 2022 <span className={styles.desktop}>weblisted</span><span className={styles.mobile}>WL</span></li>
                    <li><a href="">help</a></li>
                    <li><a href="">safety</a></li>
                    <li className={styles.desktop}><a href="">privacy</a></li>
                    <li className={styles.desktop}><a href="">feedback</a></li>
                    <li><a href="">terms</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="">weblisted app</a></li>
                    <li><a href="">WL is hiring</a></li>
                </ul>
            </footer>

        </>
    )
}

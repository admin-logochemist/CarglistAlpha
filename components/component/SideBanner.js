import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../../styles/Sidebanner.module.css'
import Link from 'next/link';

export const SideBanner = () => {
    return (
        <div className={`${"container"}`}>
            <div className={`${"row"}`}>
                <div className={`${"col-lg-12"}`}>
                    <a href="#" className={styles.a}>
                        <div className={styles.badges}>
                            <br />
                            <p>
                                <span className={styles.firstLine}>GET UP TO</span><br />
                                <span className={styles.secondLine}>50%</span><br />
                                <span className={styles.thirdLine}>OFF</span><br />
                                <span className={styles.fourthLine}>NEW ARRIVALS</span>
                            </p>
                        </div>
                    </a>




                    {/*    <div className={`${styles.bannerWrapper}`}>
      <div className="bannerTop">
          <div>Weblisted</div><div><span className={`${styles.bold}`}>New Arrivals</span></div><div>UpTo 10% 0FF</div>
      </div>
      <div className={`${styles.bannerTopSub}`}>
          <div>
              <span>-10%</span> <br />SHIRTS
          </div>
      </div>
      <div className={`${styles.bannerPicture}`}>
      </div>
      <div className={`${styles.bannerGuarantee}`}>
          <div className={`${styles.bannerLike}`}></div>
          <span>
              <div className={`${styles.guaranteeLine}`}>Only </div>
              <div className={`${styles.guaranteeLine}`}>
              Reliable </div>
              <div className={`${styles.guaranteeLine}`}>Prices</div>
          </span>
      </div>
      <div className={`${styles.bannerBottom}`}>
      <Link href="/Store"><button className={`${styles.rentNow}`}>SHOP NOW</button></Link>
      </div>
  </div> */}

                </div>
            </div>
        </div>
    )
}

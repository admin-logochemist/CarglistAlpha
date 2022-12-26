import React from 'react'
import styles from '../../styles/store.module.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function Slider() {

    return (
        <div className="container-fluid mt-1">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 ">
                  <Carousel variant="light">
                        <Carousel.Item className={styles.Carousel_Item} >
                            <img
                                className="d-block w-100"
                                src="/weblisted_banner1.jpg"
                                alt="First slide"
                                id={styles.sliderImg}
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
                    {/* ----------------------------- */}
   
                </div>
            </div>
        </div>
    )
}

export default Slider;
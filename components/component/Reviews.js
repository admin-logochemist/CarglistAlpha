import React from 'react'
import styles from '../../styles/Products.module.css'
import { selectResturant } from '../features/ResSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../features/BasketSlice';
import ReactStars from 'react-stars'
import Router from 'next/router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Reviews({ obj }) {

  return (

    <>
      {/*<Card classNameName={styles.cardsz}>
<Card.Body>
  <Card.Title>{obj.data().usersName}</Card.Title>
  <ReactStars
  count={5}
  size={24}
  value={obj.data().ratings}
  color2={'#ffd700'} />
  <Card.Text>
  {obj.data().review}
  </Card.Text>
</Card.Body>
</Card>*/}
      <section id={styles.testimonials}>
        <div className={styles.testimonial_box_container}>
          <div className={styles.testimonial_box}>
            <div className={styles.box_top}>
              <div className={styles.profile}>
                <div className={styles.profile_img}>
                  <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
                </div>
                <div className={styles.name_user}>
                  <strong>{obj.data().usersName}</strong>
                  <span>@liammendes</span>
                </div>
              </div>
              <ReactStars
                count={5}
                size={24}
                value={obj.data().ratings}
                color2={'#ffd700'} />
            </div>
            <div className={styles.client_comment}>
              <p>{obj.data().review}</p>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Reviews;




// <div classNameName='col'  id={styles.revis} >
// <h5>{obj.data().usersName}</h5>
// </div>
// <div classNameName='col'>
// <ReactStars
// count={5}
// size={24}
// value={obj.data().ratings}
// color2={'#ffd700'} />
// </div>
// <div classNameName='col' >
// <p>{obj.data().review}</p>
// </div>
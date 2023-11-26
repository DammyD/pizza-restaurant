"use client"
import Image from 'next/image'
import styles from '../styles/Cart.module.css'
import Salad from '../../public/assets/product1_u0arc2.jpg'
import { useState } from 'react'
import Modal from '../components/Modal'

const Cart = () => {

    const [showButtons, setShowButtons] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleCheckoutClick = () => {
        setShowButtons(true);
    }

    const handleCashOnDeliveryClick = () => {
        setShowModal(true);
      };

    const closeModal = () => {
        setShowModal(false);
      };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tr className={`${styles.tr} ${styles.th}`}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extra</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td className={styles.td}>
                        <div className={styles.imgContainer}>
                            <Image src={Salad} layout="fill" objectFit='cover' quality={100} alt="pizza"/>
                        </div>
                    </td>
                    <td className={styles.td}>
                        <span className={styles.name}>Burga pizza</span>
                    </td>
                    <td className={styles.td}>
                        <span className={styles.extra}>-</span>
                    </td>
                    <td className={styles.td}>
                        <span className={styles.price}>$40</span>
                    </td>
                    <td className={styles.td}>
                        <span className={styles.quantity}>4</span>
                    </td>
                    <td className={`${styles.td} ${styles.total}`}>
                        <span className={styles.total}>$160</span>
                    </td>
                </tr>
            </table>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Cart Total</h2>
                <div className={styles.totalText}>
                    <span className={styles.totalTextTitle}>Subtotal:</span>
                    <span className={styles.totalTexttitle}>$160</span>
                </div>
                <div className={styles.totalText}>
                    <span className={styles.totalTextTitle}>Discount:</span>
                    <span className={styles.totalTexttitle}>$79.60</span>
                </div>
                <div className={styles.totalText}>
                    <span className={styles.totalTextTitle}>Total:</span>
                    <span className={styles.totalTexttitle}>$160</span>
                </div>
                {showButtons ? (
                <div>
              <button className={styles.btnOne} onClick={handleCashOnDeliveryClick}>Cash on delivery</button>
              <button className={styles.btnTwo}><span style={{color: "#002b8a"}}>Pay</span><span style={{color: "#0a9ed4"}}>pal</span></button>
            </div>
                ) : (

                <button className={styles.btn} onClick={handleCheckoutClick}>Checkout Now!</button>
                )}
            </div>
        </div>
        {showModal && <div className={styles.overlay} />}
        {showModal && <Modal closeModal={closeModal} />}
    </div>
  )
}

export default Cart
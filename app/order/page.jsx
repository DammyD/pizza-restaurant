import styles from '../styles/Order.module.css'
import Paid from '../../public/assets/paid.png'
import Checked from '../../public/assets/checked.png'
import Prepare from '../../public/assets/preparing_n8zvmj.png'
import Bike from '../../public/assets/bike.png'
import Delivered from '../../public/assets/delivered.png'
import Image from 'next/image'

const Order = () => {

  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;

  }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.row}>
          <table className={styles.table}>
                <tr className={`${styles.tr} ${styles.th}`}>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td className={styles.td}>
                        <span className={styles.id}>6553e94699e1964952785a2</span>
                    </td>
                    <td className={styles.td}>
                        <span className={styles.customer}>08162347691</span>
                    </td>
                    <td className={styles.td}>
                        <span className={styles.address}>10 John street</span>
                    </td>
                    <td className={`${styles.td} ${styles.total}`}>
                        <span className={styles.total}>$160</span>
                    </td>
                </tr>
            </table>
          </div>

          <div className={styles.row}>
            <div className={statusClass(0)}>
              <Image src={Paid} width={30} height={30} alt="payment"/>
              <span>Payment</span>
              <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src={Checked} width={20} height={20} alt="payment"/>
              </div>
            </div>
            <div className={statusClass(1)}>
              <Image src={Prepare} width={30} height={30} alt="payment"/>
              <span>Preparing</span>
              <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src={Checked} width={20} height={20} alt="payment"/>
              </div>
            </div>
            <div className={statusClass(2)}>
              <Image src={Bike} width={30} height={30} alt="payment"/>
              <span>On the way</span>
              <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src={Checked} width={20} height={20} alt="payment"/>
              </div>
            </div>
            <div className={statusClass(3)}>
              <Image src={Delivered} width={30} height={30} alt="payment"/>
              <span>Delivered</span>
              <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon} src={Checked} width={20} height={20} alt="payment"/>
              </div>
            </div>
          </div>

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
                <button className={styles.btn}>Paid</button> 
            </div>
        </div>
    </div>
  )
}

export default Order
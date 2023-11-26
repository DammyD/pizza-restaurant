import styles from '../styles/Modal.module.css'


const Modal = ({closeModal}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>You'll pay $12 on delivery</h2>
      <form action="" className={styles.form}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input type="text" id="name" name="name" className={styles.input}/>
        <label htmlFor="phone-number" className={styles.label}>Phone number</label>
        <input type="text" id="phone-number" name="phone-number"  className={styles.input}/>
        <label htmlFor="address" className={styles.label}>Address</label>
        <textarea id="address" name="address" rows="4" className={styles.textarea}/>
        <div className={styles.btnWrapper}>
        <button className={styles.btn} onClick={closeModal}>order</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;

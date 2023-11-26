// styles
import styles from "../styles/Services.module.css";

import Image from "next/image";

// images
import Pizza from "../../public/assets/pizza-strength-vacter_oeljrn_1_rdaqiq.png";
import Food from "../../public/assets/all-kinds-of-foods_vwpaqa.png";
import Fresh from "../../public/assets/fresh-foods_hsxvmj.png";
import Taste from "../../public/assets/best-taste_f5hidn.png";
import Time from "../../public/assets/on-time-delivery_a0hhtw.png";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <div className={styles.heading}>
          <p>Our Strength</p>
          <h2>Why we are the best?</h2>
        </div>
        <Image src={Pizza} width={100} quality={100} alt="pizza" className={styles.image}/>
      </div>
      <div className={styles.services}>
        <div className={styles.feature}>
          <div className={styles.iconWrapper}>
          <Image src={Food} width={30} quality={30} alt="pizza" />
          </div>
          <h5>All Kinds of foods</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </p>
        </div>
        <div className={styles.feature}>
          <div className={styles.iconWrapper}>
          <Image src={Fresh} width={30} quality={30} alt="pizza" />
          </div>
          <h5>All Kinds of foods</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </p>
        </div>
        <div className={styles.feature}>
          {" "}
          <div className={styles.iconWrapper}>
          <Image src={Taste} width={30} quality={30} alt="pizza" />
          </div>
          <h5>All Kinds of foods</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </p>
        </div>
        <div className={styles.feature}>
          {" "}
          <div className={styles.iconWrapper}>
          <Image src={Time} width={30} quality={30} alt="pizza" />
          </div>
          <h5>All Kinds of foods</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

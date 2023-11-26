import styles from "../styles/Header.module.css";
import Image from "next/image";

// images
import Pizza from "../../public/assets/bxoopgh1ixlhpdwfkz7m.png";
import Onion from "../../public/assets/pizza-onion_bvpupn.png";
import headerPizza from "../../public/assets/whkayb8vpzhlsczydg3j.png";
import Slice from "../../public/assets/n0exddnuejvtk5zh1t0y.png";
import Garlic from "../../public/assets/pizza-daily-fresh-vacter_x6mcof.png";

// icons
import { HiShoppingCart } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          <div className={styles.headerText}>
            <h2>Handmade, </h2>
            <h2>With an Extra</h2>
            <h2>
              Pinch of{" "}
              <span style={{ color: "var(--attention)", fontWeight: "bold" }}>
                Love
              </span>
            </h2>
          </div>
          <p className={styles.miniText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div>
            <button className={`btn ${styles.btn}`}>
              <HiShoppingCart size={25} fill="#fff" className="icon" />
              Order Now
            </button>
          </div>
        </div>

        <div className={styles.rightWrapper}>
          <div className={styles.imgContainer}>
            <Image
              src={Pizza}
              width={400}
              quality={100}
              layout="intrinstic"
              alt="Pizza"
            />
         
          <div className={styles.pizzaImg}>
            <div className={styles.onion}>
              <Image src={Onion} width={100} quality={100} alt="onion" />
            </div>
            <div className={styles.headerPizza}>
              <Image
                src={headerPizza}
                width={200}
                quality={100}
                layout="intrinstic"
                objectFit="cover"
                alt="onion"
              />
            </div>
          </div>
          </div>
        </div>
        <div className={styles.background}></div>
      </div>

{/* second hero section */}
      <div className={styles.sliceContainer}>
        <div className={styles.slicedPizza}>
          <Image src={Slice} width={300} quality={100} alt="sliced pizza" />
        </div>
        <div className={styles.sliceText}>
          <span>Daily fresh and</span>
          <span> always tasty</span>
          <div className={styles.miniContainer}>
            <div className={styles.sliceMiniText}>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority haved
              </p>
            </div>
            <div className={styles.garlic}>
              <Image src={Garlic} width={70} quality={100} alt="sliced pizza" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

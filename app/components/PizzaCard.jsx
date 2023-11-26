import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<AiFillStar fill="var(--tertiary-color)" key={i} />);
    }
    return stars;
  };

  return (
      <div className={styles.container}>
       <Link href={`/singleProduct/${pizza.id}`}> 
       <Image
          src={pizza.image}
          width={200}
          height={200}
          quality={100}
          alt="pizzas"
        />
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{pizza.title}</h3>
          <span className={styles.price}>{pizza.price}</span>
        </div>
        <p className={styles.rating}>{generateStars(pizza.rating)}</p>
        <p className={styles.desc}>{pizza.desc}</p>

        <button className={`btn ${styles.btn}`}>
          <HiShoppingCart size={25} fill="#fff" className="icon" />
          Order Now
        </button>
        </Link>
      </div>
  
  );
};

export default PizzaCard;

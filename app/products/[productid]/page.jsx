"use client"
import Image from "next/image";
import styles from "../../styles/Details.module.css"
import Size from "../../../public/assets/size.png"
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
// import { useRouter } from "next/router";

const Details = () => {

  // const router = useRouter();
  // const {id} = router.query;

  const [size, setSize] = useState(0);
  const Pizza = {
    id: 1,
    title: "Burga Pizza",
    desc: "This is a burga pizza",
    reviews: 5,
    price: [20, 25, 30],
    categories: ["Chicken", "Launch", "Pizza", "burga"],
    tags: ["Healthy", "Organic", "Chicken", "Sauce"],
    image: "/assets/bxnbmb4etcl5i4vgre4s.jpg",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={Pizza.image} quality={100} objectFit="contain" layout="fill" alt="pizza"/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{Pizza.title}</h1>
        <span className={styles.price}>${Pizza.price[size]}</span>
        <span className={styles.review}>{Pizza.reviews} Reviews</span>
        <p className={styles.desc}>{Pizza.desc}</p>
        <p className={styles.category}>{Pizza.categories.join(", ")}</p>
        <p className={styles.tag}>{Pizza.tags.join(", ")}</p>
        <h3 className={styles.choose}>Choose Pizza Size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src={Size} layout="fill" quality={100} alt="size"/>
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src={Size} layout="fill" quality={100} alt="size"/>
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src={Size} layout="fill" quality={100} alt="size"/>
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input type="checkbox" id="sauce" name="sauce" className={styles.checkbox}/>
            <label htmlFor="sauce">Sauce</label>
          </div>
          <div className={styles.option}>
            <input type="checkbox" id="chesse" name="chesse" className={styles.checkbox}/>
            <label htmlFor="chesse">Extra Chesse</label>
          </div>
        </div>

        <div className={styles.field}>
          <input type="number" defaultValue={1} className={styles.quantity}/>
          <button className={styles.btn}>Add to cart</button>
          <CiHeart size="30px" className={styles.heart}/>
        </div>
      </div>
    </div>
  );
};

export default Details;

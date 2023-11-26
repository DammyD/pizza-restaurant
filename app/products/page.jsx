"use client"
import styles from '../styles/Products.module.css'
import { MdOutlineFilterList } from "react-icons/md";
import PizzaCard from '../components/PizzaCard';
import { useState } from 'react';

const Products = () => {

  const [filter, setFilter] = useState("");
  const [showCount, setShowCount] = useState(9); 

  const PizzaData = [
    {
      id: 1,
      title: "Burga Pizza",
      desc: "This is burga pizza",
      price: "$20",
      rating: 5,
      image: "/assets/bxnbmb4etcl5i4vgre4s.jpg",
    },
    {
        id: 2,
        title: "Burga Pizza",
        desc: "This is burga pizza",
        price: "$20",
        rating: 5,
        image: "/assets/bxnbmb4etcl5i4vgre4s.jpg",
      },

      {
        id: 3,
        title: "New Pizza",
        desc: "This is a new pizza",
        price: "$10",
        rating: 5,
        image: "/assets/bxoopgh1ixlhpdwfkz7m.png",
      },

      {
        id: 4,
        title: "Greek Pizza",
        desc: "This is a greek pizza",
        price: "$40",
        rating: 5,
        image: "/assets/bxoopgh1ixlhpdwfkz7m.png",
      },             

  ];

  const filteredPizzaData = PizzaData.filter((pizza) =>
    pizza.title.toLowerCase().includes(filter.toLowerCase())
  );

  const slicedPizzaData = filteredPizzaData.slice(0, showCount);


return (
<div className={styles.container}>
<div className={styles.topContainer}>
  <div className={styles.titleWrapper}>
    <div className={styles.filter}>
    <p>
    <MdOutlineFilterList size={25} fill="#fff" className="icon" /> Filter</p>
    </div>
    {/* <div className={styles.filter}>
    <p>
    <MdOutlineFilterList size={25} fill="#fff" className="icon" /> Add Product</p>
    </div> */}
    </div>

    <div className={styles.titleWrapper}>
    <div className={styles.results}>
    <p>Showing all 9 results</p>
    </div>
    </div>

    <div className={styles.titleWrapper}>
    <div className={styles.sort}>
    <select name="" id="">
      <option value="default">Default sorting</option>
      <option value="pizza">Pizaa</option>
      <option value="burga">Burga</option>
      </select>  
       </div>
    </div>
    </div>
   
    <div className={styles.wrapper}>
    {slicedPizzaData.map((pizza) => (
    <PizzaCard key={pizza.id} pizza={pizza}/>
    
  ))}
  </div>
    </div>
)
    }
  
  export default Products
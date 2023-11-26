import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'


const PizzaList = () => {

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

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <p className={styles.desc}>Popular Dishes</p>
        <h2 className={styles.title}>Browse Our Menu</h2>
        </div>
        
        <div className={styles.wrapper}>
        {PizzaData.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza}/>
        
      ))}
      </div>
     
    </div>
  )
}

export default PizzaList
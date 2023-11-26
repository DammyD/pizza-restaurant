import styles from './page.module.css'

// components
import Header from './components/Header'
import PizzaList from './components/PizzaList'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <main className={styles.main}>
   <Header/>
   <PizzaList/>
   <Services/>
   <Testimonials/>
    </main>
  
  )
}

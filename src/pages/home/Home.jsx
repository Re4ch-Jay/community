import Hero from '../../components/hero/Hero'
import Contact from '../../components/contact/Contact'
import Partners from '../../components/partners/Partners'
import Location from '../../components/location/Location'
import Statistics from '../../components/statistics/Statistics'
import Products from '../../components/products/Products'
const Home = () => {
  return (
    <div>
        <Hero/>
        <Partners />
        <Statistics />
        <Products/>
        <Location />
        <Contact/>
    </div>
  )
}

export default Home
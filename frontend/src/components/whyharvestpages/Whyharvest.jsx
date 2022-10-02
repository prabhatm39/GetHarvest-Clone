import React from 'react'
import styles from './whyharves.module.css';
import { Link } from "react-router-dom";
import data from './data.json';
import { Content } from './Content';
import { Box, Image, Flex} from '@chakra-ui/react'
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'
const Whyharvest = () => {
    const content = data.contents;
  return (
    <div>
      <Navbar/>
          <div className={styles.helpcontainer}>
            <div className={styles.helpText}>
                <h1> Help your time spend time wisely</h1>
                <p>
                Harvest time tracking makes it easy to capture time, gain insights
                from past projects, and get paid for your work.
                </p>
            </div>
            <div className={styles.btnContainer}>
                <Link to="/signup">
                <button className={styles.btnTry}>Try Harvest Free</button>
                </Link>
                <p>Free 30-day trial. No credit card required.</p>
            </div>
            <div className={styles.line}></div>

        </div>
        <div>
            {content.map((i) => {
        return <Content key={i.id} content={{...i}} />
      })}
        </div>
        <div>
        <Box width="90%" justifyContent="center" margin="auto" marginTop="1rem" paddingBottom="5rem">
      <Flex margin="auto">
   </Flex>
   <Flex  gap="4rem" marginTop="2rem" justifyContent="center">
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-vw.svg?noresize"/>
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-aclu.svg?noresize"/>
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-conde.svg?noresize"/>
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-dell.svg?noresize"/>
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-amnesty.svg?noresize"/>
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-deloitte.svg?noresize"/>
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-lululemon.svg?noresize"/>
    <Image opacity=".2" src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/customer-logos/featured-yale.svg?noresize"/>
   </Flex>
   <div className={styles.linelo}></div>
      </Box>
        </div>
        <div className={styles.startContainer}>

<div className={styles.startDiv}>
    <h1>Start tracking time today</h1>
    <p>Join 70,000+ companies spending their time wisely with Harvest.</p>
    <div>
        <button>Try Harvest free</button>
        <p>Free 30-day trial. No credit card required.</p>
    </div>
</div>

<div>
    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/illoglyphs/footer-illo-comp.svg" alt="laptop" />
</div>

</div>
<Footer/>
    </div>
  )
}
export default Whyharvest
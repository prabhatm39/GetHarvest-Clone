import React from 'react'
import styles from './coustomer.module.css'
import { Box, Image, Flex} from '@chakra-ui/react'
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'
 const Coustomer = () => {
  return (
    <div>
    <div>
      <Navbar/>
       <div className={styles.helpContainer}>
      <h1 >See how Harvest helps teams like yours thrive</h1>
      <p >Teams of all sizes, across industries, and around the world track time with Harvest.</p>
    </div>

    <div className={styles.countContainer}>

<div className={styles.countDiv1}>
  <div>
    <h1>70,000+</h1>
    <p>customers</p>
  </div>
  <div>
    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-person.svg" alt="avatar" />
  </div>
</div>

<div className={styles.countDiv2}>
  <div>
    <h1>2 billion</h1>
    <p>hours tracked</p>
  </div>
  <div>
    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-keep.svg" alt="clock" />
  </div>
</div>

<div className={styles.countDiv3}>
  <div>
    <h1>19.6 million</h1>
    <p>invoices paid</p>
  </div>
  <div>
    <img src="https://www.getharvest.com/hubfs/raw_assets/public/harvest-theme/images/icons/illo-70-money.svg" alt="bill" />
  </div>
</div>

</div>

<div className={styles.featureContainer}>

<div>
  <img src="https://www.getharvest.com/hs-fs/hubfs/customer-profile.jpg?width=1181&name=customer-profile.jpg" alt="featured picture" />
</div>

<div className={styles.textDiv}>
  <h1>FEATURED STORY</h1>
  <p>Startup studio Dovetail tracks time with Harvest to build trust with clients.</p>
  <button>Read Customer story</button>
</div>

</div>
<br/>
<br/>

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
   <div className={styles.line}></div>
   </Box>


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


    </div>
    <Footer/>
    </div>
    

  )
}

export default Coustomer;

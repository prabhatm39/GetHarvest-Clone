import React, { useState } from 'react'
import styles from './price.module.css'
import { Box, Button, Flex, Heading, Switch, Text,Image } from "@chakra-ui/react";
import PriceBox from './Pricebox';
import Pricebox from './Pricebox';
import { PrFeacture } from './PrFeacture';
import { PrImg } from './PrImg';
import { PrFqa } from './PrFqa';
import { PrRive } from './PrRive';
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer'


let data = [
    {
      heading1: "Free",
      price1: "0",
      price2: "",
      seat: "1 seat",
      projects: "2 projects",
      extra1: "forever",
      extra2: "",
    },
    {
      heading1: "Pro",
      price1: "12",
      price2: "",
      seat: "Unlimited seats",
      projects: "Unlimited projects",
      extra1: "per seat per month",
      extra2: "",
    },
    {
      heading1: "Pro",
      price1: "10",
      price2: ".80",
      seat: "Unlimited seats",
      projects: "Unlimited projects",
      extra1: "per seat per month,",
      extra2: "billed yearly",
    },
  ];
  

const Price = () => {
    const [plan, setPlan] = useState(false);
  return (
    <div>
      <Navbar/>
    <div className={styles.container}>
 <Heading fontSize="50px" fontWeight="400" textAlign="center">
        <a id="plans">Pricing</a>
      </Heading>
      
      <Flex gap="15px" alignItems="center" justifyContent="center">
        <Text fontSize="18px">Monthly</Text>
        <Switch
          colorScheme="red"
          size="lg"
          onChange={(e) => setPlan(e.target.checked)}
          sx={{
            "span.chakra-switch__track:not([data-checked])": {
              backgroundColor: "#fa5d00",
            },
          }}
        />
        <Text fontSize="18px">Annual</Text>
      </Flex>

      <Text color="#6D6E6D" padding="16px 0px 41px 0px" textAlign="center">
        Save <span style={{ color: "black" }}>10%</span> with annual plan
      </Text>

      <Flex justifyContent="center" gap="40px" paddingBottom="77px">
        <Pricebox data={data[0]} bg={false}/>
        {plan ? <Pricebox data={data[2]} bg={true}/> : <Pricebox data={data[1]} bg={true}/>}
      </Flex>

      <div>
          <div style={{display:"flex"}}>
            <p>70,000+ companies track time with Harvest</p>
            <div className={styles.linelo}></div>
          </div>
      
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
 
   </div>

   <Box borderTop="1px solid #fa5d00" width="100%" marginTop="2rem"></Box>
      <Heading
        textAlign="center"
        fontSize="42px"
        margin="80px 0px 40px 0px"
        fontWeight="300"
      >
        Features
      </Heading>
     
    <PrFeacture />
    <Box className={styles.hr} />
    <PrImg />
    <Box borderTop="1px solid #fa5d00" width="100%" marginTop="2rem"></Box>

    <PrFqa />

    <Box borderTop="1px solid #fa5d00" width="100%"></Box>

    <PrRive />
    </div>
    <Footer/>
    </div>
  )
}
export default Price

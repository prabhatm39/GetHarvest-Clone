import React from "react";
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import { Features } from "../../components/home/Secoend/Features";
import { Integration } from "../../components/home/Intediv/Integration";
import { Customer } from "../../components/home/Custdiv/Customer";
import Learning from "../../components/home/Learndiv/Learning";
 import { Starttrack } from "../../components/home/track/Starttrack";
 import {Container} from "@chakra-ui/react";
import { Introdiv } from "../../components/home/Firstdiv/Introdiv";
import Company from "../../components/home/Logo/CompanyLogo";
import Report from "../Report/report";
import Invoices from "../Invoices/invoices";
const Home = () => {
  return (
    <Container   maxW="100%" margin={"0%"} padding={"0%"} >
      {/* bgColor="#fff8f1" */}
      <Navbar/>
      <Introdiv/>
      <Company opacity={.2}/>
      <Features/>
      <Integration/>
      <Customer />
      <Learning />
      <Starttrack/>
      <Footer/>
      {/* <Report/> */}
      {/* <Invoices/> */}
    </Container>
    
  );
};

export default Home;

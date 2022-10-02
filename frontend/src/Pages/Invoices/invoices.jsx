import React from 'react'
import harvest_logo from '../../assets/sadeHarvest.svg';
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import styles from './invoices.module.css';
import { ProtectedNavbar } from "../../components/insideComponents/protectedNavbar/ProtectedNavbar";
const Invoices = () => {
  return (
    <div>
      <Box>
      <ProtectedNavbar/>
      <Box w="80%" m="auto" bgColor="" textAlign={"left"}>
        <Text fontSize={50}>Invoices</Text>
        <Button
          variant={"green"}
          bgColor={"green"}
          color="#fff"
          
        >
          + New invoice
        </Button>

        
      </Box>
        <Box height={"350px"} width={"80%"} backgroundColor="#1D1E1C12" margin={"auto"} >
            <Box>Create your first invoice now</Box>
            <Flex justifyContent={"center"}>
            <Img  src='https://cache.harvestapp.com/static/illustrations/invoices_onboard-7269B096.png'/>
            </Flex>
            <Box >
            Create customized (and handsome!) invoices in under a minute.<br/>
          With online payment, you’ll get paid twice as fast.
            </Box>
            
        </Box>
      
    </Box>
    <div>
     <Box marginTop="20px" >
     You have 30 days left in your free trial.
        </Box>
     </div>

      <div className={styles.footerContainer}>
      <div><a ><img src={harvest_logo} alt="harvest" /></a></div>
      <div><a >Terms</a></div>
      <div><a >Privacy</a></div>
      <div><a >Status</a></div>
      <div><a >Blog</a></div>
      <div><a >Help</a></div>
      </div>

    </div>
    
  )
}

export default Invoices

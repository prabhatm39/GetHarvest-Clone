import React from 'react'
import styles from './report.module.css';
import harvest_logo from '../../assets/sadeHarvest.svg';
import { ArrowBackIcon,ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, Text, Select } from '@chakra-ui/react';
import { ProtectedNavbar } from "../../components/insideComponents/protectedNavbar/ProtectedNavbar";
const Report = () => {
  return (
      <div> 
        <div>
        <ProtectedNavbar/>
        <Box marginTop="2rem" marginLeft={"10%"} marginRight={"10%"}>
        <Flex justifyContent="space-between">
    
        <Flex gap="0.5rem">
        <Flex>
        <Box className={styles.leftarrow} >
        <ArrowBackIcon color="#2a2b29"/>
        </Box>
        <Box className={styles.rightarrow}>
        <ArrowForwardIcon color="#2a2b29"/>
    </Box>
    </Flex>
    <Text className={styles.weekheading}>This week: 26 Sep – 02 oct 2022</Text>
    </Flex>
    <Select placeholder="Week" width="110px" height="2rem" fontSize="15px" border="1px solid black" borderRadius="10px" _hover={{border:"1px solid black"}}>
    <option className={styles.option}>semimonth</option>
    <option className={styles.option}>Month</option>
    <option className={styles.option}>Quarter</option>
    <option className={styles.option}>Year</option>
    <option className={styles.option}>All time</option>
    <option className={styles.option}>Custom</option>
    </Select>
    </Flex>
    <Box className={styles.border}></Box>
    
    </Box>
    </div>
    <div  >
        <Box margin={"auto"} height={"350px"} width={"80%"}  backgroundColor="#1D1E1C12" alignItems={"center"}  >
       <Box padding={"100px"}>There are no hours recorded for this time period.
        Track your time under Timesheets.</Box> 
        </Box>
    </div>

      
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

export default Report

import React from 'react';
import harvest_logo from '../../assets/whiteHarvest.svg';
import styles from './footer.module.css';


import {
    Box,
    Container,
    Flex,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react';
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineInstagram  } from 'react-icons/ai';

 const Footer = () => {   
  
 const harvestlink= [
    {
      
      linkName: "Home",
      
    },
    {
      
      linkName: "Why Harvest?",
      
    },
    {
      
      linkName: "Features",
      
    },
    {
     
      linkName: "Pricing",
     
    },
    {
      
      linkName: "Integrations",
      
    },
    {
    
      linkName: "Apps",
      
    },
    {
     
      linkName: "Security",
     
    }
  ]
  const communitylink= [
    {
      
      linkName: "Customer stories",
      
    },
    {
    
      linkName: "Resources",
      
    },
    {
     
      linkName: "Webinars",
      
    },
    {
     
      linkName: "Help & support",
      
    },
    {
      
      linkName: "Integrate with Harvest",
     
    },
    {
      
      linkName: "Time Well Spent",
     
    },
    {
     
      linkName: "Time in This Time",
      
    }
  ]
  const companylink=[
    {
      
      linkName: "About us",
      
    },
    {
     
      linkName: "Blog",
      
    },
    {
      
      linkName: "Careers",
      
    },
    {
     
      linkName: "Legal",
     
    },
    {
     
      linkName: "Contact us",
      
    }
  ]
  return (
    <Box bgColor='#1d1e1c' color='#fff' >
      <Container as={Stack} maxW={'7xl'} py={20}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={20} mb={10} fontSize={'lg'}>

          <Stack spacing={6}>
            <Box></Box>            
            <Image w='15vw' src={harvest_logo} alt='harvest logo' />
          </Stack>

          <Stack align={'flex-start'} lineHeight='4vh'>
            <Text>Harvest</Text>
            {harvestlink.map((link)=>(
                <Text className={styles.links}>{link.linkName}</Text>
            ))}            
          </Stack>

          <Stack align={'flex-start'}>
            <Text>Community</Text>
            {communitylink.map((link)=>(
                <Text className={styles.links}  >{link.linkName}</Text>
            ))}
          </Stack>

          <Stack align={'flex-start'}>
            <Text>Company</Text>
            {companylink.map((link)=>(
                <Text className={styles.links} >{link.linkName}</Text>
            ))}
          </Stack>  

        </SimpleGrid>

        <Box className={styles.harvestForc}>
            <Link href={'#'}>
               We also make: <span>Harvest Forecast</span>  – the fast and simple way to schedule your team across projects.
            </Link>         
        </Box>

        <Flex justify='space-between' pt='10' fontWeight={700} >
            <Box>© 2006-2022 Harvest</Box>
            <Flex gap='4'>
                <Flex className={styles.socialIcons}>
                    <Box><AiOutlineTwitter/></Box>
                    <Box>Twiter</Box>
                </Flex>
                <Flex className={styles.socialIcons}>
                    <Box><AiFillLinkedin/></Box>
                    <Box>LinkedIn</Box>
                </Flex>
                <Flex className={styles.socialIcons}>
                    <Box><AiOutlineInstagram/></Box>
                    <Box>Instagram</Box>
                </Flex>                
            </Flex>
        </Flex>

      </Container>
    </Box>
  )
};

export default Footer



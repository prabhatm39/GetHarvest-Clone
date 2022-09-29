import React from 'react'

import styles from './introdiv.module.css'
import { Link } from 'react-router-dom'
import {
  Container,
  Box,
  Flex,
  Heading,
  Button,
  Text,
  Hstack,
  DividerContainer
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Introdiv = () => {
  return (
    
<Container bgColor="#fff8f1" maxW="100%" padding="2% 1% 2% 5%" className={styles.outerrrr}>
        {/* ----------------------------------------------- */}
        <Box>
          <Flex
            justify="space-between"
            direction={{
              base: "row",
              lg: "row",
              md: "column",
              sm: "column",
            }}
          
          >
            <Box w="49%" padding="0% 2% 1% 0%" textAlign="left"className={styles.outerbox}>
              <Box>
                <Box w="80%">
                    <Box color={"#fa5d00" }>SEE WHY 70,000+ COMPANIES TRACK TIME WITH HARVEST</Box>
                  
                </Box>
              </Box>
              <br />
              <br />
              <Box w="110%">
                <Heading
                  fontWeight="simple"
                  size="3xl"
                  color="#1d1e1c"
                  textAlign="left"
                  fontFamily="Georgia, MuotoWeb,sans-serif, Monarch"
                >
                  Finally, time tracking your team actually wants to use
                </Heading>
              </Box>

              <br />
              <Flex direction="column" gap="1.5rem">
                <Box>
                  <Flex gap="1rem" fontSize="18px">
                    <Box marginTop="5px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </Box>
                    <Box>
                      <b>Time Tracking.</b>{" "}
                      <span style={{ color: "#777571" }}>
                        Easy & intuitive time tracking that captures all your
                        time without changing the way you work.
                      </span>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex gap="1rem" fontSize="18px">
                    <Box marginTop="5px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </Box>
                    <Box>
                      <b>Reports & Analysis.</b>{" "}
                      <span style={{ color: "#777571" }}>
                        Instantly create reports across projects. Budgets, time,
                        team capacity, cost breakdowns, and more.
                      </span>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex gap="1rem" fontSize="18px">
                    <Box marginTop="5px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </Box>
                    <Box>
                      <b>Invoicing & Payments.</b>{" "}
                      <span style={{ color: "#777571" }}>
                        Turn tracked time into invoices. Accept online payments.
                        Sync with QuickBooks and Xero.
                      </span>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <NavLink to="/signup">
                    <Flex gap={"10px"}>
                    <Button
                      bgColor="#fa5d00"
                      color="white"
                      padding="5%"
                      borderRadius="15px"
                      fontSize="20px"
                      _hover={{ bg: "#fa5d00" }}
                    >
                      Try Harvest free
                    </Button>
                    {/* <br/> */}
                    <Button
                      bgColor="black"
                      color="white"
                      padding="5%"
                      borderRadius="15px"
                      fontSize="20px"
                      _hover={{ bg: "#fa5d00" }}
                    >
                      See Pricing
                    </Button>
                    </Flex>
                  </NavLink>
                  <br />
                  <br />
                  <Text fontSize="18px" color="#777571">
                    Free 30-day trial. No credit card required.
                  </Text>
                </Box>
                <Box></Box>
              </Flex>
            </Box>

            <Box w="60%" marginRight="-1%" height="600px" paddingTop="5%" className={styles.imgggg}>
              <img
                width="100%"
                height="100%"
                src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1001-Harvest-Home-SPZ-Hero/desktop-hero-img.png"
                alt="laptop"
              />
            </Box>
          </Flex>
        </Box>
    </Container>

  )
}

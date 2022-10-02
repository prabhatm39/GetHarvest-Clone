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
          <Box
          className={styles.outer}
            justify="space-between"
            display={"flex"}
            direction={{
              base: "row",
              lg: "row",
              md: "column",
              sm: "column",
            }}
          
          >
            <Box  className={styles.outerbox}>
              <Box className={styles.outerbox2}>
                <Box  className={styles.outerbox3}>
                    <Box className={styles.outerbox4}  >SEE WHY 70,000+ COMPANIES TRACK TIME WITH HARVEST</Box>
                  
                </Box>
              </Box>
              <br />
              <br />
              <Box w="110%">
                <Heading
                  
                  className={styles.Finally}
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
                  <NavLink to="/register">
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

            <Box className={styles.imgggg}>
              <img
              className={styles.imgggg2}
                
                src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/Harvest/1001-Harvest-Home-SPZ-Hero/desktop-hero-img.png"
                alt="laptop"
              />
            </Box>
          </Box>
        </Box>
    </Container>

  )
}

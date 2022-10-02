import React, { useEffect, useState } from 'react'
import { AddIcon, ArrowBackIcon,ArrowForwardIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Flex, Text, Select, Container, Button, Input } from '@chakra-ui/react';
import styles from "./project.module.css"
import axios from 'axios';
export const Project = () => {
  const [pro, setPro] = useState([])
  const token = localStorage.getItem('getharvesttoken');
  
  const url = "abc";

const getProject = () => {
  axios.get(url, {
    headers:{
      'authorization':`Bearer ${token}`
  }
  })
  .then((res) => {
    console.log(res.data)
    setPro(res.data)
  })
  .catch((err) => console.log(err))
}
  

  useEffect(() => {
getProject()
  },[])

  const data = [{
    "_id": "6339245a53af522dfee20b58",
    "project": "abcjhds",
    "category": "abc",
    "notes": "lkndfjvbed",
    "amount": 23,
    "userId": "63367340596553524b1f24ab",
    "__v": 0
}]



const spent = 0;
console.log("s",spent)


  return (
    <div>
        {/* --------------------------------------project navbar-------------------------------------- */}

        <Container className={styles.pronav}>
            <Box className={styles.butbox}>
                <Button >
                <AddIcon w={12} h={12} fontWeight={700}  />
                {" "}
                     New Project</Button>
                <Button>Import</Button>
                <Button>Export</Button>
            </Box>
            <Box className={styles.sea}>
              <Box className={styles.seabo}>
            <SearchIcon />
                <Input placeholder='Search by project or client'/>
                </Box>
            </Box>
        </Container>


        {/* -----------------------------------------/project navbar----------------------------------------- */}
        <Container>
          <h1>Projects</h1>

        </Container>
        <Container className={styles.sel}>
          <Box>
          <select>
            <option>Active Projects 1</option>
            <option>Bugedted Projects</option>
            <option>Achived Projects</option>
          </select>
          </Box>
          <Box>
            <select style={{marginRight:"10px"}}>
              <option>filter by client</option>
              <option>
                <SearchIcon />
              </option>
              <option>All clients</option>
              <option>Active clients</option>
              <option>Example client</option>
            </select>
            <select>
              <option>Filter by manager</option>
              <option>All managers</option>
              <option>Active mangers of projects</option>

            </select>
          </Box>
        </Container>
        <Container>
          <Box className={styles.spbo}>
            <Input type='checkbox' /><span className={styles.cli}>Client</span>
            <span className={styles.bud}>Budget</span>
            <span className={styles.spe}>Spent</span>
            <span className={styles.rem}>Remamaning</span>
            <span className={styles.cos}>Costs</span>
          </Box>
        </Container>
        {
          data.map((item) => {
            return(
              <Container>
              <Box className={styles.spboD}>
                <Input type='checkbox' /><span className={styles.cliD}>{item.project}</span>
                <span className={styles.budD}>{item.amount}</span>
                <span className={styles.speD}>{spent}</span>
                <span className={styles.remD}>{Number(item.amount) - Number(spent)}</span>
                <span className={styles.cosD}>$0.00 
                <select>
                  <option>Action</option>
                  <option>Edite</option>
                  <option>Duplicate</option>
                
                  <option>Archive</option>
                  <option>Delete</option>
                  </select>
                </span>
              </Box>
            </Container>
            )
          })
        }
    </div>
  )
}

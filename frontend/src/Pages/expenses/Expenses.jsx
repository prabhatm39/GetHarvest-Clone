import React, { useNavigate, useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { AddExpense } from "../../components/expenses/AddExpense";
import axios from "axios";
import IndExp from "../../components/expenses/IndExp";
// import axios from "../../axios";
import { getExpense } from "../../Redux/expenseReducer/action";
import { Box, Button, Text } from "@chakra-ui/react";
import {  Checkbox, Flex, Input } from '@chakra-ui/react'
import { ProtectedNavbar } from "../../components/insideComponents/protectedNavbar/ProtectedNavbar";













export const Expenses = () => {
  //const navigate = useNavigate();
  const [add,setadd] = useState([])
  const [dataD,setData] = useState([])
  const token = localStorage.getItem("getharvesttoken")
  console.log(token)




  const getData = () => {
    axios
    .get("https://sleepy-forest-35500.herokuapp.com/expenses", {
              headers:{
              
              authorization: `Bearer ${token}`
              
              }
    })
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
    .catch((err) => console.log(err))
  }
  

   const deleteFunction = (id) => {
    axios.delete(`https://sleepy-forest-35500.herokuapp.com/expenses/delete/${id}`,{
      headers:{
              
        authorization: `Bearer ${token}`
        
        }
    })
    .then((res) =>{ console.log(res.data)
     getData()
  })
    .catch((err) => console.log(err))
   }
    
   useEffect(() => {
    getData()
   },[])
 console.log("data",dataD)


  //console.log(userdata);
 
   //console.log("expenses",expensesdata)

  return (
    <Box>
      <ProtectedNavbar/>
      <Box w="80%" m="auto" bgColor="">
        <Text fontSize={60}>Expenses</Text>
        <Button
          variant={"green"}
          bgColor={"green"}
          color="#fff"
          onClick={() => setadd(!add)}
        >
          + Track Expenses
        </Button>

        {add && <AddExpense getData={getData} />}

       {/* {expensesdata &&
          <IndExp data={expensesdata} />} */}
      </Box>


  

         {/* Data Box */}

         <Flex justify='space-between' border='1px solid #fa5d00' mt='16' p='5' bgColor='#fff8f1'>
         <Text>Date</Text>
         <Text>Project Name</Text>
         <Text>Amount</Text>
         <Text>Delete</Text>
         </Flex>


{dataD.map((item) => {
  return (
    <Flex justify='space-between' border='1px solid #fa5d00' mt='16' p='5' bgColor='#fff8f1'>
    <Text>2-Oct-2022</Text>
    <Text>{item.project}</Text>
    <Text>{item.amount}</Text>
    <Button onClick={() => deleteFunction(item._id)}>Delete</Button>
    </Flex>
  )
})}

      
      










          




    </Box>



     

      














  );
};
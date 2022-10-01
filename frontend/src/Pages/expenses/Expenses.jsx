import React, { useNavigate, useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { AddExpense } from "../../components/expenses/AddExpense";
import IndExp from "../../components/expenses/IndExp";
import axios from "../../axios";
import { getExpense } from "../../Redux/expenseReducer/action";
import { Box, Button, Text } from "@chakra-ui/react";


export const Expenses = () => {
  //const navigate = useNavigate();
  const [add,setadd] = useState([])
  const [data,setData] = useState([])
  const token = localStorage.getItem("getharvesttoken");
  const getData = () => {
    axios
    .get("http://localhost:8080/expenses",payload, {
              headers:{
                Authorization: `Bearer ${token}`
              }
    })
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => console.log(err))
  }
  
  useEffect(() => {
    const url = "http://localhost:8080/expenses/create"

    const fetchData = async () => {
      try {
          const response = await fetch(url);
          var json = await response.json();
          console.log(json);
      } catch (error) {
          console.log("error", error);
      }
  };

  fetchData();
  }, []);


  //console.log(userdata);
 
   //console.log("expenses",expensesdata)

  return (
    <Box>
    
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

        {add && <AddExpense />}

       {/* {expensesdata &&
          <IndExp data={expensesdata} />} */}
      </Box>


        

      




    </Box>




  );
};
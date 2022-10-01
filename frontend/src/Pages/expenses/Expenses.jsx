import React, { useNavigate, useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { AddExpense } from "../../components/expenses/AddExpense";
import IndExp from "../../components/expenses/IndExp";
import axios from "../../axios";
import { getExpense } from "../../store/expenseReducer/action";
import { Box, Button, Text } from "@chakra-ui/react";

export const Expenses = () => {
  //const navigate = useNavigate();
  const [add, setadd] = useState(false);
  const token = localStorage.getItem("getharvesttoken");
  const [expensesdata, setExpensesdata] = useState({
    date:"",
    project:"",
    category:"",
    notes:"",
    Amount:0  
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpensesdata({
      ...expensesdata,
      [name]: value
    });
  };
  //console.log(userdata);

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/expenses/create", expensesdata, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res);
        //navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setadd(true);
      });
  };
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

        {expensesdata &&
          <IndExp data={expensesdata} />}
      </Box>
    </Box>
  );
};
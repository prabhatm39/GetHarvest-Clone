import React, { useNavigate, useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { AddExpense } from "../../components/expenses/AddExpense";
import IndExp from "../../components/expenses/IndExp";
import axios from "../../axios";
import { getExpense } from "../../store/expenseReducer/action";
import { Box, Button, Text } from "@chakra-ui/react";

export const Expenses = () => {
  const navigate = useNavigate();
  const [add, setadd] = useState(false);
  const token = localStorage.getItem("getharvesttoken");
  const [userdata, setUserdata] = useState({
    clientName: "",
    address: "",
    pCurrency: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserdata({
      ...userdata,
      [name]: value
    });
  };
  //console.log(userdata);

  const handleSubmit = () => {
    axios
      .post("http://localhost:8080/client/create", userdata, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res);
        navigate("/manage");
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

        {ExpensesData &&
          ExpensesData.map((ele) => <IndExp key={ele.id} data={ele} />)}
      </Box>
    </Box>
  );
};
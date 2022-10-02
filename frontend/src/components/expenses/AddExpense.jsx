import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense, getExpense } from '../../Redux/expenseReducer/action'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Box, Button, Checkbox, Flex, Input, Text } from '@chakra-ui/react'
import axios from 'axios';

     export const AddExpense = ({getData}) => {
    // const dispatch=useDispatch()
    // const [category, setcategery] = useState("")
    // const [date, setdate] = useState("")
     const [amount, setamount] = useState("")
    // const [notes, setnotes] = useState("")
    // const [project, setproject] = useState("")
    const [startDate, setStartDate] = useState(new Date());

      

    const token = localStorage.getItem("getharvesttoken");
    const [expensesdata, setExpensesdata] = useState([]);

    
    const handleChange = (e) => {
      const {name, value}= e.target
     setExpensesdata({
      ...expensesdata,
      [name]:value
     })
      
    };
    console.log(expensesdata)
    const hello = (e) => {
      e.preventDefault()

      axios
      .post("https://sleepy-forest-35500.herokuapp.com/expenses/create",expensesdata, {
        headers: { 
          "authorization": `Bearer ${token}` 
        }
      })
      .then((res) => {
        console.log(res.data);
        getData()
        
      })
      .catch((err) => {
        console.log(err);
        
      });
    }
console.log("exdata",expensesdata)
  return ( 
    <form onSubmit={hello}>
  <Flex justify='space-between' border='1px solid #fa5d00' mt='18' p='5' bgColor='#fff8f1'>
        <Box>
          <Text fontSize='30'>Date</Text>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
        </Box>
       
        <Flex flexDir='column' w='70%' gap='5'>
          <Text fontSize='30' fontWeight="400">Project /category</Text>
          <Input bgColor='#fff' h='50' name='category' onChange={(e)=>handleChange(e)} type="text" placeholder='Choose a Project...'/>
      
          <Input bgColor='#fff' h='50' name="project" onChange={(e)=>handleChange(e)} type="text"placeholder='Choose a Category...' />
      
          <Input bgColor='#fff' h='50' name="notes" onChange={(e)=>handleChange(e)} type="text" placeholder='Notes (optional)'/>
         <Input bgColor='#fff' type='file' placeholder='Attach receipt' />
         <Checkbox defaultChecked>This expense is billable</Checkbox>
         <Flex gap='5'>
            <Button w='20%' variant='green' bgColor='green' color='#fff' fontSize='20' p='18' borderRadius="5" type="submit">Save Expense</Button>
              <Button w='20%' variant='outline'  fontSize='20' p='20px'>Cancel</Button>
         </Flex>
        </Flex>
       
        <Box>
          <Text fontSize='30'>Amount</Text>
           <Input bgColor='#fff' name="amount" onChange={(e)=>handleChange(e)} placeholder="$" type="number" />
        </Box>
      </Flex>


      
      </form>
  )
}

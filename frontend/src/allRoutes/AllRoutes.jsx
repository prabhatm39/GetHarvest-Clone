import React, {useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom";
import { Expenses } from "../Pages/expenses/Expenses";

let initialState = {
  team:"",
  hours:"",
}

export const AllRoutes = () => {
  const [data,setData] = useState(initialState)
  const [team,setTeam] = useState("0");
  const [hours,setHours] = useState(35)
  const handleTeam = (value) => {
    setTeam(value)
  }
  const handleHours = (value) => {
    setHours(value);
  }

  useEffect(() => {
    setData({
      team:team,
      hours:hours
    })
  },[team,hours])


  return (
    <div>
      <Routes>
          <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </div>
  );
};

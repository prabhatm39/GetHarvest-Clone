import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './proLargeNavbar.module.css';
// import axios from 'axios';

export const ProLargeNavbar = () => {
  // const[data,setData]=useState([]);
   const[user,setUser]=useState([]);
 const navigate=useNavigate();
 

  const token = localStorage.getItem("getharvesttoken");
  const handleSubmit = () => {
    if (token) {
      localStorage.removeItem("getharvesttoken");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={styles.proLContainer}>

        <div>
            <NavLink to='/time'>Time</NavLink>
            <NavLink to='/expenses'>Expenses</NavLink>
            <NavLink to='/project'>Projects</NavLink>
            <NavLink >Team</NavLink>
            <NavLink to='/reports'>Reports</NavLink>
            <NavLink to='/invoices'>Invoices</NavLink>
            
            <NavLink to='/manage'>Manage</NavLink>
        </div>

        <div className={styles.proLDiv2}>
            <button>Setting</button>
            <button>
              {/* <img src='https://tinyurl.com/52n2b37y' alt='userImage'/> */}
              <button onClick={handleSubmit}>{token ? "Logout" : "Login"}</button>
            </button>            
        </div>      
    </div>
  )
};


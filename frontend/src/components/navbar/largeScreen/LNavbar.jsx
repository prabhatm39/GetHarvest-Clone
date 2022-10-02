import React, { useState,useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import harvest_logo from '../../../assets/harvest_logo.png';
import styles from './lnavbar.module.css';

const LNavbar = () => {
  const navigate = useNavigate();
  // const[user,setUser]=useState([]);
 
  
 
  //  const token = localStorage.getItem("getharvesttoken");
  //  const handleSubmit = () => {
  //    if (token) {
  //      localStorage.removeItem("getharvesttoken");
  //      navigate("/register");
  //    } else {
  //      navigate("/login");
  //    }
  //  };
    
  return (
    <div className={ styles.lNavContainerW }>

      <div className={styles.linkDiv}>
        <div className={styles.imgDiv}><NavLink to='/'><img className={styles.lnimage} src={harvest_logo} alt="harvest logo" /></NavLink></div>
        <NaveLink to={'/why'}>Why Harvest?</NaveLink>
        <NaveLink to={'/feature'}>Features</NaveLink>
        <NaveLink to={'/coustomer'}>Customers</NaveLink>
        <NaveLink to={'/integrations'}>Integrations</NaveLink>
        <NaveLink to={'/price'}>Pricing</NaveLink>
      </div>
     {/* {token ? "Logout" : "Login"} */}
      <div className={styles.buttonDiv}>
        <div><button className={styles.notActiveLink} onClick={()=> navigate('/login')} >Sign in</button></div>
        <div><button className={styles.tryButton} onClick={()=> navigate('/register')}>Try Harvest free</button></div>
      </div>

    </div>
  )
};

export default LNavbar;

const NaveLink = ({children, to}) => {
    return (
        <div><NavLink className={({isActive})=>isActive ? styles.activeLink : styles.notActiveLink} to={to}>{children}</NavLink></div>
    )
};

import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar';
import styles from "./Home.module.css"

export const Home = () => {
  //------------------------------------date----------------------------
    const current = new Date();
  
  const Xmas95 = new Date()
  const options = { weekday: 'long', month: 'long'};
  const a = new Intl.DateTimeFormat('en-US', options).format(Xmas95).split(" ")
  const date = `${current.getDate()} ${a[0]}`;
  //-----------------------------------------------------------date-----------------------

  //------------------------calender-----------------------
  const [value, onChange] = useState(new Date());
  const [show, setShow] = useState(false)
  const handto = () => {
   setShow(!show)
  }
  console.log(show)
  
  //-----------------------------calender------------------------------
   
  return (
    <div>
        <div>
            <button>{"<"}</button>
            <button>{">"}</button>
        </div>
        <div>
         Today : {a[1]}{","} {date}
        </div>
        <div>
            <button onClick={handto}>
                 abc
            </button>
            <div >
            {show ? <div> <Calendar onChange={onChange} value={value} className={styles.cal} /> </div>: ""}
            </div>
        </div>
    </div>
  )
}

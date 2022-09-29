import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from 'react-calendar';
import styles from "./Home.module.css"
import { getTimeAPI } from "../../Redux/Timer/timer.action";
import { PaginDate } from "../PaginDate/PaginDate";
import { TrackTime } from "../TrackTime/TrackTime";

export const Home = () => {
  //------------------------------------date----------------------------
  //   const current = new Date();
  
  // const Xmas95 = new Date()
  // const options = { weekday: 'long', month: 'long'};
  // const a = new Intl.DateTimeFormat('en-US', options).format(Xmas95).split(" ")
  // const date = `${current.getDate()} ${a[0]}`;
  // //-----------------------------------------------------------date-----------------------

  // //------------------------calender-----------------------
  // const [value, onChange] = useState(new Date());
  // const [show, setShow] = useState(false)
  // const handto = () => {
  //  setShow(!show)
  // }
  // console.log(show)
  
  //-----------------------------calender------------------------------
  const dispatch = useDispatch();
  const {loading, error, timeData} = useSelector((state)=> state.time)
  const [dateData, setDateData] = useState({});  
  const [edit, setedit] = useState(false);
  const timerId = useRef(null);
  const [timer, setTimer] = useState(0);

  // console.log(dateData, edit);
  // console.log(timeData);

  const start = () => {
    timerId= setInterval(() => {
        setTimer((timer)=> timer - 1);
    }, 1000);
  }

  useEffect(()=> {
    dispatch(getTimeAPI());
  }, [dispatch])
 
  return (
    <div className={styles.dailyContainer}>
      <PaginDate dateData={dateData} setDateData={setDateData} />

      <div className={styles.dailyMainContainer}>
        <div><TrackTime dateData={dateData} /></div>

        <div className={styles.dailyMainContainer1}>
          <div>
            <div>Mon</div>
            <div>0:00</div>
          </div>
          <div>
            <div>Tue</div>
            <div>0:00</div>
          </div>
          <div>
            <div>Wed</div>
            <div>0:00</div>
          </div>
          <div>
            <div>Thu</div>
            <div>0:00</div>
          </div>
          <div>
            <div>Fri</div>
            <div>0:00</div>
          </div>
          <div>
            <div>Sat</div>
            <div>0:00</div>
          </div>
          <div>
            <div>Sun</div>
            <div>0:00</div>
          </div>
          <div className={styles.weekTotalDiv}>
            <div>Week total</div>
            <div>0:00</div>
          </div>
        </div>

      </div>

      <div className={styles.outputContainer}>
       
      </div>
    </div>
  )
}

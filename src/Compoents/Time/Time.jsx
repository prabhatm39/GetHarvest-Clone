import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from 'react-calendar';
import styles from "./Time.module.css"
import { getTimeAPI } from "../../Redux/Timer/timer.action";
import { PaginDate } from "./PaginDate/PaginDate";
import { TrackTime } from "./TrackTime/TrackTime";
import axios from "axios";

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
  const token= localStorage.getItem("getharvesttoken")

//   const timedata = [
//     {
//         "_id": "63368de23c00d66f0b3353f1",
//         "date": "29/01/2022",
//         "project": "Project 1",
//         "purpose": "Efecient",
//         "notes": "free",
//         "time": "zaldi",
//         "userId": "63367340596553524b1f24ab",
//         "__v": 0
//     }
// ]

  // console.log(dateData, edit);
  console.log(timeData)
  // console.log(timedata);

  const handleDelete=(id)=>{
    axios.delete(`http://localhost:8080/project/delete/${id}`,{
      headers:{
        'authorization':`Bearer ${token}`
    }
    })
    .then((res)=>{
      console.log(res)
      dispatch(getTimeAPI())
    })
    .catch((err)=>console.log(err))
  }

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
      {timeData.length !== 0 && timeData.map((el)=> (
          <div key={el._id} className={styles.outputDiv}>
          <div>
            <h1>{el.project}</h1>
            <p>{el.purpose}</p>
            <p style={{color:"#454545"}}>{el.notes}</p>
          </div>
          <div className={styles.outputDiv2}>
            <h1><span>{timer}</span>: <span>00</span></h1>
            <div><button className={styles.outputbutton1}>Stop</button></div>
            <div><button onClick={()=> setedit(!edit)} className={styles.outputbutton2}>Edit</button></div>
            <div><button onClick={()=> handleDelete(el._id)}>Delete</button></div>
          </div>
        </div>
        ))}      
      </div>
    </div>
  )
}

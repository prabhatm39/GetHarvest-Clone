import React, { useState } from "react";
import { ShowExpense } from "./ShowExpense";
import styles from "./Expense.module.css";


const Expenses = () => {
  const [show, setShow] = useState(false);
  const handleButton = () => {
    setShow(!show);
  };
  return (
    <div className={styles.bodyC}>
      <div style={{ Show: "flex" }}>
        <div className={styles.NewExpensebtn}>
          {" "}
          <button disabled={show} onClick={handleButton}>
            + New Expense
          </button>{" "}
        </div>
      </div>

      <ShowExpense />
    </div>
  );
};
export { Expenses };

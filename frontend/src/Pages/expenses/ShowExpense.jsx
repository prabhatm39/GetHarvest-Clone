import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import styles from "./Expense.module.css";
import { editPop } from "../../Actions/Expenses/action";
import { rewriteExpense } from "./rewriteExpense";

const ShowExpense = () => {
  const [edit] = useState(false);
  const dispatch = useDispatch();
  const handleEdit = (id) => {
    const editor = editPop(id);
    dispatch(editor);
  };

  const expenseList = useSelector((state) => state.expense.expenseList);
  return (
    <>
      <div className={styles.line}></div>
      {expenseList?.map((items) => (
        <div className={styles.ExpenseList} key={items.id}>
          {items.status ? (
            <rewriteExpense handleEdit={handleEdit} edit={edit} items={items} />
          ) : (
            <tr className={styles.TableList}>
              <td className={styles.coldate}>{items.date}</td>
              <td className={styles.colmeta} style={{ width: "600px" }}>
                {/* eslint-disable-next-line */}
                <strong className={styles.strong} style={{ marginLeft: "5px" }}>
                  {items.projectName}
                </strong>
                {/* eslint-disable-next-line */}
                <span>{"(" + `${items.category}` + ")"}</span>
                <div className={styles.ExpenseNotes} style={{ margin: "10px" }}>
                  <span className={styles.BillClass}>
                    {items.billable ? "Billable" : ""}
                  </span>
                  <span className={styles.Notes}>{items.notes}</span>
                </div>
              </td>
              <td className={styles.amountList}>
                {/* eslint-disable-next-line */}
                <strong className={styles.strong}>
                  {" "}
                  {/* eslint-disable-next-line */}
                  {"$" + `${items.amount}`}
                </strong>
              </td>
              <td className={styles.editbtn}>
                <button
                  onClick={() => handleEdit(items.id)}
                  className={styles.editbtn1}
                >
                  <EditIcon />
                </button>
              </td>
            </tr>
          )}
        </div>
      ))}
    </>
  );
};
export { ShowExpense };
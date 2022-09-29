import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { rewriteExpense } from "../../Actions/Expenses/action";

const rewriteExpense = ({ handlerewrite, rewrite, items }) => {
  console.log(items);
  const { id, projectName } = items;
  const [projecterName, setProject] = useState(projectName);
  const dispatch = useDispatch();
  const handleChange = () => {
    const actionrewrite = rewriteExpense({ ...items, projectName: projecterName });
    dispatch(actionrewrite);
  };
  return (
    <>
      <input
        type="text"
        value={projecterName}
        onChange={(e) => setProject(e.target.value)}
      />
      <button onClick={handleChange}>Change</button>
      <button onClick={() => handlerewrite(id)}>Cancel</button>
    </>
  );
};
export { rewriteExpense };

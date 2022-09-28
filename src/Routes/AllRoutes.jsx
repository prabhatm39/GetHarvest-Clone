
import Homepage from "../Pages/Homepage";
import { Route,Routes } from "react-router-dom";
const AllRoutes=()=>{
    return( 
      <div>
         <Routes>
            <Route path="/" element={<Homepage/>}/>
         </Routes>
      </div>
    )
}

export default AllRoutes;
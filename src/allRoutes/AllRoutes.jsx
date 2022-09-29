
// import Homepage from "../Pages/Homepage";
import { Route,Routes } from "react-router-dom";
import Home from "../Pages/home/Home";
const AllRoutes=()=>{
    return( 
      <div>
         <Routes>
            <Route path="/" element={<Home/>}/>
         </Routes>
      </div>
    )
}

export default AllRoutes;
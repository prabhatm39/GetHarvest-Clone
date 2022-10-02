

import { Route,Routes } from "react-router-dom";
import Addclient from "../components/Addclient/Addclient";
import Next1 from "../components/Next/Next1";
import LastStep from "../components/LastStep/LastStep";
import Manage from "../components/Manage/manage";
import Login from "../components/Login/login";
import Register from "../components/Signup/signup";
import Home from "../Pages/home/Home";
import Invoices from "../Pages/Invoices/invoices";
import Report from "../Pages/Report/report";
import Time from "../components/Time/Time";
import Project from "../components/Project/Project";
import Whyharvest from "../components/whyharvestpages/Whyharvest";
import Feature from "../components/features/Feature";
import Coustomer from "../components/Coustomer/Coustomer";
import Price from "../components/Price/Price";
import { Expenses } from "../Pages/expenses/Expenses";

const AllRoutes=()=>{
    return( 
      <div>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/invoices" element={<Invoices/>}/>
            <Route path="/reports" element={<Report/>}/>
             <Route path="/register" element={<Register />} />
             <Route path="/login" element={<Login />} />
            <Route path="/next1" element={<Next1 />} />
            <Route path="/last" element={<LastStep />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/addclient" element={<Addclient />} /> 
            //-----------------------------------------------------
            <Route path='/time' element={<Time />} />
            <Route path="/project" element={<Project />} />
            <Route path='/why' element={<Whyharvest />} />
            <Route path='/feature' element={<Feature />} />
            <Route path='/coustomer' element={<Coustomer />} />
            <Route path='/price' element={<Price />} />
            //---------------------------------------------------
            <Route path="/expenses" element={<Expenses />} />
         </Routes>
      </div>
    )
}

export default AllRoutes;
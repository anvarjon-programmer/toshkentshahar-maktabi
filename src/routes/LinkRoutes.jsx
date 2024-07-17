import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Constitution, Decidion, Laws, LostDocuments, MinisterialOrders, PresidentialDecisions } from "../pages";

const LinkRoutes = () => {
    return(
        <BrowserRouter>
   <Routes>
     {/* <Route path='/constitution' element={<Constitution/>}/> */}
     <Route path='/Decidion' element={<Decidion/>}/>
     <Route path='/decidion' element={<Laws/>}/>
     <Route path='/lostDocuments' element={<LostDocuments/>}/>
     <Route path='/ministerialOrders' element={<MinisterialOrders/>}/>
     <Route path='/presidentialDecisions' element={<PresidentialDecisions/>}/>
    </Routes>
  </BrowserRouter>
    )
 }

 export default LinkRoutes
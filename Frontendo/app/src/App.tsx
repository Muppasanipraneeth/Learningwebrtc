import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "./component/Landing";
import { Room } from "./component/Room";
export const App = () => {
  return (
    <div>
     <Router>
      <Routes >
        <Route path="/" element={<Landing />}></Route>
        <Route path="/room" element={<Room />} ></Route>
      </Routes>

     </Router>

      
    </div>
  )
}

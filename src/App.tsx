import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./register";
import "./App.css"
import Dashboard from "./user/dashboard";
import Hospitals from "./user/hospital";
import LiveMap from "./user/map";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
           <Route path="/user/dashboard" element={<Dashboard/>}/>
          <Route path="/user/hospital" element={<Hospitals/>}/>
          <Route path="/user/map" element={<LiveMap/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
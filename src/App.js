import React from "react";
import "./Crud.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Navbar";
import Userdata from "./Userdata";
import Useradd from "./Useradd";
import Userdetail from "./Userdetail";
import Useredit from "./Useredit";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function App() {
  return (
    <>
    {/* <h1>Api crud</h1> */}
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>} >
          <Route path='/userdata' element={<Userdata/>} />
          <Route path='/useradd' element={<Useradd/>} />
          <Route path='/userdetail/:userid' element={<Userdetail/>} />
          <Route path='/useredit/:userid' element={<Useredit/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;

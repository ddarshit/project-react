import React from "react";
import "./Crud.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Userdata from "./Userdata";
import Useradd from "./Useradd";

function App() {
  return (
    <>
    <h1>Api crud</h1>
    <BrowserRouter>
        <Routes>
          <Route path='/Userdata' element={<Userdata/>} />
          <Route path='/Useradd' element={<Useradd/>} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css"
//import "./smallscreen.css"
import Login from "./Login.jsx"
import Signup from "./Signup.jsx"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
  <Route path="/" element={<App />}>
  </Route>
  <Route path="/app" element={<App />}>
  </Route>
  <Route path="/login" element={<Login />} >
  </Route>
  <Route path="/signup" element={<Signup />} >
  </Route>
</Routes>
</BrowserRouter>
);

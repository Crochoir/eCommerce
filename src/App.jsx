import React, {useEffect, useState} from "react";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./Navbar.jsx"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as Icon from 'react-bootstrap-icons';
import ink from './images/inkBottle.jpeg';


function App() {

useEffect(() => {
  fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
}, [])




  return (
    <div className="App">
      <Navigation />
      <div className="secondary-div">
      </div>
      <div className="select">
       <Row className="landing-div">
        <Col >
         <div className='title-btn' style={{paddingTop: '10%'}}> <p><Icon.Pencil size={100} /> </p> <p> Pencils </p></div>
         <div className='title-btn' style={{paddingTop: '10%'}}><p><Icon.Eyedropper size={100} /></p><p> Inks </p> </div>
        </Col>
        <Col>
         <div className='title-btn-right' style={{paddingTop: '10%'}}><p><Icon.PaintBucket size={100} /></p> <p>Paints</p> </div>
         <div className='title-btn-right' style={{paddingTop: '10%'}}><p><Icon.Brush size={100} /></p> <p>Brushes</p> </div>
        </Col>
       </Row>
      </div>
      <div style={{backgroundColor: "#4f5d2fff"}}> </div>
    </div>
  );
}

export default App;

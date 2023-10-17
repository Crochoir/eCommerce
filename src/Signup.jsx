import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import Cookies from 'cookies-js';
import {useNavigate } from 'react-router-dom';


const Signup = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



      const handleChange = e => {
        if (e.target.name === 'user' ) {
          setUsername(e.target.value);
        } else if (e.target.name === 'password') {
          setPassword(e.target.value);
        }
    }
      const handleSubmit = async e => {
        e.preventDefault();
        try {
          console.log(username, password);
          const res = await axios.post("http://localhost:3001/api/register", { username, password });
          //localStorage.setItem("token", res.data.token);
          Cookies.set('token', res.data.token);
          console.log('success');
          navigate('/app')
          // redirect the user or display success message
        } catch (err) {
          console.error(err);
        }
    };

    return (
    <div className="login-page">
        <Form onSubmit={handleSubmit} className="login-form">
        <Form.Group className="login-items mb-3" controlId="formBasicEmail">
         <Form.Label style={{position: "relative", left: "36%"}}>Email address</Form.Label>
            <Form.Control
                style={{backgroundColor: "transparent", width: "80%", position: "relative", left: "10%"}}
                type="email"
                name='user'
                placeholder="Enter email"
                value={username}
                onChange={handleChange}
                required
                autoComplete="current-password"
                 />
        </Form.Group>

        <Form.Group className="login-items mb-3" controlId="formBasicPassword">
         <Form.Label style={{position: "relative", left: "40%"}}>Password</Form.Label>
         <Form.Control
         style={{
            backgroundColor: "transparent",
            width: "80%",
            position: "relative",
            left: "10%"
            }}
         type="password"
         name='password'
         placeholder="Password"
         value={password}
         onChange={handleChange}
         required

         />
        </Form.Group>
        <Form.Group className="login-items mb-3" controlId="formBasicCheckbox">
         <Form.Check style={{position: "relative", top: "20%", left: "33%"}} type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="login-btn" variant="dark" type="submit">
            Sign Up
        </Button>
        </Form>
    </div>
    )



}

export default Signup;

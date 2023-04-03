import React from 'react';
import './login.css';
import {  Form, NavLink} from 'react-bootstrap';
import SignUp from '../signup/SignUp';
// import background from "../assets/jiujitsu.png";
const background = require("../assets/jiujitsu.png")
// declare module './assets/jiujitsu.png';

function Login() {

  const showSignUp = () => {
    if(window.location.pathname === "/login"){
      return <SignUp/>


    }

  } 
    return (


    // <Container className='form2'>


    
        <div id="container" 
        className='blue-border'
        style={{ 
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minWidth: "1145px",
        minHeight: "700px",
        borderTop: "10px solid rgba(220, 219, 252, 0.99)",
        borderLeft: "10px solid rgba(220, 219, 252, 0.99)",
        borderRight: "10px solid rgba(220, 219, 252, 0.99)",

    }}>


    
        <Form style={{ position: 'relative',width: '503px', height:'579px', background: "rgba(255, 255, 255, 0.4)", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "54px auto 68px"}}>
      <h1 style={{ fontWeight: "700", fontSize: "96px", lineHeight: "116px", margin: "0"}}> The Path </h1>
      <p style={{ fontWeight: "700", fontSize: "32px", lineHeight: "39px"}}>A community driven Brazilian Jiu-Jitsu App</p>
        
        <Form.Control id='input' type="email" placeholder="Email" />

        <Form.Control type="password" placeholder="Password" />
        <div className='form-group form-buttons'>
          <NavLink href="#">Forgot <span> password?</span></NavLink>
          <NavLink href="#">Signup <span>here</span></NavLink>
        </div>

        <div className='form-group'>
          <button onClick={showSignUp} type='submit' className='btn-pri'>Login</button>
        </div>
        </Form>
      
    </div>
    // </Container>
    );
  }
  export default Login;

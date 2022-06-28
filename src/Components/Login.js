import React from 'react';
import './Styles/login.css';
import logo from '../logo.svg'

const Login = () => {
    return (
        <div className='loginBody'>
            <div className="bar">
                <ul>
                    <li><a href="/"><img style={{ width: "300px" }} src={logo} alt="PointBlank" /></a></li>
                    <li><a href='/' id="heading">Host a match</a></li>
                </ul>
            </div>
            <div className="loginForm">
                <form action="" method="get">
                    <h1>Login</h1>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="username" id="name" required placeholder="Enter username" />
                    <label htmlFor="pwd">Password</label>
                    <input type="password" name="password" id="pwd" required placeholder="" />
                    <i style={{ color: "rgb(49, 174, 49)", fontSize: "1.6rem" }} className="bi bi-eye-slash" id="togglePassword"></i>




                    <button type="submit" value="login" >Login</button>

                </form>
            </div>
        </div>
    )
}

export default Login
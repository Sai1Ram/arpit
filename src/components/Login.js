import React, {useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (e) => {
        console.log(email, password);
        e.preventDefault();
        try {
        //WRITE THE API FOR LOGIN 
        const response = await axios.post("http://localhost:5000/api/login", {
            email: email,
            password: password
          })
          setEmail("");
          setPassword("");
          console.log("Login submitted");
        } catch (error) {
            console.log(error)
        }
        
      };
  return (
    <div className="login-container">
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" required onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit" className="login-button">Login</button>
        <p className="login-link">
          Don't have account yet then what are you doing go to <Link to="/registration">Registration page</Link>
        </p>
      </form>
    </div>
  </div>
  )
}

export default Login
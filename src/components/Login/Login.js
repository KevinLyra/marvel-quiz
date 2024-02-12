import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({email, password}) => {

  const data = {
    pseudo:'',
    email:'',
    password: '',
    corfirmPassword:''
  }

  const [loginData, setLoginData] = useState(data)

  const handleChange = e => {
    setLoginData({...loginData, [e.target.id]: e.target.value})
  }

  return (
    <div className="signUpLoginBox">
        <div className="slContainer">
        <div className="formBoxLeftLogin">
            </div>
            <div className="formBoxRight">
                <div className="formContent">
                  
                  <h2>Inscription</h2>
                  <form /*onSubmit={handleSubmit}*/>
                    <div className="inputBox">
                      <input onChange={handleChange} value={email} type="email" id="email" required />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="inputBox">
                      <input onChange={handleChange} value={password} type="password" id="password" required />
                      <label htmlFor="password">password</label>
                    </div>
                    
                    {/* {btn} */}
                  </form>
                  <div className="linkContainer">
                    <Link className='simpleLink' to="/signup">Pas de compte ? Inscrivez-vous !</Link>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
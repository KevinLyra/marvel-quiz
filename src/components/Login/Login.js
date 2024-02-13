import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/FirebaseConfig'


const Login = () => {

  const data = {
    email:'',
    password: '',
  }

  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(data)
  const [btn, setBtn] = useState(false)
  const [error, setError] = useState('')
  const { email, password} = loginData

  const handleChange = e => {
    setLoginData({...loginData, [e.target.id]: e.target.value})
  }

  useEffect(() => {
    if(password.length > 5 && email !== ''){
      setBtn(true)
    } else if(btn === true){
      setBtn(false)
    }
  }, [email, password, btn])

  const handleSubmit = e => {
    e.preventDefault()
    const { email, password } = loginData
    signInWithEmailAndPassword(auth, email, password)
    .then(user => {
      setLoginData({...data})
      navigate('/welcome', {replace: true})

    }).catch(error =>{
      setError(error)
      setLoginData({...data})
    })
  }
  
  const errorMsg = error !== '' && <span >{error.message}</span>

  return (
    <div className="signUpLoginBox">
        <div className="slContainer">
        <div className="formBoxLeftLogin">
            </div>
            <div className="formBoxRight">
                <div className="formContent">
                  {errorMsg}
                  <h2>Inscription</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                      <input onChange={handleChange} value={email} type="email" id="email" required />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="inputBox">
                      <input onChange={handleChange} value={password} type="password" id="password" required />
                      <label htmlFor="password">password</label>
                    </div>
                    
                    {<button disabled={btn ? false : true}>Connexion</button>}

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
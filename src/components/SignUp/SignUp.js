import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/FirebaseConfig'
import { Link, useNavigate } from 'react-router-dom'


const SignUp = () => {

  const data = {
    pseudo:'',
    email:'',
    password: '',
    corfirmPassword:''
  }

  const [signUpData, setSignUpData] = useState(data)
  const [error, setError] = useState('')
  const {pseudo, email, password, corfirmPassword} = signUpData

  const handleChange = e => {
    setSignUpData({...signUpData, [e.target.id]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { email, password } = signUpData
    createUserWithEmailAndPassword(auth, email, password)
    .then(user => {
      setSignUpData({...data})
      navigate('/welcome')

    }).catch(error =>{
      setError(error)
      setSignUpData({...data})
    })
  }

  const btn = pseudo === '' || email === '' || password === '' || corfirmPassword !== password ? <button disabled>Inscription</button> : <button>Inscription</button>

  const errorMsg = error !== '' && <span >{error.message}</span>

  const navigate = useNavigate();

  return (
    <div className="signUpLoginBox">
        <div className="slContainer">
            <div className="formBoxLeftSignup">
            </div>
            <div className="formBoxRight">
                <div className="formContent">
                  {errorMsg}
                  <h2>Inscription</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                      <input onChange={handleChange} value={pseudo} type="text" id="pseudo" required />
                      <label htmlFor="pesudo">Pseudo</label>
                    </div>
                    <div className="inputBox">
                      <input onChange={handleChange} value={email} type="email" id="email" required />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="inputBox">
                      <input onChange={handleChange} value={password} type="password" id="password" required />
                      <label htmlFor="password">password</label>
                    </div>
                    <div className="inputBox">
                      <input onChange={handleChange} value={corfirmPassword} type="password" id="corfirmPassword" required />
                      <label htmlFor="password">Confirmez le mot de passe</label>
                    </div>
                    {btn}
                  </form>
                  <div className="linkContainer">
                    <Link className='simpleLink' to="/login">Déjà inscrit ?</Link>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
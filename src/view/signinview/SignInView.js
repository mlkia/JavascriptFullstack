import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import './SignInView.css'
import { UserContext } from '../../utils/context/UserContext'
import APIService from '../../utils/api/service/APIService'

export const SignInView = () => {
    const history = useHistory();
    const [userName, setUserName] = useState("")
    const [loginEmail, setLoginEmail] = useState()
    const [loginPassword, setLoginPassword] = useState("")
    const [loggedInUser, setLoggedinUser] = useContext(UserContext)


    const login = () => {
        setLoggedinUser(loginEmail)
        localStorage.setItem('email', loginEmail)
        alert(loginEmail + " Has logged in")
        history.push('/home')
    }

    const submitInof = async () => {
        
        await APIService.createNewUser({
            username:userName,
            password:loginPassword
        })
        
    }

    return (
        <div className="loginstyle">
            <h4>Sign in to Student Guide</h4>
            <span>Username:</span> <br />
            <input onChange={e => setUserName(e.target.value)} /> <br />
            <span>Password:</span> <br />
            <input type='password' placeholder="Enter your password"  onChange={e => setLoginPassword(e.target.value)} /> <br />
            <button onClick={() => login()}>Login</button>
            <button onClick={() => submitInof()}>Submit</button>
        </div>
    )
}
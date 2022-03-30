import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../signUp/notification/Notification'
import { useNavigate } from 'react-router-dom';
import "./auth.css"

const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(initialState)

    const { email, password, err, success } = user

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value, err: '', success: '' })
    }


    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:4000/login',
                { email, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                }
            )
            navigate("/", { state: { type: "logIn" } });
            setUser({ ...user, err: '', success: res.data.message })


        } catch (err) {
            err.response.data.message &&
                setUser({ ...user, err: err.response.data.message, success: '' })
        }
    }

    return (
        <div className="login_page">
            <h2>Login</h2>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}


            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder="Enter email address" id="email"
                        value={email} name="email" onChange={handleChangeInput} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password" id="password"
                        value={password} name="password" onChange={handleChangeInput} />
                </div>

                <div className="row" style={{ display: 'flex', justifyContent: 'start' }}>
                    <button type="submit" variant='contained'>Login</button>
                    <Link to="/forgot_password" style={{ display: 'flex', justifyContent: 'end' }}>Forgot your password?</Link>
                </div>
            </form>

            <p>Already an account? <Link to="/register">Register</Link></p>

        </div>
    )
}


export default Login;
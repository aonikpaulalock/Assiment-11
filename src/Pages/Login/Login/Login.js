import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import '../../Styles/Signup.css'
import GoogleProvider from '../GoogleProvider/GoogleProvider';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Seared/Loading/Loading';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [email,setEmail] = useState('')
  const [loginError, setloginError] = useState('')
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const from = location?.state?.from?.pathname || '/'
  if (loading) {
    return <Loading />
  }
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const { data } = await axios.post('https://fathomless-cove-99393.herokuapp.com/login', { email })
    localStorage.setItem("tokenAccess", data.tokenAccess)
    await signInWithEmailAndPassword(email, password)
    if (password.length < 8) {
      setloginError('Minimum type eight charchter')
      return;
    }
    navigate(from, { replace: true })


  }
  if (user) {
    // navigate(from, { replace: true })
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordReset = async (e) => {
    await sendPasswordResetEmail(email);
    toast('Password reset verification send')
  }

  return (
    <div className="form-background">
      <Form onSubmit={handleLoginSubmit}>
        <h3 className="heding">Login</h3>
        <Form.Group className="">

          <Form.Control
            type="email"
            name="email"
            onChange={handleEmail}
            placeholder="Enter Email"
            className="input"
            autoComplete='off'
            required />

        </Form.Group>
        <Form.Group className="">

          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            required />

          <h6 className='text-center text-danger'>{loginError}</h6>
        </Form.Group>
        <button type="submit" className="LogSign-Button">Login</button>
      </Form>
      <p className="log-sign">
        New to Wed-Graphy ? <Link to='/signup' className='toggle'>Create Account</Link>
      </p>
      <GoogleProvider />
      <p className="log-sign">
        Forget Password ?
        <span className="toggle" onClick={handlePasswordReset}> Reset Password</span>
      </p>
      <div>
        <h5 style={{ color: 'red' }}>{error?.message}</h5>
      </div>

    </div>
  );
};

export default Login;
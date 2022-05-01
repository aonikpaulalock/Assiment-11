import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import '../../Styles/Signup.css'
import GoogleProvider from '../GoogleProvider/GoogleProvider';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../Seared/Loading/Loading';
const Signup = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const [error, setError] = useState('')
  const from = location?.state?.from?.pathname || '/'
  const [createUserWithEmailAndPassword, user,loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  const handleSubmit = event => {
    event.preventDefault()
    const email = event.target.email.value;
    const password = event.target.password.value
    const confirmPassword = event.target.confirmPassword.value
    console.log(email, password, confirmPassword);

    if (password !== confirmPassword) {
      setError("Don't match password")
      return;
    }

    if (password.length < 8) {
      setError(" Minimum type eight charchter ")
      return;
    }

    createUserWithEmailAndPassword(email, password);
    toast.success("Your From Sumited Successfully")
  }

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading />
  }
  return (
    <div className="form-background">
      <Form onSubmit={handleSubmit}>
        <h3 className="heding">Signup</h3>
        <Form.Group className="">
          <Form.Control type="email" name="email" placeholder="Enter Email"
            className="input"
            required
            autoComplete='off'
          />
        </Form.Group>
        <Form.Group className="">
          <Form.Control type="password" name="password" placeholder="Password" className="input" required />
        </Form.Group>
        <Form.Group className="">
          <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" className="input" required />
          <h6 className='text-center text-danger'>{error}</h6>

        </Form.Group>
        <button type="submit" className="LogSign-Button">Signup</button>
      </Form>
      <p className="log-sign">
        Already An Account ? <Link to='/login' className='toggle'>Login</Link>
      </p>
      <GoogleProvider />
    </div>
  );
};

export default Signup;
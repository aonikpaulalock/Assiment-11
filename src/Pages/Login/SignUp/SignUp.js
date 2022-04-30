import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import '../../Styles/Signup.css'
import GoogleProvider from '../GoogleProvider/GoogleProvider';
const Signup = () => {
  const navigate = useNavigate();
  // Input and Error State Field
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword( { sendEmailVerification: true })

  const handleEmail = event => {
    setEmail(event.target.value)
  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleConfirmPassword = event => {
    setConfirmPassword(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (password !== confirmPassword) {
      setError("Don't match password")
      return;
    }
    if (password.length < 7) {
      setError("Please type minimum 8 charchter")
      return;
    }
    createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user]);

  return (
    <div className="form-background">
      <Form onSubmit={handleSubmit}>
        <h3 className="heding-signup">Signup</h3>
        <Form.Group className="">
          <Form.Control onBlur={handleEmail} type="email" placeholder="Enter Email"
            className="input-design"
            required
          />
        </Form.Group>
        <Form.Group className="">
          <Form.Control onBlur={handlePassword} type="password" placeholder="Password" className="input-design" required />
        </Form.Group>
        <Form.Group className="">
          <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" className="input-design" required />
          <h6 className='text-center text-danger'>{error}</h6>
        </Form.Group>
        <button type="submit" className="signup-button">Signup</button>
      </Form>
      <p className="log-sign">
        Already An Account ? <Link to='/login' className='toggle-link'>Login</Link>
      </p>
      <GoogleProvider/>
    </div>
  );
};

export default Signup;
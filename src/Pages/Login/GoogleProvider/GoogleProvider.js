import React, { useEffect } from 'react';
import Google from '../../../Asset/Social/Google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const GoogleProvider = () => {
  const navigate = useNavigate()
  let errorElement;

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle();

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>
  }
  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user])
  if (loading) {
    return;
  }
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="border border-1 border-warning w-50 "></div>
        <p className="text-black mt-3 mx-4">OR</p>
        <div className="border border-1 border-warning w-50"></div>
      </div>
      {errorElement}
      <div className="">
        <button className="Google-Provider" onClick={() => signInWithGoogle()}>
          <div className='d-flex align-items-center justify-content-center'>
            <img src={Google} alt="" />
            <span className="ms-4">Google Signup</span>
          </div>
        </button>
      </div>
    </div>
  );
};
export default GoogleProvider;
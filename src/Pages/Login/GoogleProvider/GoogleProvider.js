import Google from '../../../Asset/Social/Google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const GoogleProvider = () => {
  let location = useLocation();
  const navigate = useNavigate()
  const from = location?.state?.from?.pathname || '/'
  let errorStore;

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    errorStore = <p className="text-danger">Error: {error?.message}</p>
  }
  if (user) {
    navigate(from, { replace: true });
  }
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
      {errorStore}
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
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRigthIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import { useState } from 'react';
import {toast} from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

function ForgotPassword() {

    const [email, setEmail] = useState('')

    const handleForgotPassword = async (e) => {
      e.preventDefault();
      try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email);
        toast.success('Email was sent');
      } catch(error) {
        toast.error('Could not send reset email');
      }
      
    }

    const handleOnChange = (e) => {
        setEmail(e.target.value)
    }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Forgot Password</p>
        </header>

        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={handleOnChange}
          />

          <Link to="/sign-in" className="forgotPasswordLink" >Sign In</Link>

          <div className="signInBar">
            <p className="signInText">Send Reset Link</p>

            <button className="signInButton">
              <ArrowRigthIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>

      </div>
    </>
  );
}

export default ForgotPassword;

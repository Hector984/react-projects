import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRigthIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import { useState } from 'react';
import {toast} from 'react-toastify';

function ForgotPassword() {

    const [email, setEmail] = useState('')

    const handleForgotPassword = (e) => {}

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

          <Link to="/forgot-password" className="forgotPasswordLink" />

          <div className="signInBar">
            <p className="signInText">Send Link</p>

            <button className="signInButton">
              <ArrowRigthIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        <Link to="/sign-in" className="registerLink">
          Sign In
        </Link>
      </div>
    </>
  );
}

export default ForgotPassword;

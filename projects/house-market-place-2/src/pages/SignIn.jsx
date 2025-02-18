import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRigthIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignIn() {
  const [showPassword, setShowPassword] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData(prevState => ({
        ...prevState,
        [e.target.id]: e.target.value
    }))
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form action="">
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={handleOnChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? 'text' : 'password'}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={handleOnChange}
            />

            <img src={visibilityIcon} alt="show password" 
            className="showPassword" 
            onClick={() => setShowPassword((prevState) => !prevState)}/>
          </div>

          <Link to="/forgot-password" className="forgotPasswordLink"/>

          <div className="signInBar">
            <p className="signInText">
                Sign In
            </p>

            <button className="signInButton">
                <ArrowRigthIcon fill="#ffffff" width='34px' height='34px' />
            </button>
          </div>
        </form>

        <Link to="/sign-up" className="registerLink">
            Sign Up Instead
        </Link>
      </div>
    </>
  );
}

export default SignIn;

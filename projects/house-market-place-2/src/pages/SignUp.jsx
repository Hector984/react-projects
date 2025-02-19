import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {db} from "../firebase.config";
import {setDoc, doc, serverTimestamp} from "firebase/firestore";
import { ReactComponent as ArrowRigthIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp() {
  const [showPassword, setShowPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredentials.user;

    updateProfile(auth.currentUser, {
      displayName: name
    });

    const formDataCopy = {...formData}
    delete formDataCopy.password;
    formDataCopy.timestamp = serverTimestamp();

    await setDoc(doc(db, 'users', user.uid), formDataCopy);

    navigate('/');

    try {

    }catch(error) {

    }
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        <form onSubmit={handleSignUp}>
          <input
            type="text"
            className="nameInput"
            placeholder="Name"
            id="name"
            value={name}
            onChange={handleOnChange}
          />

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
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={handleOnChange}
            />

            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          <Link to="/forgot-password" className="forgotPasswordLink" />

          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>

            <button className="signUpButton">
              <ArrowRigthIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        <Link to="/sign-in" className="registerLink">
          Sign In Instead
        </Link>
      </div>
    </>
  );
}

export default SignUp;

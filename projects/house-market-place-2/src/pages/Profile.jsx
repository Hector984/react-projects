import {getAuth, updateProfile} from 'firebase/auth';
import {toast} from 'react-toastify';
import {useEffect, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { updateDoc, doc } from 'firebase/firestore';
import {db} from '../firebase.config';
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg';
import homeIcon from '../assets/svg/homeIcon.svg';


function Profile() {

    const auth = getAuth();
    const [changeDetails, setChangeDetails] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    });

    const {name, email} = formData

    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }

    const onSubmit = async () => {
        try {
            if(auth.currentUser.displayname !== name) {
                await updateProfile(auth.currentUser, {
                    displayName: name
                })

                const userRef = doc(db, 'users', auth.currentUser.uid)
                await updateDoc(userRef, {
                    name
                })

                toast.success('Updated profile successfully')
            }
        } catch(error) {
            toast.error('Unable to update the user info')
        }
    }

    const handleChangeDetails = () => {
        changeDetails && onSubmit()
        setChangeDetails(prevState => !prevState)
    }

    const handleOnchange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    return (
      <div className="profile">
        <header className="profileHeader">
          <p className="pageHeader">My profile</p>
          <button type="button" className="logOut" onClick={onLogout}>
            Logout
          </button>
        </header>

        <main>
          <div className="profileDetailsHeader">
            <p className="profileDetailsText">Personal Details</p>
            <p className="changePersonalDetails" onClick={handleChangeDetails}>
              {changeDetails ? "done" : "change"}
            </p>
          </div>

          <div className="profileCard">
            <form>
              <input
                type="text"
                id="name"
                className={!changeDetails ? "profileName" : "profileNameActive"}
                disabled={!changeDetails}
                value={name}
                onChange={handleOnchange}
              />

              <input
                type="text"
                id="email"
                className={!changeDetails ? "profileEmail" : "profileEmailActive"}
                disabled={!changeDetails}
                value={email}
                onChange={handleOnchange}
              />
            </form>
          </div>

          <Link to='/create-listing' className='createListing'>
            <img src={homeIcon} alt="home" />
            <p>Sell or rent your home</p>
            <img src={arrowRight} alt="arrow right" />
          </Link>
        </main>
      </div>
    );
}

export default Profile
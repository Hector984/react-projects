import {useEffect, useState} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth';


export const useAuthStatus = () => {
    // Verify if the user is logged in or not
    const [loggedIn, setLoggedIn] = useState(false);
    // For checking if the user is logged in or not
    // This is used to activate the loading spinner
    const [checkingStatus, setCheckingStatus] = useState(true); 

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setLoggedIn(!!user);
            setCheckingStatus(false);
        });
    });

    return {loggedIn, checkingStatus}; 
}
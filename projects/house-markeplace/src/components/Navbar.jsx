import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from './../assets/svg/localOfferIcon.svg';
import { ReactComponent as ExploreIcon } from './../assets/svg/exploreIcon.svg' 
import { ReactComponent as PersonOutlineIcon } from './../assets/svg/personOutlineIcon.svg'

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const pathMatchRoute = (route) => {
        if(route === location.pathname) {
            return '#2c2c2c'
        } 

        return '#8f8f8f';
    }
    return (
        <footer className="navbar">
            <nav className="narvbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem">
                        <ExploreIcon fill={pathMatchRoute('/')} width='36px'heigth='36px' 
                        onClick={() => navigate('/')}/>
                        <p>Explore</p>
                    </li>

                    <li className="navbarListItem">
                        <OfferIcon fill={pathMatchRoute('/offers')} width='36px'heigth='36px'
                        onClick={() => navigate('/offers')}/>
                        <p>Offer</p>
                    </li>

                    <li className="navbarListItem">
                        <PersonOutlineIcon fill={pathMatchRoute('/profile')} width='36px'heigth='36px'
                        onClick={() => navigate('/profile')}/>
                        <p>Profile</p>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Navbar;
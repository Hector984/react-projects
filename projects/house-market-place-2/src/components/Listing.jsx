import { Link } from "react-router-dom";
import {ReactComponent as DeleteIcon} from '../assets/svg/deleteIcon.svg';
import bedIcon from '../assets/svg/bedIcon.svg';
import bathtubIcon from '../assets/svg/bathtubIcon.svg';

const Listing = ({listing}) => {
    return <li>{listing.name}</li>
}

export default Listing;
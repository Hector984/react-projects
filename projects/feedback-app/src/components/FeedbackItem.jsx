import Card from "./shared/Card"
import {FaTimes, FaEdit} from 'react-icons/fa'
import PropTypes from "prop-types"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackItem = ({item}) => {

    const {deleteItem, editFeedback} = useContext(FeedbackContext)

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => deleteItem(item.id)}>
                <FaTimes color="purple" />
            </button>
            <button className="edit" onClick={() => editFeedback(item)}>
                <FaEdit color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object,
}

export default FeedbackItem
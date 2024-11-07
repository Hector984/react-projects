import Card from "./shared/Card"
import {FaTimes} from 'react-icons/fa'
import PropTypes from "prop-types"

const FeedbackItem = ({item, handleDeleteItem}) => {

    const handleClick = () => {
        handleDeleteItem(item.id)
    }

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={handleClick}>
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object,
    handleDeleteItem: PropTypes.func
}

export default FeedbackItem
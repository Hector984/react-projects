import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types';

const FeedbackList = ({feedback, handleDeleteItem}) => {

    if(!feedback || feedback.length === 0) {
        return <h1>No feddback yet</h1>
    }

    return (
        <div className="feedback-list">
            {feedback.map(item => (
                <FeedbackItem key={item.id} item={item} handleDeleteItem={handleDeleteItem} />
            ))}
        </div>
    )
    
}

FeedbackList.propTypes = {
    feedback: PropTypes.array, 
    handleDeleteItem: PropTypes.func
}

export default FeedbackList
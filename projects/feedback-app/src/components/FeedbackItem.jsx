import Card from "./shared/Card"
import {FaTimes} from 'react-icons/fa'

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

export default FeedbackItem
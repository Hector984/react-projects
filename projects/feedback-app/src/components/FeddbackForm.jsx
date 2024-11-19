import Card from "./shared/Card"
import Button from './shared/Button'
import FeedbackRating from "./FeedbackRating"
import { useState } from "react"

const FeedbackForm = ({handleAddFeddback}) => {

    const [text, setText] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [validationMessage, setValidationMessage] = useState('')
    const [rating, setRating] = useState(1)

    const handleTextChange = (e) => {
        const feedback = e.target.value
        setText(feedback)
        if(feedback.length < 10) {
            setValidationMessage('The text must be at leat 10 characters')
        }else {
            setValidationMessage('')
            setbtnDisabled(false)
        }
    }

    const handleRating = (value) => {
        setRating(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddFeddback({
            rating,
            text
        })
        setText('')
        handleRating(1)
    }

    return (
        <Card reverse={false}>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service with us?</h2>
                <FeedbackRating select={handleRating}/>
                <div className="input-group">
                    <input type="text" placeholder="Write a review" 
                    onChange={handleTextChange}
                    value={text}
                    />
                    <Button type="submit" 
                    isDisabled={btnDisabled} 
                    version="primary"
                    >Send</Button>
                </div>
            </form>
            {validationMessage && <div>{validationMessage}</div>}
        </Card>
    )
}

export default FeedbackForm
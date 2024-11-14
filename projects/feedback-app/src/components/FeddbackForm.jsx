import Card from "./shared/Card"
import Button from './shared/Button'
import FeedbackRating from "./FeedbackRating"
import { useState } from "react"

const FeedbackForm = () => {

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

    return (
        <Card reverse={false}>
            <form>
                <h2>How would you rate our service with us?</h2>
                <FeedbackRating select={(rating) => console.log(rating)}/>
                <div className="input-group">
                    <input type="text" placeholder="Write a review" 
                    onChange={handleTextChange}
                    value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled} version="primary">Send</Button>
                </div>
            </form>
            {validationMessage && <div>{validationMessage}</div>}
        </Card>
    )
}

export default FeedbackForm
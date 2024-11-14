import { useState } from "react"

const FeedbackRating = ({select}) => {
    
    const [selected, setSelected] = useState(0)

    const handleChange = (e) => {
        setSelected(+e.target.value)
        console.log()
        setSelected(+e.target.value)
        select(selected)
    }
    
    return (
        <ul className='rating'>
        {Array.from({ length: 10 }, (_, i) => (
          <li key={`rating-${i + 1}`}>
            <input
              type='radio'
              id={`num${i + 1}`}
              name='rating'
              value={i + 1}
              onChange={handleChange}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>
    )
}

export default FeedbackRating
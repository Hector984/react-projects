
const FeedbackRating = ({ select, selected }) => {
    
    // const {feedbackEdit} = useContext(FeedbackContext)
    // const [selected, setSelected] = useState(null)

    // useEffect(() => {
    //     setSelected(feedbackEdit.item.rating)
    // }, [feedbackEdit])

    const handleChange = (e) => {
        // setSelected(+e.target.value)
        select(+e.target.value)
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
              checked={selected === i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
          </li>
        ))}
      </ul>
    )
}

export default FeedbackRating
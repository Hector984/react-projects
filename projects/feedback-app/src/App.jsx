import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeddbackForm'
import FeedbackData from './data/FeedbackData' 
import './App.css'

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const handleDeleteItem = (id) => {

    if (window.confirm("¿Deseas eliminar el registro?")) {
      const newFeedback = feedback.filter((f) => f.id !== id);
      setFeedback(newFeedback);
    }
    
  }

  const addFeddback = (feedbackForm) => {
    const newFeedback = feedback
    feedbackForm.id = newFeedback.length + 1
    newFeedback.push(feedbackForm)
    console.log(newFeedback)
    setFeedback(newFeedback)
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm addFeddback={addFeddback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDeleteItem={handleDeleteItem}/>
      </div>
    </>
  )
}

export default App

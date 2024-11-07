import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
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

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDeleteItem={handleDeleteItem}/>
      </div>
    </>
  )
}

export default App

import { useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeddbackForm'
import FeedbackData from './data/FeedbackData' 
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import './App.css'

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const handleDeleteItem = (id) => {

    if (window.confirm("¿Deseas eliminar el registro?")) {
      const newFeedback = feedback.filter((f) => f.id !== id);
      setFeedback(newFeedback);
    }
    
  }

  const addFeddback = (newFeedback) => {
    newFeedback.id = feedback.length + 1
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm handleAddFeddback={addFeddback}/>
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDeleteItem={handleDeleteItem}/>
                
              </>
            }>
              
            </Route>
            <Route path='/about' element={<AboutPage />}/>
          </Routes>

        </div>
        <AboutIconLink/>
      </Router>
    </FeedbackProvider>
  )
}

export default App

import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();
const baseURL = "http://localhost:5000"

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch(`${baseURL}/feedback`)

    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  const addFeddback = async (newFeedback) => {
    // newFeedback.id = feedback.length + 1;

    const response = await fetch(`${baseURL}/feedback`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newFeedback)
    })

    const status = await response.status

    if(status === 201) {
      await fetchFeedback()
    } else{
      alert('Something went wrong')
    }

  };

  const deleteItem = async (id) => {
    if (window.confirm("¿Deseas eliminar el registro?")) {
      const response = await fetch(`${baseURL}/feedback/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      })

      const status = response.status

      if(status === 200) {
        await fetchFeedback() 
      } else{
        alert('Something went wrong')
      }
      
    }
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
        item,
        edit: true
    })
  }

  const updateFeedback = async (id, updFeddback) => {
   
    // const updatedFeedback = [...feedback]
    const response = await fetch(`${baseURL}/feedback/${id}`, {
      method: 'PUT', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updFeddback)
    })

    console.log()
    
    if(response.status === 200) {
      await fetchFeedback()
    } else {
      alert('Something went wrong')
    }
    // const findFeedback = updatedFeedback.find(x => x.id === id)
    
    // findFeedback.rating = updFeddback.rating
    // findFeedback.text = updFeddback.text
    // setFeedback(updatedFeedback)
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeddback,
        editFeedback,
        feedbackEdit,
        deleteItem,
        updateFeedback,
        isLoading
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

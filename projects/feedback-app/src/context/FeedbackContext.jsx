import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const addFeddback = (newFeedback) => {
    newFeedback.id = feedback.length + 1;
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteItem = (id) => {
    if (window.confirm("¿Deseas eliminar el registro?")) {
      const newFeedback = feedback.filter((f) => f.id !== id);
      setFeedback(newFeedback);
    }
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
        item,
        edit: true
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeddback,
        editFeedback,
        feedbackEdit,
        deleteItem
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {

  const {feedback, isLoading} = useContext(FeedbackContext)

  if (!isLoading &&  (!feedback || feedback.length === 0)) {
    return <h1>No feddback yet</h1>;
  }

  return isLoading ? (<Spinner/>)
  : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default FeedbackList;

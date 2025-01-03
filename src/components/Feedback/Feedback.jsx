import css from "./Feedback.module.css";

const Feedback = ({ values, totalFeedback }) => {
  return (
    <>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {Math.round((values.good / totalFeedback) * 100)}%</p>
    </>
  );
};

export default Feedback;

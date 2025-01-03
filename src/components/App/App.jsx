import { useEffect, useState } from "react";
import "./App.css";
import Description from "../Description/Description.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import Notification from "../Notification/Notification.jsx";

const App = () => {
  const [values, setValues] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setValues({
        good: 0,
        neutral: 0,
        bad: 0,
      });
      return;
    }

    setValues((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = values.good + values.neutral + values.bad;
  return (
    <>
      <Description />
      <Options
        values={values}
        onClickFunction={updateFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback values={values} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;

import { useState } from 'react';

import './App.module.css';

import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

function App() {
  const defaultFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(defaultFeedback);
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
    String(Math.round((feedback.good / totalFeedback) * 100)) + '%';

  function updateFeedback(feedbackType) {
    if (feedbackType === 'reset') {
      setFeedback(defaultFeedback);
    } else {
      setFeedback(prevFeedback => ({
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      }));
    }
  }

  return (
    <>
      <Description />
      <Options buttonHandler={updateFeedback} totalData={totalFeedback} />
      <Feedback
        goodF={feedback.good}
        neutralF={feedback.neutral}
        badF={feedback.bad}
        totalData={totalFeedback}
        positiveData={positiveFeedback}
      />
      <Notification totalData={totalFeedback} />
    </>
  );
}

export default App;

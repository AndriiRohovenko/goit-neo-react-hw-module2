import { useState, useEffect } from 'react';

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

  function handleLSData() {
    try {
      const savedFeedback = localStorage.getItem('feedback');
      if (savedFeedback) {
        return JSON.parse(savedFeedback);
      } else {
        return defaultFeedback;
      }
    } catch (error) {
      console.error('Error retrieving feedback from localStorage:', error);
      return defaultFeedback;
    }
  }

  const [feedback, setFeedback] = useState(handleLSData);
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

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options buttonHandler={updateFeedback} totalData={totalFeedback} />
      {totalFeedback > 0 && (
        <Feedback
          goodF={feedback.good}
          neutralF={feedback.neutral}
          badF={feedback.bad}
          totalData={totalFeedback}
          positiveData={positiveFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
}

export default App;

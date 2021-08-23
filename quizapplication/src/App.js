import React, { useEffect } from 'react'
import './App.css';
import Header from './Component/Header';
import Quiz from './Component/Quiz';
import QuizProvider from './Context/QuizProvider';
import { context } from './Context/QuizProvider';

const App = () => {

  return (
    <QuizProvider>
      <Header />
      <Quiz />
    </QuizProvider>
  )
}

export default App;

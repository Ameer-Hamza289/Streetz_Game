import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const score = params.get('score');

  return (
    <div>
      <h1>Game Over</h1>
      <p>Your score: {score}</p>
    </div>
  );
};

export default Result;

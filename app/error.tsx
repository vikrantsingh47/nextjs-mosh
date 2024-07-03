'use client';
import React from 'react';

interface props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: props) => {
  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;

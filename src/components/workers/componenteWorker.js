"use client"

import React, { useState, useEffect } from 'react';

export default function ComponenteWorker(){
  const [result, setResult] = useState(null);

  useEffect(() => {
    const worker = new Worker('./worker_uno.js');
    worker.postMessage('some data');
    worker.onmessage = (event) => {
      setResult(event.data);
    };
    return () => worker.terminate();
  }, []);

  return (<div>{result}</div>);
};
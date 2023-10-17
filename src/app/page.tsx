"use client"
import { useEffect, useState } from 'react';

const wordList = [
  'H',
  'Hi',
  'Hi ',
  'Hi H',
  'Hi Ha',
  'Hi Hal',
  'Hi Halo',
];

export default function GreetingAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % wordList.length);
    }, 500); // Adjust the interval as needed (in milliseconds).

    return () => clearInterval(interval);
  }, []);

  return <div>{wordList[currentIndex]}</div>;
}


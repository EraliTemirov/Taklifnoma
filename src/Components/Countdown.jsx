import { useState, useEffect } from "react";

const Countdown = ({ date }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-09-28") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] >= 0) {
      timerComponents.push(
        <div key={interval} className="flex flex-col items-center">
          <span className="text-3xl sm:text-4xl font-semibold">
            {timeLeft[interval]}
          </span>
          <span className="text-xs sm:text-sm uppercase">{interval}</span>
        </div>
      );
    }
  });

  return (
    <div className="countdown text-center py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
        2024-YIL 28-SENTYABR
      </h2>
      <p className="text-md sm:text-lg md:text-xl text-gray-600 mb-2">
        NIKOH OQSHOMIGACHA QOLDI:
      </p>
      <div className="flex justify-center space-x-4 text-pink-600">
        {timerComponents.length ? timerComponents : <span>Times up!</span>}
      </div>
    </div>
  );
};

export default Countdown;

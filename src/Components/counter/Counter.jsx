import { useState, useEffect } from "react";
function Counter() {
  const calculateTimeLeft = () => {
    const countDownDate = new Date("Aug 19, 2026 23:59:59").getTime();
    const now = new Date().getTime();
    const difference = countDownDate - now;

    if (difference < 0) {
      return null;
    }

    const timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!timeLeft) {
      alert("Happy Birthday Omar");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  if (!timeLeft) return <div>Time's up!</div>;

  return (
    <div class="d-flex align-items-center flex-column text-align-center overflow-hidden justify-content-center">
      <div class="countdown">
        <div class="time">
          <h2 id="days">{timeLeft.days}</h2>
          <small>days</small>
        </div>

        <div class="time">
          <h2 id="hours">{timeLeft.hours}</h2>
          <small>hours</small>
        </div>

        <div class="time">
          <h2 id="minutes">{timeLeft.min}</h2>
          <small>minutes</small>
        </div>

        <div class="time">
          <h2 id="seconds">{timeLeft.second}</h2>
          <small>seconds</small>
        </div>
      </div>
    </div>
  );
}

export default Counter;

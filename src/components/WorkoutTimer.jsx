import React, { useEffect, useState } from 'react';

const WorkoutTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isRunning) {
      timeoutId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [isRunning]);

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const sec = seconds % 60;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return (
      <div className="flex pt-4 items-center text-3xl justify-center">
        <h2>{hours.toString().padStart(2, '0')}</h2> :
        <h2>{minutes.toString().padStart(2, '0')}</h2> :
        <h2>{sec.toString().padStart(2, '0')}</h2>
      </div>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="w-[500px] border border-gray-100 p-5">
        <h2 className="text-3xl font-semibold text-center">Workout Timer</h2>
        {formatTime(time)}
        <div className="flex items-center justify-center pt-4 gap-x-4">
          <button
            onClick={() => setIsRunning(true)}
            className="border border-gray-200 px-5 py-2"
          >
            ▶️ Start
          </button>
          <button
            onClick={() => setIsRunning(false)}
            className="border border-gray-200 px-5 py-2"
          >
            ⏸️ Pause
          </button>
          <button
            onClick={handleReset}
            className="border border-gray-200 px-5 py-2"
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTimer;

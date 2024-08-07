# Workout Timer Component

The WorkoutTimer component is a React-based timer designed for fitness apps to track workout durations. 

It provides the following functionalities:

- **Start the Timer**: Initiates the timer when the user starts the workout.

- **Pause the Timer**: Pauses the timer when the user takes a break.

- **Reset the Timer**: Resets the timer to zero, allowing the user to start a new workout session.

### Component Details:

- State Management:

  - `time`: Tracks the elapsed time in seconds.

  - `isRunning`: Boolean flag to control the timer state (running or paused).

- Effect Hook:

  - Utilizes `useEffect` to start an interval when `isRunning` is `true` and clears the interval when `isRunning` is `false` or the component unmounts.

- Functions:

  - `handleReset`: Resets the `time` to `0` and stops the timer.

  - `formatTime`: Converts the elapsed time in seconds to a formatted `HH:MM:SS` string.

- UI Elements:

  - Displays the formatted time.

  - Provides buttons to start, pause, and reset the timer.
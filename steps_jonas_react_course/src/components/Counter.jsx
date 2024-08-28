import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div>{count}</div>
      <p>
        {count === 0
          ? "Today is"
          : count > 0
          ? `${count} ${Math.abs(count) === 1 ? "day" : "days"} from today is`
          : `${Math.abs(count)} ${
              Math.abs(count) === 1 ? "day" : "days"
            } ago was`}{" "}
        {date.toDateString()}
      </p>
    </div>
  );
}

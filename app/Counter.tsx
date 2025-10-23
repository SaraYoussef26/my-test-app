"use client";
import { useState } from "react";

interface CounterProps {
  initialCount?: number;
  initialStep?: number;
}

export default function Counter({ initialCount = 0, initialStep = 1 }: CounterProps) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);

  return (
    <div style={{ margin: "1rem" }}>
      <p aria-live="polite">Current Sales Count: {count}</p>

      <label>
        Step:{" "}
        <input
          type="number"
          value={step}
          min={1}
          onChange={(e) => setStep(Number(e.target.value) || 1)}
        />
      </label>

      <div>
        <button onClick={() => setCount(count + step)}>+{step}</button>
        <button
          onClick={() => setCount(count - step)}
          disabled={count - step < 0}
        >
          -{step}
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

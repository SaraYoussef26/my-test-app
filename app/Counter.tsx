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
    <div style={{ margin: "1rem", padding: "1rem", border: "1px solid #ccc" }}>
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

      <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
        <button onDoubleClick={() => setCount(count + step)}>+{step}</button>
        <button onDoubleClick={() => setCount(count - step)} disabled={count - step < 0}>
          -{step}
        </button>
        <button onDoubleClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function CalculeBMI() {
  const [bmi, setBmi] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const height = parseFloat(e.target.height.value);
    const weight = Number(e.target.weight.value);
    const bmi = weight / (height / 100) ** 2;
    setBmi(bmi);
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* height */}
        <div>
          <label htmlFor="height">Height: </label>
          <input type="number" name="height" id="height" required min={1} /> CM
        </div>
        {/* weight */}
        <div>
          <label htmlFor="weight">Weight: </label>
          <input type="number" name="weight" id="weight" required min={1} /> KG
        </div>
        <button type="submit">Calcule</button>
      </form>
      <div>
        {bmi}
        <br />
        <br />
        {bmi < 19 ? "r9i9" : bmi < 25 ? "normal" : "fat"}
      </div>
    </div>
  );
}

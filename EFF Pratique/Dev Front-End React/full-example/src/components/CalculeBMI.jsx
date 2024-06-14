import { useState } from "react";

export default function CalculeBMI() {
  const [bmi, setBmi] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const height = parseFloat(e.target.height.value);
    const weight = parseFloat(e.target.weight.value);
    console.log(height, weight);
    const bmi = weight / (height / 100) ** 2;
    setBmi(Math.round(bmi));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* height */}
        <div>
          <label htmlFor="height">Height: </label>
          <input type="number" min={1} name="height" required />
          Cm
        </div>
        {/* weight */}
        <div>
          <label htmlFor="weight">Weight: </label>
          <input type="number" min={1} name="weight" required />
          Kg
        </div>
        <button type="submit">Calcule</button>
      </form>
      {bmi && (
        <span 
        
        style={
            bmi < 19 ? {color:"red"}:bmi < 26 ? {color:"green"}: {color:"orange"} 
        }
        >{bmi}</span>
      )}
    </div>
  );
}

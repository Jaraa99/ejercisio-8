import React, { useState } from 'react';

const planets: { [key: string]: number } = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 1.0,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132
}

function age(planet: string, seconds: number): number {
  let age: number;
  let earthYearInSeconds = 31557600;
  age = seconds / (earthYearInSeconds * planets[planet]);
  return Number(age.toFixed(2));
}

const AgeCalculator: React.FC = () => {
  const [planet, setPlanet] = useState<string>('earth');
  const [seconds, setSeconds] = useState<number>(0);
  const [ageResult, setAgeResult] = useState<number | null>(null);

  const calculateAge = () => {
    setAgeResult(age(planet, seconds));
  }

  return (
    <div>
      <h2>Age Calculator</h2>
      <div>
        <label htmlFor="planet">Select Planet:</label>
        <select id="planet" value={planet} onChange={(e) => setPlanet(e.target.value)}>
          {Object.keys(planets).map(planet => (
            <option key={planet} value={planet}>{planet}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="seconds">Enter seconds lived:</label>
        <input type="number" id="seconds" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value))} />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {ageResult !== null && <p>Your age on {planet} is {ageResult} years.</p>}
    </div>
  );
}

export default AgeCalculator;

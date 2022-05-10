/** @jsxImportSource @emotion/react */
import randomcolor from 'randomcolor';
import { useState } from 'react';

export default function RandomColor() {
  const [color, setColor] = useState('white');

  return (
    <div
      className="form1"
      style={{
        fontfamily: 'Arial',
        backgroundColor: color,
        boxSizing: 'border-box',
        height: 250,
        width: 400,
        padding: '2px 20px',
        borderRadius: '30px',
        transition: 'all 0.5s ease-in-out',
      }}
    >
      <h2> Generate a random color</h2>
      <button
        onClick={() => {
          setColor(randomcolor());
        }}
      >
        Generate
      </button>
      <br />
      <br />
      <div
        style={{ backgroundColor: color, transition: 'all 0.5s ease-in-out' }}
      >
        Generated Color: {color !== 'white' && color}
      </div>
    </div>
  );
}

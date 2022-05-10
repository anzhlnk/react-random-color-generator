/** @jsxImportSource @emotion/react */
import randomcolor from 'randomcolor';
import { useState } from 'react';

export default function RandomColor() {
  const [color, setColor] = useState('white');
  const [defaultText, setDefaultText] = useState('');

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
      }}
    >
      <h2> Generate a random color</h2>
      <button
        onClick={() => {
          setColor(randomcolor());
          setDefaultText('Generated Color:');
        }}
      >
        Generate!
      </button>
      <br />
      <br />
      <div>
        {' '}
        {defaultText} {color !== 'white' && color}
      </div>
    </div>
  );
}

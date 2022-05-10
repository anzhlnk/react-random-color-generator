/** @jsxImportSource @emotion/react */

import randomcolor from 'randomcolor';
import { useState } from 'react';

export default function UserColor() {
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [userColor, setUserColor] = useState('white');
  const [defaultText, setDefaultText] = useState('');
  function handleColorChange() {
    return randomcolor({ hue: hue, luminosity: luminosity });
  }
  return (
    <div
      className="form2"
      style={{
        backgroundColor: userColor,
        boxSizing: 'border-box',
        height: 250,
        width: 400,
        padding: '2px 20px',
        borderRadius: '30px',
        transition: 'all 0.5s ease-in-out',
      }}
    >
      <h2>Choose your color</h2>
      <label id="hue">
        {' '}
        Hue: &emsp; &emsp; &ensp;{' '}
        <input
          value={hue}
          onChange={(event) => {
            setHue(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <br />
      <label id="luminosity">
        {' '}
        Luminosity: &nbsp;
        <input
          value={luminosity}
          onChange={(event) => {
            setLuminosity(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <br />
      <button
        onClick={() => {
          setUserColor(handleColorChange());
          setDefaultText('Generated Color:');
        }}
      >
        Show me the color
      </button>
      <br />
      <br />
      <div>
        {defaultText} {userColor !== 'white' && userColor}
      </div>
    </div>
  );
}

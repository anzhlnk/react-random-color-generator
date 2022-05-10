import './App.css';
import randomcolor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [userColor, setUserColor] = useState('');
  const [defaultText, setDefaultText] = useState('');
  function handleColorChange() {
    return randomcolor({ hue: hue, luminosity: luminosity });
  }
  return (
    // random color
    <div className="App">
      <div className="form1">
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
        <div style={{ backgroundColor: color }}>
          {' '}
          {defaultText} {color}
        </div>
      </div>

      <br />

      <div className="form2">
        <h2>Choose your color</h2>
        <div>Hue</div>
        <input
          value={hue}
          onChange={(event) => {
            setHue(event.currentTarget.value);
          }}
        />
        <br />
        <br />
        <div>Luminosity</div>
        <input
          value={luminosity}
          onChange={(event) => {
            setLuminosity(event.currentTarget.value);
          }}
        />
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

        <div style={{ backgroundColor: userColor }}>
          {defaultText} {userColor}
        </div>
      </div>
    </div>
  );
}

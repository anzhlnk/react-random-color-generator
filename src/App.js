/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import randomcolor from 'randomcolor';
import RandomColor from './Random';
import UserColor from './UserColor';

const bck = () => css`
  background-color: ${randomcolor({
    format: 'rgba',
    alpha: 0.4,
  })};,
  size: 600px;
  height: 645px;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content:center;
`;

export default function App() {
  return (
    <body css={bck}>
      <div className="App">
        <RandomColor />
        <br />
        <br />
        <UserColor />
      </div>
    </body>
  );
}

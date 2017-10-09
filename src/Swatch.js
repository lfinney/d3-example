import React from 'react';
import D3Blackbox from "./D3Blackbox";

const Swatch = ({ color, width, x }) => (
  <rect width={width}
        height="20"
        x={x}
        y="0"
        style={{ fill: color}} />
);

export default Swatch;

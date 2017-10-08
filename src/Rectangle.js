import React from 'react';
import * as d3 from "d3";

const Rectangle = () => {
  const scale = d3.scaleLinear().domain([0, 10]).range([0, 200])

  return (
    <rect widht="100" height="200" x="50" y="20"/>
  )
};

export default Rectangle;

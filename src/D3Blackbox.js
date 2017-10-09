import React, { Component } from 'react';

function D3Blackbox(D3Render) {
  return class Blackbox extends Component {
    componentDidMount() { D3Render.call(this) }
    componentDidUpdate() { D3Render.call(this) }

    render() {
      const { x, y } = this.props;
      return <g transform={`translate(${x}), ${y}`} ref="anchor" />
    }
  }
};

export default D3Blackbox;

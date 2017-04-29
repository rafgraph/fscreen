import React from 'react';
import PropTypes from 'prop-types';

export default function Bool(props) {
  const color = props.children === true ? 'rgb(0, 168, 0)' : 'red';
  return <code style={{ color, fontFamily: 'menlo, monospace' }}>{props.children.toString()}</code>;
}

Bool.propTypes = {
  children: PropTypes.bool.isRequired,
};

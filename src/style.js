import React from 'react';
import PropTypes from 'prop-types';

export default {
  root: {
    backgroundColor: '#F0F0F0',
    minHeight: '100%',
    minWidth: '100%',
    fontFamily: 'helvetica, sans-serif',
    fontWeight: '300',
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    normal: {
      borderBottom: '1px dotted rgb(0, 168, 0)',
      color: 'rgb(128, 128, 128)',
    },
    hover: {
      borderBottom: '1px solid rgb(0, 168, 0)',
      color: 'black',
    },
    active: 'hover',
    touchActive: {
      borderBottom: '1px dashed rgb(0, 168, 0)',
      color: 'black',
    },
    focusFromTab: {
      outline: '2px solid rgb(0, 152, 0)',
      outlineOffset: '2px',
    },
    touchActiveTapOnly: true,
    target: '_blank',
    rel: 'noopener noreferrer',
  },
};

export function Bool(props) {
  const color = props.children === true ? 'rgb(0, 120, 0)' : 'red';
  return <span style={{ color }}>{props.children.toString()}</span>;
}
Bool.propTypes = {
  children: PropTypes.bool.isRequired,
};

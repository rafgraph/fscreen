import React from 'react';
import PropTypes from 'prop-types';
import Interactive from 'react-interactive';

export default function FullscreenButton(props) {
  return (
    <Interactive
      as="div"
      onClick={props.onClick}
      style={{
        width: '300px',
        height: '40px',
        lineHeight: '38px',
        fontSize: '18px',
        textAlign: 'center',
      }}
      normal={{
        color: 'black',
        border: '1px solid black',
      }}
      hover={{
        color: 'rgb(0, 168, 0)',
        border: '1px solid rgb(0, 168, 0)',
      }}
      active="hover"
      focusFromTab={{
        outline: '2px solid rgb(0, 168, 0)',
        outlineOffset: '1px',
      }}
      forceState={{ iState: 'normal' }}
    >
      {props.children}
    </Interactive>
  );
}

FullscreenButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

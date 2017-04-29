import React from 'react';
import PropTypes from 'prop-types';
import Interactive from 'react-interactive';

const enabledStyle = {
  normal: {
    color: 'black',
    border: '1px solid black',
  },
  hover: {
    color: 'rgb(0, 168, 0)',
    border: '1px solid rgb(0, 168, 0)',
  },
  active: 'hover',
  focusFromTab: {
    outline: '2px solid rgb(0, 168, 0)',
    outlineOffset: '1px',
  },
  forceState: { iState: 'normal' },
};

const disabledStyle = {
  normal: {
    color: 'rgb(128, 128, 128)',
    border: '1px solid rgb(128, 128, 128)',
  },
  hover: 'normal',
  active: 'normal',
};

export default function FullscreenButton(props) {
  const style = props.disabled ? disabledStyle : enabledStyle;
  return (
    <Interactive
      as="div"
      onClick={!props.disabled && props.onClick}
      style={{
        width: '320px',
        height: '40px',
        lineHeight: '38px',
        fontSize: '18px',
        textAlign: 'center',
      }}
      {...style}
    >
      {props.children}
    </Interactive>
  );
}

FullscreenButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

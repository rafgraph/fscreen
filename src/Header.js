import React from 'react';
import PropTypes from 'prop-types';
import Interactive from 'react-interactive';
import linkStyle from './linkStyle';

export default function Header(props) {
  return (
    <div style={{ marginBottom: '5px' }}>
      <div style={{ fontSize: '24px', marginBottom: '2px' }}>{props.title}</div>
      <Interactive
        as="a"
        href={props.repo}
        style={{ fontSize: '14px' }}
        {...linkStyle}
      >
        {props.repo}
      </Interactive>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};

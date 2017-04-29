import React from 'react';
import PropTypes from 'prop-types';
import Interactive from 'react-interactive';
import s from './style';

export default function Header(props) {
  return (
    <div>
      <div style={{ fontSize: '24px' }}>{props.title}</div>
      <div>
        <Interactive
          as="a"
          href={props.repo}
          style={{ fontSize: '14px' }}
          {...s.link}
        >
          {props.repo}
        </Interactive>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};

import React from 'react';
import Interactive from 'react-interactive';
import s from './style';

const childStyle = {
  onParentNormal: s.link.normal,
  onParentHover: s.link.hover,
  onParentActive: s.link.active,
  onParentTouchActive: s.link.touchActive,
  onParentFocusFromTab: s.link.focusFromTab,
};

export default function CreditLine() {
  return (
    <div>
      <Interactive
        as="a"
        href="http://www.rafaelpedicini.com"
        style={{
          color: s.link.normal.color,
          fontSize: '14px',
        }}
        focusFromTab={{}}
        touchActive={{}}
        touchActiveTapOnly
        interactiveChild
        target="_blank"
        rel="noopener noreferrer"
      >Code and concept by <span {...childStyle}>Rafael Pedicini</span></Interactive>
    </div>
  );
}

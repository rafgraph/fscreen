import React from 'react';
import Interactive from 'react-interactive';
import linkStyle from './linkStyle';

const childStyle = {
  onParentNormal: linkStyle.normal,
  onParentHover: linkStyle.hover,
  onParentActive: linkStyle.active,
  onParentTouchActive: linkStyle.touchActive,
  onParentFocusFromTab: linkStyle.focusFromTab,
};

export default function CreditLine() {
  return (
    <div style={{ marginTop: '22px' }}>
      <Interactive
        as="a"
        href="http://www.rafaelpedicini.com"
        style={{
          color: linkStyle.normal.color,
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

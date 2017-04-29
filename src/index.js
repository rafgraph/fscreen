import React from 'react';
import { render } from 'react-dom';
import Interactive from 'react-interactive';
import fscreen from 'fscreen';
import Header from './Header';
import FullscreenButton from './FullscreenButton';
import CreditLine from './CreditLine';
import Bool from './Bool';
import linkStyle from './linkStyle';

class App extends React.PureComponent {
  state = {
    fullscreenEnabled: fscreen.fullscreenEnabled,
    inFullscreen: false,
  }

  componentDidMount() {
    if (this.state.fullscreenEnabled) {
      fscreen.addEventListener('fullscreenchange', this.handleFsChange, false);
      fscreen.addEventListener('fullscreenerror', this.handleFsError, false);
      // fscreen.onfullscreenchange = this.handleFsChange;
    }
  }

  componentWillUnmount() {
    fscreen.removeEventListener('fullscreenchange', this.handleFsChange);
    fscreen.removeEventListener('fullscreenerror', this.handleFsError);
  }

  handleRef = (element) => {
    this.appElement = element;
  }

  handleFsChange = (e) => {
    let change = '';
    if (fscreen.fullscreenElement !== null) {
      change = 'Entered fullscreen mode';
      this.setState({ inFullscreen: true });
    } else {
      change = 'Exited fullscreen mode';
      this.setState({ inFullscreen: false });
    }
    console.log(change, e);
  }

  handleFsError = (e) => {
    console.log('Fullscreen Error', e);
  }

  toggleFullscreen = () => {
    if (this.state.inFullscreen) {
      fscreen.exitFullscreen();
    } else {
      fscreen.requestFullscreen(this.appElement);
    }
  }

  render() {
    const fscreenButtonText = (
      (!this.state.fullscreenEnabled && 'Fullscreen Is Not Available') ||
      (this.state.inFullscreen && 'Exit Fullscreen Mode') ||
      'Enter Fullscreen Mode'
    );
    return (
      <div
        ref={this.handleRef}
        style={{
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
        }}
      >
        <div style={{ marginBottom: '6vh' }}>
          <Header
            title="Fscreen"
            repo="https://github.com/rafrex/fscreen"
          />

          <div style={{ color: 'rgb(128, 128, 128)', fontSize: '14px', marginBottom: '12px' }}>
            Vendor agnostic access to the{' '}
            <Interactive
              as="a"
              href="https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API"
              {...linkStyle}
            >Fullscreen API</Interactive>
          </div>

          <div style={{ marginBottom: '4px' }}>
            Fullscreen enabled:{' '}
            <Bool>{this.state.fullscreenEnabled}</Bool>
          </div>
          <div style={{ marginBottom: '20px' }}>
            Currently in fullscreen mode:{' '}
            <Bool>{this.state.inFullscreen}</Bool>
          </div>

          <FullscreenButton
            onClick={this.toggleFullscreen}
            disabled={!this.state.fullscreenEnabled}
          >{fscreenButtonText}</FullscreenButton>

          <CreditLine />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

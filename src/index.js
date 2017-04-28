import React from 'react';
import { render } from 'react-dom';
import Interactive from 'react-interactive';
import fscreen from 'fscreen';

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
      console.log(fscreen.exitFullscreen);
      fscreen.exitFullscreen();
    } else {
      fscreen.requestFullscreen(this.appElement);
    }
  }

  render() {
    const fscreenButtonText = (
      (!this.state.fullscreenEnabled && 'Fullscreen Is Not Available') ||
      (this.state.inFullscreen && 'Exit Fullscreen') ||
      'Enter Fullscreen'
    );
    return (
      <div ref={this.handleRef}>
        <div>Fscreen example</div>
        <div>Fullscreen enabled: {this.state.fullscreenEnabled.toString()}</div>
        <div>Currently in fullscreen mode: {this.state.inFullscreen.toString()}</div>
        <Interactive
          as="div"
          onClick={this.state.fullscreenEnabled && this.toggleFullscreen}
        >
          {fscreenButtonText}
        </Interactive>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

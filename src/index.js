import React from 'react';
import { render } from 'react-dom';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <div>Fscreen example</div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

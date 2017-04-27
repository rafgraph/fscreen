import React from 'react';
import { render } from 'react-dom';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <div>Hello world!</div>
        <div><a href="https://github.com/rafrex/react-dev-opa">react-dev-opa</a></div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

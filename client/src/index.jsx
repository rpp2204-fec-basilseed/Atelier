import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Overview from './component/Overview.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <Overview />
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);

// ReactDOM.render(<Index />, document.getElementById('root'));
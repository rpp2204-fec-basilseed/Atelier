import React from 'react';
import * as ReactDOM from 'react-dom/client';
import QandA from './components/Q&A.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <QandA />
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);

// ReactDOM.render(<Index />, document.getElementById('root'));
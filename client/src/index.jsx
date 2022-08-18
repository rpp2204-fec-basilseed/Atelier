import React from 'react';
import * as ReactDOM from 'react-dom/client';
import QandA from './components/QandA.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProduct: '',
    }
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
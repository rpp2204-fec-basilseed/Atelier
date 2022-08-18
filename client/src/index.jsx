import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Reviews from './component/Reviews.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <Reviews />
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);

// ReactDOM.render(<Index />, document.getElementById('root'));
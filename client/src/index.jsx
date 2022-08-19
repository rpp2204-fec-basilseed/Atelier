import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Overview from './component/Overview.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curr_product_id: 71697
    }
  }

  render() {
    return (
      <Overview curr_product_id={this.state.curr_product_id} />
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);

// ReactDOM.render(<Index />, document.getElementById('root'));
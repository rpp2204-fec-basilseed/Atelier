import React from 'react';
import * as ReactDOM from 'react-dom/client';
import QandA from './components/QandA.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curr_product_id: 71701
    }
  }

  render() {
    return (
      <QandA curr_product_id={ this.state.curr_product_id }/>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);

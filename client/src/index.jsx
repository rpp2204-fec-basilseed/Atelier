import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Overview from './components/Overview.jsx';
import QandA from './components/QandA.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curr_product_id: 71697,
      curr_product_name: 'Camo Onesie',
    }
  }

  render() {
    return (
      <QandA curr_product_id={ this.state.curr_product_id } curr_product_name={ this.state.curr_product_name }/>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);

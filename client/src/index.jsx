import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Reviews from './component/Reviews.jsx';
import Axios from 'axios';

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curr_product_id: 71697,
      curr_product_reviews: [],
      curr_product_meta: []

    }
  }

  componentDidMount(){
    Axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?product_id=' + this.state.curr_product_id + '&count=300',
      headers: {
        'Authorization': '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'
      }
    })
    .then((reviewData) => {
      this.setState({curr_product_reviews: reviewData.data.results})
    })
    .then(() => {
      Axios({
        method: 'get',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta/?product_id=' + this.state.curr_product_id,
        headers: {
          'Authorization': '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'
        }
      })
      .then((metaData) => {
        this.setState({curr_product_meta: metaData.data})
      })
    })
    .catch((error) => {
      throw error;
    })
  }

  render() {
    return (
      <>
      <Reviews currReviews={this.state.curr_product_reviews} currProduct={this.state.curr_product_id} metaData={this.state.curr_product_meta}/>
      {/* <Overview curr_product_id={this.state.curr_product_id} /> */}
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);

// ReactDOM.render(<Index />, document.getElementById('root'));
import React from 'react';
const axios = require('axios');

function clickWrapper (WrappedComponent) {
  class ClickWrapper extends React.Component {
    state = {};

    handleSearch = (event) => {
      const element = event.target.id;
      const widget = WrappedComponent.name;

      var data = JSON.stringify({
        "element": element,
        "widget": widget,
        "time": new Date()
      });

      var config = {
        method: 'post',
        url: '/interactions',
        headers: {
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });
    };

    render() {
      return (
        <>
          <div onClick={this.handleSearch}>
            <WrappedComponent {...this.props} {...this.state} />
          </div>
        </>
      );
    }
  };
  return ClickWrapper;
};

export default clickWrapper;
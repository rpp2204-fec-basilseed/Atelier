import React from 'react';

function clickWrapper (WrappedComponent) {
  class ClickWrapper extends React.Component {
    state = {};

    handleSearch = (event) => {
      console.log('CLICK at ' + event.target.innerText);
    };

    render() {
      return (
        <>
          <div onClick={this.handleSearch}>
            <WrappedComponent />
          </div>
        </>
      );
    }
  };
  return ClickWrapper;
};

export default clickWrapper;
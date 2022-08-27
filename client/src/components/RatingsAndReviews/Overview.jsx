import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="overview-container">
        Overview
        <div>
          Primary photo
        </div>
        <div>
          Description
        </div>
        <div>
          Style selection
        </div>
        <div>
          Cart/Favorite
        </div>
        <div>
          Product info
        </div>
      </div>
    )
  }

}

export default Overview;
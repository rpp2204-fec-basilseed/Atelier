import React from 'react';

class ComparisonModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comparison: []
    }
    this.createFeaturesList = this.createFeaturesList.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }
  componentDidMount () {
    this.createFeaturesList();
  }

  createFeaturesList() {
    const currProdFeatures = this.props.currentFeatures;
    const currArray = [];
    const compProdFeatures = this.props.comparisonFeatures;
    const compList = [];
    currProdFeatures.forEach((item) => {
      let val = item.value;
      if (val) {
        currArray.push(val);
        compList.push({curr: '✔', compItem: val, comp: ''});
      }
    })
    compProdFeatures.forEach((item) => {
      let val = item.value;
      let index = currArray.indexOf(val);
      if(index > -1) {
        compList[index].comp = '✔';
      } else if (val) {
        compList.push({curr: '', compItem: val, comp: '✔'});
      }
    })
    this.setState({comparison: compList})
  }

  renderRows () {
    if (this.state.comparison.length > 0) {
      return this.state.comparison.map((i) => {
        return (
          <tr key={i.compItem}>
            <td className="left">{i.curr}</td>
            <td className="center">{i.compItem}</td>
            <td className="right">{i.comp}</td>
          </tr>
        )
      })
    }
  }

  render () {
    return (
      <div className="modal-backdrop" onClick={this.props.closeModal}>
        <div className="comparison-container">
          <div className="comparison-title">
            <h3 className="title-text">COMPARING</h3>
          </div>
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="title-left">{this.props.currentProduct}</th>
                <th></th>
                <th className="title-right">{this.props.comparisonProduct}</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default ComparisonModal;
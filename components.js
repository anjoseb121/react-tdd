import React, { Component } from 'react';

export class BeerListContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      beers: []
    }

    this.addItem = this.addItem.bind(this);
  }

  render() {
    return (
      <div>
        <InputArea onSubmit={this.addItem} />
        <BeerList />
      </div>
    );
  }

  /**
   * Add one item to the beers list
   * @param {string} name the item name
   */
  addItem(name) {
    this.setState({
      beers: [].concat(this.state.beers).concat([name])
    });
  }
}

export class InputArea extends Component {
  

  render() {
    return (
      <div>
        <input />
        <button>Add</button>
      </div>
    )
  }
}

InputArea.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

export class BeerList extends Component {
  render() {
    return <ul />
  }
}
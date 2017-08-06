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
        <BeerList items={this.state.beers} />
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
  
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.setText = this.setText.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  setText(event) {
    this.setState({text: event.target.value})
  }

  handleEnter(event) {
    if (event.keyCode == 13 || event.which == 13 || event.key == 13) {
      this.props.onSubmit(this.state.text)
      this.setState({text: ''})
    } else {
      console.log('is another key');
    }
  }

  handleClick() {
    this.props.onSubmit(this.state.text);
    this.setState({text: ''});
  }

  render() {
    return (
      <div>
        <input onKeyDown={this.handleEnter} value={this.state.text} onChange={this.setText} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}

InputArea.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

export class BeerList extends Component {

  constructor(props) {
    super(props);

  }
  render() {
    return this.props.items ? (
      <ul>
        { 
          this.props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    ) : null;
  }
}
BeerList.PropTypes = {
  items: React.PropTypes.array.isRequired
};
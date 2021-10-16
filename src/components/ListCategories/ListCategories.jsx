/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import '../../assets/reset.css';
import './style.css';

class ListCategories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this._newCategories = this._newCategories.bind(this);
  }

  componentDidMount() {
    this.props.categories.subscribe(this._newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this._newCategories);
  }

  _newCategories(categories) {
    this.setState({ ...this.state, categories });
  }

  _handleEventInput(e) {
    if (e.key === 'Enter') {
      const valueCategory = e.target.value;
      this.props.createCategory(valueCategory);
    }
  }

  render() {
    return (
      <div className="list-categories">
        <ul className="list-categories_list">
          {this.props.categories.categories.map((category, index) => (
            <li className="list-categories_item" key={index}>
              {category}
            </li>
          ))}
        </ul>
        <input
          type="text"
          className="list-categories_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventInput.bind(this)}
        />
      </div>
    );
  }
}

export default ListCategories;

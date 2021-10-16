/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import '../../assets/reset.css';
import './style.css';

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.title = '';
    this.note = '';
    this.category = 'Sem categoria';
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

  _handleChangeTitle(e) {
    e.stopPropagation();
    this.title = e.target.value;
  }

  _handleChangeNote(e) {
    e.stopPropagation();
    this.note = e.target.value;
  }

  _handleChangeCategory(e) {
    e.stopPropagation();
    this.category = e.target.value;
  }

  _createNote(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.createNote(this.title, this.note, this.category);
  }

  render() {
    return (
      <form
        className="form-register"
        onSubmit={this._createNote.bind(this)}
      >
        <select
          className="form-register_input"
          onChange={this._handleChangeCategory.bind(this)}
        >
          <option className="list-categories_item">Sem categoria</option>
          {this.state.categories.map((category, index) => (
            <option className="list-categories_item" key={index}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-register_input"
          onChange={this._handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-register_input"
          onChange={this._handleChangeNote.bind(this)}
        />
        <button className="form-register_input form-register_submit" type="submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormRegister;

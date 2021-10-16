import React, { Component } from 'react';
import './style.css';
import { ReactComponent as DeleteSVG } from '../../assets/icons/delete.svg';

class CardNote extends Component {
  _delete() {
    this.props.deleteNote(this.props.indice);
  }

  render() {
    return (
      <section className="card-note">
        <header className="card-note_header">
          <h3 className="card-note_title">{this.props.title}</h3>
          <h4 className="">{this.props.category}</h4>
          <DeleteSVG onClick={this._delete.bind(this)} />
        </header>
        <p className="card-note_text">{this.props.note}</p>
      </section>
    );
  }
}

export default CardNote;

/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import CardNote from '../CardNote';
import '../../assets/reset.css';
import './style.css';

class ListNotes extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
    this._newNotes = this._newNotes.bind(this);
  }

  componentDidMount() {
    this.props.notes.subscribe(this._newNotes);
  }

  componentWillUnmount() {
    this.props.notes.unsubscribe(this._newNotes);
  }

  _newNotes(notes) {
    this.setState({ ...this.state, notes });
  }

  render() {
    return (
      <ul className="list-notes">
        {this.state.notes.map((newNote, index) => (
          <li className="list-notes_item" key={index}>
            <CardNote
              indice={index}
              title={newNote.title}
              note={newNote.note}
              category={newNote.category}
              deleteNote={this.props.deleteNote}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default ListNotes;

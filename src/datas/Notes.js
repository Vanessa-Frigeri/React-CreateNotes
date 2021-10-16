import Note from './Note';

class Notes {
  constructor() {
    this.notes = [];
    this._subscribers = [];
  }

  createNote(title, note, category) {
    const newNote = new Note(title, note, category);
    this.notes.push(newNote);
    this.notify();
  }

  deleteNote(index) {
    this.notes.splice(index, 1);
    this.notify();
  }

  subscribe(func) {
    this._subscribers.push(func);
  }

  notify() {
    this._subscribers.forEach((func) => {
      func(this.notes);
    });
  }

  unsubscribe(func) {
    this._subscribers = this._subscribers.filter((f) => f !== func);
  }
}

export default Notes;

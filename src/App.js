import React, { Component } from 'react';
import './assets/reset.css';
import './assets/index.css';
import './assets/App.css';
import ListNotes from './components/ListNotes';
import FormRegister from './components/FormRegister';
import ListCategories from './components/ListCategories';
import Categories from './datas/Categories';
import Notes from './datas/Notes';

class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new Notes();
  }

  render() {
    return (
      <section className="container">
        <FormRegister
          createNote={this.notes.createNote.bind(this.notes)}
          categories={this.categories}
        />
        <main className="container-main">
          <ListCategories
            categories={this.categories}
            createCategory={this.categories.createCategory.bind(this.categories)}
          />
          <ListNotes notes={this.notes} deleteNote={this.notes.deleteNote.bind(this.notes)} />
        </main>

      </section>
    );
  }
}

export default App;

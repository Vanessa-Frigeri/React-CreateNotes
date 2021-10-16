class Categories {
  constructor() {
    this.categories = [];
    this._subscribers = [];
  }

  createCategory(title) {
    this.categories.push(title);
    this.notify();
  }

  subscribe(func) {
    this._subscribers.push(func);
  }

  notify() {
    this._subscribers.forEach((func) => {
      func(this.categories);
    });
  }

  unsubscribe(func) {
    this._subscribers = this._subscribers.filter((f) => f !== func);
  }
}

export default Categories;

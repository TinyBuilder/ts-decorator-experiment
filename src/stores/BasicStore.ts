import Store from '../interfaces/storeInterface';

export default class BasicStore implements Store {
  private data: Object;

  constructor() {
    this.data = {};
  }

  append(newData: Object) {
    Object.assign(this.data, newData);
    console.log(this.data);
  }

  dump() {
    return this.data;
  }
}

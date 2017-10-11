import Model from '../interfaces/modelInterface';
import Store from '../interfaces/storeInterface';
import useStore from '../decorators/useStore';

export default class BasicModel extends Model {
  readonly data: Object;

  @useStore
  static store: Store;

  constructor(data: Object) {
    super();
    this.data = data;
  }

  update(newData: Object) {
    return new BasicModel(Object.assign({}, this.data, newData));
  }

  save() {
    BasicModel.store.append(this.data);
    return this;
  };
}
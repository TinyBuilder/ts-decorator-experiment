import Store from '../interfaces/storeInterface';

export default abstract class Model {
  readonly data: Object;
  static store: Store;
  abstract update(newData: Object): Model;
  abstract save(): Model;
}

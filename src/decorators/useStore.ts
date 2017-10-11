import config from '../config/config';
import Model from '../interfaces/modelInterface';
import Store from '../interfaces/storeInterface';
import BasicStore from '../stores/BasicStore';

let store: Store;
switch (config.store) {
  case 'default':
    store = new BasicStore();
    break;
  default:
    store = new BasicStore();
    break;
}


export default function useStore(target: any, key: 'store') {
  target[key] = store;
}

export default interface Store {
  append(newData: Object): void;
  dump(): Object;
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config/config");
const BasicStore_1 = require("../stores/BasicStore");
let store;
switch (config_1.default.store) {
    case 'default':
        store = new BasicStore_1.default();
        break;
    default:
        store = new BasicStore_1.default();
        break;
}
function useStore(target, key) {
    target[key] = store;
}
exports.default = useStore;

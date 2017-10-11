"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicStore {
    constructor() {
        this.data = {};
    }
    append(newData) {
        Object.assign(this.data, newData);
        console.log(this.data);
    }
    dump() {
        return this.data;
    }
}
exports.default = BasicStore;

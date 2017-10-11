"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const modelInterface_1 = require("../interfaces/modelInterface");
const useStore_1 = require("../decorators/useStore");
class BasicModel extends modelInterface_1.default {
    constructor(data) {
        super();
        this.data = data;
    }
    update(newData) {
        return new BasicModel(Object.assign({}, this.data, newData));
    }
    save() {
        BasicModel.store.append(this.data);
        return this;
    }
    ;
}
__decorate([
    useStore_1.default,
    __metadata("design:type", Object)
], BasicModel, "store", void 0);
exports.default = BasicModel;

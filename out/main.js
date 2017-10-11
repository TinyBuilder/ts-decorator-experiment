"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BasicModel_1 = require("./models/BasicModel");
const basicModel = new BasicModel_1.default({ hello: 'world' });
basicModel.update({ how: 'are you' }).save();

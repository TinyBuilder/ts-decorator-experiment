import BasicModel from './models/BasicModel';

const basicModel = new BasicModel({ hello: 'world' });
basicModel.update({ how: 'are you' }).save();
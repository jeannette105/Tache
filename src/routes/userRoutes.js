const express = require('express');
const routerT = express.Router();

routerT.use(express.json());

const userCtrl = require('../controllers/userController');

routerT.get('/users', userCtrl.getAllUsers);
routerT.get('/stuff', userCtrl.getAllStuff);
routerT.post('/', userCtrl.createThing);
routerT.get('/:id', userCtrl.getOneThing);
routerT.put('/:id', userCtrl.modifyThing);
routerT.delete('/:id', userCtrl.deleteThing);

module.exports = routerT;

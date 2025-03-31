const express = require('express');
const router = express.Router();

router.use(express.json());

const taskCtrl = require('../controllers/taskContoller');


router.get('/users', taskCtrl.getAllUsers);
router.get('/stuff', taskCtrl.getAllStuff);
router.post('/', taskCtrl.createThing);
router.get('/:id', taskCtrl.getOneThing);
router.put('/:id', taskCtrl.modifyThing);
router.delete('/:id', taskCtrl.deleteThing);


module.exports = router;

const controller = require('../controllers/users');
const router = require('express').Router();

// CRUD routes /user
router.get('/', controller.getUsers); // users
router.get('/:userId', controller.getUser); // /users.userId
router.post('/', controller.createUser);
router.put(':userId', controller.updateUser);
router.delete('/:userId', controller.deleteUser);

module.exports = router;
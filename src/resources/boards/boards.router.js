const { Router } = require('express');
const boardsController = require('./boards.controller');
const router = Router();

router.route('/').get(boardsController.getAll).post(boardsController.create);

router
  .route('/:id')
  .get(boardsController.getOne)
  .put(boardsController.update)
  .delete(boardsController.remove);


  router
  .route('pins/:id')
  .get(boardsController.PinsOfBoards)

module.exports = router;

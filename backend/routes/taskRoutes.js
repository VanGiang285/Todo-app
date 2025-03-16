const express = require('express');
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

router.route('/')
  .get(getTasks)  // Không cần protect
  .post(createTask); // Không cần protect

router.route('/:id')
  .get(getTaskById)  // Không cần protect
  .put(updateTask)   // Không cần protect
  .delete(deleteTask); // Không cần protect

module.exports = router;
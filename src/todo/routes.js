const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// Defining Todo Routes
router.get("/", controller.getTodos);
router.post("/", controller.addTodo);
router.get("/:id", controller.getTodoById);
router.put("/:id", controller.updateTodo);
router.delete("/:id", controller.deleteTodo);

// Exporting Router
module.exports = router;
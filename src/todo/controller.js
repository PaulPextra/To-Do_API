const pool = require('../../db');
const queries = require('./queries');

// getTodos Controller Function
const getTodos = (req, res) => {
    // Fetching All Todos
    pool.query(queries.getTodos, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

// addTodo Controller Function
const addTodo = (req, res) => {
    const { title, body, date } = req.body;
    // Creating a Todo
    pool.query(queries.addTodo, [title, body, date], (error, results) => {
        if (error) throw error;
        res.status(201).send(`Todo "${title}" Created Successfully.`);
    });
};

// getTodoById Controller Function
const getTodoById = (req, res) => {
    const id = parseInt(req.params.id);
    // Fetching An Existing Todo
    pool.query(queries.getTodoById, [id], (error, results) => {
        if (error) throw error;
        const todoNotFound = !results.rows.length;
        if (todoNotFound) {
            res.status(404).send(`Todo with ID:${id} does not exist in the database.`);
        }
        res.status(200).json(results.rows[0])
    });
};

// updateTodo Controller Function
const updateTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, body, date } = req.body;
    // Fetching An Existing Todo
    pool.query(queries.getTodoById, [id], (error, results) => {
        const todoNotFound = !results.rows.length;
        if (todoNotFound) {
            res.status(404).send(`Todo with ID:${id} does not exist in the database.`);
        }
    });
    // Updating An Existing Todo
    pool.query(queries.updateTodo, [title, body, date, id], (error, results) => {
        if (error) throw error;
        res.status(200).send(`Todo with ID:${id} updated successfully.`);
    });
};

// deleteTodo Controller Function
const deleteTodo = (req, res) => {
    const id = parseInt(req.params.id);
    // Fetching An Existing Todo
    pool.query(queries.getTodoById, [id], (error, results) => {
        const todoNotFound = !results.rows.length;
        if (todoNotFound) {
            res.status(404).send(`Todo with ID:${id} does not exist in the database.`);
        }
    });
    // Deleting An Existing Todo
    pool.query(queries.deleteTodo, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send(`Todo with ID:${id} is removed successfully.`);
    });
};

// Exporting Controller Functions
module.exports = {
    getTodos,
    addTodo,
    getTodoById,
    updateTodo,
    deleteTodo,
};
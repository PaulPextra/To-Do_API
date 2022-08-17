// Defining Database Queries
const getTodos = "SELECT * FROM todos";
const getTodoById = "SELECT * FROM todos WHERE id = $1";
const addTodo = "INSERT INTO todos (title, body, date) VALUES ($1, $2, $3)";
const updateTodo = "UPDATE todos SET title = COALESCE($1, title), body = COALESCE($2, body), date = COALESCE($3, date)  WHERE id = $4";
const deleteTodo = "DELETE FROM todos WHERE id = $1";

// Exporting Queries
module.exports = {
    getTodos,
    addTodo,
    getTodoById,
    updateTodo,
    deleteTodo,
};
# A Simple To-Do API

---

## Problem Description

An API exists to communicate with another program. This To-Do API should allow users to create a to-do, retrieve a to-do, update an existing to-do, and delete a todo. 

The user should be able to perform the CRUD(Create-Read-Update-Delete) operations.


### Implementation 

Test this programe using the following endpoints:

- Root Route '/': 

Send a `GET` request to `localhost:3000/`

- To-Do API Route: 

Send a `GET` request to `/api/v1/todos`

```
e.g. localhost:3000/api/v1/todos
```

- To create a to-do:

Send a `POST` request to `/api/v1/todos`

```
e.g. localhost:3000/api/v1/todos
```

- To get all to-dos:

Send a `GET` request to `/api/v1/todos`

```
e.g. localhost:3000/api/v1/todos
```
- To get a to-do by id:

Send a `GET` request to `/api/v1/todos/id`

```
e.g. localhost:3000/api/v1/todos/2
```

- To update an existing to-do:

Send a `PUT` request to `/api/v1/todos/id`

```
e.g. localhost:3000/api/v1/todos/2
```

- To delete an existing to-do:

Send a `DELETE` request to `/api/v1/todos/id`

```
e.g. localhost:3000/api/v1/todos/2
```

---

**Author: Paul Okoli**
[Linkedin Profile](https://www.linkedin.com/in/paulokoli/)
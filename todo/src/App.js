import React, { useState, useReducer } from 'react';
import './App.css';
import ToDo from './components/ToDo';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle_todo'
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete }
        }
        return todo
      })
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}


function App() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState(''); // handles input name reference

    function handleSubmit(e) {
      e.preventDefault()
      dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name}})
      setName('')
    }


  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input
        name="todo"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)} />
        <button>Add to-do</button>
    </form>
    {todos.map(todo => {
      return <ToDo key={todo.id} todo={todo} dispatch={dispatch} />
    })}
</div>
  );
}

export default App;

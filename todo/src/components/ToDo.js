import React from 'react'
import { ACTIONS } from '../App.js';

export default function ToDo( { todo, dispatch }) {
    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
            {todo.name}
            <button onClick={() => dispatch({ type:ACTIONS.TOGGLE_TODO, payload: { id: todo.id }})}>Toggle</button>
            <button>Delete</button>
            </span>
        </div>
    )
}

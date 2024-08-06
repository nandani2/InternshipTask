import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {              // reducer functions always receive two  arguments: the current state and an action
            const todo = {
                id: nanoid(), 
                text: action.payload              // payload is a object that receive a value
            }
            console.log(todo)
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },

        updateTodo:(state, action)=>{
            console.log(action.payload);
            state.todos = state.todos.map((eachVal) => ( eachVal.id === action.payload.id ? action.payload : eachVal));

            // another method finding index and updating the arrays
            // let index=state.todos.findIndex((item)=> item.id===action.payload.id);
            // if(index!==-1){
            //    state.todos[index] = action.payload;
            // }  
        },
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer
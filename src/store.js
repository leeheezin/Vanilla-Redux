import { createAction } from "@reduxjs/toolkit"
import { legacy_createStore } from "redux"

const addTodo = createAction("ADD")
const deleteTodo = createAction("DELETE")

console.log(addTodo(), deleteTodo())
const reducer = (state = [], action) => {
    switch(action.type){
        case addTodo.type:
            console.log(action)
            return [{text:action.payload, id: Date.now()}, ...state]
        case deleteTodo.type:
            return state.filter(toDo=>toDo.id !== action.id)
        default:
            return state
    }
}
const store = legacy_createStore(reducer)

export const actionCreators = {
    addTodo,
    deleteTodo
}
export default store
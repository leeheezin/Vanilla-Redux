import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit"

// const addTodo = createAction("ADD")
// const deleteTodo = createAction("DELETE")

// const reducer = (state = [], action) => {
//     switch(action.type){
//         case addTodo.type:
//             console.log(action)
//             return [{text:action.payload, id: Date.now()}, ...state]
//         case deleteTodo.type:
//             return state.filter(toDo=>toDo.id !== action.payload)
//         default:
//             return state
//     }
// } 


// const reducer = createReducer([], {
//     [addTodo]: (state, action) => { 
//         state.push({text:action.payload, id: Date.now()})
//         //비어있는 array에 새로운 todo push
//     },
//     [deleteTodo]: (state, action) => 
//         state.filter(toDo=>toDo.id !== action.payload)
// })

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => { 
            state.push({text:action.payload, id: Date.now()})},
        remove: (state, action) => 
            state.filter(toDo=>toDo.id !== action.payload)
    }
})

export const { add, remove } = toDos.actions
export default configureStore({reducer: toDos.reducer})
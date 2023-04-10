import { legacy_createStore } from "redux"

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const addTodo = text => {
  return {
    type: ADD_TODO, 
    text 
  }
}
const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  }
}
const reducer = (state = [], action) => {
  console.log(action)
  switch(action.type){
    case ADD_TODO:
      const newTodoObj = { text: action.text, id: Date.now() }
      return [newTodoObj, ...state] 
    case DELETE_TODO:
      const cleaned = state.filter(toDo => toDo.id !== action.id) //delete할 object를 제외시킨 새로운array를 만듬
      return cleaned
    default:
      return state
  }
} //state를 변형하지않고 새로운 state를 만듬

const store = legacy_createStore(reducer)

store.subscribe(()=> console.log(store.getState()))

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text))
}
const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id)
  store.dispatch(deleteTodo(id))
}
const paintTodos = () =>{
  const toDos = store.getState()
  ul.innerHTML = "" //새로운 todo가 생기면 리스트를 비움
  toDos.forEach(toDo => {
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText = "DEL"
    btn.addEventListener("click", dispatchDeleteTodo)
    li.id = toDo.id
    li.innerText = toDo.text
    li.appendChild(btn)
    ul.appendChild(li)
  }) // state에 각각 todo로 다시 새로운 리스트 만듬
}
store.subscribe(paintTodos)



const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo)
};

form.addEventListener("submit", onSubmit);


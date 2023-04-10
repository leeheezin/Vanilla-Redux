import { legacy_createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

number.innerText = 0

const ADD = "ADD"
const MINUS = "MINUS"

const countModifier = (count = 0, action) => {
  switch(action.type){
    case ADD:
      return count +1
    case MINUS:
      return count - 1
    default:
      return count
  }
} //데이터를 수정하는곳

const countStore = legacy_createStore(countModifier)


const onChange = () => {
  number.innerText = countStore.getState()
}

countStore.subscribe(onChange)

const handleAdd = () => {
  countStore.dispatch({type: ADD}) //action은 반드시 object여야함, type이 있어야함
}
const handleMinus = () => {
  countStore.dispatch({type: MINUS})
}

add.addEventListener("click", handleAdd)
minus.addEventListener("click", handleMinus)
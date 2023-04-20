import React, { useState } from "react"
import { connect } from "react-redux"
import ToDo from "../components/ToDo"
import { add } from "../store"

function Home({toDos, addTodo}){
    const [text, setText] = useState("")
    function onChange(e) {
        setText(e.target.value)
    }
    function onSubmit(e) {
        e.preventDefault()
        addTodo(text)
        setText("")
    }
    return(
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => (<ToDo {...toDo} key={toDo.id}/>))}
            </ul>
        </>
    )
}

function mapStateToProps(state) {
    return {toDos: state} 
}
function mapDispatchToProps(dispatch){
    return{
        addTodo: (text) => dispatch(add(text))
    }
}
export default  connect(mapStateToProps,mapDispatchToProps) (Home) //Home으로 보내는 props에 추가될수있도록 허용
import {postTodo} from "../../apis/todoApi.tsx";
import {ChangeEvent, useState} from "react";


const initState:Todo = {
    title: 'Title',
    writer: 'writer'
}

function TodoAdd() {

    const [todoAdd, setTodoAdd] = useState(initState)

    const hanleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target

        const newState = {...todoAdd, [name]: value}

        setTodoAdd(newState)

    }

    return (
        <div>
            <h1> Todo Add </h1>

            <div>
                TITLE
                <input type='text'  value={todoAdd.title} onChange={hanleChange}></input>
            </div>
            <div>
                WRITER
                <input type='text' value={todoAdd.writer} onChange={hanleChange}></input>
            </div>
            <div>
                <button >SEND</button>
            </div>


        </div>
    );
}

export default TodoAdd;
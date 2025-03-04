import {postTodo} from "../../apis/todoApi.tsx";
import {useState} from "react";


const initState:Todo = {
    title: 'Title',
    writer: 'writer'
}

function TodoAdd() {

    const [todoAdd, setTodoAdd] = useState(initState)


    return (
        <div>
            <h1> Todo Add </h1>

            <div>
                TITLE
                <input type='text'  value={todoAdd.title}></input>
            </div>
            <div>
                WRITER
                <input type='text' value={todoAdd.writer}></input>
            </div>
            <div>
                <button >SEND</button>
            </div>


        </div>
    );
}

export default TodoAdd;
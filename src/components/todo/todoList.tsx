import {getTodoList} from "../../apis/todoApi.tsx";
import {useState} from "react";


const initState:PageResponse<Todo> = {
    dtoList: [],
    total:0,
    size: 0,
    end : 0,
    next: false,
    prev: false,
    page: 0,
    start: 0
}


function TodoList() {

    const [data, setData] = useState<PageResponse<Todo>>(initState)

    //비동기 호출
    getTodoList()


    return (
        <div>
            <h1>Todo List</h1>

            <ul>

                {data.dtoList.map( todo => <li key={todo.tno}> {todo.tno} </li> )}

            </ul>

        </div>
    );
}

export default TodoList;
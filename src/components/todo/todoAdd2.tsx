import {useActionState} from "react";
import {postTodo} from "../../apis/todoApi.tsx";


async function submitAction (prevState:unknown , formData:FormData):Promise<number> {

    console.log(prevState, formData)

    const todoObj: Todo  = {title:'AAA', writer:'kyc'}

    return postTodo(todoObj)
}

function TodoAdd2() {

    const [state, formAction, isPending] = useActionState(submitAction, 0)

    console.log(state, formAction, isPending)


    return (
        <div>
            <h1>Todo Add 2</h1>
            <form>
                <button>SUBMIT</button>
            </form>
        </div>
    );
}

export default TodoAdd2;
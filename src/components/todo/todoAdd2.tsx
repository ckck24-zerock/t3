import {useActionState} from "react";
import {postTodo} from "../../apis/todoApi.tsx";


async function submitAction (prevState:number , formData:FormData):Promise<number> {

    const titleStr:FormDataEntryValue|null = formData.get('title')
    const writerStr:FormDataEntryValue|null = formData.get('writer')

    console.log(titleStr,writerStr)

    const todoObj: Todo  = {
        title: (titleStr) ? String(titleStr) : '',
        writer:(writerStr) ? String(writerStr) : '', }

    return postTodo(todoObj)
}

function TodoAdd2() {

    //처음 state 초기값
    //state는 나중에 formAction의 리턴값
    //isPending은 실행 중이라는 표시
    const [state, formAction, isPending] = useActionState(submitAction, 0)

    console.log("Component State : " + state)


    return (
        <div>
            <h1>Todo Add 2</h1>

            {isPending && <h1>Pending...............</h1>}

            <h1>RESULT : {state}</h1>

            <form action={formAction}>
                <div>
                    <input type={'text'} name={'title'} value={'AAAAAAAAA'}/>
                </div>

                <div>
                    <input type={'text'} name={'writer'} value={'user00'}/>
                </div>
                <button>SUBMIT</button>
            </form>
        </div>
    );
}

export default TodoAdd2;
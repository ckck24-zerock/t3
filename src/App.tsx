
import './App.css'
import TodoList from "./components/todo/todoList.tsx";



function App() {



    //const todo:Todo = {title: "React로 생성하는 Todo", writer:"zerock"}

    // postTodo(todo).then((result:number) => {
    //     console.log(result)
    // })


    // updateTodo(251, "React Update 251").then((result:Todo)=> {
    //     console.log(result)
    // })

    // getTodoList(2,50).then((result: PageResponse<Todo>) => {
    //
    //     console.log(result.total)
    //
    // })

    // getTodo(25144).then( (result: Todo) => {
    //
    //     console.log(result)
    //
    // } ).catch( reason =>  {
    //
    //     console.log(reason)
    //
    // } )

  return (
    <>
      <TodoList/>
    </>
  )
}

export default App

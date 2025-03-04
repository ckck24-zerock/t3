import axios from "axios";


export async function getTodo(tno: number ): Promise<Todo> {

    try {
        const res = await axios.get(`http://122.34.51.94:8090/api/v1/todos/${tno}`)
        return res.data
    }catch(err) {
        console.log(err)
        throw Promise.reject("Data Not Found")
    }

}

export async function getTodoList ( page:number = 1 , size: number = 10  ): Promise<PageResponse<Todo>> {

    const param = {page:page, size:size}

    const res =
        await axios.get(`http://122.34.51.94:8090/api/v1/todos/list`, {params: param})

    return res.data
}

export async function updateTodo ( tno: number, title: string ) {

    const res = await axios.put(
        `http://122.34.51.94:8090/api/v1/todos/${tno}`,
        {title:title, tno:tno} )

    return res.data

}
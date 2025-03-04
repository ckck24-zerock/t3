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
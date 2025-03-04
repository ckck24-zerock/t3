import axios, {AxiosResponse} from "axios";


export async function getTodo(tno: number ): Promise<AxiosResponse<Todo>> {

    const res = await axios.get(`http://122.34.51.94:8090/api/v1/todos/${tno}`)

    return res.data

}
import axios from "axios";
import 'dotenv/config'

export const ENDPOINT = process.env.DEVOPS

export const getData =  async(URL)=>{
    try {
        const data = await axios(URL);
        return data
    } catch (error) {
        return error
    }
}





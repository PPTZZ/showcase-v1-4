import axios from "axios";
import 'dotenv/config'

export const ENDPOINT = process.env.ENDPOINT

export const getData =  async(URL)=>{
    try {
        const data = await axios(URL);
        return data
    } catch (error) {
        return error
    }
}





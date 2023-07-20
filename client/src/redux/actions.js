import axios from 'axios'
import { ADD_COU } from "./action_types";


export const addCountry = (name)=>{
    return async (dispatch) =>{
        let endpoint =`http://localhost:3001/countries?name=${name}`
        try {
            const response = await axios(endpoint)
            let data = response.data
            dispatch({
                type: ADD_COU,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }        
    }
}


  
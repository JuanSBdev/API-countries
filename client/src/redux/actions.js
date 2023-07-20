import axios from 'axios'
import { ADD_COU, CRE_ACT } from "./action_types";


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
export const delCountry = (id)=>{
    return async (dispatch) =>{
        try {
            dispatch({
                type: DEL_COU,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }        
    }
}
export const createActivity = (activity)=>{
    return async (dispatch) =>{
        let endpoint =`http://localhost:3001/actividad`
        try {
            const response = await axios.post(endpoint, activity)
            let data = response.data
            dispatch({
                type: CRE_ACT,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }        
    }
}


  
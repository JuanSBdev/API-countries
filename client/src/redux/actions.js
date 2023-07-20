import { GET_COU, ADD_COU, DEL_COU, CREATE_ACT, GET_ACT } from "./action_types";

import axios from ('axios')

export const getCountry = (name)=>{
    return async (dispatch) =>{
        let endpoint =`http://localhost:3001/country/${name}`
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


  
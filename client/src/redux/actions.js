import axios from 'axios'
import { GET_COU, DEL_COU, CRE_ACT, GET_ACT, ADD_COU } from "./action_types";


export const getCountries = ()=>{
    return async (dispatch) =>{
        let endpoint =`http://localhost:3001/`
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
export const getCountry = (name)=>{
    return async (dispatch) =>{
        let endpoint =`http://localhost:3001/countries?name=${name}`
        try {
            const response = await axios(endpoint)
            let data = response.data
            console.log(data)
            dispatch({
                type: GET_COU,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }        
    }
}


export const delCountry = (id) => {
    // const endpoint = `http://localhost:3001/country/${id}`
    return async (dispatch) =>{
      try {
        // await axios.delete(endpoint)
        return dispatch({
          type: DEL_COU,
          payload: id,
    });
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
export const getActivities = ()=>{
    return async (dispatch) =>{
        let endpoint =`http://localhost:3001/actividad`
        try {
            const response = await axios(endpoint)
            let data = response.data
            dispatch({
                type: GET_ACT,
                payload: data
            })
        } catch (error) {
            console.log(error)
        }        
    }
}

  
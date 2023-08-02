import axios from 'axios'
import { GET_COU, DEL_COU, CRE_ACT, GET_ACT, ADD_COU, BY_CONT, ORDER_BY, GET_DET } from "./action_types";


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


export const delActivity =(id) =>{
    return async (dispatch) =>{
        try {
          // await axios.delete(endpoint)
          return dispatch({
            type: DEL_ACT,
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
            alert('cargada')

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

export const filterContinents = (name)=>{
    return  async (dispatch)=>{
        try {
            return dispatch({
                type: BY_CONT,
                payload: name,
            });
        } catch (error) {
            console.log(error)

        }
    }
} 

export const orderBy = (name)=>{
    return async  (dispatch)=>{
        try {
            return dispatch({
              type: ORDER_BY,
              payload: name   
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getDetail = (id)=>{
        return async (dispatch)=>{
            const endpoint = `http://localhost:3001/country/${id}`
             try {
                let response = await axios(endpoint)
                let data = response.data
                // console.log(id)
                // console.log(data)

            return  dispatch({
                type: GET_DET,
                payload: data
            })
           } catch (error) {
            console.log(error.message)
           }
        }
}
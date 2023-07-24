import { GET_COU, ADD_COU, DEL_COU, CRE_ACT, GET_ACT } from "./action_types";

const initialState = {
    base:[],
    paises:[],
    deleted:[],
    buscado:[],
    continentes:[],
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_COU:
            let primerosPaises = action.payload.slice(0, 10)
            return{
                ...state,
                paises: primerosPaises,
                base: action.payload
            }
        case GET_COU:
         let encontrado = state.paises.find(country => country.id === action.payload.id)
         if(encontrado){
            alert('ya existe')
            return{
                buscado:[ ...state.paises, encontrado]
               }
         }
         else{
             return{
                 paises: [...state.paises, action.payload]
                }
            }
          
        case DEL_COU:
            let paisesFilter = state.paises.filter(p => p.id !== action.payload)
            
            return{
                ...state,
                paises: paisesFilter,
            }
        case CRE_ACT:
            return {
                ...state,
                    actividades: [...state.actividades, action.payload]
            
            }
        case GET_ACT:
            return{
                ...state.actividades,

            }
            default:
            return {...state}
    }
}
export default reducer;
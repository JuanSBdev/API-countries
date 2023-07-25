import { GET_COU, DEL_COU, CRE_ACT, GET_ACT, ADD_COU, BY_CONT } from "./action_types";

const initialState = {
    base:[],
    paises:[],
    allContinents:[]
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_COU:
            let primerosPaises = action.payload.slice(0, 10)
            return{
                ...state,
                paises: primerosPaises,
                base: action.payload,
                allContinents: action.payload,
                
            }
        case GET_COU:
         let encontrado = state.paises.find(country => country.id === action.payload.id)
         if(encontrado){
            alert('ALREADY IN this LIST!')
            return{
                ...state,
               }
         }
         else{
             return{
                ...state,
                 paises: action.payload
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

        case BY_CONT:
            const allContinents = state.allContinents;
            
            const continentFilter = action.payload === 'All' ? state.base :
                allContinents.filter(i => i.continente === action.payload)
            return {
                ...state,
                paises: continentFilter
            }
            default:
            return {...state}
    }
}
export default reducer;
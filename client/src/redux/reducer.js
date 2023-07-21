import { GET_COU, ADD_COU, DEL_COU, CRE_ACT, GET_ACT } from "./action_types";

const initialState = {
    paises:[],
    actividades:[],
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_COU:
            return{
                ...state,
                    paises: [...state.paises, action.payload]
            }
        case DEL_COU:
            let paisesFilter = state.paises.filter(p => p.id !== Number(action.payload))
            return{
                ...state,
                paises:[...state.paises, paisesFilter]
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
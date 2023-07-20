import { GET_COU, ADD_COU, DEL_COU, CREATE_ACT, GET_ACT } from "./action_types";

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

            default:
            return {...state}
    }
}
export default reducer;
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
            default:
            return {...state}
    }
}
export default reducer;
import { GET_COU, DEL_COU, CRE_ACT, GET_ACT, ADD_COU, BY_CONT, ORDER_BY, GET_DET } from "./action_types";

const initialState = {
    base:[],
    paises:[],
    allContinents:[],
    primeros:[],
    detail:[],
    activities: []
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
                primeros: primerosPaises,
                
            }
            case GET_COU:
                let encontrado = state.primeros.find(country => country.id === action.payload.id);
                if (encontrado) {
                    alert('ALREADY IN YOUR LIST!');
                } else {
                    return {
                        ...state,
                        paises: [...state.primeros, action.payload],
                        primeros: [...state.primeros, action.payload]
                    };
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
                    activities: [...state.activities, action.payload]
            
            }
        case GET_ACT:
            return{
                    ...state,
                activities: action.payload

            }

        case BY_CONT:
            const allContinents = state.allContinents;
            
            const continentFilter = action.payload === 'All' ? state.primeros :
                allContinents.filter(i => i.continente === action.payload)
            return {
                ...state,
                paises: continentFilter
            }
        case ORDER_BY:
           switch(action.payload){
            case 'Alfabetico':
                const orderByAlphabetic = [...state.paises].sort((a, b) => a.nombre.localeCompare(b.nombre));
                return {
                  ...state,
                  paises: orderByAlphabetic
                };
            case 'Population':
                const orderByPopulation = [...state.paises].sort((a, b) => b.poblacion - a.poblacion);
                return {
                  ...state,
                  paises: orderByPopulation
                };
                
                default:
                    return { ...state
                    };
                }
            case GET_DET:
                let detallado = state.base.filter(country => country.id === action.payload )
                console.log(detallado)
                return{
                    ...state,
                    detail: detallado
                }
        
            default:
            return {...state}
        }
}
export default reducer;
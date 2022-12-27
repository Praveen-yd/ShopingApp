import { ActionTypes } from "../constants/action-type"

export const setProducts=(products)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload:products,
    }
}
export const setSearchText=(text)=>{
    return{
        type: ActionTypes.SET_SEARCH_TEXT,
        payload:text,
    }
}
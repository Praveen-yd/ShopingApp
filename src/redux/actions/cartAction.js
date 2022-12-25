import { ActionTypes } from "../constants/action-type"

export const addToCart=(item)=>{
    return{
        type: ActionTypes.ADD_TO_CART,
        payload:item,
    }
}
export const removeFromCart=(item)=>{
    return{
        type: ActionTypes.REMOVE_FROM_CART,
        payload:item,
    }
}

export const deleteFromCart=(item)=>{
    return{
        type: ActionTypes.DELETE_FROM_CART,
        payload:item,
    }
}
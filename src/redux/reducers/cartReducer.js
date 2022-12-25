
import { ActionTypes } from '../constants/action-type'

let initialState={
    cart :new Map(),
    cartArray:[]
}
const cartReducer = (state=initialState,{type,payload}) => {
  switch (type){
    case ActionTypes.ADD_TO_CART:{
        console.log({payload})
        const newCart = new Map(state.cart);
        if(newCart.get(payload.id))
        {
            let item = newCart.get(payload.id);
            item.qty = item.qty+1;
            newCart.set(payload.id,item)
        }else{
            newCart.set(payload.id,{...payload,qty:1})
        }
        return {...state,cart:newCart};
    }
        case ActionTypes.REMOVE_FROM_CART:
            {
            const newCart = new Map(state.cart);

            if(newCart.get(payload.id))
            {
                let item = newCart.get(payload.id);
                if(item.qty>1)
                {
                    item.qty = item.qty-1;
                    newCart.set(payload.id,item)
                }
                else{
                    newCart.delete(payload.id)
                }
            }
            return {...state,cart:newCart};
        }
            case ActionTypes.DELETE_FROM_CART:
                {
                    const newCart = new Map(state.cart);

            if(newCart.get(payload.id))
            {
                newCart.delete(payload.id)    
            }
            return {...state,cart:newCart};
        }
    default:
        return state;
  }
}

export default cartReducer
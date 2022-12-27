
import { ActionTypes } from '../constants/action-type'

const initialState={
    products:[

    ],
    searchText:""
}
const productReducer = (state=initialState,{type,payload}) => {
  switch (type){
    case ActionTypes.SET_PRODUCTS:
        return {...state,products:payload};
    case ActionTypes.SET_SEARCH_TEXT:
        return {...state,searchText:payload};

    default:
        return state;
  }
}


export default productReducer
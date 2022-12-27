import React from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart} from "../../redux/actions/cartAction"
import { CalculateTotalItemInCart } from '../../utils/util';
import QtyChange from '../../components/QtyChange';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cart = useSelector((state)=>state.cartReducer.cart);
    // console.log("cart",cart)
    const totalItem = CalculateTotalItemInCart(cart);
    const itemsArray = Array.from(cart, function (item) {

        return { key: item[0], value: item[1] }
    });
    console.log('cart',itemsArray)
    let totalAmount=0;
    const dispatch=useDispatch();
    Number.prototype.round = function(decimals) {
        return Number((Math.round(this + "e" + decimals)  + "e-" + decimals));
    }
      const itmes =   itemsArray.map(element => {
            console.log({element});
            totalAmount = totalAmount+(parseInt(element.value.qty)*parseFloat(element.value.price));
            console.log({totalAmount});
            const deleteFromCartAction =(item)=>{
                dispatch(deleteFromCart(item));}

        const {id,title,image,price}=element.value;
        // console.log(id,title,image,price)
        return(
            <div className='cart-item'>
                <Link className='item item-1'to={`/product/${id}`}>
                <div ><img className='cart-img' src={image} alt='product'/></div>
                </Link>
                <Link className='item item-2' style={{textDecoration:'none' }} to={`/product/${id}`} >
                
                <div >{title}</div>
                </Link>
                <div className='item item-3'>Qty: <QtyChange item={element.value}/></div>
                <div className='item item-4'>$ {(parseInt(cart.get(id).qty)*parseFloat(price)).toFixed(2)}</div>
                <div className='item item-5'>
                <i className='trash alternate outline icon' style={{color:"red",marginTop:"7px"}} onClick={()=> 
                      deleteFromCartAction(element.value)} />
                </div>
            </div>
            
        )
    })


 console.log({totalAmount});
return (
    <div className='cart'>
<div className='cart-list'>
    {(itmes.length>0)
    ?itmes:
    <h2 style={{padding:'10px'}}>No Product In Cart</h2>
}
</div>
<div className='cart-summary'>
                <div className='cart-summary-items summary-heading'>Summary</div>
                <div className='cart-summary-items summary-total-items'>Total Items:{totalItem}</div>
                <div className='cart-summary-items summary-total-amount'>Total Amount : $ {totalAmount.toFixed(2)}</div>
                <div className='cart-summary-items'>
                <button type="button" className="btn btn-success button">Check Out</button>
                </div>
            </div>
            </div>
);
}
export default Cart;
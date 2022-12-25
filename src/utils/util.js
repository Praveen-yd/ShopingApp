export const CalculateTotalItemInCart = (cart)=>{
    const itemsArray = Array.from(cart, function (item) {
        return { key: item[0], value: item[1] }
    });
      const totalItems=itemsArray.reduce((acc,curr)=>acc+curr.value.qty,0)
   return totalItems;
}
import React, { useEffect, useState } from 'react'
import './allProducts.css';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard';


const AllProducts = () => {

  const products = useSelector((state)=>state.allProducts.products);
  const searchText = useSelector((state)=>state.allProducts.searchText);
  const [renderProducts,setRenderProducts]= useState([]);
  const [filterData,setFilterData]= useState([]);
  const [sortValue,setSortValue] = useState("Featured");

  const handleChange=(e)=>{
      const { value} = e.target
      setFilterData((oldState)=>{
        const filteredArray = JSON.parse(JSON.stringify(oldState))
        const obj = filteredArray.filter((obj)=>obj.key==value)
        obj[0].value = !obj[0].value;
        return filteredArray;
      })
    }
  const getCategoryList=()=>{
          const categoryList=[];
           products.map((product)=>{
            if (!categoryList.some((cate)=> cate.key===product.category)){
              categoryList.push({key: product.category,value:false})
            }
          })
          setFilterData(categoryList);
        }

        function filterByCheckbox(){
     
                if (filterData.some((obj)=> obj.value))
                {
                return products.filter(product=>{
                  return (filterData.filter((obj)=> ((obj.key===product.category)&&obj.value)))[0]
                })
                }else{
                  return products;
                }
              }
          
  function filterByValue() {     
      return products.filter(product => 
        {
           return Object.keys(product).some(k => 
          {if(typeof product[k] === 'string')
           return product[k].toLowerCase().includes(searchText.toLowerCase());
           });
          }); 
        }

  const getProductList = ()=>{
      if(searchText === ''){
      setRenderProducts( filterByCheckbox());
      }else{
        console.log("in search text---->",searchText)
        setRenderProducts( filterByValue());
      }
  }

useEffect(()=>{
  getCategoryList();
},[])

  useEffect(()=>{
      getProductList();
    },[filterData,searchText])

    const handleClearFilter =()=>{
      
      setFilterData(filterData.map((obj)=>
      {obj.value = false
      return obj;
    }
      ));
      setSortValue("Featured")
    }
  const handlRadioChange =(e)  =>{
   
    setSortValue(e.target.value);

    const filteredProduct = JSON.parse(JSON.stringify(renderProducts));
    if(e.target.value==='Featured'){
      console.log('feature')
      setRenderProducts(filteredProduct);
  } else if(e.target.value==='Price: low to high')
  {
    console.log('low to high')
    const sortedData= filteredProduct.sort((a, b) =>  a.price - b.price );
    setRenderProducts(sortedData);
  }
  else if( e.target.value==='Price: high to low'){
    console.log('high to low')
    const sortedData= filteredProduct.sort((a, b) => b.price -  a.price);
    setRenderProducts(sortedData);
  }else {
    console.log('rating')
    const sortedData= filteredProduct.sort((a, b) =>  b.rating.rate - a.rating.rate);
    setRenderProducts(sortedData);
  }
 
}
  return (
    <div className='main'>
      <div className='aside'>
        <div className='heading'>
         <h2 >Filter Products</h2>
         <div className='Sub-heading'>
          <h3>Categories</h3>
          {filterData.map((category)=>
         <div className="form-check ">
         
  <input className="form-check-input" type="checkbox" name='categories' id={category.key} value={category.key} checked={category.value} onChange={handleChange}/>
  <label className="form-check-label" htmlFor={category.key}>{category.key}</label>
</div>
          )}

</div ><div className='Sub-heading'>
         <h3>Sort</h3>
         <div className="form-check">
  <input className="form-check-input" type="radio" name="sort" defaultChecked id='Radio1' value="Featured"   checked={sortValue === "Featured"}
              onChange={handlRadioChange}/>
  <label className="form-check-label" htmlFor="exampleRadios1">
    Featured
  </label>
  </div>

  <div className="form-check">
  <input className="form-check-input" type="radio" name="sort" id="Radio2" value="Price: low to high" checked={sortValue === "Price: low to high"} onChange={handlRadioChange}/>
  <label className="form-check-label" htmlFor="exampleRadios2">
    Price: low to high
  </label>
  </div>

  <div className="form-check">
<input className="form-check-input" type="radio" name="sort" id="Radio3" value="Price: high to low" checked={sortValue === "Price: high to low"} onChange={handlRadioChange}/>
  <label className="form-check-label" htmlFor="exampleRadios3">
    Price: high to low
  </label>
</div>
  <div className="form-check">
 <input className="form-check-input" type="radio" name="sort" id="Radio4" value="Custumer rating" checked={sortValue === "Custumer rating"} onChange={handlRadioChange}/>
  <label className="form-check-label" htmlFor="exampleRadios4">
    Custumer rating
  </label>
</div>
         </div>

         <div className='Sub-heading'>
                <button type="button" className="btn btn-success button" onClick={handleClearFilter}>Clear Filter</button>
         </div>
         </div>
      </div>

    <div className='section'>
    
      {renderProducts.length >0 ? (
        <div className='card-list'>
        {renderProducts.map((product)=>{
         return <ProductCard product={product}/>
        }

        )}
        </div>)
       : <>No product found</>}  
</div>
    </div>
  )
}

export default AllProducts




import Navbar from '../navbar';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import Data from '../data.json'
import { useState , useEffect} from 'react';
import {TransformComponent,TransformWrapper} from "react-zoom-pan-pinch"

function Productdetails() {
    const {id}=useParams();
    const product =Data.find(item=>item.id===id);
  if(!product){
    return <div>product not found</div>
  }
 
    const addToCart = () => {
        const clickedProducts = JSON.parse(localStorage.getItem('clickedProducts')) || [];
            clickedProducts.push(product);
            localStorage.setItem('clickedProducts', JSON.stringify(clickedProducts));
        
      };

    return (
        <>
        <Navbar/>
        <div className='productdetails'>
      <div className='productdetails1'> 
      <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200} ><TransformComponent><img className='ppimg' src={product.src} /></TransformComponent></TransformWrapper>
      </div>
   <div className='productdetails2'>
   <h1>{product.Brands}</h1>
   <p>{product.color} {product.categories}</p>
   <hr/>
   <p>{product.discount}% off on your first order,hurry buy now</p>
  <div><p><b>{product.price} </b>MRP</p></div>
 
   <h5>inclusive of all taxes</h5>
    
   <div className='btns'> <Button  className='btnn'
                as={Link}
                to={{
                    pathname: '/cart'
                }}
                onClick={() => addToCart()}>ADD TO BAG</Button>
  </div>
    <hr/>
    <h5>DELIVERY OPTIONS</h5>
    <p>100% Original Products</p>
   <p>Pay on delivery might be available</p>
   <p>Easy 14 days return and exchanges</p>
   <p>Try & Buy might be available</p>
   <hr/>
   <div>
    <h5>PRODUCT DETAILS</h5>
    <p>{product.description}</p>
   </div>
   </div>
  </div>
    </>
  );
}

export default Productdetails;
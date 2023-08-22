import React from 'react';
import Navbar from '../navbar';
import { useLocation } from 'react-router-dom';
import Cardetails from '../cardetails';

function Cart() {
    const location = useLocation();
    const cart = location.state?.cart || [];
    const clickedProducts = JSON.parse(localStorage.getItem('clickedProducts')) || [];
   const ans=clickedProducts.reverse()
   const removeFromCart = (productId) => {
    const updatedCart = ans.filter((item) => item.id !== productId);
    const newi=updatedCart.reverse();
    // Update the localStorage with the new cart state
    localStorage.setItem('clickedProducts', JSON.stringify(newi));
    // Update the component state to re-render
    setCartItems(newi);
  };

  
    return (
        <>
            <Navbar />
            
            <div className='cards'>
                
                    {ans.map((productId) => (
                        <Cardetails data={productId} t={productId.id}  onRemove={removeFromCart} />
                    ))}
             
            </div>
        </>
    );
}

export default Cart;


// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';

// const Cart = () => {
  
//   const{products,currency,cartItems}=useContext(ShopContext);
//   const[cartData,setCartData]=useState([]);

//   useEffect(()=>{

//   const tempData=[];
//   for(const items in cartItems){
//     for(const item in cartItems[items]){
//       if(cartItems[items][item] >0){
//         tempData.push({
//           id:items,
//           size:item,
//           quantity:cartItems[item],
//         })
//       }
//     }
//     setCartData(tempData);
//   }
//   },[cartItems])

//   return (
//     <div className='border-t pt-14 '>
//       <div className='text-2xl mb-3'>
//         <Title text1={'YOURS'} text2={'CART'} />
//       </div>
//         <div>
//           {
//             cartData.map((item,index)=>{
//               const productData=products.find((product)=>product.id===item.id);
//              return(
//               <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 '>
//                 <div className='flex items-start gap-6'>
//                   <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
//                   <div>
//                     <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                   </div>
//                 </div>
//                 </div>
//                )
//             })
//           }
//         </div>


//     </div>
//   )
// }
 
// export default Cart

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets'; // Ensure this path is correct
import CartTotal from '../components/CartTotal';

const Cart = () => {
    const { products, cartItems, setCartItems , navigate} = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = [];
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        id: items,
                        size: item,
                        quantity: cartItems[items][item],
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItems]);

    const handleDelete = (id, size) => {
        const updatedCartItems = { ...cartItems };
        if (updatedCartItems[id] && updatedCartItems[id][size]) {
            delete updatedCartItems[id][size]; // Remove the size from the item
            // If no sizes left for this item, remove it entirely
            if (Object.keys(updatedCartItems[id]).length === 0) {
                delete updatedCartItems[id];
            }
        }
        setCartItems(updatedCartItems); // Update the cart state
    };

    return (
        <div className='border-t pt-14'>
            <div className='text-2xl mb-3'>
                <Title text1={'YOURS'} text2={'CART'} />
            </div>
            <div>
                {
                    cartData.map((item, index) => {
                        const productData = products.find((product) => product._id === item.id);
                        if (!productData) {
                            return null; // Skip if productData is undefined
                        }
                        return (
                            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                                <div className='flex items-start gap-6'>
                                    <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
                                    <div>
                                        <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                                        <p className='text-xs sm:text-lg'>{item.size}</p>
                                        <p className='text-xs sm:text-lg'>Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(item.id, item.size)} className='text-red-500 hover:text-red-700'>
                                    <img src={assets.bin_icon} alt="Delete" className='w-5 h-5' />
                                </button>
                            </div>
                        );
                    })
                }
            </div>
            <div className='flex justify-end my-20'>
              <div className='w-full sm:w-[450px]'>
                <CartTotal/>
                <div className='w-full text-end'>
                  <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm px-8 py-3'>PROCEED TO CHECKOUT</button>

                </div>

              </div>

            </div>
        </div>
    );
};

export default Cart;

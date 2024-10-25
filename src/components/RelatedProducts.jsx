
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      // Filter based on category if it exists
      if (category) {
        productsCopy = productsCopy.filter((item) => category === item.category);
      }

      // Filter based on subCategory if it exists
      if (subCategory) {
        productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
      }

      // Set related products, limiting to 5
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.length > 0 ? (
          related.map((item) => (
            <ProductItem key={item.id} id={item._id} name={item.name} price={item.price} image={item.image} />
          ))
        ) : (
          <div>No related products found.</div>
        )}
      </div>
    </div>
  );
}

export default RelatedProducts;






















// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import ProductItem from './ProductItem';

// const RelatedProducts = ({ category, subCategory }) => {
//   const { products } = useContext(ShopContext);
  
//   // Filter products based on category or subCategory
//   const relatedProducts = products.filter(item => 
//     item.category === category || item.subCategory === subCategory
//   );

//   return (
//     <div className='mt-10'>
//       <h2 className='text-xl font-bold'>Related Products</h2>
//       <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//         {relatedProducts.map(item => (
//           <ProductItem 
//             key={item._id} // Use a unique identifier as key
//             name={item.name} 
//             id={item._id} 
//             price={item.price} 
//             image={item.image && item.image.length > 0 ? item.image[0] : null} 
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelatedProducts;




// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';

// const RelatedProducts = ({ category, subCategory }) => {
//     const { products } = useContext(ShopContext);
//     const [related, setRelated] = useState([]);

//     useEffect(() => {
//         if (products.length > 0) {
//             let productsCopy = products.slice();

//             // Filter based on category if it exists
//             if (category) {
//                 productsCopy = productsCopy.filter((item) => item.category === category);
//             }

//             // Filter based on subCategory if it exists
//             if (subCategory) {
//                 productsCopy = productsCopy.filter((item) => item.subCategory === subCategory);
//             }

//             // Set related products, limiting to 5
//             setRelated(productsCopy.slice(0, 5));
//         }
//     }, [products, category, subCategory]);

//     return (
//         <div className='my-24'>
//             <div className='text-center text-3xl py-2'>
//                 <Title text1={'RELATED'} text2={'PRODUCTS'} />
//             </div>
//             <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//                 {related.length > 0 ? (
//                     related.map((item) => (
//                         <ProductItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image[0]} />
//                     ))
//                 ) : (
//                     <div>No related products found.</div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default RelatedProducts;










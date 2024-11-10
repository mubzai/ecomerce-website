// ProductDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  // Fetch product details using productId or use a static description for now
  const productDescription = `Description for product ${productId}`;

  return (
    <div>
      <h1>Product Detail</h1>
      <p>{productDescription}</p>
    </div>
  );
};

export default ProductDetail;

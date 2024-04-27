import React from 'react';
import TopNavigation from 'components/TopNavigation';
import ProductIntroduce from 'components/ProductIntroduce';
import ProductFaq from 'components/ProductFaq';
import ProductComments from 'components/ProductComments';
import './style.css';

const ProductDetailPage = () => {
  return (
    <>
      <TopNavigation />
      <main>
        <ProductIntroduce />
        <ProductFaq />
        {/* <ProductComments /> */}
      </main>
    </>
  );
};

export default ProductDetailPage;

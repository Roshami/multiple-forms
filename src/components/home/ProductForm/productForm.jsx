import { useState } from 'react';
import ProductBasicDetailsForm from './ProductBasicDetailsForm/productBasicDetailsForm';
import ProductWarantyDetailsForm from './ProductWarantyDtailsForm/productWarantyDetailsForm';

const ProductForm = () => {
  const [currentForm, setCurrentForm] = useState(1);
  const [productBasicDetails, setProductBasicDetails] = useState({
    product_name: '',
    product_description: '',
    product_price: 0,
    product_quantity: 0,
  });

  const renderProductForms = () => {
    return ProductFormMapper[currentForm];
  };

  const handleNextForm = () => {
    setCurrentForm((prevState) => prevState + 1);
  };

  const handleBackForm = () => {
    setCurrentForm((prevState) => prevState - 1);
  };

  const ProductFormMapper = {
    1: (
      <ProductBasicDetailsForm
        productBasicDetails={productBasicDetails}
        setProductBasicDetails={setProductBasicDetails}
        handleNextForm={handleNextForm}
      />
    ),
    2: <ProductWarantyDetailsForm handleBackForm={handleBackForm} />,
  };

  return (
    <div class="flex w-full h-full items-center justify-center m-auto mt-6 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {renderProductForms()}
    </div>
  );
};

export default ProductForm;

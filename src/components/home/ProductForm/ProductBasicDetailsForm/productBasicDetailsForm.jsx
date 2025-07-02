import PropTypes from 'prop-types';
import InputFields from '../../../common/form/inputFileds';
import FormHanddlingButton from '../../../common/form/formHanddlingButton';
import { useDispatch, useSelector } from 'react-redux';
import { resetProductBasicDetails, storeProductBasicDetails } from '../../../../routers/utilities/slice/productBasicDetailsSlice';
import { useEffect, useState } from 'react';

const ProductBasicDetailsForm = ({
  handleNextForm,
  setProductBasicDetails,
  productBasicDetails,
}) => {
  const [existingProductDetails, setExistingProductDetails] = useState({});
  const dispatch = useDispatch();
  const alreadyAddedProductDetails = useSelector(
    (state) => state.productDetails.product.ProductBasicDetails
  );

  useEffect(() => {
    setExistingProductDetails(alreadyAddedProductDetails);
  }, [alreadyAddedProductDetails]);

  //console.log({ existingProductDetails });

  const handleInputField = (event) => {
    const { name, value } = event.target;
    setProductBasicDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(storeProductBasicDetails(productBasicDetails));
    handleNextForm();
  };

  const resetBasicDetailsForm = () => {
    dispatch(resetProductBasicDetails());
  };

  return (
    <div>
      <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center p-6">
          Product Basic Details
        </h1>

        <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={resetBasicDetailsForm}>Reset</button>

        <InputFields
          type="text"
          name="product_name"
          value={existingProductDetails.product_name}
          labelName="Product Name"
          handleInputField={handleInputField}
        />

        <InputFields
          type="text"
          name="product_description"
          value={existingProductDetails.product_description}
          labelName="Product Description"
          handleInputField={handleInputField}
        />

        <InputFields
          type="number"
          name="product_price"
          value={existingProductDetails.product_price}
          labelName="Product Price"
          handleInputField={handleInputField}
        />

        <InputFields
          type="number"
          name="product_quantity"
          value={existingProductDetails.product_quantity}
          labelName="Product Quantity"
          handleInputField={handleInputField}
        />

        <FormHanddlingButton
          name="Fil Waranty Details"
          color="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
        />
      </form>
    </div>
  );
};

ProductBasicDetailsForm.propTypes = {
  handleNextForm: PropTypes.func.isRequired,
  setProductBasicDetails: PropTypes.func.isRequired,
  productBasicDetails: PropTypes.object.isRequired,
};

export default ProductBasicDetailsForm;

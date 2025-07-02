import PropTypes from 'prop-types';
import InputFields from '../../../common/form/inputFileds';
import FormHanddlingButton from '../../../common/form/formHanddlingButton';
import { useDispatch, useSelector } from 'react-redux';
import { storeProductBasicDetails } from '../../../../routers/utilities/slice/productBasicDetailsSlice';
import { useEffect, useState } from 'react';

const ProductBasicDetailsForm = ({
  handleNextForm,
  setProductBasicDetails,
  productBasicDetails,
}) => {
  const [existingProductDetails, setExistingProductDetails] = useState({});
  const dispatch = useDispatch();
  const alreadyAddedProductDetails = useSelector(
    (state) => state.productDetails.ProductBasicDetails
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

  return (
    <div>
      <form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center p-6">
          Product Basic Details
        </h1>
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

import PropTypes from 'prop-types';
import InputFields from '../../../common/form/inputFileds';
import FormHanddlingButton from '../../../common/form/formHanddlingButton';

const ProductBasicDetailsForm = ({ handleNextForm }) => {
  return (
    <div>
      <form class="max-w-sm mx-auto">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center p-6">
          Product Basic Details
        </h1>
        <InputFields type="text" name="product_name" labelName="Product Name" />

        <InputFields
          type="text"
          name="product_description"
          labelName="Product Description"
        />

        <InputFields
          type="number"
          name="product_price"
          labelName="Product Price"
        />

        <InputFields
          type="number"
          name="product_quantity"
          labelName="Product Quantity"
        />

        <FormHanddlingButton onClick={handleNextForm} name="Fil Waranty Details" color="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700" />
        
        
      </form>
    </div>
  );
};

ProductBasicDetailsForm.propTypes = {
  handleNextForm: PropTypes.func.isRequired,
};

export default ProductBasicDetailsForm;

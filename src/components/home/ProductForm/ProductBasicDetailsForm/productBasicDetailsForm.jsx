import PropTypes from 'prop-types';
import InputFields from '../../../common/form/inputFileds';

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

        <button
          type="button"
          onClick={handleNextForm}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Fil Waranty Details
        </button>
      </form>
    </div>
  );
};

ProductBasicDetailsForm.propTypes = {
  handleNextForm: PropTypes.func.isRequired,
};

export default ProductBasicDetailsForm;

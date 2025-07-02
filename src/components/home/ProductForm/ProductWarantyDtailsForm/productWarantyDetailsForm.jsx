import PropTypes from 'prop-types';
import InputFields from '../../../common/form/inputFileds';
import { Form } from 'react-router';
import FormHanddlingButton from '../../../common/form/formHanddlingButton';

const ProductWarantyDetailsForm = ({ handleBackForm }) => {
  return (
    <div>
      <form class="max-w-sm mx-auto">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center p-6">
          Product Waranty Details
        </h1>

    <button type='button' className='text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={handleBackForm}>Go Back</button>
        <InputFields
          type="text"
          name="waranty_period"
          labelName="Waranty Period"
        />

        <InputFields
          type="Date"
          name="waranty_start_date"
          labelName="Waranty Start Date"
        />

        <InputFields
          type="Date"
          name="waranty_end_date"
          labelName="Waranty End Date"
        />

        
      </form>
    </div>
  );
};

ProductWarantyDetailsForm.propTypes = {
  handleBackForm: PropTypes.func.isRequired,
};

export default ProductWarantyDetailsForm;

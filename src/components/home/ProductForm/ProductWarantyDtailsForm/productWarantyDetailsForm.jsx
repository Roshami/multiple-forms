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

        <FormHanddlingButton onClick={handleBackForm} name="Back to Product Basic Details" color="bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700" />
      </form>
    </div>
  );
};

ProductWarantyDetailsForm.propTypes = {
  handleBackForm: PropTypes.func.isRequired,
};

export default ProductWarantyDetailsForm;

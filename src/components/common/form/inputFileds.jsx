import PropTypes from 'prop-types';

const InputFields = ({ type, name,value , labelName, handleInputField }) => {
  return (
    <div class="mb-5">
      <label
        for={name}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelName}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={handleInputField}
        defaultValue={value || ''}
        class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
        required
      />
    </div>
  );
};

InputFields.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  handleInputField: PropTypes.func.isRequired,
};

export default InputFields;

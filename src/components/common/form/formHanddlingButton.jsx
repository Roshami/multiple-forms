import PropTypes from "prop-types";

const FormHanddlingButton = ({ name, color}) => {
    return (
        <div>
            <button
          type="submit"
          
          class={`text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ` + color}
        >
          {name}
        </button>
        </div>
    )
}

FormHanddlingButton.propTypes = {
    
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };

export default FormHanddlingButton
const FormHanddlingButton = ({onClick, name, color}) => {
    return (
        <div>
            <button
          type="button"
          onClick={onClick}
          class={`text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ` + color}
        >
          {name}
        </button>
        </div>
    )
}

export default FormHanddlingButton
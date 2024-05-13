const classMap = {
  primary: "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs",
  secondary: "border border-blue-500 hover:bg-gray-200 py-2 px-4 rounded active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 text-xs",
  danger: "bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 text-xs",
  warning: "bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded active:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-600 text-xs",
};

const Button = (
  {
    text,
    onClick,
    type = "primary"
  }
) => {
  return (
    <button
      className={classMap[type] + " w-64"}
      onClick={onClick}
    >
      {text}
    </button>
  )
};

export default Button;
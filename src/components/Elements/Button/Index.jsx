const Button = (props) => {
  const {
    children = "Button",
    classname = "bg-red-700",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={` h-10 px-6 font-semibold rounded-md ${classname} shadow rounded text-white w-full`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;

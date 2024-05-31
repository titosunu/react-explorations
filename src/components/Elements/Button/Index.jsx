const Button = (props) => {
  const { children = "Button", classname = "bg-red-700" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} shadow rounded text-white w-full`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;

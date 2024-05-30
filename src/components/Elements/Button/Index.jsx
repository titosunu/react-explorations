const Button = (props) => {
  const { children = "Button", variant = "bg-red-700" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} shadow rounded text-white w-full`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;

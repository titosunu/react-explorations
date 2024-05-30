import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, desc, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 font-bold mb-2 text-3xl">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">{desc}</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-2 text-slate-500 text-center">
        Don't have an account ?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-2 text-slate-500 text-center">
        Already have an account ?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Sign in
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;

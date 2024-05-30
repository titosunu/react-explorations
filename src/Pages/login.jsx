import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login" desc="Welcome, Please Login">
      <FormLogin />
      <p className="text-sm mt-2 text-slate-500 text-center">
        Don't have an account ?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign up
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;

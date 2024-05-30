import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts
      title="Register"
      desc="Welcome, Please Input your data to create Account"
    >
      <FormRegister />
      <p className="text-sm mt-2 text-slate-500 text-center">
        have an account ?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Sign in
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;

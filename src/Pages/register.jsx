import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <AuthLayouts
      title="Register"
      desc="Welcome, Please Input your data to create Account"
      type="register"
    >
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;

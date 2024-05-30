import InputForm from "../Elements/Form/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        name="email"
        label="Email"
        type="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        name="password"
        label="Password"
        type="password"
        placeholder="********"
      />
      <Button variant="bg-slate-900">Sign In</Button>
    </form>
  );
};

export default FormLogin;

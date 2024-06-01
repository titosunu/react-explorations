import InputForm from "../Elements/Form/Index";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        name="fullname"
        label="Full Name"
        type="text"
        placeholder="Full Name"
      />
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
      <InputForm
        name="confirmpassword"
        label="Confirm Password"
        type="password"
        placeholder="********"
      />
      <Button classname="bg-slate-900">Sign up</Button>
    </form>
  );
};

export default FormRegister;

import InputForm from "../Elements/Form/Index";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        name="email"
        label="Email"
        type="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        name="firstname"
        label="First Name"
        type="text"
        placeholder="First Name"
      />
      <InputForm
        name="lastname"
        label="Last Name"
        type="text"
        placeholder="Last Name"
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
      <Button variant="bg-slate-900">Sign up</Button>
    </form>
  );
};

export default FormRegister;

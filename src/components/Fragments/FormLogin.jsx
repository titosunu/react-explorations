import InputForm from "../Elements/Form/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
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
      <Button classname="bg-slate-900" type="submit">
        Sign In
      </Button>
    </form>
  );
};

export default FormLogin;

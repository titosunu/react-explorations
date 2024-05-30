import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5 text-xl">Sorry unexpected error has accured</p>
      <p>{err.statusText || err.message}</p>
    </div>
  );
};

export default ErrorPage;

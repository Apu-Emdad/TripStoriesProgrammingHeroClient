import React from "react";
import "./Login.css";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const { signInUsingGoogle, isLoading, user, loginUser } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    loginUser(data.email, data.password, location, history);
    reset();
  };

  const redirect_uri = location.state?.from || "/home#services";

  const handleGoogleLogIn = () => {
    signInUsingGoogle();
    if (!isLoading) {
      history.push(redirect_uri);
    }
  };

  return (
    <div className="login-bg login-form">
      <h1 className="mx-auto text-light ">Please Log In</h1>
      {/* login with email start */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
        <input {...register("email", { required: true })} placeholder="email" />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="password"
        />

        <Button type="submit" className="btn btn-danger">
          Log In
        </Button>
      </form>
      {/* login with email end */}
      <h4 className="mx-auto text-light ">Or,</h4>
      <button className="btn btn-danger" onClick={handleGoogleLogIn}>
        Log in with Google
      </button>
      <h6 className="mx-auto text-light my-2 ">
        Don't have an account? Please <Link to="/register">Register</Link>
      </h6>

      <img
        src="https://i.imgflip.com/m2257.jpg"
        alt=""
        className="d-block w-50 mx-auto"
      />
    </div>
  );
};

export default Login;

import Button from "@restart/ui/esm/Button";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const history = useHistory();
  const { isLoading, registerUser } = useAuth();

  const onSubmit = (data, e) => {
    console.log(data);
    registerUser(data.email, data.password, data.name, history);
    reset();
  };
  return (
    <div className="login-bg login-form">
      <h1 className="mx-auto text-light ">Please Register</h1>
      {/* sign up with email start */}
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="name"
        />
        <input
          {...register("email", { required: true, maxLength: 20 })}
          placeholder="email"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="password"
        />

        <Button type="submit" className="btn btn-primary">
          Register
        </Button>
      </form>
      {/* login with email end */}
    </div>
  );
};

export default Register;

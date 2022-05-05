import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    if (errors.email || errors.password) {
        if (errors?.email) {
            if (errors.email.type === "required") {
                errors.email.message = "Email is required";
            }
            if (errors.email.type === "pattern") {
                errors.email.message = "Please give a valid email";
            }
            toast.error(`${errors.email.message}`, { id: "emailError" });

        }
        if (errors?.password) {
            if (errors.password.type === "required") {
                errors.password.message = "Password is required";
            }
            if (errors.password.type === "minLength") {
                errors.password.message = "Please use atleast 8 character in your password";
            }
            toast.error(`${errors.password.message}`, { id: "passError" })
        }

    }

    const onSubmit = data => {

    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="block p-6 rounded-lg shadow-lg bg-white w-full md:w-2/4 lg:w-1/4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-6">
                        <label htmlFor="email" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                        <input {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} type="email" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email"
                            aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="password" className="form-label inline-block mb-2 text-gray-700">Password</label>
                        <input {...register("password", { required: true, minLength: 8 })} type="password" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="password"
                            placeholder="Password" />
                    </div>
                    <div className="flex justify-start items-center mb-6">
                        <button className="text-blue-600 hover:text-blue-900">Forgot
                            password?</button>
                    </div>
                    <input type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-900
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-600 hover:shadow-lg" value="log in" />
                    <p className="text-gray-800 mt-6 text-center">Not a member? <button onClick={() => { navigate("/register") }}
                        className="text-blue-600 hover:text-blue-900">Register</button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
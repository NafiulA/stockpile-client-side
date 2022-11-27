import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Newsletter = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    if (errors?.email) {
        if (errors.email.type === "required") {
            errors.email.message = "Email is required";
        }
        toast.error(`${errors.email.message}`, { id: "emailError" });

    }
    const onSubmit = data => {
        const body = { email: data.email };
        fetch("https://stockpile.onrender.com/newsletterEmails", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Thank you for subscribing to our newsletter!", { id: "newsletter" })
                }
            })
    }

    return (
        <div className='footerSec'>
            <div className="px-6 pt-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid md:grid-cols-3 gird-cols-1 gap-4 justify-center items-center">
                        <div className="md:ml-auto md:mb-6">
                            <p className="text-gray-800">
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>

                        <div className="md:mb-6">
                            <input {...register("email", { required: true })}
                                type="email"
                                className="
              form-control
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                                id="exampleFormControlInput1"
                                placeholder="Email address" />
                        </div>

                        <div className="md:mr-auto mb-6">
                            <input type="submit" className="inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg" value="Subscribe"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
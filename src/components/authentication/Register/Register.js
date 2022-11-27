import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import Loading from '../../shared/Loading/Loading';
import { sendEmailVerification } from "firebase/auth";
const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
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
        if (data.password === data.confirmPassword) {
            createUserWithEmailAndPassword(data.email, data.password);
        }
        else {

            toast.error("Confirm your password", { id: "createError" });
        }
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        toast.error(`${error.message}`, { id: "firebaseError" });
    }

    const handleGoogleLogin = () => {
        signInWithGoogle();
        if (googleLoading) {
            return <Loading></Loading>
        }
        if (googleError) {
            toast.error(`${googleError.message}`, { id: "googleError" })
        }
    }
    const handleFacebookLogin = () => {
        signInWithFacebook();
        if (facebookLoading) {
            return <Loading></Loading>
        }
        if (facebookError) {
            toast.error(`${facebookError.message}`, { id: "facebookError" })
        }
    }
    const handleGithubLogin = () => {
        signInWithGithub();
        if (githubLoading) {
            return <Loading></Loading>
        }
        if (githubError) {
            toast.error(`${githubError.message}`, { id: "githubError" })
        }
    }
    if (user) {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                toast.success("Verification Email Sent! Please Verify.", { id: "verifyEmail" })
            });
    }
    if (user || googleUser || facebookUser || githubUser) {
        toast.success("Login Successful", { id: "login" })

        if (user) {
            fetch('https://stockpile.onrender.com/gettoken', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ email: user.user.email })
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("accessToken", data.jwtToken);
                    navigate(from, { replace: true });
                })
        }
        if (googleUser) {
            fetch('https://stockpile.onrender.com/gettoken', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ email: googleUser.user.email })
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("accessToken", data.jwtToken);
                    navigate(from, { replace: true });
                })
        }
        if (facebookUser) {
            fetch('https://stockpile.onrender.com/gettoken', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ email: facebookUser.user.email })
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("accessToken", data.jwtToken);
                    navigate(from, { replace: true });
                })
        }
        if (githubUser) {
            fetch('https://stockpile.onrender.com/gettoken', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ email: githubUser.user.email })
            })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("accessToken", data.jwtToken);
                    navigate(from, { replace: true });
                })
        }

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
                    <div className="form-group mb-6">
                        <label htmlFor="confirmPassword" className="form-label inline-block mb-2 text-gray-700">Confirm Password</label>
                        <input {...register("confirmPassword")} type="password" className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="confirmPassword"
                            placeholder="Confirm Password" />
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
      hover:bg-blue-600 hover:shadow-lg" value="Register" />
                    <p className="text-gray-800 mt-6 text-center">Have an Account? <button onClick={() => { navigate("/login") }}
                        className="text-blue-600 hover:text-blue-900">LogIn</button>
                    </p>
                </form>
                <div className='py-4 flex justify-center items-center'>
                    <hr className='w-1/3 border-2 border-gray-300' />
                    <p className='px-4 py-2'>Or</p>
                    <hr className='w-1/3 border-2 border-gray-300' />
                </div>
                <div className="flex justify-center items-center flex-wrap space-x-2">

                    {/* google button */}
                    <button onClick={handleGoogleLogin} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" style={{ backgroundColor: "#ea4335" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-4 h-4">
                            <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                        </svg>
                    </button>

                    {/* facebook button */}
                    <button onClick={handleFacebookLogin} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" style={{ backgroundColor: "#1877f2" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                            <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                        </svg>
                    </button>

                    {/* Github button */}
                    <button onClick={handleGithubLogin} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" style={{ backgroundColor: "#333" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-4 h-4">
                            <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
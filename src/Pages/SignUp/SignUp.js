import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import social from '../../images/social/google.png'
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    let errorMessage;
    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }
    if (error || gError || updateError) {
        errorMessage = <p className='text-red-800'>{error?.message || gError?.message || updateError?.message}</p>
    }
    if (user || gUser) {
        console.log(gUser);
    }
    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        navigate('/');

    }
    return (
        <div className='flex h-screen justify-center items-center'>


            <div class="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* name */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }

                                })} />
                            <label class="label">
                                {errors.name?.type === 'required' && <span className='label-text-alt text-red-800 '> {errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span className='label-text-alt text-red-800 '> {errors.name.message}</span>}
                            </label>
                        </div>



                        {/* email */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: "Enter a valid email"
                                    }

                                })} />
                            <label class="label">
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-800 '> {errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-800 '> {errors.email.message}</span>}
                            </label>
                        </div>



                        {/* password */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters!"
                                    }

                                })} />
                            <label class="label">
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-800 '> {errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-800 '> {errors.password.message}</span>}
                            </label>
                        </div>
                        {errorMessage}
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value="Sign Up" />
                    </form>

                    <p className='mb-4 text-xl'>
                        Already have any account? <Link className='text-primary hover:text-gray-900' to="/login">Login to your account</Link>
                    </p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline hover:btn-primary">  <img className='mx-2' style={{ width: '20px' }} src={social} alt="" /> Sign in with google</button>

                </div>
            </div>

        </div>
    );
};

export default SignUp;
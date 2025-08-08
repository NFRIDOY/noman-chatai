import axios from 'axios';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContex } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router';

export default function Reg() {
    let navigate = useNavigate();
    const { user, setUser } = useContext(AuthContex)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log("data", data)
        const res = await axios.post("http://10.10.13.26:9001/register/", data)
        if (!res?.data) {
            console.log("Something Went Wrong");
        }
        localStorage.setItem("access", res?.data?.access);
        localStorage.setItem("refresh", res?.data?.refresh);

        setUser(true)
        console.log("user", user)
        console.log("Res?.data", res?.data)

        if (!user) {
            navigate('/login')
        }
    };
    console.log("userContext", user, setUser)

    return (
        <div className='flex justify-center items-center mt-[100px]'>
            <div className='border-2 w-[500px] p-10 rounded-2xl'>
                <h1 className='text-4xl sm:text-5xl font-bold text-gray-900  '>Sign Up to Account</h1>
                <h5 className='mt-6 text-sm text-gray-600  '>Sign Up below to access your account</h5>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-6 '>
                    <div>
                        <div>Email</div>
                        <input {...register("email", { required: true })} className='w-full' />
                        {errors.emailRequired && <span>This field is required</span>}
                    </div>

                    <div>
                        {/* include validation with required or other standard HTML validation rules */}
                        <div>Password</div>
                        <input {...register("password", { required: true })} className='w-full' type='password' />
                        {/* errors will return when field validation fails  */}
                        {errors.passwordRequired && <span>This field is required</span>}
                    </div>

                    <input type="submit" className='w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' />
                </form>
                <div className='mt-2'>
                    <p className='font-semibold text-sm text-slate-500 text-left'>Don't have an account?
                        <Link to={'/login'} className='underline' >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

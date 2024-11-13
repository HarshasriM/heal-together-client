import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LoginForm() {
    return (
        <div className='p-20'>
            <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        color: "#198a76",
                        fontFamily: '"Anton", sans-serif',
                        fontWeight: 600,
                        fontSize: { xs: '30px', md: '40px' },
                        textShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                        fontStyle: 'normal',
                        margin: '30px 0px',
                        textAlign: "start",
                    }}
                >
                    Login Or Sign In
                </Typography>
            <form  >
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12 ">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2 ">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-green-light ">
                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            placeholder="janesmith"
                                            autoComplete="username"
                                            className="block flex-1 border-0 bg-transparent py-3 pl-5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/3"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder='janesmith@gmail.com'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="password"
                                        autoComplete="email"
                                        placeholder='* * * * * * * * * * * * * * *'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className='col-span-full'>
                                <button className="px-3 md:px-9 py-3 font-bold text-md text-white bg-custom-green-dark rounded-full  hover:shadow-lg hover:shadow-custom-green-light">
                                    submit
                                </button>

                            </div>
                            <div className='sm:col-span-4'>
                                <b>Don't you have an account ? </b>
                                <Link to="/signup" className='text-custom-green-light font-bold text-xl'> Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}



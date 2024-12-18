import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Navbar from '../Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function SignUpForm() {
    const [formData,setFormData] = useState({
        username :"",
        firstName : "",
        lastName : "",
        email:"",
        password:"",
        phone:"",
        country:"",
        city:"",
    })
    const signupUrl = "http://localhost:4000/api/user/signup";
    const navigate = useNavigate();
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post(signupUrl,formData);
            const {user} = response.data.data;
            alert("signup Successfull",user.username);
            navigate("/login");
        }
        catch(error){
            console.error("Login Failed:", error.response?.data || error.message);
            alert("Failed to Login: " + (error.response?.data?.message || error.message));
        }
    }
    return (
        <>
        
        <Navbar/>
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
                    Register Or Sign Up
                </Typography>
            <form className='' onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-custom-green-light sm:max-w-md">
                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            value = {formData.username}
                                            onChange={handleChange}
                                            placeholder="janesmith"
                                            autoComplete="username"
                                            className="block flex-1 border-0 bg-transparent py-3 pl-5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/3"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="first-name"
                                        name="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="last-name"
                                        name="lastName"
                                        type="text"
                                        value = {formData.lastName}
                                        onChange={handleChange}
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">
                                    Phone
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            
                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="country"
                                        name="country"
                                        type="text"
                                        value={formData.country}
                                        autoComplete="country"
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        value={formData.city}
                                        autoComplete="email"
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            {/* <div className="col-span-full">
                                <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                                    Cover photo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-500 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-400" />
                                        <div className="mt-4 flex text-sm/6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-custom-green-light focus-within:outline-none focus-within:ring-2 focus-within:ring-custom-green-light focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div> */}
                            <div className='col-span-full text-center'>
                                <button className="px-3 md:px-9 py-3 font-bold text-md text-white bg-custom-green-dark rounded-full  hover:shadow-lg hover:shadow-custom-green-light">
                                    submit
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </>

    )
}



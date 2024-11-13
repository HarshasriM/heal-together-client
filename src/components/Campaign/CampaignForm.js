import React from 'react';
import { Typography } from '@mui/material';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
function CampaignForm() {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        goalAmount: '',
        description: '',
        endDate: '',
        fullName: '',
        email: '',
        phoneNumber: '',
        location: '',
        bankDetails: '',
        supportingDocs: null,
        campaignImage: null,
        socialMediaLinks: '',
        storyVideo: null,
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add your form submission logic here
    };
    return (
        <div>
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
                Start a Campaign

            </Typography>
            <hr />
            <form className=''>
                {/* Campaign Details */}
                <div className='border-b border-custom-green-dark pb-12 mb-10'>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            color: "#51b78d",
                            fontFamily: '"Anton", sans-serif',
                            fontWeight: 600,
                            fontSize: { xs: '15px', md: '25px' },
                            textShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                            fontStyle: 'normal',
                            margin: '40px 0px 20px 0px',
                            textAlign: "start",
                        }}
                    >
                        Campaign Details
                    </Typography>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="sm:col-span-4">
                            <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                                Campaign Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="category" className="block text-sm/6 font-medium text-gray-900">
                                Campaign Category
                            </label>
                            <div className="mt-2">
                                <select
                                    id="category"
                                    name="category"
                                    autoComplete="category-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-green-light sm:max-w-xs sm:text-sm/6"
                                >
                                    <option>Medical</option>
                                    <option>Education</option>
                                    <option>Community Support</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="amount" className="block text-sm/6 font-medium text-gray-900">
                                Target Amount
                            </label>
                            <div className="mt-2">
                                <input
                                    id="amount"
                                    name="amount"
                                    type="number"
                                    autoComplete="given-amount"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div className="col-span-5">
                            <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                                Campaign Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={5}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-custom-green-light sm:text-sm/6"
                                    defaultValue={''}
                                />
                            </div>
                            <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about campiagn.</p>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="deadline" className="block text-sm/6 font-medium text-gray-900">
                                Deadline
                            </label>
                            <div className="mt-2">
                                <input
                                    id="deadline"
                                    name="deadline"
                                    type="Date"
                                    autoComplete="deadline"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Campaigner Details */}
                <div className='border-b border-custom-green-dark pb-12 mb-10'>
                    <div>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                color: "#51b78d",
                                fontFamily: '"Anton", sans-serif',
                                fontWeight: 600,
                                fontSize: { xs: '15px', md: '25px' },
                                textShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                                fontStyle: 'normal',
                                margin: '40px 0px 20px 0px',
                                textAlign: "start",
                            }}
                        >
                            Campaigner Details
                        </Typography>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
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
                                        name="last-name"
                                        type="text"
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
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Patient Details */}
                <div className='border-b border-custom-green-dark pb-12 mb-10'>
                    <div>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                color: "#51b78d",
                                fontFamily: '"Anton", sans-serif',
                                fontWeight: 600,
                                fontSize: { xs: '15px', md: '25px' },
                                textShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                                fontStyle: 'normal',
                                margin: '40px 0px 20px 0px',
                                textAlign: "start",
                            }}
                        >
                            Patient Details
                        </Typography>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <div className="sm:col-span-3">
                                <label htmlFor="patient-first-name" className="block text-sm/6 font-medium text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="patient-first-name"
                                        name="patient-first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="patient-last-name" className="block text-sm/6 font-medium text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="patient-last-name"
                                        name="patient-last-name"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="patient-age" className="block text-sm/6 font-medium text-gray-900">
                                    Patient Age
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="patient-age"
                                        name="patient-age"
                                        type="number"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="patient-disease" className="block text-sm/6 font-medium text-gray-900">
                                    Patient-disease
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="patient-disease"
                                        name="patient-disease"
                                        type="text"
                                        autoComplete="text"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="hospital-name" className="block text-sm/6 font-medium text-gray-900">
                                    Hospital Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="hospital-name"
                                        name="hospital-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="relation" className="block text-sm/6 font-medium text-gray-900">
                                    Relation of patient
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="relation"
                                        name="relation"
                                        type="text"
                                        autoComplete="given-name"
                                        placeholder='ex : sibling'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <fieldset>
                                <legend class="text-sm/6 font-semibold text-gray-900">Is Patient Admited ?</legend>
                                <div class="mt-6  flex justify-evenly gap-10" >
                                    <div class="flex items-center gap-x-3">
                                        <input id="patient-admited" name="patient-admition" type="radio" className="border-gray-300 text-custom-green-light focus:ring-custom-green-light" />
                                            <label for="patient-admited" class="block text-sm/6 font-medium text-gray-900">Admited</label>
                                    </div>
                                    <div class="flex items-center  gap-x-3">
                                        <input id="patient-not-admited" name="patient-admition" type="radio" className="border-gray-300 text-custom-green-light focus:ring-custom-green-light" />
                                            <label for="patient-not-admited" class="block text-sm/6 font-medium text-gray-900">Not Admited</label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
                {/* Bank Details */}
                <div className='border-b border-custom-green-dark pb-12 mb-10'>
                    <div>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                color: "#51b78d",
                                fontFamily: '"Anton", sans-serif',
                                fontWeight: 600,
                                fontSize: { xs: '15px', md: '25px' },
                                textShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                                fontStyle: 'normal',
                                margin: '40px 0px 20px 0px',
                                textAlign: "start",
                            }}
                        >
                            Bank Details
                        </Typography>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="account-holder" className="block text-sm/6 font-medium text-gray-900">
                                    Account Holder Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="account-holder"
                                        name="account-holder"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="account-type" className="block text-sm/6 font-medium text-gray-900">
                                    Account Type
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="account-type"
                                        name="account-type"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="bank-name" className="block text-sm/6 font-medium text-gray-900">
                                    Bank Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="bank-name"
                                        name="bank-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="bank-branch" className="block text-sm/6 font-medium text-gray-900">
                                    Bank Branch
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="bank-branch"
                                        name="bank-branch"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="account-number" className="block text-sm/6 font-medium text-gray-900">
                                    Account Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="account-number"
                                        name="account-number"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="ifsc-code" className="block text-sm/6 font-medium text-gray-900">
                                    IFSC Code
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="ifsc-code"
                                        name="ifsc-code"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="upi-id" className="block text-sm/6 font-medium text-gray-900">
                                    Your UPI ID
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="upi-id"
                                        name="upi-id"
                                        type="text"
                                        autoComplete="given-name"
                                        placeholder='Add Your UPI ID'
                                        className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Additional Information */}
                <div className='border-b border-custom-green-dark pb-12 mb-10'>
                    <div>
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                color: "#51b78d",
                                fontFamily: '"Anton", sans-serif',
                                fontWeight: 600,
                                fontSize: { xs: '15px', md: '25px' },
                                textShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                                fontStyle: 'normal',
                                margin: '40px 0px 20px 0px',
                                textAlign: "start",
                            }}
                        >
                            Additional Information
                        </Typography>
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-3">
                                <label htmlFor="supporting-docs" className="block text-sm/6 font-medium text-gray-900">
                                    Supporting Docs
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
                            </div>

                            <div className="col-span-3">
                                <label htmlFor="" className="block text-sm/6 font-medium text-gray-900">
                                    Campaign Image
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
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="social-media-links" className="block text-sm/6 font-medium text-gray-900">
                                    Add Social media Links
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="social-media-links"
                                        name="social-media-links"
                                        type="url"
                                        autoComplete="given-name"
                                        placeholder='Add Your Social Media Links'
                                        className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-full text-center'>
                    <button className="w-96 px-3 md:px-9 py-3 font-bold text-md text-white bg-custom-green-dark rounded-full  hover:shadow-lg hover:shadow-custom-green-light">
                        submit campaign
                    </button>

                </div>
            </form>
        </div>
    );
}

export default CampaignForm;
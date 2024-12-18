import React from 'react';
import { Typography } from '@mui/material';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
function CampaignForm() {
    const [formData, setFormData] = useState({
        campaignTitle: '',
        campaignCategory: '',
        targetAmount: '',
        campaignDescription: '',
        deadline: '',
        campaignerDetails: '', // User ID from backend
        patientDetails: {
          firstName: '',
          lastName: '',
          patientAge: '',
          patientDisease: '',
          hospitalName: '',
          relationToPatient: '',
          isPatientAdmitted: false,
        },
        bankDetails: {
          accountHolderName: '',
          accountType: '',
          bankName: '',
          bankBranch: '',
          accountNumber: '',
          ifscCode: '',
          upiId: '',
        },
        additionalInformation: {
          campaignImage: null,
          supportingDocs: [],
          socialMediaLinks: [''],
        },
      });
    

      const handleChange = (e, section, field) => {
        const { name, value, type, files, checked } = e.target;
    
        if (section) {
          setFormData((prev) => ({
            ...prev,
            [section]: {
              ...prev[section],
              [field]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value,
            },
          }));
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    

    // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const payload = { ...formData };

    //   const response = await axios.post('/api/campaigns', payload, {
    //     headers: { 'Content-Type': 'application/json' },
    //   });
    //   console.log(response.data);
    //   alert('Campaign created successfully!');
    // } catch (error) {
    //   console.error('Error creating campaign:', error);
    //   alert('Failed to create campaign');
    // }
    console.log(formData)
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
            <form onSubmit={handleSubmit} className=''>
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
                            <label htmlFor="campaignTitle" className="block text-sm/6 font-medium text-gray-900">
                                Campaign Title
                            </label>
                            <div className="mt-2">
                                <input
                                    id="campaignTitle"
                                    name="campaignTitle"
                                    type="text"
                                    autoComplete="given-name"
                                    value={formData.campaignTitle}
                                    onChange={handleChange} 
                                    required
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
                                    name="campaignCategory"
                                    autoComplete="category-name"
                                    value={formData.campaignCategory}
                                    onChange={handleChange} 
                                    required
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
                                    name="targetAmount"
                                    type="number"
                                    autoComplete="given-amount"
                                    value={formData.targetAmount} 
                                    onChange={handleChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div className="col-span-5">
                            <label htmlFor="campaignDescription" className="block text-sm/6 font-medium text-gray-900">
                                Campaign Description
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="campaignDescription"
                                    name="campaignDescription"
                                    rows={5}
                                    value={formData.campaignDescription}
                                    onChange={handleChange}
                                    required
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
                                    value={formData.deadline}
                                    onChange={handleChange} 
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                />
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
                                        name="firstName"
                                        type="text"
                                        autoComplete="given-name"
                                        onChange={(e) => handleChange(e, 'patientDetails', 'firstName')} 
                                        required
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
                                        name="lastName"
                                        type="text"
                                        autoComplete="family-name"
                                        onChange={(e) => handleChange(e, 'patientDetails', 'lastName')} 
                                        required
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
                                        name="patientAge"
                                        type="number"
                                        autoComplete="email"
                                        onChange={(e) => handleChange(e, 'patientDetails', 'patientAge')} 
                                        required
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
                                        name="patientDisease"
                                        type="text"
                                        autoComplete="text"
                                        onChange={(e) => handleChange(e, 'patientDetails', 'patientDisease')} 
                                        required
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
                                        name="hospitalName"
                                        type="text"
                                        autoComplete="given-name"
                                        onChange={(e) => handleChange(e, 'patientDetails', 'hospitalName')} 
                                        required
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
                                        name="relationToPatient"
                                        type="text"
                                        autoComplete="given-name"
                                        onChange={(e) => handleChange(e, 'patientDetails', 'relationToPatient')} 
                                        required
                                        placeholder='ex : sibling'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            <fieldset>
                                <legend class="text-sm/6 font-semibold text-gray-900">Is Patient Admited ?</legend>
                                <div class="mt-6  flex justify-evenly gap-10" >
                                    <div class="flex items-center gap-x-3">
                                        <input id="patient-admited" name="isPatientAdmitted" type="radio" className="border-gray-300 text-custom-green-light focus:ring-custom-green-light"  onChange={(e) => handleChange(e, 'patientDetails', 'isPatientAdmitted')} />
                                            <label for="patient-admited" class="block text-sm/6 font-medium text-gray-900">Admited</label>
                                    </div>
                                    <div class="flex items-center  gap-x-3">
                                        <input id="patient-not-admited" name="isPatientAdmitted" type="radio" className="border-gray-300 text-custom-green-light focus:ring-custom-green-light"  onChange={(e) => handleChange(e, 'patientDetails', 'isPatientAdmitted')} />
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
                                        name="accountHolderName"
                                        type="text"
                                        autoComplete="given-name"
                                        onChange={(e) => handleChange(e, 'bankDetails', 'accountHolderName')} 
                                        required
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
                                        name="accountType"
                                        type="text"
                                        autoComplete="given-name"
                                        onChange={(e) => handleChange(e, 'bankDetails', 'accountType')} 
                                        required
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
                                        name="bankName"
                                        type="text"
                                        autoComplete="given-name"
                                        onChange={(e) => handleChange(e, 'bankDetails', 'bankName')} 
                                        required
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
                                        name="bankBranch"
                                        type="text"
                                        autoComplete="given-name"
                                        onChange={(e) => handleChange(e, 'bankDetails', 'bankBranch')} 
                                        required
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
                                        name="accountNumber"
                                        type="text"
                                        autoComplete="given-name"
                                        onChange={(e) => handleChange(e, 'bankDetails', 'accountNumber')} 
                                        required
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
                                        name="ifscCode"
                                        type="text"
                                        autoComplete="given-name"
                                        onChange={(e) => handleChange(e, 'bankDetails', 'ifscCode')} 
                                        required
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
                                        name="upiId"
                                        type="text"
                                        autoComplete="given-name"
                                        placeholder='Add Your UPI ID'
                                        onChange={(e) => handleChange(e, 'bankDetails', 'upiId')} 
                                        required
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
                                                htmlFor="supportingDocs"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-custom-green-light focus-within:outline-none focus-within:ring-2 focus-within:ring-custom-green-light focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="supportingDocs" name="supportingDocs" type="file" className="sr-only"  multiple onChange={(e) => handleChange(e, 'additionalInformation', 'supportingDocs')} required />
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
                                                htmlFor="campaignImage"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-custom-green-light focus-within:outline-none focus-within:ring-2 focus-within:ring-custom-green-light focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="campaignImage" name="campaignImage" type="file" className="sr-only"  onChange={(e) => handleChange(e, 'additionalInformation', 'campaignImage')} required />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="socialMediaLinks" className="block text-sm/6 font-medium text-gray-900">
                                    Add Social media Links
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="socialMediaLinks"
                                        name="socialMediaLinks"
                                        type="url"
                                        autoComplete="given-name"
                                        placeholder='Add Your Social Media Links'
                                        onChange={(e) => handleChange(e, 'additionalInformation', 'socialMediaLinks')}
                                        required
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
import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import axios from 'axios';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 12,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
        }),
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#51b78d',
        ...theme.applyStyles('dark', {
            backgroundColor: '#198a76',
        }),
    },
}));



function SingleCampaign() {
    const { id } = useParams();
    const [campaign, setCampaign] = useState(null);
    const campaignUrl = "http://localhost:4000/api/campaigns";

    const fetchCampaign = useCallback(async () => {
        try {
            // const response = await fetch('/campaigns.json');
            // const data = await response.json();
            // const campaignId = Number(id);
            // const foundCampaign = data.find((item) => Number(item.id) === campaignId);

            // if (foundCampaign) {
            //     setCampaign(foundCampaign);
            // }
            const response = await axios.get(`${campaignUrl}/${id}`);
            setCampaign(response.data.data);
            
        } catch (err) {
            console.error('Error fetching campaign data:', err);
        }
    }, [id]);

    useEffect(() => {
        if (!campaign) fetchCampaign();
    }, [campaign, fetchCampaign]);

    return (
        campaign && (
            <div className='pt-20 px-14'>
                <h2 className='m-4 text-center text-4xl text-gray-700  font-bold'>{campaign.campaignTitle}</h2>
                <div className='flex gap-10'>
                    <div>
                        <img className="m-3 rounded-lg" src={campaign.additionalInformation.campaignImage} alt="campaign" />
                    </div>
                    <div className='flex-1'>
                        <Link to={`/donate/${campaign._id}`}>
                            <button className="my-4 text-xl px-8 py-4 font-bold bg-custom-gradient rounded-full text-white" style={{ width: "100%" }}>
                                <span><i className="fa-solid fa-heart m-1"></i> Donate Now</span>
                            </button>
                        </Link>
                        <p className='m-5 text-lg text-gray-400'><span className='text-4xl font-bold text-black'> ₹ {campaign.collectedAmount} </span> <br /><br />raised of  <span className='text-black'> ₹ {campaign.targetAmount}</span> goal</p>
                        <BorderLinearProgress variant="determinate" value={((campaign.collectedAmount) / (campaign.targetAmount)) * 100} />
                        <div className='flex mt-5 gap-4'>
                            <div className='border px-3  py-2 border-gray-400 rounded-xl'>
                                <h1 className='text-lg text-gray-700'>Campaigner Details</h1>
                                <hr className="h-0.5 my-1 bg-gray-500" />
                                <p className='my-4 font-bold text-custom-green-light'>{campaign.campaignerDetails.firstName} {campaign.campaignerDetails.lastName}</p>
                                <p className='text-lg text-gray-700'><i class="fa-solid fa-location-dot"></i> {campaign.campaignerDetails.city} ,{campaign.campaignerDetails.country}</p>
                            </div>
                            <div className='border px-3 py-2 border-gray-400 rounded-xl'>
                                <h1 className='text-lg text-gray-700'>Beneficiary Details</h1>
                                <hr className="h-0.5 my-1 bg-gray-500" />
                                <p className='mt-4 mb-3 font-bold text-custom-green-light'>{campaign.patientDetails.firstName} {campaign.patientDetails.lastName}</p>
                                <p className='text-lg text-gray-700'><i class="fa-solid fa-user"></i> {campaign.patientDetails.relationToPatient}</p>
                                <p className='text-sm text-gray-700'>Patient is {campaign.patientDetails.isPatientAdmitted ? `admitted at ${campaign.patientDetails.hospitalName}` : "Not Admitted"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-10 mt-4'>
                    <div className='border rounded-lg shadow-xl px-4 py-1 flex items-center'>
                        <p className='text-md text-gray-500'>{`""  ${campaign.campaignDescription}  ""`}</p>
                    </div>
                    <div className='border shadow-xl px-4 py-5'>
                        <h1 className='text-xl text-gray-700'>Donate Via BankTransfer</h1>
                        <hr className="h-0.5 my-1 bg-gray-300" />
                        <div className='bg-gray-200 p-4'>
                            <p className='text-md text-gray-500'>Transfers to this account number would be allowed from Banks in India only.</p>
                            <p>-Bank Name  :  <span className='m-2 font-semibold text-custom-green-dark'>{campaign.bankDetails.bankName}</span></p>
                            <p>-Account Number  :  <span className='m-2 font-semibold text-custom-green-dark'>{campaign.bankDetails.accountNumber}</span></p>
                            <p>-Account Holder  :  <span className='m-2 font-semibold text-custom-green-dark'>{campaign.bankDetails.accountHolderName}</span></p>
                            <p>-Account Type  :  <span className='m-2 font-semibold text-custom-green-dark'>{campaign.bankDetails.accountType}</span></p>
                            <p>-IFSC Code  :  <span className='m-2 font-semibold text-custom-green-dark'>{campaign.bankDetails.ifscCode}</span></p>
                            <p>-UPI Id :  <span className='m-2 font-semibold text-custom-green-light'>{campaign.bankDetails.upiId}</span></p>
                        </div>
                    </div>
                </div>
                <h1 className='text-center text-4xl m-5 font-semibold text-custom-green-dark'>Hospital Documents</h1>
                <div className="w-full h-full border shadow mt-4 flex justify-evenly">
                    <img className="w-96 h-full" src={`${campaign.additionalInformation.supportingDocs[0]}`} alt="doc"></img>
                    <img className="w-96 h-full" src={`${campaign.additionalInformation.supportingDocs[1]}`} alt="doc"></img>
                </div>
                <div className='text-center'>
                    <Link to={`/donate`}>
                        <button className="my-4 text-xl px-8 py-4 font-bold bg-custom-green-light border rounded-full text-white hover:bg-gray-100 hover:border-custom-green-light hover:text-custom-green-dark">
                            <span><i className="fa-solid fa-heart m-1"></i> Donate Now</span>
                        </button>
                    </Link>
                </div>

            </div>
        )
    );
}

export default SingleCampaign;

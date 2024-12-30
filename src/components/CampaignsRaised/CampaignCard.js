import React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Link } from 'react-router-dom';

//linear progress
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
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

function CampaignCard({ campaign }) {
    console.log("campaign",campaign)
    
    return (
        <div key={campaign.id} className="border p-1 mb-4 w-64 rounded-2xl hover:shadow-custom-green-light hover:shadow-md" style={{height:"min-content"}}>
            <div>
                <img src={campaign.additionalInformation.campaignImage} alt="campaign" className='w-auto h-auto rounded-2xl' />
            </div>
            <div className='mt-4'>
                <h3 className="font-bold text-center m-1">{campaign.campaignTitle}</h3>
                <p className='text-center m-1 text-lg'>By  <span className='text-custom-green-dark font-bold'> {campaign.campaignerDetails?.firstName}</span></p>
                <p className='m-2 text-md text-gray-400'><span className='text-lg font-bold text-black'> ₹ {campaign.collectedAmount} </span> Raised Of ₹ {campaign.targetAmount}</p>
                <BorderLinearProgress variant="determinate" value={((campaign.collectedAmount) / (campaign.targetAmount)) * 100} />
                <p className='m-2 text-md text-custom-green-light font-bold'>Deadline: {campaign.deadline}</p>
                <div className="text-center">
                    <Link to={`/campaigns-raised/${campaign._id}`}>
                        <button className="my-1 px-4 py-2 font-bold bg-custom-gradient rounded-full text-gray-200 ">
                            Donate Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CampaignCard;
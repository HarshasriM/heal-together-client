import React from 'react';
import { Typography } from '@mui/material';
function CrowfundingHelp() {
    return (
        <div className='mb-20'>
            <section className='mt-14' style={{ backgroundColor: "#f7f7f7" }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        color: "#198a76",
                        fontFamily: '"Anton", sans-serif',
                        fontWeight: 600,
                        fontSize: { xs: '25px', md: '40px' },
                        textShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                        fontStyle: 'normal',
                        paddingTop: "30px",
                        textAlign: "center",
                    }}
                >
                    How Can Crowfunding Helps You
                </Typography>
                <p className=" p-0 md:p-10" style={{ textAlign: "center", fontSize: "18px", margin: " 2rem 2rem" }}>
                    Crowdfunding on Heal Together connects those in urgent medical need with compassionate donors, enabling quick financial support for essential treatments. Through easy sharing, campaigns reach a global audience, amplifying the chances of reaching funding goals. Heal Together prioritizes transparency, ensuring funds directly support beneficiaries’ medical expenses, which fosters trust and encourages more donations. Beyond financial help, the platform builds a supportive community where every donation, big or small, makes a difference. Crowdfunding not only provides immediate relief but also strengthens bonds of empathy and hope for recovery.
                </p>
            </section>
            <section style={{
                backgroundImage: "url(https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/background+New.jpg)",
            backgroundAttachment: "fixed",
            backgroundPosition: "50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"}}>

            <div className='w-full mt-8 ml-8 pl-5 pr-5 text-gray-300'>
                <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 flex-wrap'>
                    <div className='service-list-item text-xl m-5'>
                        <h1 className='p-2 text-3xl text-white'>250000 +</h1>
                        <p className='p-2 text-2xl'>Patients Funded</p>
                    </div>
                    <div className='service-list-item text-xl m-5'>
                        <h1 className='p-2 text-3xl text-white'>24/7</h1>
                        <p className='p-2 text-2xl'>Personalized Expert Assistance</p>
                    </div>
                    <div className='service-list-item text-xl m-5'>
                        <h1 className='p-2 text-3xl  text-white'><i className={`fa-solid fa-suitcase-medical m-4`} style={{color: "#ffffff",fontSize:"50px"}}></i></h1>
                        <p className='p-2 text-2xl'>Fast Review of Funds</p>
                    </div>
                    <div className='service-list-item text-xl m-5'>
                        <h1 className='p-3 text-3xl  text-white'>30 Lakh +</h1>
                        <p className='p-3 text-2xl'>Donar community</p>
                    </div>
                    <div className='service-list-item text-xl m-5'>
                        <h1 className='p-2 text-3xl  text-white'><i className={`fa-solid fa-users m-4`} style={{color: "#ffffff",fontSize:"50px"}}></i></h1>
                        <p className='p-2 text-2xl'>Indian Tax Benifits</p>
                    </div>
                    <div className='service-list-item text-xl m-5'>
                        <h1 className='p-2 text-3xl  text-white'> 100 %</h1>
                        <p className='p-2 text-2xl'>Transparency</p>
                    </div>

                </div>
            </div>

        </section>
        </div >
    );
}

export default CrowfundingHelp;
import React from 'react';
import { Typography } from '@mui/material';

function AboutContent() {
    return (
        <div>
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
                        margin: '40px',
                        textAlign: "center",
                    }}
                >
                    About Us
                </Typography>
                <p className=" p-0 md:p-5 md:pt-0 md:pb-0" style={{ textAlign: "center", fontSize: "18px", margin: " 2rem 2rem" }}>
                    <i><b className='text-2xl text-custom-green-light'>Heal Together</b>  is a compassionate and transparent crowdfunding platform focused on transforming lives by connecting those in urgent medical need with caring donors and charitable organizations. We were founded on the belief that when communities come together, no challenge is too great, and every individual has the right to hope, healing, and support.</i>
                </p>
                <p className=" p-0 md:p-5 md:pt-0 hidden md:block" style={{ textAlign: "center", fontSize: "18px", margin: " 2rem 2rem" }}>
                    <i>Our platform is designed to make fundraising for medical expenses simple, accessible, and impactful. Through Heal Together, people facing medical crises can share their stories, build a network of support, and achieve the funding they need for treatments, surgeries, and recovery journeys. By combining technology with empathy, we empower individuals and communities to join hands in solidarity, creating a ripple effect of kindness and compassion.</i>
                </p>
            </div>
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
                        margin: '10px',
                        textAlign: "center",
                    }}
                >
                    Our Mission
                </Typography>
                <p className=" p-0 md:p-5 md:pt-0" style={{ textAlign: "center", fontSize: "18px", margin: " 0rem 2rem" }}>
                    <i>To provide a reliable, transparent, and supportive platform where people can share their stories, <br />reach a wider audience, and receive the medical funding they need to overcome life’s health challenges.</i>
                </p>
                <p className=" p-0 md:p-5 md:pt-0 hidden md:block" style={{ textAlign: "center", fontSize: "18px", margin: " 0rem 2rem" }}>
                    <i>
                        <b className='text-2xl text-custom-green-light'>We strive to:</b> <br />

                        <b>Facilitate accessible healthcare : </b> We aim to bridge the financial gap in healthcare by making it easier<br /> for individuals to fundraise for critical medical expenses.<br></br>
                        <b>Promote community-driven support : </b> We believe that every act of generosity, no matter how small,<br /> can create lasting positive change. We enable people to come together,<br /> share, and give in a way that has a direct impact.<br />
                        <b>Encourage transparency and trust : </b> Honesty and accountability are the cornerstones of our platform.<br /> We ensure that every donation reaches the intended beneficiary to help build a trustworthy space for giving.
                    </i>
                </p>
            </div>
            <div className='flex flex-col md:flex-row justify-evenly items-center mt-10 mb-10 md:pt-20 md:pb-20  text-white' style={{
                backgroundImage: "url(https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/background+New.jpg)",
                backgroundAttachment: "fixed",
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <div>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            color: "white",
                            fontFamily: '"Anton", sans-serif',
                            fontWeight: 600,
                            fontSize: { xs: '30px', md: '35px' },
                            textShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                            fontStyle: 'normal',
                            margin: '10px',
                            textAlign: "center",
                        }}
                    >
                        Why We Exist ?
                    </Typography>
                    <p className=" p-0 md:p-5 md:pt-0" style={{ textAlign: "center", fontSize: "18px", margin: " 0rem 2rem" }}>
                        <i>
                            Healthcare costs can be burdensome, and in many cases, traditional financial avenues fall short. Heal Together was founded to bridge this gap by making medical support accessible through the generosity of everyday heroes—people who believe in making a difference.
                        </i>
                    </p>
                </div>
                <div className=' mt-3 '>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            color: "white",
                            fontFamily: '"Anton", sans-serif',
                            fontWeight: 600,
                            fontSize: { xs: '30px', md: '35px' },
                            textShadow: '0px 4px 10px rgba(0,0,0,0.2)',
                            fontStyle: 'normal',
                            margin: '10px',
                            textAlign: "center",
                        }}
                    >
                        How We Help ?
                    </Typography>
                    <p className=" p-0 md:p-5 md:pt-0" style={{ textAlign: "center", fontSize: "18px", margin: " 0rem 2rem" }}>
                        <i>
                            We make it easy for individuals to launch campaigns, share their stories, and connect with a global community of donors. Our commitment to transparency ensures that funds reach the intended beneficiaries, fostering trust and providing hope for recovery.
                        </i>
                    </p>
                </div>
            </div>
            <div className='mb-5'>
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
                        margin: '10px',
                        textAlign: "center",
                    }}
                >
                    Join Us
                </Typography>
                <p className=" p-0 md:p-5 md:pt-0" style={{ textAlign: "center", fontSize: "18px", margin: " 0rem 2rem" }}>
                    <i>At <b className='text-2xl text-custom-green-light'> Heal Together </b> , we believe that everyone can play a role in changing lives for the better. Whether you’re someone who wants to make a difference or you’re looking for assistance in a time of need, our platform welcomes you. Your contribution—be it a donation, a share on social media, or words of encouragement—can have a profound impact on someone’s life.<br />

                        We invite you to be part of our mission. Together, we can create a world where everyone has access to the medical care they need, where kindness is abundant, and where hope is never out of reach.
                    </i>
                </p>
                <p className=" p-0 md:p-5 md:pt-0" style={{ textAlign: "center", fontSize: "18px", margin: " 0rem 2rem" }}>
                    <i><b>Join us in our journey, and let’s </b><b className='text-2xl text-custom-green-light'> Heal Together</b></i>
                </p>
                <div className='flex justify-center items-center mt-4'>
                    <button className="px-3 md:px-8 py-4 font-bold bg-custom-gradient rounded-full text-white hover:shadow-lg hover:shadow-custom-green-light">
                        Start a Campaign
                    </button>
                    <p className=' p-3 md:p-8 text-3xl md:text-2xl font-bold'>Or</p>
                    <button className="px-3 md:px-8 py-4 font-bold text-custom-green-dark rounded-full  hover:shadow-lg hover:shadow-custom-green-light border-2 border-custom-green-dark">
                        Donate Now
                    </button>
                </div>

            </div>
        </div>
    );
}

export default AboutContent;
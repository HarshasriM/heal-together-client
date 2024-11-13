import React from 'react';

function Footer() {
    return (
        <div className=' bg-black bg-opacity-88 text-gray-400 mt-5 '>
            <div className='flex gap-8 bg-black bg-opacity-88 text-gray-400 p-5 md:p-10 pb-1 flex-col flex-wrap md:flex-nowrap md:flex-row'>
                <div>
                    <h1  className=" text-3xl md:text-4xl font-extrabold p-2 text-custom-green-dark" >Heal Together</h1>
                    <p className='pt-5 text-md md:text-lg'>-- Supporting those in need, together.</p>
                    <button className="mt-5 px-4 py-2 md:px-7 md:py-3 font-bold bg-custom-gradient rounded-full text-gray-200 hover:shadow-lg hover:shadow-custom-green-light">
                        Start a Campaign
                    </button>
                </div>
                <div className='footer-company-details'>
                    <h1 className='text-2xl font-extrabold p-2'>Contact Us</h1>
                    <p className='footer-links'>General Enquiry</p>
                    <p className='footer-links'>Email : healtogether@gmail.com</p>
                    <p className='footer-links'>Phone: 91+ 2345678900</p>
                    <h1 className='footer-links'>Follow Us </h1>
                    <div className='social-links flex gap-3 pt-3'>
                        <i className='fab fa-facebook-f footer-links' style={{ fontSize: "25px" }}></i>
                        <i className='fab fa-twitter footer-links' style={{ fontSize: "25px" }}></i>
                        <i className='fab fa-youtube footer-links' style={{ fontSize: "25px" }}></i>
                        <i className='fab fa-instagram footer-links' style={{ fontSize: "25px" }}></i>
                    </div>

                </div>
                <div className='hidden md:block'>
                    <h1 className='text-2xl font-extrabold p-2'>About us</h1>
                    <p className='footer-links'>Careers</p>
                    <p className='footer-links'>Team</p>
                    <p className='footer-links'>Blog</p>
                    <p className='footer-links'>Press & Awards </p>
                </div>
                <div className='hidden md:block'>
                    <h1 className='text-2xl font-extrabold p-2 '>Learn</h1>
                    <p className='footer-links'>What is crowFunding</p>
                    <p className='footer-links'>Fundraising Ideas</p>
                    <p className='footer-links'>Fundraising Tips</p>
                    <p className='footer-links'>Frequently Asked Questions</p>
                    <p className='footer-links'>Pricing and Fee</p>
                    <p className='footer-links'>Trust and safety</p>
                </div>
                <div className='hidden md:block'>
                    <h1 className='text-2xl font-extrabold p-2 '>Top Categories</h1>
                    <p className='footer-links'> Transplant CrowFunding</p>
                    <p className='footer-links'>Medical CrowFunding</p>
                    <p className='footer-links'>Child Health CrowFunding</p>
                    <p className='footer-links'>Cancer CrowFunding</p>
                    <p className='footer-links'>Emergency CrowFunding</p>
                    <p className='footer-links'>NGO CrowFunding</p>
                    <p className='footer-links'>Education CrowFunding</p>
                </div>
            </div>
            <div className='h-1 w-full bg-gray-400 rounded-2xl'>

            </div>
            <p className='text-center p-3 text-md md:text-xl'>Copyright By  &copy; HealTogether</p>
        </div>
    );
}

export default Footer;
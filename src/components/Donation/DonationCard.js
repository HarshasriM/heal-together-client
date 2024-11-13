import React, { useState } from 'react';
import { Container, Tabs, Tab, Box, Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { useNavigate } from 'react-router-dom';


// Customizing Tab to change colors when active
const CustomTab = styled(Tab)(({ theme }) => ({
    '&.Mui-selected': { // Change the color for selected tab (you can modify this)
        color: '#51b78d',
        border: "none",
        outline: "none",
        borderRadius: "10px",
        fontWeight: "bold"
    },
    textTransform: 'none', // To keep the label text as-is without uppercasing
    borderRadius: "10px",
    fontSize: "16px"
}));
// TabPanel component for conditional rendering of tab content
function TabPanel({ children, value, index, ...other }) {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function DonationCard() {
    const [value, setValue] = useState(0);
    const [transactionCompleted, setTransactionCompleted] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleTransactionComplete = () => {
        // Simulate processing
        setTimeout(() => {
            setTransactionCompleted(true); // Show the transaction completed dialog

            // Auto-close dialog and navigate to home after a delay
            setTimeout(() => {
                setTransactionCompleted(false); // Close the dialog
                navigate("/"); // Redirect to home page
            }, 5000); // 2000ms delay (2 seconds)
        }, 1000); // Simulate delay for transaction processing
    };

    return (
        <div className='pt-20'>
            <Container maxWidth="sm" sx={{ mt: 5, py: 0, border: '1px solid #51b78d', borderRadius: 2, background: "whitesmoke" }}>
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
                        margin: '10px',
                        textAlign: "center",
                    }}
                >
                    Pay Now
                </Typography>
                <div className='px-10'>

                    <form>
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
                                    textAlign: "center",
                                }}
                            >
                                Transaction Details
                            </Typography>
                            <div className="mt-10">

                                <div className="">
                                    <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="">
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                        Email Id
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="given-email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="">
                                    <label htmlFor="mobile" className="block text-sm/6 font-medium text-gray-900">
                                        Mobile
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="mobile"
                                            name="mobile"
                                            type="tel"
                                            autoComplete="given-number"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <Tabs
                        orientation="horizontal"
                        value={value}
                        onChange={handleChange}
                        aria-label="transaction tabs"
                        TabIndicatorProps={{ style: { display: 'block', background: "#51b78d" } }}
                    >

                        <CustomTab label="Payment Via Card" sx={{ marginLeft: "100px" }} />
                        <CustomTab label="Payment Via UPI" />

                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <div className="">

                            <div className="mt-2">
                                <label htmlFor="cardnumber" className="block text-sm/6 font-medium text-gray-900">
                                    Card Number
                                </label>
                                <input
                                    id="cardnumber"
                                    name="cardnumber"
                                    type="text"
                                    autoComplete="given-number"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                />
                            </div>

                            <div className="mt-2">
                                <label htmlFor="cardholdername" className="block text-sm/6 font-medium text-gray-900">
                                    Card Holder Name
                                </label>
                                <input
                                    id="cardholdername"
                                    name="cardholdername"
                                    type="text"
                                    autoComplete="given-number"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className="mt-2 w-64">
                                <label htmlFor="expirydate" className="block text-sm/6 font-medium text-gray-900">
                                    Expiry Date
                                </label>
                                <input
                                    id="expirydate"
                                    name="expirydate"
                                    type="Date"
                                    autoComplete="given-number"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                />
                            </div>
                            <div className="mt-2">
                                <label htmlFor="cvv" className="block text-sm/6 font-medium text-gray-900">
                                    cvv
                                </label>
                                <input
                                    id="cvv"
                                    name="cvv"
                                    type="text"
                                    autoComplete="given-number"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div className='text-center'>

                            <button className="my-5 px-4 py-2 font-bold bg-custom-gradient rounded-full text-gray-200 " onClick={handleTransactionComplete}>
                                Pay Now
                            </button>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="mt-2">
                            <label htmlFor="upi" className="block text-sm/6 font-medium text-gray-900">
                                Enter Your UPI Address
                            </label>
                            <input
                                id="upi"
                                name="upi"
                                type="text"
                                autoComplete="given-number"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-custom-green-light sm:text-sm/6"
                            />
                        </div>
                        <div className='text-center'>
                            <button className="my-5 px-4 py-2 font-bold bg-custom-gradient rounded-full text-gray-200 " onClick={handleTransactionComplete}>
                                Pay Now
                            </button>
                        </div>
                    </TabPanel>

                </div>

            </Container>
            {/* Transaction Completed Dialog */}
            <Dialog open={transactionCompleted} onClose={() => setTransactionCompleted(false)}>
                <DialogContent>
                    <Typography variant="h5" gutterBottom sx={{ color: "#51b78d" }}>
                        Your transaction has been completed successfully!
                    </Typography>
                    <div className='text-center'>
                        <i class="fa-solid fa-circle-check m-5" style={{ width: "100px", height: "100px", fontSize: "100px",color:"#198a76" }}></i>
                    </div>

                    <Typography variant="body2" color="textSecondary" className='text-center'>
                        Thank you for your payment.
                    </Typography>
                </DialogContent>
            </Dialog>
        </div >
    );
}

export default DonationCard;

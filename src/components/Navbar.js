import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [tokenString,setTokenString] = useState( localStorage.getItem("token"))
    const handleLogout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setTokenString(localStorage.getItem("token"));
    }
    
    return (
        <>
            <nav className='bg-custom-gradient text-white font-bold fixed w-full z-10 px-2'>
                <div className='sm:block md:flex items-center justify-between p-5' >
                    <div className='flex justify-between'>
                        <a href='/' className='text-3xl'>Heal Together</a>
                        <div className='md:hidden'>
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <MenuIcon />
                            </button>
                        </div>
                    </div>

                    <div>
                        <ul className={`md:flex justify-evenly items-center gap-7 md:gap-3 flex-col md:flex-row ${isOpen ? 'flex' : 'hidden'}  transform transition-all duration-300 ease-in-out`}>
                            <li>
                                <Link to="/campaigns-raised" className="btn-nav-hover text-white mt-5 md:mt-0 pt-7"> Campaigns Raised</Link>
                            </li>
                            <li>
                                <Link to="/startcampaign" className="btn-nav-hover  text-white  pt-7">Start a Campaign</Link>
                            </li>
                            <li>
                                <Link to="/about" className="btn-nav-hover  text-white  pt-7">About Us</Link>
                            </li>
                            <li>
                                {tokenString ? (<Link  onClick={handleLogout} className="btn-nav-hover  text-white  pt-7">Logout</Link>):
                                (<Link to="/login"  className="btn-nav-hover  text-white  pt-7">Login</Link>) }
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
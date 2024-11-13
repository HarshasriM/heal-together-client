import React from 'react';

function Banner({imageLink,classes}) {
    return (
        <div className={`${classes[0]} ${classes[1]} flex items-center pt-20`} style={{ backgroundImage: `url(${imageLink})`,height:"95vh"}}>
            {/* Text Content */}
            <div className="flex flex-col items-start justify-center gap-3 text-gray-600 p-20">
                <h1 className="text-3xl md:text-5xl font-bold"><span className='text-custom-green-dark'>Need Funds For Your <br/></span>
                Medical Treatment? </h1>
                <p className="mt-2 text-lg md:text-xl">Supporting those in need, together.</p>
                <div className='bg-gray-600 mt-3 mb-1 rounded-lg' style={{width:"100%",height:"1%"}}></div>
                <p className="mt-2 text-lg md:text-xl">With <span className='text-custom-green-light font-bold text-xl'>0%* </span> platform fee, you can raise funds too! </p>
                <button className="mt-4 px-8 py-4 font-bold bg-custom-gradient rounded-full text-white hover:shadow-xl hover:shadow-custom-green-light">
                    Start a Campaign
                </button>
            </div>
        </div>
    );
}

export default Banner;
import React from 'react';
import { Typography } from '@mui/material';
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Autoplay } from 'swiper/modules'; // Import Swiper modules
import 'swiper/css';
import 'swiper/css/navigation';

import { Card, CardContent} from "@mui/material";

const categories = [
    {
        icon: "fa-heart-pulse",
        category: "Transplant"
    },
    {
        icon: "fa-ribbon",
        category: "Cancer"
    },
    {
        icon: "fa-users",
        category: "Personal Cause"
    },
    {
        icon: "fa-truck-medical",
        category: "Emergency"
    },
    {
        icon: "fa-child",
        category: "ChildHealth"
    },
    {
        icon: "fa-suitcase-medical",
        category: "Medical"
    },
]
function CategoryCarousal() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            if (prevRef.current && nextRef.current) {
                prevRef.current.style.display = 'block'; // Ensure arrows are visible
                nextRef.current.style.display = 'block';
            }
        }, 100);
    }, [])

    return (
        <div className='mt-14 mb-14'>
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
                    margin: '40px',
                    textAlign: "center",
                }}
            >
                Crowfunding Categories
            </Typography>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 2000 }}

                breakpoints={{
                    640: { slidesPerView: 3 },
                    960: { slidesPerView: 3 },
                    1200: { slidesPerView: 5 },
                }}
                style={{ width: '100%', padding: '20px' }}
            >
                {categories.map((item, index) => (
                    <SwiperSlide key={index} style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "auto"
                    }}>
                        <Card
                            sx={{
                                backgroundColor: '#f0f0f0',
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '150px', // Set height for slides
                                width: "150px",
                                borderRadius: "30px",
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    boxShadow: ' 0 10px 40px 1px rgba(0,0,0,.17);',
                                    background:"#f7f7f7;"
                                },

                            }}
                        >
                            <CardContent>
                                <Typography variant="h6"><i className={`fa-solid ${item.icon} m-4`} style={{color: "#26a269",fontSize:"45px"}}></i></Typography>
                                <Typography variant="body" color="#666" >
                                    {item.category}
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CategoryCarousal;
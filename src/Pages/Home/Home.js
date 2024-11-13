import React from 'react';
import Banner from '../../components/Home/Banner';
import CategoryCarousal from '../../components/Home/CategoryCarousal';
import CrowfundingHelp from '../../components/Home/CrowfundingHelp';
import Navbar from '../../components/Navbar';

function Home() {
    return (
        <div>
            <Navbar/>
            <Banner imageLink={'https://d2aq6dqxahe4ka.cloudfront.net/themes/front/page/images/home-page/bannerImgHome_webp.webp'} classes={["bg-cover","bg-center"]}/>
            <CategoryCarousal/>
            <CrowfundingHelp/>
        </div>
    );
}

export default Home;
import React from 'react';
import AboutContent from '../../components/About/AboutContent';
import Banner from "../../components/Home/Banner"

function About() {
    return (
        <div>
            <Banner imageLink={'https://img.freepik.com/free-vector/hand-drawn-clothing-donation-concept_52683-54708.jpg?ga=GA1.1.1612218577.1731212725&semt=ais_hybrid'} classes={["bg-no-repeat","bg-right"]}/>
            <AboutContent/>
        </div>
    );
}

export default About;
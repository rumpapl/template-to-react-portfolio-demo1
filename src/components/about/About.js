import React from 'react';
import './AboutStyle.css';
import ProgressBar from './progressBar/ProgressBar';
import { skills } from '../../data/Skills';
import SectionHeader from '../sharedComponents/sectionHeader/SectionHeader';

const About = () => {
    const [Skills] = React.useState(skills);
    const [header_data] = React.useState({
        p: "Learn About Me",
        h: '10 Years Experience',
    });
    return (
        <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src="assets/img/about.jpg" alt="Image" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <SectionHeader header_data={header_data} />
        
                            <div className="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida
                                </p>
                            </div>
                            <div className="skills">
                                {Skills.map(
                                    (item) =>
                                        <>
                                            <div className="skill-name">
                                                <p>{item.skill_name}</p><p>{item.value}%</p>
                                            </div>
                                            <ProgressBar done={item.value} />
                                        </>
                                )}
                            </div>
                            <a className="btn" href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

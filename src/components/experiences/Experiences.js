import React from 'react';
import './ExperiencesStyle.css';
import SectionHeader from '../sharedComponents/sectionHeader/SectionHeader';
import { experiences } from '../../data/Experiences';
import Banner from '../sharedComponents/banner/Banner';

const Experiences = () => {
    const [Experiences] = React.useState(experiences);
    const [header_data] = React.useState({
        p: "My Resume",
        h: 'Working Experience',
    });
    const[banner_info] = React.useState({
        p: "Reasonable Price",
        h: 'Get A Special Price',
        Btn_text: 'Pricing Plan',
        banner_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.",
    })
    return (
        <>
        <div class="experience" id="experience">
            <div class="container">
                <header class="text-center wow zoomIn" data-wow-delay="0.1s">
                    <SectionHeader header_data={header_data} />
                </header>
                <div class="timeline">
                    {Experiences.map((item) =>
                        <>
                            {
                                item.id % 2 === 0 ?
                                    <div class="timeline-item right wow slideInRight" data-wow-delay="0.1s">
                                        <div class="timeline-text">
                                            <div class="timeline-date">{item.time_line}</div>
                                            <h2>{item.job_title}</h2>
                                            <h4>{item.company_name}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                    :
                                    <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
                                        <div class="timeline-text">
                                            <div class="timeline-date">{item.time_line}</div>
                                            <h2>{item.job_title}</h2>
                                            <h4>{item.company_name}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                            }
                        </>
                    )}
                </div>
            </div>
        </div>
        <Banner  banner_info={banner_info}/>
</>
    )
}

export default Experiences

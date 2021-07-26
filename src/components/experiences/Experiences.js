import React from 'react';
import './ExperiencesStyle.css';
import SectionHeader from '../sharedComponents/sectionHeader/SectionHeader';
import { experiences } from '../../data/Experiences';

const Experiences = () => {
    const [Experiences] = React.useState(experiences);
    const [header_data] = React.useState({
        p: "My Resume",
        h: 'Working Experience',
    });
    return (
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

    )
}

export default Experiences

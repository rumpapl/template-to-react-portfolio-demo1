import React from 'react';
import './ServicesStyle.css';
import SectionHeader from '../sharedComponents/sectionHeader/SectionHeader';

const Services = () => {
    const [header_data] = React.useState({
        p: "What I do",
        h: 'Awesome Quality Services',
    });
    return (
        <div class="service" id="service">
            <div class="container">
                <div class="text-center wow zoomIn" data-wow-delay="0.1s">
                   <SectionHeader header_data={header_data}/>
                </div>
                <div class="row">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="fa fa-laptop"></i>
                            </div>
                            <div class="service-text">
                                <h3>Web Design</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="fa fa-laptop-code"></i>
                            </div>
                            <div class="service-text">
                                <h3>Web Development</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="fab fa-android"></i>
                            </div>
                            <div class="service-text">
                                <h3>Apps Design</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="service-item">
                            <div class="service-icon">
                                <i class="fab fa-apple"></i>
                            </div>
                            <div class="service-text">
                                <h3>Apps Development</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phase nec preti mi. Curabi facilis ornare velit non
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

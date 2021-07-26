import React from 'react';
import SectionHeader from '../sectionHeader/SectionHeader';
import './BannerStyle.css';

const Banner = (props) => {
    return (
        <div class="banner wow zoomIn" data-wow-delay="0.1s">
            <div class="container">
                <div class="text-center">
                    <SectionHeader header_data={props.banner_info}/>
                </div>
                <div class="container banner-text">
                    <p>{props.banner_info.banner_text}</p>
                    <a class="btn">{props.banner_info.Btn_text}</a>
                </div>
            </div>
        </div>
    )
}

export default Banner

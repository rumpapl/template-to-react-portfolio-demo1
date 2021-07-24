import React from 'react'
import './SectionHeaderStyle.css';

const SectionHeader = (props) => {
    return (
        <div className="section-header">
            <p>{props.header_data.p}</p>
            <h2>{props.header_data.h}</h2>
        </div>
    )
}

export default SectionHeader

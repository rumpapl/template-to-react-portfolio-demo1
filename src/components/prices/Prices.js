import React from 'react';
import './PricesStyle.css';
import { prices } from '../../data/Prices';
import PriceCard from './priceCard/PriceCard';
import SectionHeader from '../sharedComponents/sectionHeader/SectionHeader';

const Prices = () => {
    const [Prices] = React.useState(prices);
    const [header_data] = React.useState({
        p: "Pricing Plan",
        h: 'Affordable Price',
    });
    return (
        <div class="price" id="price">
            <div class="container">
                <div class="text-center wow zoomIn" data-wow-delay="0.1s">
                    <SectionHeader header_data={header_data} />
                </div>
                <div class="row">
                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                        <PriceCard card_data={Prices[0]} />
                    </div>
                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.0s">
                        <div class="price-item featured-item">
                            <PriceCard card_data={Prices[1]} />
                        </div>
                    </div>
                    <div class="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                        <PriceCard card_data={Prices[2]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices

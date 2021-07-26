import React from 'react';
import './PricesStyle.css';
import { prices } from '../../data/Prices';
import PriceCard from './priceCard/PriceCard';

const Prices = () => {
    const [Prices] = React.useState(prices);
    return (
        <div class="price" id="price">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Pricing Plan</p>
                    <h2>Affordable Price</h2>
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

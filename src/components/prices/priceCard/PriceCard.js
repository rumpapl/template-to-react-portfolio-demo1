import React from 'react';
import './PriceCardStyle.css';


const PriceCard = (props) => {
    return (
        <div class="price-item">
            <div class="price-header">
                <div class="price-title">
                    <h2>{props.card_data.type}</h2>
                </div>
                <div class="price-prices">
                    <h2><small>$</small>{props.card_data.price}<span>/ mo</span></h2>
                </div>
            </div>
            <div class="price-body">
                <div class="price-description">
                    <ul>
                        {props.card_data.price_description.map(
                            (item) =>
                                <li>{item.text}</li>
                        )}
                    </ul>
                </div>
            </div>
            <div class="price-footer">
                <div class="price-action">
                    <a class="btn" href="">{props.card_data.btn_text}</a>
                </div>
            </div>
        </div>
    )
}

export default PriceCard

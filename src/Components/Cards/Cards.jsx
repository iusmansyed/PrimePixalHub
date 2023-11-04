import React, { useState } from 'react';
import './HoverableCard.css'; // Import your CSS file

const HoverableCard = ({ data }) => {

    return (
        <>
            <div className="card-container">
                <div className="icon">
                    <h1>{data.icon}</h1>
                </div>
                <div className="description">
                    <h3>{data.title}</h3>
                    <div className="txt">
                        <p>{data.Description}</p>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default HoverableCard;

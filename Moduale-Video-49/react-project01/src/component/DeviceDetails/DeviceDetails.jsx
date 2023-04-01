import React from 'react';

const DeviceDetails = (props) => {
    // console.log (props.priceAmount)
    return (
        <div>

            <p>Information about your device</p>

            <h2>Price: {props.price}</h2>
            
        </div>
    );
};

export default DeviceDetails;
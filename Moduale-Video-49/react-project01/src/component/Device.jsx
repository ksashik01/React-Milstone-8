

import React from 'react';
import DeviceDetails from './DeviceDetails/DeviceDetails';

const Device = (props) => {
    // console.log (props)
    return (
        <div>

            <h1>This is:{props.name}</h1>
            
            <DeviceDetails priceAmount = {props.price}></DeviceDetails>
            
        </div>
    );
};

export default Device;
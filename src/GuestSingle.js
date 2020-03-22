import React from 'react';
 
const GuestSingle = ({item}) => (                   

    
    <option value={item.reservation.roomNumber}>
    {item.reservation.roomNumber}
    </option>
);

export default GuestSingle;
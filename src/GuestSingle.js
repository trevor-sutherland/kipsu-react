import React from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const GuestSingle = ({item}) => (                   
    
    <option>
    {item.reservation.roomNumber}
    </option>
                
                
);

export default GuestSingle;
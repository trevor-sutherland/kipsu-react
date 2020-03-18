import React from 'react';
import { render } from 'react-dom';

document.getElementById("messageForm").addEventListener("submit", Message);

function Message() {
	alert("The form was submitted");
}

export default Message;
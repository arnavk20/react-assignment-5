import React, { useState } from 'react';
import './style.css';

function Age() {
    const [age, setAge] = useState(null);

    const calculateAge = () => {
        const dob = document.getElementById('dob').value;
        const dobDate = new Date(dob);
        const today = new Date();
        const ageInMilliseconds = today - dobDate;
        const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
        setAge(ageInYears);
    };

    return (
        <div className="container">
            <div className='item'><h1>Age Calculator</h1></div>
            <div className='item'><p>Enter your date of birth</p></div>
            <div className='item'><input type="date" id="dob"></input></div>
            <div className='item'><button id="btn" onClick={calculateAge}>Calculate Age</button></div>
            <div className='item'>{age !== null && <h2>You are {age} years old</h2>}</div>
        </div>
    );
}

export default Age;

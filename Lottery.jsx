import { useState, useEffect } from 'react';
import { genTicket, sum } from './helper.js';

import PropTypes from 'prop-types';
import Ticket from './Ticket.jsx';

import './Lottery.css'

function Lottery({ n = 3, winningSum = 13 }) {
    const [ticket, setTicket] = useState(genTicket(n)); // Ticket state
    const [bgColor, setBgColor] = useState('white'); // Background color state

    const isWinning = sum(ticket) === winningSum;

    // Function to generate random background color
    const getRandomColor = () => {
        const colors = ['#00ab03', '#00ab7b', '#018f94', '#015494', '#410194', '#7e0194', '#940146', '#945c01'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    // Function to handle ticket generation and background color change
    const buyTicket = () => {
        setTicket(genTicket(n)); // Generate a new ticket
        setBgColor(getRandomColor()); // Change background color
    };

    // Play sound effect when user wins
    useEffect(() => {
        if (isWinning) {
            const audio = new Audio('winning-sound.mp3'); // Replace with your sound file path
            audio.play();
        }
    }, [isWinning]);

    return (
        <div
            style={{
                backgroundColor: bgColor,
                height: '30rem',
                padding: '20px',
                border: '1px solid black',
                borderRadius: '1rem',
                textAlign: 'center',
            }}
        >
            <h1>Lottery Game</h1>
            <Ticket ticket={ticket} />
            <button onClick={buyTicket} className='btnLot'>Buy a Ticket</button>
            <h3>{isWinning && "Congratulations! You have won!"}</h3>
        </div>
    );
}

// Props Validation
Lottery.propTypes = {
    n: PropTypes.number.isRequired,
    winningSum: PropTypes.number.isRequired,
};

export default Lottery;

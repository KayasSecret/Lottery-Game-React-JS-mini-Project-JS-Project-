import TicketNum from './TicketNum';
import PropTypes from 'prop-types';
import './Ticket.css'

import './TicketNum.css'

function Ticket( {ticket} ) {
    return (
        <div className='ticketDiv'>
            <p>Ticket</p>
            {ticket.map( (num, idx) => (
                <TicketNum num={num} key={idx}/>
              ) 
             )
            }
        </div>
    )
}

// Props Validation 
Ticket.propTypes = {
    ticket: PropTypes.number.isRequired,
}

export default Ticket
import PropTypes from 'prop-types';
import './TicketNum.css'

function TicketNum({num}) {
    return (<span className='spanNum'>{num}</span>)
}

// Props Validation 
TicketNum.propTypes = {
    num: PropTypes.number.isRequired,
}

export default TicketNum
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <header>
        <div className='container'>
            <Link to='/'>
                <h2>Feedback UI</h2>
            </Link>
        </div>
    </header>)
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header
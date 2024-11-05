import PropTypes from 'prop-types'

const Header = () => {
    return (
    <header>
        <div className='container'>
            <h2>Feedback UI</h2>
        </div>
    </header>)
}

Header.propTypes = {
    text: PropTypes.string
}

export default Header
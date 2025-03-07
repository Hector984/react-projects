import PropTypes from "prop-types"

const Card = ({children, reverse}) => {
    return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

Card.propTypes = {
    reverse: PropTypes.bool,
}

export default Card
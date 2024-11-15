import PropTypes from 'prop-types'

const Button = ({children, version, type, isDisabled, onSubmit}) => {
    return(
        <button type={type} 
        disabled={isDisabled} 
        className={`btn btn-${version}`}
        onClick={onSubmit}
        >{children}</button>
    )
}

Button.propTypes = {
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    children: PropTypes.node
}

export default Button
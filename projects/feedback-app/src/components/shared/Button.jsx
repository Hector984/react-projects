import PropTypes from 'prop-types'

const Button = ({children, version, type, isDisabled}) => {
    return(
        <div type={type} disabled={isDisabled} className={`btn btn-${version}`}>{children}</div>
    )
}

Button.propTypes = {
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    children: PropTypes.node
}

export default Button
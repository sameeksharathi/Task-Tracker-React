import PropTypes from 'prop-types'

const Button = ({ background, text, onClickButton }) => {
    return (
        <button onClick={onClickButton} className="btn" style={{ backgroundColor: background }}>{text}</button>
    )
}

Button.defaultProps = {
    background: 'steelblue',
}

Button.propsTypes = {
    text: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    onClickButton: PropTypes.func.isRequired,
}


export default Button

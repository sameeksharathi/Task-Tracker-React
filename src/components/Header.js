import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === "/" && <Button background={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClickButton={onAdd} />}
            {/* <h2 style={h2Styling}>{props.title}</h2> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Default Title',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JSX
// const h2Styling = {
//     color: "red",
//     backgroundColor: "black"
// }

export default Header

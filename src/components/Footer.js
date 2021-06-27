import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <Link to="/about" className="link">About</Link>
            <p>Copyright &copy; 2021</p>
        </footer>
    )
}

export default Footer

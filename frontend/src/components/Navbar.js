import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Pokemon</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/pokemon">All Pokemon</Link>
            </div>
        </nav>
    )
}

export default Navbar;
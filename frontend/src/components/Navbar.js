import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>Pokemon</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/search">Search Pokemon</Link>
                <Link to="/teams">Teams</Link>
                <Link to="/saved">Saved</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    )
}

export default Navbar;
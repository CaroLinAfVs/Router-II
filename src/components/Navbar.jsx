import { NavLink } from "react-router-dom";

function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    return (<div className="header">
        <img src="https://icon-library.com/images/pokemon-icon-png/pokemon-icon-png-11.jpg" />
        <div className="navbar">
            <NavLink className={setActiveClass} to="/">
                Home
            </NavLink>

            <NavLink className={setActiveClass} to="/pokemons">Pokemones</NavLink>
        </div>
    </div>)
}
export default Navbar
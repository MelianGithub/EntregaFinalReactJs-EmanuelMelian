import { CarritoWidget } from "../CartWidget/CarritoWidget";
import { Link, NavLink } from "react-router-dom";
import Logo from "../NavBar/logo1.png"
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="nav__bar">
            <div className="menu__superior">
                <div className="logo">
                    <Link to='/'> <img src={Logo} alt="" /> </Link>
                </div>

                <div className="buscador">
                    <input type="text" name="" id="buscador" placeholder="Que estas buscando?" />
                    <i className='bx bx-search-alt-2'></i>
                </div>

                <a href="">
                    <i className='bx bx-user' > Ingresa </i>
                </a>
                <a>
                    <i className='bx bx-user-plus'> Registrate</i>
                </a>
                <Link to='/cart'><CarritoWidget /></Link>

            </div>

            <ul>
                <NavLink to="/categoria/laptop"><li>Laptops</li></NavLink>
                <NavLink to="/categoria/monitor"><li>Monitores</li></NavLink>
                <NavLink to="/categoria/grafica"><li>Graficas</li></NavLink>
                <NavLink to="/categoria/accesorios"><li>Accesorios</li></NavLink>
            </ul >
        </nav >
    )
}

export default NavBar;

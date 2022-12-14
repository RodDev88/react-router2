import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const setActive = ({ isActive }) => (isActive ? 'active' : undefined)

    return (
       <>
       <NavLink to='/' className={setActive}>Home</NavLink>
       
       <NavLink to='/pokemon' className={setActive}>Pokemones</NavLink>


       </>
    )
}

export default Navbar

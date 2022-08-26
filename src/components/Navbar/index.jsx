import { HStack, Link, Spacer } from "@chakra-ui/react"
import logo from '../../assets/anillos.png'
import { CartWidget } from '../CartWidget'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return(
        <HStack>
            <NavLink to="/">
                <img src={logo} alt="" width="100px" />
            </NavLink>
            <Spacer />
            <HStack>
                <NavLink to="category/Aros">
                    <Link> Aros </Link>
                </NavLink>
                <NavLink to="category/Pulseras">
                    <Link> Pulseras </Link>
                </NavLink>
                <NavLink to="category/Accesorios">
                    <Link> Accesorios </Link>
                    </NavLink>
                <CartWidget/>
            </HStack>
        </HStack>
    )
}

export { Navbar }
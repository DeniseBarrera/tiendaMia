import { HStack, Spacer, Flex} from "@chakra-ui/react"
import logo from '../../assets/anillos.png'
import { CartWidget } from '../CartWidget'
import { NavLink} from "react-router-dom"

const Navbar = () => {
    return(
        <Flex>
            <HStack>
            <NavLink to="/">
                <img src={logo} alt="logo" width="100px" />
            </NavLink>
            </HStack>
            <Spacer />
            <HStack>
                <NavLink to="category/Aros">Aros </NavLink>
                <NavLink to="category/Pulseras">Pulseras </NavLink>
                <NavLink to="category/Accesorios">Accesorios </NavLink>
                <CartWidget/>
            </HStack>
        </Flex>
    )
}

export { Navbar }
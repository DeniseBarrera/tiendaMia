import { HStack, Link, Spacer } from "@chakra-ui/react"
import logo from '../../assets/anillos.png'
import { CartWidget } from '../CartWidget'

const Navbar = () => {
    return(
        <HStack>
            <img src={logo} alt="" width="100px" />
            <Spacer />
            <HStack>
                <Link> Aros </Link>
                <Link> Pulseras </Link>
                <Link> Accesorios </Link>
                <CartWidget/>
            </HStack>
        </HStack>
    )
}

export { Navbar }
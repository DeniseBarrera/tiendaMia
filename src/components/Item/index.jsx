import { VStack, Button, Text, Image} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Item = ( { product }) => {

    return(
        <VStack boxShadow='lg' p='6' reunded='md' bg='white' m="15px" minWidth="275px" >
        <Image src={product.Image} alt={product.product} w="100px" />
        <Text>{product.product}</Text>
        <Text>${product.price}</Text>
        <Button colorScheme='green' size='xs'>
            <NavLink to={`product/${product.id}`}>
            Ver detalle
            </NavLink>
        </Button>
        </VStack>
    )
}

export { Item }
import { VStack, Center, Text, Image, Heading, Select, HStack, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { FaCreditCard, FaRegCreditCard, FaHeart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { ItemCount } from '../ItemCount'
import { useCartContext } from '../../context/CartContext'

const ItemDetail = ({ listProduct }) => {

    const { image, product, price, stock, config, description, initial } = listProduct

    const {isAdded, setIsAdded} = useState(false)

    const { addToCart } = useCartContext()

    const { onAdd } = (quantity) => {
        addToCart(listProduct, quantity)
        setIsAdded(true)
    }


    return (
        <Center boxShadow='lg' p='6' rounded='md' bg='white' m="30px auto" maxWidth="800px">
            <Image src={image} w="200px" />
            <VStack maxWidth="500px" align="left" mx="15px">
                <HStack>
                    <Heading>{product}</Heading>
                    <FaHeart size='20px' cursor="pointer" />
                </HStack>
                <Text className='bold' fontSize='2xl'>${price}</Text>
                <Text> Stock: {stock}</Text>
                <HStack>
                    <FaCreditCard /><FaRegCreditCard />
                </HStack>


                <Text fontSize='xs'>{description}</Text>
                {config.material &&
                    <Select placeholder="Material">
                        {config.material.map((mat, index) => <option className='joyas' key={`${mat}-${index}`} />)}
                    </Select>}
                {config.size &&
                    <Select placeholder="Sizes">
                        {config.size.map((siz, index) => <option className='joyas' key={`${siz}-${index}`} />)}
                    </Select>}
                {
                    isAdded ?
                        <NavLink to="/cart">
                            <Button colorScheme='green' size='sm'> Carrito </Button>
                        </NavLink>
                        :
                        <ItemCount initial={initial} stock={stock} onAdd={onAdd} />
                }

            </VStack>
        </Center>
    )
}

export { ItemDetail }
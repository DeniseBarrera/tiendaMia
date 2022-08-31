import { VStack, Center, Text, Image, HStack, Button } from "@chakra-ui/react"
import { useCartContext } from "../../context/CartContext"
import { collection } from 'firebase/firestore'

const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()
    console.log(cartList)

    return (
        <Center>
            <VStack>
                {cartList.map(prod =>
                    <HStack key={prod.id} boxShadow='lg' p='6' rounded='md' spacing={10} bg="white">
                        <Image src={prod.Image} w="100px"></Image>
                        <Text as="b">{prod.product}</Text>
                        <Text as="b">Cantidad: {prod.quantity}</Text>
                        <Button colorScheme='green' size='sm' onClick={() => removeProduct(prod.id)}>X</Button>
                    </HStack>
                )}
                {cartList.length === 0 ?
                    <Text>Tu carrito está vacío :( </Text>
                    :
                    <>

                        <Text>Total: ${totalPrice()}</Text>
                        <Button colorScheme='green' size='sm' onClick={cleanCart}>Vaciar carrito</Button>
                    </>
                }
            </VStack>
        </Center>
    )
}

export { Cart }
import { VStack, Center, Text, Image, HStack, Button } from "@chakra-ui/react"
import { useCartContext } from "../../context/CartContext"
import { db } from "../../Firebase"
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { toast } from "react-toastify"
import React, { useState } from "react"
import { NavLink } from 'react-router-dom'

const Cart = () => {

    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext();

    const [checkout, setCheckout] = useState(false)

    const handleConfirm = () => {
        const orden = {
            items: cartList,
            total: 300,
            buyer: {
                name: "Juan Membrives",
                phone: "2616252525",
                email: "juan@membrives.com"
            },
            date: serverTimestamp()
        }
        const ordersCollection = collection(db, "orders")
        const consulta = addDoc(ordersCollection, orden)

        consulta
            .then((res) => {
                toast(`Orden ${res.id} creada`)
            })
            .catch(error => {
            })


    }
    return (
        <Center>
            <VStack>
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
                    <Button size='md' height='48px' width='200px' border='2px' borderColor='green.500' onClick={handleConfirm}> Finalizar compra  </Button>
                </VStack>
                <VStack>
                    <Button size='md' height='48px' width='200px' border='2px' borderColor='green.500'>
                        <NavLink to={'/checkout'}>
                            Ir al Checkout
                        </NavLink>
                    </Button>
                </VStack>
            </VStack>
        </Center>
    )
}

export { Cart }
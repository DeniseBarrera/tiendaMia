import React, { createContext } from 'react'
import { VStack, Text, Button, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useCartContext } from '../../context/CartContext'


const Checkout = () => {
    const {cartList} = useContext(useCartContext)

    useNavigate()
    if (cartList.length === 0) {
        return (
            <VStack>
            <Text>No deberías estar acá sin productos en tu carrito. </Text>
            <Text> Serás redirigido en 3 segundos.. </Text>
            </VStack>
        )
    }
    
    return (
        <VStack>
            <Text>Complete sus datos</Text>
            <FormControl>
                <FormLabel> Nombre </FormLabel>
                <Input type='name' />
            </FormControl>
            <FormControl>
                <FormLabel> Apellido </FormLabel>
                <Input type='lastname' />
            </FormControl>
            <FormControl>
                <FormLabel> Correo Electrónico </FormLabel>
                <Input type='email' />
            </FormControl>
            <FormControl>
                <FormLabel> Domicilio </FormLabel>
                <Input type='address' />
            </FormControl>
            <Button type='submit' size='md' height='48px' width='200px' border='2px' borderColor='green.500'>Confirmar Compra</Button>

        </VStack>
    )
}

export { Checkout }
import React, { useState } from 'react'
import { VStack, Text, Button, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import { db } from "../../Firebase"
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { toast } from "react-toastify"


const Checkout = () => {

    const [costumer, setCostumer] = useState({
        name: '',
        lastname: '',
        email: '',
        address: '',
    })

    const [submit, setSubmit] = useState(false)

    const { cartList, totalPrice } = useCartContext();

    const navigate = useNavigate()


    const handlerChangeInput = (e) => {
        setCostumer({
            ...costumer,
            [e.target.name]: e.target.value,
        })
    }

    const handlerSubmit = (e) => {
        e.preventDefault()

        const order = {
            items: cartList,
            buyer: { ...costumer },
            price: totalPrice(),
        }
        setSubmit(true)

        const ordersCollection = collection(db, "orders")
        const consulta = addDoc(ordersCollection, order)

        consulta
            .then((res) => {
                toast(`Orden ${res.id} creada`)
            })
            .catch(error => {
            })

    }


    if (cartList.length === 0) {

        setTimeout(() => {
            navigate('/')
        }, 3000)



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
                <FormLabel> Nombre: </FormLabel>
                <Input placeholder='Ingrese su Nombre..' name='name' value={costumer.name} onChange={handlerChangeInput} />

                <FormLabel> Apellido: </FormLabel>
                <Input placeholder='Ingrese su Apellido..' name='lastname' value={costumer.lastname} onChange={handlerChangeInput} />

                <FormLabel> Correo Electrónico: </FormLabel>
                <Input placeholder='Ingrese su E-mail..' name='email' value={costumer.email} onChange={handlerChangeInput} />

                <FormLabel> Domicilio: </FormLabel>
                <Input placeholder='Ingrese su Domicilio..' name='address' value={costumer.address} onChange={handlerChangeInput} />
                <Button type='submit' size='md' height='48px' width='200px' border='2px' borderColor='green.500' onClick={handlerSubmit}>Confirmar Compra</Button>
            </FormControl>
            <hr />
            {
                submit
                && <VStack>
                    <Text fontSize='3xl' as='b'> Los datos ingresados son: </Text>
                    <Text fontSize='lg' as='i'>Nombre: {costumer.name}</Text>
                    <Text fontSize='lg' as='i'> Apellido: {costumer.lastname}</Text>
                    <Text fontSize='lg' as='i'> Correo Electrónico: {costumer.email}</Text>
                    <Text fontSize='lg' as='i'> Domicilio: {costumer.address}</Text>
                </VStack>
            }
        </VStack>
    )
}

export { Checkout }
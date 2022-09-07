import React from "react";
import { FaShoppingCart } from "react-icons/fa"
import { Text } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import { Badge } from '@chakra-ui/react';
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {

    const { totalQuantity } = useCartContext()
    return(
        <NavLink to="/cart">
        < FaShoppingCart />
        {/*<Badge className="badge" variant='solid' ml='1' fontSize='0.8em' colorScheme='red'>{totalQuantity}</Badge>*/}
        <Text className="badge" fontSize='xs'>{totalQuantity()}</Text>
        </NavLink>
    )
}

export { CartWidget }
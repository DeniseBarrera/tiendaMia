import React from "react";
import { FcShop } from "react-icons/fc"
import { Text } from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {

    const { totalQuantity } = useCartContext()
    return(
        <NavLink to="/cart">
        < FcShop />
        <Text className="badge" fontSize='xs'>{totalQuantity()}</Text>
        </NavLink>
    )
}

export { CartWidget }
import React from "react";
import { FcShop } from "react-icons/fc"
import { NavLink } from "react-router-dom";

const CartWidget = () => {
    return(
        <NavLink to="/cart">
        < FcShop />
        </NavLink>
    )
}

export { CartWidget }
import { Heading, Text } from "@chakra-ui/react"
import { ItemList } from "../ItemList"
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { collection, query, where } from "firebase/firestore"
import { db } from "../../Firebase"


const ItemListContainer = ({ greeting }) => {

    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()
    

    useEffect(() => {

        const productsCollection = collection(db, "productos")
        const filtro = query(productsCollection, 
            where("category", "==", "category"),
            where("price",">",10))
        

        setLoading(true)
        customFetch(products)
            .then(res => {
                if (category) {
                    setLoading(false)
                    setListProduct(res.filter(prod => prod.category === category))
                } else {
                    setLoading(false)
                    setListProduct(res)
                }
            })
    }, [category])

    return (
        <>
            <Heading>{greeting}</Heading>
            {!loading
                ?
                <ItemList listProduct={listProduct} />
                :
                <Text>Cargando..</Text>
            }
        </>

    )
}

export { ItemListContainer }
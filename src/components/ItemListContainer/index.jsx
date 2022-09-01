import { Heading, Text } from "@chakra-ui/react"
import { ItemCount } from "../ItemCount"
import { ItemList } from "../ItemList"
import { products } from "../../utils/products"
import { customFetch } from "../../utils/customFetch"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../Firebase"
import { toast } from "react-toastify"





const ItemListContainer = ({ greeting }) => {

    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()
    console.log(category)

    useEffect(() => {

        const productsCollection = collection(db, "productos")
        const filtro = query(productsCollection, 
            where("category", "==", "category"),
            where("price",">",10))
        const consulta = getDocs(filtro)

        consulta
            .then(snapshot => {
                const products = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setListProduct(listProduct)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                toast.error("Error al cargar el producto")
            })

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
            {/* <ItemCount initial={1} stock={5} onAdd={() => {}} /> */}
        </>

    )
}

export { ItemListContainer }
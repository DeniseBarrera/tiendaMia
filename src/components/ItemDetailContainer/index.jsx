import { useState, useEffect } from 'react'
import { Text } from '@chakra-ui/react'
import { products } from '../../utils/products'
import { customFetch } from '../../utils/customFetch'
import { ItemDetail } from '../ItemDetail'
import { useParams } from "react-router-dom"
import { db } from "../../Firebase"
import { collection, getDoc, doc, serverTimestamp } from 'firebase/firestore'


const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    console.log(typeof id)
    useEffect(() => {

        const productsCollection = collection(db, "productos")
        const referencia = doc(productsCollection,id)
        const consulta = getDoc(referencia)

        consulta
        .then((res) => {
            console.log(res.id)
            console.log(res.data)
            setListProduct(res.data())
        })
        .catch((err) => {
            console.log(err)
        })

        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProduct(res.find(item => item.id === parseInt(id)))
            })
    }, [id])


    return(
        <>
            {!loading ? <ItemDetail listProduct={listProduct} /> : <Text>Cargando..</Text>}
        </>
    )
}

export { ItemDetailContainer }
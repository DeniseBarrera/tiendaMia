import { useState, useEffect } from 'react'
import { Text } from '@chakra-ui/react'
import { products } from '../../utils/products'
import { customFetch } from '../../utils/customFetch'
import { ItemDetail } from '../ItemDetail'

const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                setLoading(false)
                setListProduct(res.find(item => item.id === 1))
            })
    }, [])


    return(
        <>
            {!loading ? <ItemDetail listProduct={listProduct} /> : <Text>Cargando..</Text>}
        </>
    )
}

export { ItemDetailContainer }
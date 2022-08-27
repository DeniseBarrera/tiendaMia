import { useState } from 'react'
import { HStack, Button, Text } from '@chakra-ui/react'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [ count, setCount ] = useState(initial)
    const increase = () => count < stock && setCount(count + 1)
    const dicrease = () => count > initial && setCount(count - 1)   
    
    const handClick = () => onAdd(count)


    return(
        <HStack>
            <Button variant='ghost' colorScheme='green' size='sm' onClick={dicrease}>-</Button>
            <Text>{count}</Text>
            <Button variant='ghost' colorScheme='green' size='sm' onClick={increase}>+</Button>
            <Button colorScheme='green' size='sm' onClick={handClick}>Agregar</Button>
        </HStack>
    )
}

export { ItemCount }
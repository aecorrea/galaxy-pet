import React from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Image, Text } from '@chakra-ui/react'
import Counter from './Counter'
import { Link } from 'react-router-dom'


const Cards = ({title, description, price, img, id}) => {
  return (
    <div>
        <Card maxW='sm'>
  <CardBody>
    <Image
      src={img}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>
        {description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {"$" + price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    {/* <Counter /> */}
    <ButtonGroup spacing='2'>
      <Button variant='ghost' colorScheme='blue'>
        <Link to={`/item/${id}`}>
        Detalle
        </Link>
      </Button>
      <Button variant='solid' colorScheme='blue'>
        Agregar al Carrito
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default Cards
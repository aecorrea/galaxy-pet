import React, { useContext } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const Cards = ({ title, price, image, id }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="item-card-div">
      <Card maxW="sm">
        <CardBody>
          <Image
            m="auto"
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>

            <Text color="blue.600" fontSize="2xl">
              {"$" + price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="ghost" colorScheme="blue">
              <Link to={`/item/${id}`}>Detalle</Link>
            </Button>
            <Button
              onClick={() => addToCart({ id, title, price, image })}
              variant="solid"
              colorScheme="blue"
            >
              Agregar al Carrito
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;

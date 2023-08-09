import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Counter from "./Counter";

const ItemDetail = ({ data }) => {
  const { id } = useParams();

  const idProducts = data.filter((p) => p.id == id);
  return (
    <>
      {idProducts.map((p) => {
        return (
          <div key={p.id}>
            <Card>
              <CardHeader>
                <Heading>{p.title}</Heading>
              </CardHeader>
              <CardBody>
                <Image className="detailImg"
                  src={p.image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Text>{p.description}</Text>
                <Text>{p.category}</Text>
                <Text>{p.price}</Text>
              </CardBody>
              <CardFooter>
                <Counter />
                <Button id="chakraButtonCart" variant="ghost" colorScheme="blue">
                  Agregar al Carrito
                </Button>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default ItemDetail;

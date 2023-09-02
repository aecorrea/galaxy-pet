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
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "./Counter";
import { CartContext } from "../context/cartContext";

const ItemDetail = ({ data }) => {
  const { id } = useParams();

  const idProducts = data.filter((p) => p.id == id);

  const { addToCart } = useContext(CartContext);

  const [counter, setCounter] = useState(0);

  return (
    <>
      {idProducts.map((p) => {
        return (
          <div key={p.id} className="item-detail-card">
            <Card>
              <CardHeader>
                <Heading>{p.title}</Heading>
              </CardHeader>
              <CardBody>
                <Image
                  className="detailImg"
                  src={p.image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Text>{p.description}</Text>
                <Text>{p.category}</Text>
                <Text>{p.price}</Text>
              </CardBody>
              <CardFooter>
                <Counter counter={counter} setCounter={setCounter} />
                <Button
                  id="chakraButtonCart"
                  variant="ghost"
                  colorScheme="blue"
                  onClick={() => {
                    let product = {
                      id: p.id,
                      title: p.title,
                      price: p.price,
                      image: p.image,
                      quantity: counter,
                    };

                    addToCart(product);
                  }}
                >
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

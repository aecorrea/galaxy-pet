import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({
    children}) => {

        const [cart, setCart] = useState([])
        const long = cart.length;
        console.log(long);
        const comision = "React en CoderHouse";

        return (
            <CartContext.Provider value={{cart, setCart, long, comision}}>
            
                {children}

            </CartContext.Provider>
        )
    }
    export default ShoppingCartProvider;

import { useState, useEffect, createContext } from "react";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = (props) => {
    const [shoppingCart, setShoppingCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
  
    const addProductToCart = (product, price, quantity) => {
    const existingProduct = shoppingCart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity += quantity;
      setShoppingCart([...shoppingCart]);
    } else {
      const newProduct = { ...product, quantity: quantity };
      setShoppingCart([...shoppingCart, newProduct]);
    }
  };

  const removeProductFromCart = (product, price) => {
    const filterProducts = shoppingCart.filter((element) => element.id !== product.id);

    setShoppingCart(filterProducts);
  };

  const updateCart = (product, price, change) => {
    setShoppingCart((prevData) => {
      const updatedData = prevData.map((item) => {
        if (item.id === product.id) {
          if (change === "-") {
            if (item.quantity === 1) {
              return null;
            }
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return { ...item, quantity: item.quantity + 1 };
          }
        }
        return item;
      });
          return updatedData.filter((item) => item !== null);
    });
  };

  useEffect(() => {
    const updatedTotalItems = shoppingCart.reduce((total, item) => total + item.quantity, 0);
    setTotalItems(updatedTotalItems);

    const updatedTotalPrice = shoppingCart.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(updatedTotalPrice.toFixed(2));
  }, [shoppingCart]);

  return (
    <>
      <ShoppingCartContext.Provider
        value={{
          addProductToCart,
          shoppingCart,
          totalPrice,
          removeProductFromCart,
          totalItems,
          updateCart
        }}
      >
        {props.children}
      </ShoppingCartContext.Provider>
    </>
  );
};

export default ShoppingCartProvider;
// react
import React, { useState, useEffect } from "react";
export const ShopifyContext = React.createContext();

// import client from shopify
import Client from "shopify-buy";

// Shopify buy SDK - https://shopify.github.io/js-buy-sdk/
const client = Client.buildClient({
  domain: "the-van-hub.myshopify.com",
  storefrontAccessToken: "d69edb3953e7404359569864e924ef79",
});

client.collection.fetchAllWithProducts().then((collections) => {
  // Do something with the collections
  console.log(collections);
});

export default function ShopifyContextComponent(props) {
  const [basket, setBasket] = useState();

  useEffect(() => {
    createBasket();
  }, []);

  async function createBasket() {
    // first time run
    // if (typeof localStorage.basket === "undefined") {
    //   alert("new checkout created from shopify");

    client.checkout.create().then((checkout) => {
      // Do something with the checkout
      setBasket(checkout);
      // localStorage.setItem("basket", JSON.stringify(checkout));
    });

    // not first time through
    // } else {
    //   alert("basket retrieved from localStorage");

    // retrieve basket from localStorage
    //   const basketFromStorage = JSON.parse(localStorage.basket);

    //   setBasket(basketFromStorage);
    // }
  }

  async function addToBasket(variantId) {
    const checkoutId = basket.id;
    const lineItemsToAdd = [
      {
        variantId: variantId,
        quantity: 1,
      },
    ];

    // Add an item to the checkout
    client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((checkout) => {
        setBasket(checkout);
      });
  }

  async function updateBasket(productId) {
    const checkoutId = basket.id; // ID of an existing checkout
    const lineItemsToUpdate = [{ id: productId, quantity: 0 }];

    client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((checkout) => {
        setBasket(checkout);
      });
  }

  return (
    <ShopifyContext.Provider
      value={{ client, basket, addToBasket, updateBasket }}
    >
      {props.children}
    </ShopifyContext.Provider>
  );
}

import React from "react";
export const ShopifyContext = React.createContext();

// import client from shopify
import Client from "shopify-buy";

// create client object
const client = Client.buildClient({
  domain: "the-van-hub.myshopify.com",
  storefrontAccessToken: "d69edb3953e7404359569864e924ef79",
});

// fetch all collections
export default function ShopifyContextComponent(props) {
  return (
    <ShopifyContext.Provider value={{ client }}>
      {props.children}
    </ShopifyContext.Provider>
  );
}

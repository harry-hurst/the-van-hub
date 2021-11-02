// react
import { useState, useEffect, useContext } from "react";
import { HeaderContext } from "../../../../context/HeaderContextComponent";
import { ShopifyContext } from "../../../../context/ShopifyContextComponent";

// styles
import navMenuStyles from "./NavMenu.module.css";

export default function NavMenu() {
  // useState
  const [collection, setCollection] = useState<any>();

  // useContext
  const { currentCollectionId } = useContext(HeaderContext);
  const { client } = useContext(ShopifyContext);

  console.log(currentCollectionId);

  // useEffect
  useEffect(() => {
    if (currentCollectionId) {
      client.collection
        .fetchWithProducts(currentCollectionId)
        .then((retrievedCollection: any) => {
          // Do something with the retrievedCollection
          setCollection(retrievedCollection);
        });
    }
  }, [currentCollectionId]);

  return (
    <div id={navMenuStyles.navMenuContainer}>
      test
      {collection &&
        collection.products.map((product: any, index: number) => (
          <div key={index}>{product.title}</div>
        ))}
    </div>
  );
}

// react
import { useState, useEffect, useContext } from "react";
import { ShopifyContext } from "../../../../context/ShopifyContextComponent";
import { HeaderContext } from "../../../../context/HeaderContextComponent";

// styles
import navBarStyles from "./NavBar.module.css";

export default function NavBar() {

  // useState
  const [collections, setCollections] = useState<any[]>();

  // useContext
  const { client } = useContext(ShopifyContext);
  const { changeHeaderMenusState, changeCurrentCollectionId } =
    useContext(HeaderContext);

  // useEffect
  useEffect(() => {
    client.collection
      .fetchAllWithProducts()
      .then((collections: { products: any }[]) => {
        // Do something with the collections
        setCollections(collections);
      });
  }, []);

  return (
    <div id={navBarStyles.navBarContainer}>
      {collections &&
        collections.map((collection, index) => (
          <div
            id={navBarStyles.navBarItem}
            key={index}
            onClick={() => {
              changeHeaderMenusState("navMenu", true);
              changeCurrentCollectionId(collection.id);
            }}
          >
            {collection.title.toUpperCase()}
          </div>
        ))}
    </div>
  );
}

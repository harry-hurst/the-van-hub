// react
import { useState, useEffect, useContext } from "react";
import { HeaderContext } from "../../../../context/HeaderContextComponent";
import { ShopifyContext } from "../../../../context/ShopifyContextComponent";

// styles
import navBarStyles from "./NavBar.module.css";

export default function NavBar() {
  // useContext
  const { headerMenusState, changeHeaderMenusState, currentCollectionId, changeCurrentCollectionId } =
    useContext(HeaderContext);
  const { client } = useContext(ShopifyContext);

  // useState
  const [collections, setCollections] = useState<any>();

  // useEffect
  useEffect(() => {
    // run once on first component mount
    client.collection
      .fetchAllWithProducts()
      .then((retrievedCollections: any) => {
        // save to state
        setCollections(retrievedCollections);
      });
  }, []);

  return (
    <div id={navBarStyles.navBarContainer}>
      {collections &&
        collections.map((collection: { title: string, id: any }, index: number) => (


          <div
            id={navBarStyles.navBarItem}
            key={index}
            onClick={() => {
              changeHeaderMenusState("navMenu", true)
              changeCurrentCollectionId(`${collection.id}`)
            }}
          >
            {collection.title}
          </div>


        ))}
    </div>
  );
}

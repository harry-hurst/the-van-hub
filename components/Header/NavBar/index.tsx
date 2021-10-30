// react
import { useState, useEffect, useContext } from "react";
import { ShopifyContext } from "../../../context/ShopifyContextComponent";
import { NavBarContext } from "../../../context/NavBarContextComponent";

// styles
import navBarStyles from "./NavBar.module.css";

// components
import NavBarItem from "./NavBarItem";
import NavBarDropdown from "./NavBarDropdown";

export default function NavBar() {
  // useState
  const [collections, setCollections] = useState<any[]>();

  // useContext
  const { client } = useContext(ShopifyContext);
  const { navBarExpanded } = useContext(NavBarContext);

  // useEffect
  useEffect(() => {
    loadCollections();
  }, []);

  async function loadCollections() {
    const collections = await client.collection.fetchAllWithProducts();
    setCollections(collections);
    console.log(collections);
  }

  return (
    <div className="container">
      <div id={navBarStyles.navBarContainer} className={`${navBarExpanded && `${navBarStyles.expanded}`}`}>

        {/* <div id={navBarStyles.navBar}>
          {collections &&
            collections.map(
              (item: { title: string; handle: string }, index: number) => (
                <NavBarItem
                  content={item.title}
                  dropdownId={item.handle}
                  key={index}
                />
              )
            )}
        </div>

        <div id={navBarStyles.mobileMenu}>test</div> */}
      </div>
    </div>
  );
}

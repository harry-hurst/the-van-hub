// react
import { useState, useEffect, useContext } from "react";
import { ShopifyContext } from "../../context/Shopify";

// styles
import categoryPageStyles from "./CategoryPage.module.css";

// components
import ProductCard from "./ProductCard/ProductCard";

// components
import BreadCrumbs from "../../components/Reusable/BreadCrumbs";
import Spinner from "../../components/Reusable/Spinner";

// next components
import { useRouter } from "next/router";

export default function CategoryPage() {
  const { client } = useContext(ShopifyContext);

  const [collection, setCollection] = useState();

  const router = useRouter();

  const { ProductCategory, collectionId } = router.query;

  useEffect(() => {
    fetchCollection();
  }, [collectionId]);

  async function fetchCollection() {
    client.collection.fetchWithProducts(collectionId).then((collection) => {
      // Do something with the collection
      setCollection(collection);
    });
  }

  return (
    <div className="container px-2">
      <BreadCrumbs productCategory={ProductCategory} />
      {collection ? (
        <div className="row gx-2 gy-2">
          {collection.products.map((product) => (
            <ProductCard
              key={product.id}
              category={ProductCategory}
              title={product.title}
              id={product.id}
              imgSrc={product.images[0].src}
              imgWidth={product.images[0].width}
              imgHeight={product.images[0].height}
              price={product.variants[0].price}
            />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

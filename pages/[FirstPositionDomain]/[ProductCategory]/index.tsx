// react
import { useState, useEffect, useContext } from "react";
import { ShopifyContext } from "../../../context/Shopify";

// styles
import categoryPageStyles from "./CategoryPage.module.css";

// components
import ProductCard from "./ProductCard/ProductCard";

// components
import BreadCrumbs from "../../../components/Reusable/BreadCrumbs";
import Spinner from "../../../components/Reusable/Spinner";

// next components
import { useRouter } from "next/router";

export default function CategoryPage() {
  const { client } = useContext(ShopifyContext);

  const [collection, setCollection] = useState<any | any>();

  // router used for getting data out of the url bar
  const router = useRouter();

  // use router.query to get from url bar
  const { ProductCategory, collectionId } = router.query;

  // when collectionId changes, fetchCollection
  useEffect(() => {
    fetchCollection();
  }, [collectionId]);

  // async function using the client object
  async function fetchCollection() {
    client.collection.fetchWithProducts(collectionId).then(
      // .then() method returns a promise. It takes up to two arguments: callback
      // functions for the success and failure of the promise.

      (collection: any) => {
        // Do something with the collection
        setCollection(collection);
      }
    );
  }

  return (
    <div className="container px-2">
      <BreadCrumbs productCategory={ProductCategory} />
      {collection ? (
        <div className="row gx-2 gy-2">
          {collection.products.map(
            (product: {
              id: string;
              title: string;
              images: { width: number; height: number; src: string }[];
              variants: { price: string }[];
            }) => (
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
            )
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

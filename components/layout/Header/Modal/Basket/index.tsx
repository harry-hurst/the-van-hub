// react
import { useContext } from "react";
import { ShopifyContext } from "../../../../../context/Shopify";

// redux
import { useDispatch } from "react-redux";
import { clearActiveMenu } from "../../../../../state/activeMenuSlice";

// styles
import basketStyles from "./Basket.module.css";

// components
import BasketItem from "./BasketItem";

// next components
import Link from "next/link";

// modules
import { motion } from "framer-motion";
import { basketVariants } from "../../../../../framer_motion/variants/basket";

export default function Basket() {
  // context
  const { basket } = useContext(ShopifyContext);

  // redux
  const dispatch = useDispatch();

  return (
    <motion.div
      variants={basketVariants}
      key="basket"
      initial="hidden"
      animate="visible"
      exit="hidden"
      id={basketStyles.container}
    >
      { basket && basket.lineItems.length !== 0 ? (
        <div id={basketStyles.basketContainer}>
          {basket.lineItems.map(
            (product: {
              title: string | undefined;
              quantity: number | undefined;
              variant: { price: string };
              id: string | undefined;
            }) => (
              <BasketItem
                key={product.id}
                title={product.title}
                quantity={product.quantity}
                price={product.variant.price}
                productId={product.id}
              />
            )
          )}

          <BasketItem title="Total" price={basket.paymentDue} />
          <a href={basket.webUrl} style={{ marginLeft: "auto" }}>
            <button type="button" className="btn btn-primary">
              Checkout
            </button>
          </a>
        </div>
      ) : (
        <div id={basketStyles.emptyBasketContainer}>
          <div>
            <span>No Items in Basket</span>
          </div>

          <Link href="/shop">
            <button
              type="button"
              className="btn btn-success btn-lg"
              onClick={() => {
                dispatch(clearActiveMenu());
              }}
            >
              shop our products
            </button>
          </Link>
        </div>
      )}
    </motion.div>
  );
}

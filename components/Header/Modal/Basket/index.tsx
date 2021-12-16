// react
import { useState, useEffect, useContext } from "react";
import { ShopifyContext } from "../../../../context/Shopify";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../state/store";

// styles
import basketStyles from "./Basket.module.css";

// components
import BasketItem from "./BasketItem";

// next components
import Link from "next/link";

// modules
import { motion, AnimatePresence } from "framer-motion";
import { basketVariants } from "../../../../framer_motion/variants/basket";

export default function Basket() {
  // context
  const { basket } = useContext(ShopifyContext);

  // redux
  const activeMenu = useSelector((state: RootState) => state.activeMenu.menu);

  // create time delay of 400ms for mounting component:
  const [present, setPresent] = useState<boolean>(false);

  useEffect(() => {
    if (activeMenu === "basketMenu") {
      setTimeout(() => {
        setPresent(true);
      }, 400);
    } else {
      setTimeout(() => {
        setPresent(false);
      }, 200);
    }
  }, [activeMenu]);

  return (
    <AnimatePresence>
      {present && (
        <motion.div
          variants={basketVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          id={basketStyles.container}
        >
          {basket.lineItems && basket.lineItems.length !== 0 ? (
            <div id={basketStyles.basket}>
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
                <button type="button" className="btn btn-warning btn-lg">
                  shop our products
                </button>
              </Link>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

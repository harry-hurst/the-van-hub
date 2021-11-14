// react
import { useContext, useState, useEffect } from "react";
import { HeaderContext } from "../../../../context/HeaderContextComponent";
import { ShopifyContext } from "../../../../context/ShopifyContextComponent";

// styles
import basketStyles from "./Basket.module.css";

// components
import BasketItem from "./BasketItem";

// modules
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
    y: "10%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // delay: 0.2,
      duration: 1,
    },
  },
};

export default function Basket() {
  const { headerMenusState } = useContext(HeaderContext);
  const { basket } = useContext(ShopifyContext);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (headerMenusState.basketMenu) {
      setTimeout(() => {
        setOpen(true);
      }, 200);
    } else {
      setOpen(false);
    }
  }, [headerMenusState.basketMenu]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          id={basketStyles.basket}
        >
          {basket.lineItems && basket.lineItems.length !== 0 ? (
            <>
              {basket.lineItems.map(
                (
                  product: {
                    title: string;
                    quantity: number;
                    variant: any;
                    id: string;
                  },
                  index: number
                ) => (
                  <BasketItem
                    key={index}
                    title={product.title}
                    quantity={product.quantity}
                    price={product.variant.price}
                    productId={product.id}
                  />
                )
              )}
              <BasketItem title="Total" price={basket.paymentDue} />
              <a href={basket.webUrl} style={{ alignSelf: "flex-end" }}>
            <button type="button" className="btn btn-primary">
              Checkout
            </button>
          </a>
            </>
          ) : (
            <span id={basketStyles.emptyBasket}>Basket empty</span>
          )}


        </motion.div>
      )}
    </AnimatePresence>
  );
}

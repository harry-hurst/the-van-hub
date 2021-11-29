// react
import { useContext } from "react";
import { ShopifyContext } from "../../../../../context/Shopify";

// styles
import basketItemStyles from "./Basket.module.css";

// modules
import { motion } from "framer-motion";
import { basketItem } from "../../../../../framer_motion/variants/basket";

export default function BasketItem(props: {
  title?: string;
  quantity?: number;
  price: string;
  productId?: string;
}) {
  const { updateBasket } = useContext(ShopifyContext);

  return (
    <motion.div variants={basketItem} id={basketItemStyles.item}>
      <div id={basketItemStyles.title}>{props.title}</div>

      {props.quantity && (
        <div
          className="input-group input-group-sm"
          id={basketItemStyles.quantity}
          style={{ width: "26px"}}
        >
          <input
            type="text"
            className="form-control"
            placeholder={props.quantity.toString()}
          />
        </div>
      )}

      <div id={basketItemStyles.price}>£{props.price}</div>

      {props.productId && (
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          style={{ cursor: "pointer" }}
          onClick={() => {
            updateBasket(props.productId);
          }}
        ></button>
      )}
    </motion.div>
  );
}

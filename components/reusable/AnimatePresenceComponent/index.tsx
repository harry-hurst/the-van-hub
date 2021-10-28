// styles
import animatePresenceComponentStyles from "./AnimatePresenceComponent.module.css";

// modules
import { motion, AnimatePresence } from "framer-motion";

export function AnimatePresenceComponent(props: {
  presence: boolean;
  marginRightAuto?: boolean;
  delayAppearanceTime?: number;
  children: any;
}) {
  return (
    <AnimatePresence>
      {props.presence && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: props.delayAppearanceTime }}
          className={`${
            props.marginRightAuto &&
            `${animatePresenceComponentStyles.marginRightAuto}`
          }`}
        >
          {props.children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

AnimatePresenceComponent.defaultProps = {
  delayAppearanceTime: 0,
};

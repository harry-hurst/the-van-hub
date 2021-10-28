import { motion, AnimatePresence } from "framer-motion";

export function AnimatePresenceComponent(props: {
  presence: boolean;
  children: any;
}) {
  return (
    <AnimatePresence>
      {props.presence && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {props.children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

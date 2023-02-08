import { useEffect, useState } from "react";

import st from "./styles.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Header } from "@/widgets";

type Layout = {
  children: React.ReactNode;
};

export const Layout = (props: Layout) => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className={st.app}
        key={router.pathname}
      >
        <Header />
        <main>{props.children}</main>
        <footer>футер</footer>
      </motion.div>
    </AnimatePresence>
  );
};

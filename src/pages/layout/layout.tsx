import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Header } from "@/widgets";

import st from "./styles.module.scss";

type Layout = {
  children: React.ReactNode;
};

export const Layout = (props: Layout) => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.32 }}
        className={st.app}
        key={router.pathname}
      >
        <Header />
        <main className={st.main}>{props.children}</main>
        <footer>футер</footer>
      </motion.div>
    </AnimatePresence>
  );
};

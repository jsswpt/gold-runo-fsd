import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Header } from "@/widgets";

import st from "./styles.module.scss";
import { Footer } from "@/shared/ui";

type Layout = {
  children: React.ReactNode;
};

export const Layout = (props: Layout) => {
  return (
    <>
      <Header />
      <main className={st.main}>{props.children}</main>
      <Footer />
    </>
  );
};

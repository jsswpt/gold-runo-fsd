import { useEffect, useState } from "react";

import { motion, useAnimationControls } from "framer-motion";

import st from "./styles.module.scss";
import cn from "classnames";
import { useDebounce } from "@/shared/hooks";
import { Container } from "../container/container";

type SubHeader = {};

export const SubHeader = (props: SubHeader) => {
  const [isScrolledEnough, setIsScrolledEnough] = useState(false);

  const [lastPos, setLastPos] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);

  const debouncedLastPos = useDebounce(lastPos, 300);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setCurrentPos(document.documentElement.scrollTop);
      setLastPos(document.documentElement.scrollTop);
    });
  }, []);

  useEffect(() => {
    if (currentPos !== debouncedLastPos) {
      const difference = currentPos - debouncedLastPos;
      console.log("difference --->", difference);

      if (difference <= 0) {
        setIsScrolledEnough(true);
      } else if (difference >= 40) {
        setIsScrolledEnough(false);
      }
    }
    if (document.documentElement.scrollTop === 0) {
      setIsScrolledEnough(true);
    }
  }, [debouncedLastPos, currentPos]);

  useEffect(() => {
    setIsScrolledEnough(true);
  }, []);

  const blockAnimation = useAnimationControls();

  useEffect(() => {
    if (!isScrolledEnough) {
      blockAnimation.start({ transform: "translateY(-100%)" });
    } else {
      blockAnimation.start({ transform: "translateY(0%)" }).finally(() => {});
    }
  }, [isScrolledEnough]);

  return (
    <motion.nav
      animate={blockAnimation}
      transition={{ duration: 0.64 }}
      className={st.sub_header}
    >
      <Container>{JSON.stringify(isScrolledEnough)}</Container>
    </motion.nav>
  );
};

import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "..";

import { HTMLMotionProps, motion } from "framer-motion";

type SectionLayout = {
  title?: string;
  subElement?: React.ReactNode | string;
  children: React.ReactNode;
  alignHeadlines?: "center" | "start";
  risingAnimation?: boolean;
  className?: any;
};

export const SectionLayout = (props: SectionLayout) => {
  const subElementType = typeof props.subElement;
  return (
    <motion.section
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: props.risingAnimation ? 0 : 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.64 }}
      className={cn(st.section, props.className)}
    >
      <Container className={st.section_container}>
        <div className={st.section_wrap__headlines}>
          <div
            className={cn(
              st.headlines_wrap__title,
              props.alignHeadlines === "center" && st.align_center
            )}
          >
            <h2 className={cn("h2", "dark-selection", st.section_title)}>
              {props.title}
            </h2>
          </div>
          <div
            className={cn(
              st.headlines_wrap__subtitle,
              props.alignHeadlines === "center" && st.align_center
            )}
          >
            {subElementType === "string" ? (
              <p
                className={cn(
                  "subtitle1",
                  "dark-selection",
                  st.section_subtitle
                )}
              >
                {props.subElement}
              </p>
            ) : (
              props.subElement
            )}
          </div>
        </div>
        <div className={st.section_wrap__body}>{props.children}</div>
      </Container>
    </motion.section>
  );
};

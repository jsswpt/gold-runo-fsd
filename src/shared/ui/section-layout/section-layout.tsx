import { forwardRef } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "..";

import { HTMLMotionProps, motion } from "framer-motion";

type SectionLayout = {
  title?: React.ReactNode;
  subElement?: React.ReactNode | string;
  children: React.ReactNode;
  alignHeadlines?: "center" | "start";
  className?: any;
  disableHeadlines?: boolean;
  disablePaddingForHeadlines?: boolean;
  disablePaddingForBody?: boolean;
};

export const SectionLayout = forwardRef<HTMLElement, SectionLayout>(
  (props: SectionLayout, ref) => {
    const subElementType = typeof props.subElement;
    return (
      <motion.section
        ref={ref}
        transition={{ duration: 0.64 }}
        className={cn(st.section, props.className)}
      >
        <Container className={st.section_container}>
          {!props.disableHeadlines && (
            <div
              className={cn(
                st.section_wrap__headlines,
                !props.disablePaddingForHeadlines && st.padding
              )}
            >
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
          )}
          <div
            className={cn(
              st.section_wrap__body,
              !props.disablePaddingForBody && st.padding
            )}
          >
            {props.children}
          </div>
        </Container>
      </motion.section>
    );
  }
);

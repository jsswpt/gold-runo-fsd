import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "..";

type SectionLayout = {
  title?: string;
  subElement?: React.ReactNode | string;
  children: React.ReactNode;
  alignHeadlines?: "center" | "start";
};

export const SectionLayout = (props: SectionLayout) => {
  const subElementType = typeof props.subElement;
  return (
    <section className={cn(st.section)}>
      <Container className={st.section_container}>
        <div className={st.section_wrap__headlines}>
          <div className={st.headlines_wrap__title}>
            <h2
              className={cn(
                "h2",
                "dark-selection",
                st.section_title,
                props.alignHeadlines === "start" || !props.alignHeadlines
                  ? st.align_start
                  : st.align_center
              )}
            >
              {props.title}
            </h2>
          </div>
          <div className={st.headlines_wrap__subtitle}>
            {subElementType === "string" ? (
              <p
                className={cn(
                  "subtitle1",
                  "dark-selection",
                  st.section_subtitle,
                  props.alignHeadlines === "start" || !props.alignHeadlines
                    ? st.align_start
                    : st.align_center
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
    </section>
  );
};

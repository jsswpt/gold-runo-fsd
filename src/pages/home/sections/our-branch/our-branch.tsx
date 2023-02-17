import { createRef, useEffect, useRef } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { SectionLayout } from "@/shared/ui";
import { useInView, useScroll } from "framer-motion";

type OurBranch = {};

export const OurBranch = (props: OurBranch) => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.01 });

  useEffect(() => {
    if (inView && ref.current) {
      const scrollTo = async () => {
        return new Promise((res, rej) => {
          window.scrollTo({ behavior: "smooth", top: ref.current!.offsetTop });
          setTimeout(() => {
            res(0);
          }, 500);
        });
      };

      document.body.style.overflowY = "hidden";

      scrollTo().then(() => {
        document.body.style.overflowY = "auto";
      });
    }
  }, [inView, ref]);

  return (
    <SectionLayout
      ref={ref}
      title="Наш филиал"
      subElement="Мы находимся в г. Челябинск, ул. Линейный Переулок 5Б"
      className={st.our_branch_section}
    >
      <div className={st.our_branch_wrap__map}>
        <div className={st.our_branch_map_wrap__bg}></div>
        <div className={st.our_branch_map_wrap__map}></div>
      </div>
    </SectionLayout>
  );
};

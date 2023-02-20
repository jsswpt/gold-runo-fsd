import { createRef, useEffect, useRef } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { SectionLayout } from "@/shared/ui";
import { useInView, useScroll } from "framer-motion";
import Image from "next/image";

import Map from "shared/assets/media/imgs/map.png";
import Link from "next/link";

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
      disablePaddingForBody
      ref={ref}
      title="Наш филиал"
      subElement="Мы находимся в г. Челябинск, ул. Линейный Переулок 5Б"
      className={st.our_branch_section}
    >
      <div className={st.our_branch_wrap__map}>
        <div className={st.our_branch_map_wrap__bg}></div>
        <div className={st.our_branch_map_wrap__map}>
          <a
            href="https://yandex.ru/maps/org/yorkom/6183322808/?ll=61.513253%2C55.160257&z=10"
            target="_blank"
          >
            <Image alt="123" src={Map} />
          </a>
        </div>
      </div>
    </SectionLayout>
  );
};

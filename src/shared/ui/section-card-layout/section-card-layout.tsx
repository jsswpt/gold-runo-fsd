import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { MediaType } from "@/shared/api/internal";
import Image from "next/image";

type SectionCardLayout = {
  title: string;
  subtitle: string;
  media: MediaType;
};

export const SectionCardLayout = (props: SectionCardLayout) => {
  return (
    <div className={st.section_card_layout}>
      <div className={st.card_side__left}>
        <div className={st.left_wrap__text}>
          <h2 className={cn("h2", "dark-selection", st.layout_title)}>
            {props.title}
          </h2>
          <p className={cn("body1", "dark-selection", st.layout_text)}>
            {props.subtitle}
          </p>
        </div>
      </div>
      <div className={st.card_side__right}>
        <div className={st.img_wrapper}>
          {props.media.image_url && (
            <Image
              src={props.media.image_url}
              alt={`${props.media.id}`}
              className="dark-selection"
            />
          )}
        </div>
      </div>
    </div>
  );
};

import {} from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { SectionCardLayout, SectionLayout } from "@/shared/ui";

import Image1 from "shared/assets/media/imgs/sofa-example.jpg";

type Filling = {};

export const Filling = (props: Filling) => {
  return (
    <SectionLayout
      disableHeadlines
      disablePaddingForBody
      className={st.section_filling}
    >
      <SectionCardLayout
        media={{ id: 1, image_url: Image1, video_url: null }}
        title="Наполнение"
        subtitle="В основании высокоплотный ППУ — средней жесткости в комбинации с
            ортопедическими латами. Можем сделать на независимом пружинном
            блоке. Удобные подлокотники из МДФ + потайной ящик. Огромный
            бельевой ящик с вентиляцией. Механизм Пантограф — плавный и
            долговечный."
      />
    </SectionLayout>
  );
};

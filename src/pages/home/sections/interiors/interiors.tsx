import {} from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { SectionLayout, Select, ThreeAndOneQuarterLayout } from "@/shared/ui";
import { ProductCard } from "@/widgets";

import InteriorExample from "shared/assets/media/imgs/interior-example.jpg";
import Image from "next/image";

type Interiors = {};

export const Interiors = (props: Interiors) => {
  return (
    <SectionLayout
      title="Интерьеры с нашими моделями"
      subElement={
        <div className={st.options_wrap}>
          <Select
            id="1"
            selectName="interior"
            title="Гостиная"
            value={"living"}
            defaultChecked
            onSelect={() => {}}
          />
          <Select
            id="2"
            selectName="interior"
            title="Спальня"
            value={"bed"}
            onSelect={() => {}}
          />
          <Select
            id="3"
            selectName="interior"
            title="Столовая"
            value={"dining"}
            onSelect={() => {}}
          />
          <Select
            id="4"
            selectName="interior"
            title="Прихожая"
            value={"hallway"}
            onSelect={() => {}}
          />
          <Select
            id="5"
            selectName="interior"
            title="Детская"
            value={"childrens"}
            onSelect={() => {}}
          />
          <Select
            id="6"
            selectName="interior"
            title="Рабочее место"
            value={"working"}
            onSelect={() => {}}
          />
        </div>
      }
    >
      <ThreeAndOneQuarterLayout
        threeQuartersEl={<Image alt="Image" src={InteriorExample} />}
        oneQuarterEl={
          <ProductCard
            colors={[]}
            description="шик диван"
            id={1}
            imgs={[InteriorExample]}
            name="Диван №32323"
            price={2000}
            oldPrice={null}
          />
        }
      />
    </SectionLayout>
  );
};

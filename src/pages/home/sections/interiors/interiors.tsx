import {} from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import {
  Checkbox,
  ProductCard,
  SectionLayout,
  Select,
  ThreeAndOneQuarterLayout,
} from "@/shared/ui";

import InteriorExample from "shared/assets/media/imgs/interior-example.jpg";
import Image from "next/image";

type Interiors = {};

export const Interiors = (props: Interiors) => {
  return (
    <SectionLayout
      disablePaddingForBody
      title="Интерьеры с нашими моделями"
      subElement={
        <div className={st.options_wrap}>
          <Checkbox type="radio" name="select-interior" defaultChecked>
            Гостиная
          </Checkbox>
          <Checkbox type="radio" name="select-interior">
            Спальня
          </Checkbox>
          <Checkbox type="radio" name="select-interior">
            Столовая
          </Checkbox>
          <Checkbox type="radio" name="select-interior">
            Прихожая
          </Checkbox>
          <Checkbox type="radio" name="select-interior">
            Детская
          </Checkbox>
          <Checkbox type="radio" name="select-interior">
            Рабочее место
          </Checkbox>
        </div>
      }
    >
      <ThreeAndOneQuarterLayout
        direction="row-reversed"
        threeQuartersEl={
          <Image alt="Image" src={InteriorExample} className="dark-selection" />
        }
        oneQuarterEl={
          <>
            <ProductCard
              href=""
              id={1}
              price={10000}
              priceT="min"
              title="Интерьер афигеть"
              media={null}
            />
          </>
        }
      />
    </SectionLayout>
  );
};

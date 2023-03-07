import { memo, useState } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import {
  Container,
  ProductCard,
  SectionLayout,
  ThreeAndOneQuarterLayout,
} from "@/shared/ui";
import { SelectSet } from "@/features";
import { useAppSelector } from "@/shared/lib";
import { AnimatePresence, motion } from "framer-motion";

import SetImage from "shared/assets/media/imgs/set-example.jpg";
import Image from "next/image";

type Sets = {};

export const Sets = memo((props: Sets) => {
  const currentSet = useAppSelector(
    (state) => state["entities/sets"].currentSet
  );

  return (
    <SectionLayout
      disablePaddingForBody
      title="Комплекты"
      subElement={
        <div className={st.sets_wrap__select}>
          <SelectSet />
        </div>
      }
    >
      <ThreeAndOneQuarterLayout
        oneQuarterKey={currentSet!.id}
        threeQuarterKey={currentSet!.id}
        oneQuarterEl={
          <>
            <ProductCard
              href=""
              id={1}
              media={currentSet!.media}
              price={currentSet!.price}
              priceT="min"
              title={currentSet!.name}
              disableColors
            />
          </>
        }
        threeQuartersEl={
          <Image src={SetImage} alt="" className="dark-selection" />
        }
      />
    </SectionLayout>
  );
});

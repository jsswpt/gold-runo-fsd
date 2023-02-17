import { memo, useState } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import {
  Container,
  SectionLayout,
  ThreeAndOneQuarterLayout,
} from "@/shared/ui";
import { SelectSet } from "@/features";
import { useAppSelector } from "@/shared/lib";
import { ProductCard } from "@/widgets";
import { AnimatePresence, motion } from "framer-motion";

import SetImage from "shared/assets/media/imgs/set-example.jpg";
import Image from "next/image";

type Sets = {};

export const Sets = memo((props: Sets) => {
  const currentSet = useAppSelector(
    (state) => state["entities/sets"].currentSet,
    (prev, next) => prev === next
  );
  return (
    <SectionLayout
      risingAnimation
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
          <ProductCard
            {...currentSet!}
            imgs={[SetImage]}
            key={currentSet!.id}
          />
        }
        threeQuartersEl={
          <Image src={SetImage} alt="" className="dark-selection" />
        }
        oneQuarterAnimation={{
          initial: {
            opacity: 0,
          },
          animate: { opacity: 1 },
          exit: {
            opacity: 0,
          },
          transition: { duration: 0.32 },
        }}
        threeQuarterAnimation={{
          initial: { scale: 0, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0, opacity: 0 },
          transition: { duration: 0.32 },
        }}
      />
    </SectionLayout>
  );
});

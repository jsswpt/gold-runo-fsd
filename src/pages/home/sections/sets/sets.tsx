import { memo, useState } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { Container, SectionLayout } from "@/shared/ui";
import { SelectSet } from "@/features";
import { useAppSelector } from "@/shared/lib";
import { ProductCard } from "@/widgets";

type Sets = {};

export const Sets = memo((props: Sets) => {
  const currentSet = useAppSelector(
    (state) => state["entities/sets"].currentSet,
    (prev, next) => prev === next
  );
  return (
    <SectionLayout
      title="Комплекты"
      subElement={
        <div className={st.sets_wrap__select}>
          <SelectSet />
        </div>
      }
    >
      <div className={st.sets_wrap__presentation}>
        <div className={st.presentation_wrap__img}>
          <div className={st.presentation_img_wrapper}>
            <div>123</div>
          </div>
        </div>
        <div className={st.presentation_wrap__card}>
          <ProductCard {...currentSet!} />
        </div>
      </div>
    </SectionLayout>
  );
});

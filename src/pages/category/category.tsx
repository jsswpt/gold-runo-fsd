import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { ProductsGrid, SectionLayout } from "@/shared/ui";
import {
  FilterByKindAndSortProducts,
  FilterProducts,
  ProductCard,
  SortProducts,
} from "@/widgets";

import Image1 from "shared/assets/media/imgs/interior-example.jpg";
import Video1 from "shared/assets/media/imgs/fake-video.png";
import { BaseSort, FilterProductsByKind } from "@/features";

type Category = {};

export const Category = (props: Category) => {
  return (
    <>
      <SectionLayout
        disableHeadlines
        disablePaddingForBody
        disablePaddingForHeadlines
      >
        хлебные крошки
      </SectionLayout>
      <SectionLayout
        title="Диваны"
        disablePaddingForBody
        disablePaddingForHeadlines
        subElement={<FilterByKindAndSortProducts />}
      >
        <FilterProducts />
        <div className={st.category_wrap__items}>
          <ProductsGrid>
            <ProductCard
              href="/products/3"
              id={3}
              media={[
                { id: 1, image_url: Image1, video_url: null },
                { id: 2, image_url: null, video_url: Video1 },
              ]}
              price={1000}
              priceT={"min"}
              title="Ещё какая-то"
            />
            <ProductCard
              href="/products/3"
              id={3}
              media={[
                { id: 1, image_url: Image1, video_url: null },
                { id: 2, image_url: null, video_url: Video1 },
              ]}
              price={1000}
              priceT={"min"}
              title="Ещё какая-то"
            />
            <ProductCard
              href="/products/3"
              id={3}
              media={[
                { id: 1, image_url: Image1, video_url: null },
                { id: 2, image_url: null, video_url: Video1 },
              ]}
              price={1000}
              priceT={"min"}
              title="Ещё какая-то"
            />
            <ProductCard
              href="/products/3"
              id={3}
              media={[
                { id: 1, image_url: Image1, video_url: null },
                { id: 2, image_url: null, video_url: Video1 },
              ]}
              price={1000}
              priceT={"min"}
              title="Ещё какая-то"
            />
          </ProductsGrid>
        </div>
      </SectionLayout>
    </>
  );
};

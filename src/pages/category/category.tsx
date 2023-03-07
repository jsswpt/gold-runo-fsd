import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { ProductCard, ProductsGrid, SectionLayout } from "@/shared/ui";
import {
  FilterByKindAndSortProducts,
  FilterProducts,
  SortProducts,
} from "@/widgets";

import Image1 from "shared/assets/media/imgs/interior-example.jpg";
import Video1 from "shared/assets/media/imgs/fake-video.jpg";
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
              href="/product-preview/1"
              id={3}
              media={[
                { id: 1, image_url: Image1, video_url: null },
                { id: 2, image_url: null, video_url: Video1 },
              ]}
              price={1000}
              priceT={"min"}
              title="Майами"
            />
            <ProductCard
              href="/product-preview/2"
              id={3}
              media={[
                { id: 1, image_url: Image1, video_url: null },
                { id: 2, image_url: null, video_url: Video1 },
              ]}
              price={1000}
              priceT={"min"}
              title="Бали"
            />
            <ProductCard
              href="/product-preview/3"
              id={3}
              media={[
                { id: 1, image_url: Image1, video_url: null },
                { id: 2, image_url: null, video_url: Video1 },
              ]}
              price={1000}
              priceT={"min"}
              title="Финка"
            />
            <ProductCard
              href="/product-preview/4"
              id={3}
              media={[
                { id: 1, image_url: Image1, video_url: null },
                { id: 2, image_url: null, video_url: Video1 },
              ]}
              price={1000}
              priceT={"min"}
              title="Атланта"
            />
          </ProductsGrid>
        </div>
      </SectionLayout>
    </>
  );
};

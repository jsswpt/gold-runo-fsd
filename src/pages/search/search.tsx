import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { SectionLayout, ProductsGrid, ProductCard } from "@/shared/ui";
import { FilterByKindAndSortProducts, FilterProducts } from "@/widgets";

import Image1 from "shared/assets/media/imgs/interior-example.jpg";
import Video1 from "shared/assets/media/imgs/fake-video.jpg";
import { useRouter } from "next/router";
import Head from "next/head";

type Search = {};

export const Search = (props: Search) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Результаты по запросу {router.query.query} | YORCOM</title>
      </Head>
      <SectionLayout
        disableHeadlines
        disablePaddingForBody
        disablePaddingForHeadlines
      >
        хлебные крошки
      </SectionLayout>
      <SectionLayout
        title={`Результаты по запросу ${router.query.query}`}
        subElement={<FilterByKindAndSortProducts />}
        disablePaddingForBody
        disablePaddingForHeadlines
      >
        <div className={st.products_wrap__filter}>
          <FilterProducts />
        </div>
        <div className={st.products_wrap__items}>
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
              title="Диван Бали"
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
              title="Пуфик (вставить название)"
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
              title="Матрас тытыты"
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
              title="Стул крутой"
            />
          </ProductsGrid>
        </div>
      </SectionLayout>
    </>
  );
};

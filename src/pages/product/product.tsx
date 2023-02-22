import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { SectionLayout } from "@/shared/ui";
import { ProductCard } from "@/widgets";

type Product = {};

export const Product = (props: Product) => {
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
        title="Майами"
        subElement="Диваны майами чо"
        disablePaddingForBody
        disablePaddingForHeadlines
      >
        <div className={st.products_wrap__filter}>фильтры</div>
        <div className={st.products_wrap__items}>
          <div className={st.products_items_wrap__grid}>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
          </div>
        </div>
        <div className={st.products_wrap__banner}>Баннер</div>
        <div className={st.products_wrap__items}>
          <div className={st.products_items_wrap__grid}>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                media={[{ id: 1, image_url: null, video_url: "" }]}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
          </div>
        </div>
        <div className={st.products_wrap__items}>Пагинация</div>
      </SectionLayout>
    </>
  );
};

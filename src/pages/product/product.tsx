import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { ProductsGrid, SectionLayout } from "@/shared/ui";
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
        title="Диван майами да"
        subElement="Диваны майами"
        disablePaddingForBody
        disablePaddingForHeadlines
      >
        <div className={st.products_wrap__filter}>фильтры</div>
        <div className={st.products_wrap__items}>
          <ProductsGrid>
            <div className={st.products_items_grid__item}>
              <ProductCard
                href="/product/1"
                id={1}
                media={null}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                href="/product/1"
                id={1}
                media={null}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                href="/product/1"
                id={1}
                media={null}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                href="/product/1"
                id={1}
                media={null}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                href="/product/1"
                id={1}
                media={null}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
            <div className={st.products_items_grid__item}>
              <ProductCard
                href="/product/1"
                id={1}
                media={null}
                price={1000}
                priceT={"min"}
                title="Майами-1"
              />
            </div>
          </ProductsGrid>
        </div>
        <div className={st.products_wrap__banner}>Баннер</div>

        <div className={st.products_wrap__items}>Пагинация</div>
      </SectionLayout>
    </>
  );
};

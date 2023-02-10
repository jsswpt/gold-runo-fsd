import {} from "react";

import st from "../styles.module.scss";
import cn from "classnames";
import { Container } from "@/shared/ui";
import { ProductCard } from "@/widgets";

export const SalesLeader = () => {
  return (
    <section className={cn(st.section, st.sales_leader_section)}>
      <Container className={st.section_container}>
        <div className={st.section_wrap__headlines}>
          <h2 className={cn("h2", st.section_title)}>Лидеры продаж</h2>
          <p className={cn("subtitle1", st.section_subtitle)}>
            Наиболее популярные модели из всех категорий интернет-магазина
          </p>
        </div>
        <div className={st.section_wrap__body}>
          <div
            className={cn(
              st.sales_section_wrap,
              st.sales_section_wrap__products
            )}
          >
            {Array(25)
              .fill(0)
              .map((item, idx) => (
                <ProductCard key={idx} />
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

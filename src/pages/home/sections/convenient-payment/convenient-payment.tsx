import {} from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { Button, SectionLayout } from "@/shared/ui";
import Link from "next/link";
import Image from "next/image";

type ConvenientPayment = {};

export const ConvenientPayment = (props: ConvenientPayment) => {
  return (
    <SectionLayout
      risingAnimation
      title="Оплата удобным способом"
      subElement={
        <div className={st.payment_points}>
          <Link href="/payment">
            <Button variant="outlined" color="default">
              Наличными
            </Button>
          </Link>
          <Link href="/payment">
            <Button variant="outlined" color="default">
              Картой
            </Button>
          </Link>
          <Link href="/payment">
            <Button variant="outlined" color="default">
              По счёту
            </Button>
          </Link>
          <Link href="/payment">
            <Button variant="outlined" color="default">
              По ссылке
            </Button>
          </Link>
        </div>
      }
    >
      <div className={st.payment_wrapper}>
        <div className={st.payment_wrap__info}>
          <div className={st.info_wrap__title}>
            <p className={cn("body1", "dark-selection", st.title_wrap__text)}>
              Вы также можете воспользоваться{" "}
              <Link href={""} className="light-selection">
                рассрочкой
              </Link>
              . Мы являемся партнёрами банка Тинькофф, поэтому нашим клиентам
              доступна рассрочка до 12 месяцев без процентов
            </p>
          </div>
          <div className={st.info_wrap__buttons}>
            <Button color="primary" size="lg">
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

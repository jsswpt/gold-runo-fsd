import {} from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { Button, SectionLayout } from "@/shared/ui";
import Link from "next/link";

type SaveYourMoney = {};

export const SaveYourMoney = (props: SaveYourMoney) => {
  return (
    <SectionLayout
      title={
        <>
          Сэкономим Ваше{" "}
          <span className={cn("light-selection", st.accent_text)}>
            время и деньги
          </span>
        </>
      }
      subElement={
        <p className={cn("body1", "light-selection", st.save_your_money_title)}>
          Поможем вам определиться с моделью, сориентируем в размерах и
          наполнении, учтем цвета вашего интерьера, проконсультируем по условиям
          доставки в Ваш город.
        </p>
      }
    >
      <div className={st.save_your_money_wrap}>
        <div className={st.save_your_money_wrap__body}>
          <p
            className={cn("body2", "dark-selection", st.contact_with_us_title)}
          >
            Свяжитесь с нами удобным для Вас способом:
          </p>
        </div>
        <div className={st.save_your_money_wrap__buttons}>
          <a href="tel:89182828586">
            <Button
              fullWidth
              size="lg"
              colorOnHover="success"
              variant="outlined"
            >
              Телефон
            </Button>
          </a>
          <Button size="lg" colorOnHover="success" variant="outlined">
            WhatsApp
          </Button>
          <Button size="lg" colorOnHover="success" variant="outlined">
            Обратный звонок
          </Button>
        </div>
      </div>
    </SectionLayout>
  );
};

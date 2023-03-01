import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Container } from "../container/container";
import Link from "next/link";
import { Logo } from "@/shared/assets";

type Footer = {};

export const Footer = (props: Footer) => {
  return (
    <footer className={st.footer}>
      <Container className={st.footer_container}>
        <div className={st.footer_wrap__top}>
          <div className={st.header_top_wrap__logo}>
            <Logo />
          </div>
        </div>
        <div className={st.footer_wrap__body}>
          <div className={st.footer_wrap__grid}>
            <div className={st.footer_grid__item}>
              <div className={st.footer_point}>
                <div className={st.footer_point_wrap__title}>
                  <h6
                    className={cn(
                      "h6",
                      "dark-selection",
                      st.footer_point_title
                    )}
                  >
                    Контакты
                  </h6>
                </div>
                <div className={st.footer_point_wrap__body}>
                  <ul className={st.footer_point_body_wrap__list}>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        О компании
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Контакты
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Блог
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Отзывы
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Доставка
                      </Link>
                    </li>
                  </ul>
                  <a
                    href="tel:+79000928086"
                    className={cn(
                      "body2",
                      "dark-selection",
                      st.footer_point_item__title
                    )}
                  >
                    +7 (900) 092-80-86
                  </a>
                  <p
                    className={cn(
                      "body2",
                      "dark-selection",
                      st.footer_point_item__title
                    )}
                  >
                    Пн-Пт: 9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
            <div className={st.footer_grid__item}>
              <div className={st.footer_point}>
                <div className={st.footer_point_wrap__title}>
                  <h6
                    className={cn(
                      "h6",
                      "dark-selection",
                      st.footer_point_title
                    )}
                  >
                    Йорком
                  </h6>
                </div>
                <div className={st.footer_point_wrap__body}>
                  <ul className={st.footer_point_body_wrap__list}>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        О компании
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Контакты
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Блог
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Отзывы
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Доставка
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={st.footer_grid__item}>
              <div className={st.footer_point}>
                <div className={st.footer_point_wrap__title}>
                  <h6
                    className={cn(
                      "h6",
                      "dark-selection",
                      st.footer_point_title
                    )}
                  >
                    Помощь
                  </h6>
                </div>
                <div className={st.footer_point_wrap__body}>
                  <ul className={st.footer_point_body_wrap__list}>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Оплата
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Возврат
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Рассрочка
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Эксплуатация
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Доставка
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={st.footer_grid__item}>
              <div className={st.footer_point}>
                <div className={st.footer_point_wrap__title}>
                  <h6
                    className={cn(
                      "h6",
                      "dark-selection",
                      st.footer_point_title
                    )}
                  >
                    Каталог
                  </h6>
                </div>
                <div className={st.footer_point_wrap__body}>
                  <ul className={st.footer_point_body_wrap__list}>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Диваны
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Кресла
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Кровати
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Матрасы
                      </Link>
                    </li>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Пуфы
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={st.footer_grid__item}>
              <div className={st.footer_point}>
                <div className={st.footer_point_wrap__title}>
                  <h6
                    className={cn(
                      "h6",
                      "dark-selection",
                      st.footer_point_title
                    )}
                  >
                    Подписка
                  </h6>
                </div>
                <div className={st.footer_point_wrap__body}>
                  <ul className={st.footer_point_body_wrap__list}>
                    <li className={st.footer_point_list__item}>
                      <Link
                        href={""}
                        className={cn(
                          "body2",
                          "dark-selection",
                          st.footer_point_item__title
                        )}
                      >
                        Подпишись, чтобы быть в курсе всех акций и новинок
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={st.footer_wrap__bottom}>
          <div className={st.footer_bottom_wrap__points}>
            <div className={st.footer_points_wrap__point}>
              <Link
                href={""}
                className={cn(
                  "caption",
                  "dark-selection",
                  st.footer_bottom_point__title
                )}
              >
                Политика конфиденциальности
              </Link>
            </div>
            <div className={st.footer_points_wrap__point}>
              <Link
                href=""
                className={cn(
                  "caption",
                  "dark-selection",
                  st.footer_bottom_point__title
                )}
              >
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

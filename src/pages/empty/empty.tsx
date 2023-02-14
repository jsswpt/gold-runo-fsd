import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Button } from "@/shared/ui";

export const Empty = () => {
  return (
    <>
      <Button color="primary">Создать</Button>
      <Button color="success">Подтвердить</Button>
      <Button color="warning">Предупреждение</Button>
      <Button color="danger">Удалить</Button>
      <Button color="default">Нейтральная</Button>
    </>
  );
};

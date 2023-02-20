import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Button, Input } from "@/shared/ui";

export const Empty = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Input placeholder="" />
        <Button color="primary">Создать</Button>
      </div>
      <Button color="success">Подтвердить</Button>
      <Button color="warning">Предупреждение</Button>
      <Button color="danger">Удалить</Button>
      <Button color="default">Нейтральная</Button>
    </>
  );
};

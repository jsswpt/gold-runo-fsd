import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type Select = {
  onSelect: (arg: any) => void;
  selectName: string;
  title: string;
  id: string;
  value: any;
  defaultChecked?: boolean;
};

export const Select = (props: Select) => {
  return (
    <div className={st.radio_wrapper}>
      <input
        defaultChecked={props.defaultChecked}
        id={props.id}
        name={props.selectName}
        type={"radio"}
        hidden
        onChange={() => props.onSelect(props.value)}
      />
      <label htmlFor={props.id}>
        <p className={cn("subtitle1", "dark-selection", st.select)}>
          {props.title}
        </p>
      </label>
    </div>
  );
};

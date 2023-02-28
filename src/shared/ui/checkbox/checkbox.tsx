import { ChangeEvent, useId } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type Checkbox = {
  children?: React.ReactNode;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  type: "radio" | "checkbox";
  name?: string;
  value?: any;
};

export const Checkbox = (props: Checkbox) => {
  const id = useId();
  return (
    <div className={st.checkbox_wrapper}>
      <input
        value={props.value}
        defaultChecked={props.defaultChecked}
        id={`checkbox-${id}`}
        name={props.name}
        checked={props.checked}
        onChange={(e) => props.onChange && props.onChange(e)}
        type={props.type}
        hidden
      />
      <label
        htmlFor={`checkbox-${id}`}
        className={cn("action-inner", st.checkbox)}
      >
        {props.children}
      </label>
    </div>
  );
};

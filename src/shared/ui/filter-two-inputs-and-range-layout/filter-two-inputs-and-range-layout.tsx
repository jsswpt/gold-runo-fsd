import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type FilterTwoInputsAndRangeLayout = {
  firstInput: React.ReactNode;
  secondInput: React.ReactNode;
  range: React.ReactNode;
};

export const FilterTwoInputsAndRangeLayout = (
  props: FilterTwoInputsAndRangeLayout
) => {
  return (
    <div className={st.layout}>
      <div className={st.layout_wrap__two_inputs}>
        <div>{props.firstInput}</div>
        <div>{props.secondInput}</div>
      </div>
      <div>{props.range}</div>
    </div>
  );
};

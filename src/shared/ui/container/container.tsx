import st from "./styles.module.scss";
import cn from "classnames";

type Container = {
  children?: React.ReactNode;
  ignoreBreakpoints?: boolean;
  disablePadding?: boolean;
  className?: any;
};

/**
 * @param ignoreBreakpoints растягивает контейнер во всю ширину
 * @param disablePadding убирает паддинги
 */
export const Container = (props: Container) => {
  return (
    <div
      className={cn(st.container, props.className, {
        [st.disable_padding]: props.disablePadding,
        [st.ignore_breakpoints]: props.ignoreBreakpoints,
      })}
    >
      {props.children}
    </div>
  );
};

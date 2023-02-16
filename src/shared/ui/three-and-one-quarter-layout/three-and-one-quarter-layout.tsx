import st from "./styles.module.scss";

import cn from "classnames";

import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

type ThreeAndOneQuarterLayout = {
  direction?: "row" | "row-reversed";
  oneQuarterEl: React.ReactNode;
  threeQuartersEl: React.ReactNode;

  oneQuarterKey?: string | number;
  threeQuarterKey?: string | number;
  blockKey?: string | number;

  oneQuarterAnimation?: HTMLMotionProps<"div">;
  threeQuarterAnimation?: HTMLMotionProps<"div">;
  blockAnimation?: HTMLMotionProps<"div">;
};

export const ThreeAndOneQuarterLayout = (props: ThreeAndOneQuarterLayout) => {
  return (
    <motion.div
      {...props.blockAnimation}
      className={cn(
        st.quarters_layout,
        props.direction === "row-reversed" && st.reversed
      )}
      key={props.blockKey}
    >
      <div className={st.quarters_wrap__big}>
        <AnimatePresence mode="wait">
          <motion.div
            {...props.threeQuarterAnimation}
            key={props.threeQuarterKey}
            className={st.big_img_wrapper}
          >
            {props.threeQuartersEl}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={st.quarters_wrap__small}>
        <AnimatePresence mode="wait">
          <motion.div key={props.oneQuarterKey} {...props.oneQuarterAnimation}>
            {props.oneQuarterEl}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

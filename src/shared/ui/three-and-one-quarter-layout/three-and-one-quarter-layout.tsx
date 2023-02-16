import st from "./styles.module.scss";

import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

type ThreeAndOneQuarterLayout = {
  oneQuarterEl: React.ReactNode;
  threeQuartersEl: React.ReactNode;

  oneQuarterKey?: string | number;
  threeQuarterKey?: string | number;

  oneQuarterAnimation?: HTMLMotionProps<"div">;
  threeQuarterAnimation?: HTMLMotionProps<"div">;
};

export const ThreeAndOneQuarterLayout = (props: ThreeAndOneQuarterLayout) => {
  return (
    <div className={st.quarters_layout}>
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
    </div>
  );
};

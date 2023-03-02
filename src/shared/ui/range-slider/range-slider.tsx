import {
  ChangeEvent,
  CSSProperties,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type RangeSlider = {
  minValue: number;
  maxValue: number;
  min: number;
  max: number;

  onMinChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onMaxChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const RangeSlider = (props: RangeSlider) => {
  const lineRef = useRef<HTMLDivElement>(null);

  const countFirstPos = () => {
    return (100 / (props.max - props.min)) * (props.minValue - props.min);
  };

  const countSecondPos = () => {
    return (100 / (props.max - props.min)) * (props.maxValue - props.min);
  };

  return (
    <div
      className={st.range_wrapper}
      style={
        {
          ["--first-pos"]: `${
            props.minValue > props.maxValue ? countSecondPos() : countFirstPos()
          }%`,
          ["--second-pos"]: `${
            props.maxValue < props.minValue
              ? 100 - countFirstPos()
              : 100 - countSecondPos()
          }%`,
        } as CSSProperties
      }
    >
      <div ref={lineRef} className={st.range_slider}>
        <i className={st.range_presentator}></i>
      </div>
      <input
        onChange={props.onMinChange}
        value={props.minValue}
        min={props.min}
        max={props.max}
        type="range"
        className={st.min}
      />
      <input
        onChange={props.onMaxChange}
        value={props.maxValue}
        min={props.min}
        max={props.max}
        type="range"
        className={st.max}
      />
    </div>
  );
};

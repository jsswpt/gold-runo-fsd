import { useEffect, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type Presenter360 = {
  children: React.ReactNode;
  className?: any;
};

type Direction = "horizontal" | "vertical";

type Pos = {
  start: number;
  end: number;
};

export const Presenter360 = (props: Presenter360) => {
  const [isHolding, setIsHolding] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const sliderWrapRef = useRef<HTMLDivElement>(null);

  const startMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsHolding(true);
    setStartX(e.nativeEvent.offsetX);
  };

  const endMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsHolding(false);
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isHolding) {
      const oneSlideSpace =
        sliderWrapRef.current!.clientWidth /
        sliderWrapRef.current!.childNodes.length;

      setCurrentSlide(
        +(((startX - e.nativeEvent.offsetX) / oneSlideSpace) * 1).toFixed(0)
      );
    }
  };

  useEffect(() => {
    console.log(currentSlide);
    wrapperRef.current?.scrollTo({
      left: currentSlide * +sliderWrapRef.current!.clientWidth.toFixed(0),
    });
  }, [currentSlide]);

  return (
    <div ref={wrapperRef} className={cn(st.presenter_360, props.className)}>
      <div
        ref={sliderWrapRef}
        onMouseDown={(e) => startMove(e)}
        onMouseUp={(e) => endMove(e)}
        onMouseMove={(e) => handleMove(e)}
        className={st.presenter_360_wrap__slides}
      >
        {props.children}
      </div>
    </div>
  );
};

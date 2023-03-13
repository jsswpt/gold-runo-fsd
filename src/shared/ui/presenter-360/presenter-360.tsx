import { useEffect, useRef, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";

type Presenter360 = {
  children: React.ReactNode;
  className?: any;
};

export const Presenter360 = (props: Presenter360) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sliderWrapRef = useRef<HTMLDivElement>(null);

  const [isHolding, setIsHolding] = useState(false);

  const [neededSpace, setNeededSpace] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(5);
  const [maxSlides, setMaxSlides] = useState(0);

  const [startX, setStartX] = useState(0);

  const handleMoving = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isHolding) {
      if (startX > e.nativeEvent.offsetX) {
        const space =
          startX - e.nativeEvent.offsetX + currentSlide * neededSpace;

        const slides = +(space / neededSpace).toFixed();

        setCurrentSlide(slides);
      } else {
        const space = e.nativeEvent.offsetX - startX;
        const slides = +(space / neededSpace).toFixed();

        setCurrentSlide(maxSlides - slides);
      }
    }
  };

  useEffect(() => {
    setNeededSpace(
      wrapperRef.current!.clientWidth / sliderWrapRef.current!.childElementCount
    );

    setMaxSlides(sliderWrapRef.current!.childElementCount);
  }, []);

  useEffect(() => {
    if (currentSlide < 0) {
      setCurrentSlide(maxSlides);
    } else if (currentSlide > maxSlides) {
      setCurrentSlide(0);
    }
    wrapperRef.current!.scrollTo({
      left: currentSlide * wrapperRef.current!.clientWidth,
    });
  }, [currentSlide]);

  return (
    <>
      <div>needed space: {neededSpace}</div>
      <div>max: {maxSlides}</div>
      <div>prev x: {startX}</div>
      <div>current slide: {currentSlide}</div>
      <div ref={wrapperRef} className={cn(st.presenter_360, props.className)}>
        <div className={st.slider_saver}></div>
        <div ref={sliderWrapRef} className={st.presenter_360_wrap__slides}>
          {props.children}
        </div>
      </div>
    </>
  );
};

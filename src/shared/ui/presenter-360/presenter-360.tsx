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

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartX(e.nativeEvent.offsetX);
    setIsHolding(true);
  };
  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHolding(false);
  };

  const handleMoving = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isHolding) {
      if (startX > e.nativeEvent.offsetX) {
        const space = startX - e.nativeEvent.offsetX;

        if (+Math.abs(space) >= neededSpace) {
          console.log("otrabotsal vlevo");
          setCurrentSlide((slides) => slides + 1);
        }
      } else {
        const space = e.nativeEvent.offsetX - startX;

        if (+Math.abs(space) >= neededSpace) {
          console.log("otrabotsal vpravo");
          setCurrentSlide((slides) => slides - 1);
        }
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
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMoving}
      ref={wrapperRef}
      className={cn(st.presenter_360, props.className)}
    >
      <div className={st.slider_saver}></div>
      <div ref={sliderWrapRef} className={st.presenter_360_wrap__slides}>
        {props.children}
      </div>
    </div>
  );
};

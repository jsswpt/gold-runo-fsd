import st from "../../styles.module.scss";
import cn from "classnames";
import { MediaType } from "@/shared/api/internal";
import Image from "next/image";

type PresenterSlide = { media: MediaType; className?: any };

export const PresenterSlide = (props: PresenterSlide) => {
  return (
    <div className={cn(st.presenter_slide, props.className)}>
      <div className={st.slider_saver}></div>
      {props.media.image_url ? (
        <Image fill src={props.media.image_url} alt={"alt"} />
      ) : (
        <video>video</video>
      )}
    </div>
  );
};

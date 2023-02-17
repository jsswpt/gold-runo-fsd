import { Suspense, useState } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { SectionLayout, Select } from "@/shared/ui";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

const YouTube = dynamic(
  () => import("./youtube/youtube").then((m) => m.YouTubeChunk),
  {
    ssr: false,
    loading(loadingProps) {
      return loadingProps.isLoading ? <>loading</> : null;
    },
  }
);
const Blog = dynamic(() => import("./blog/blog").then((m) => m.BlogChunk), {
  ssr: false,
  loading(loadingProps) {
    return loadingProps.isLoading ? <>loading</> : null;
  },
});
const Reviews = dynamic(
  () => import("./reviews/reviews").then((m) => m.ReviewsChunk),
  {
    ssr: false,
    loading(loadingProps) {
      return loadingProps.isLoading ? <>loading</> : null;
    },
  }
);

type ReadLookDo = {};

type Categories = "youtube" | "blog" | "reviews";

export const ReadLookDo = (props: ReadLookDo) => {
  const [currentCategory, setCurrentCategory] = useState<Categories>("youtube");
  return (
    <SectionLayout
      disablePaddingForBody
      risingAnimation
      alignHeadlines="center"
      title={
        <>
          <span
            className={cn(
              st.read_look_do_span,
              currentCategory === "youtube" && st.accent_text,
              "dark-selection"
            )}
          >
            Смотри
          </span>
          ,{" "}
          <span
            className={cn(
              st.read_look_do_span,
              currentCategory === "blog" && st.accent_text,
              "dark-selection"
            )}
          >
            читай
          </span>
          ,{" "}
          <span
            className={cn(
              st.read_look_do_span,
              currentCategory === "reviews" && st.accent_text,
              "dark-selection"
            )}
          >
            действуй
          </span>
        </>
      }
      subElement={
        <div className={st.options_wrap}>
          <Select
            defaultChecked
            id="1"
            title="YouTube"
            selectName="block-type"
            value={"youtube"}
            onSelect={(arg) => {
              setCurrentCategory(arg);
            }}
          />
          <Select
            id="2"
            title="Блог"
            selectName="block-type"
            value={"blog"}
            onSelect={(arg) => {
              setCurrentCategory(arg);
            }}
          />
          <Select
            id="3"
            title="Отзывы"
            selectName="block-type"
            value={"reviews"}
            onSelect={(arg) => {
              setCurrentCategory(arg);
            }}
          />
        </div>
      }
    >
      <AnimatePresence mode="wait">
        {currentCategory === "youtube" && <YouTube key="youtube" />}
        {currentCategory === "blog" && <Blog key="blog" />}
        {currentCategory === "reviews" && <Reviews key="reviews" />}
      </AnimatePresence>
    </SectionLayout>
  );
};

import { Suspense, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Checkbox, SectionLayout } from "@/shared/ui";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";

const YouTube = dynamic(
  () => import("./youtube/youtube").then((m) => m.YouTubeChunk),
  {
    ssr: false,
    loading(loadingProps) {
      return loadingProps.isLoading ? <>skeleton</> : null;
    },
  }
);
const Blog = dynamic(() => import("./blog/blog").then((m) => m.BlogChunk), {
  ssr: false,
  loading(loadingProps) {
    return loadingProps.isLoading ? <>skeleton</> : null;
  },
});
const Reviews = dynamic(
  () => import("./reviews/reviews").then((m) => m.ReviewsChunk),
  {
    ssr: false,
    loading(loadingProps) {
      return loadingProps.isLoading ? <>skeleton</> : null;
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
          <Checkbox
            value={"youtube"}
            onChange={(e) =>
              setCurrentCategory(e.currentTarget.value as Categories)
            }
            type="radio"
            defaultChecked
            name="block-type"
          >
            Youtube
          </Checkbox>
          <Checkbox
            value={"blog"}
            onChange={(e) =>
              setCurrentCategory(e.currentTarget.value as Categories)
            }
            type="radio"
            name="block-type"
          >
            Блог
          </Checkbox>
          <Checkbox
            value={"reviews"}
            onChange={(e) =>
              setCurrentCategory(e.currentTarget.value as Categories)
            }
            type="radio"
            name="block-type"
          >
            Отзывы
          </Checkbox>
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

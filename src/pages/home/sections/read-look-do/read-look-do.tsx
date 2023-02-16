import { Suspense, useState } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { SectionLayout, Select } from "@/shared/ui";
import dynamic from "next/dynamic";

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
      title="Читай, смотри, действуй"
      subElement={
        <div className={st.read_look_do_wrap__options}>
          <Select
            defaultChecked
            id="1"
            title="YouTube"
            selectName="block-type"
            value={"youtube"}
            onSelect={(arg) => setCurrentCategory(arg)}
          />
          <Select
            id="2"
            title="Блог"
            selectName="block-type"
            value={"blog"}
            onSelect={(arg) => setCurrentCategory(arg)}
          />
          <Select
            id="3"
            title="Отзывы"
            selectName="block-type"
            value={"reviews"}
            onSelect={(arg) => setCurrentCategory(arg)}
          />
        </div>
      }
    >
      {currentCategory === "youtube" && <YouTube />}
      {currentCategory === "blog" && <Blog />}
      {currentCategory === "reviews" && <Reviews />}
    </SectionLayout>
  );
};

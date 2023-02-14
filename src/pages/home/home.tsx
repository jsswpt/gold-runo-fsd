// import CustomSlider from "@/shared/ui/slider/CustomSlider";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import st from "./styles.module.scss";

const SalesLeader = dynamic(() =>
  import("./sections/sales-leader").then((mod) => mod.SalesLeader)
);

const Banner = dynamic(() =>
  import("./sections/banner").then((mod) => mod.Banner)
);

export const Home = () => {
  return (
    <>
      <Suspense fallback="loading">
        <Banner />
      </Suspense>
      <Suspense fallback="loading">
        <SalesLeader />
      </Suspense>
      {/* <CustomSlider
        items={[{ id: 1, image_url: "", price: 12300, title: "Заголовок" }]}
      /> */}
    </>
  );
};

// import CustomSlider from "@/shared/ui/slider/CustomSlider";

import { Banner } from "./sections/banner/banner";
import { SalesLeader } from "./sections/sales-leader/sales-leader";
import { Sets } from "./sections/sets/sets";
import st from "./styles.module.scss";

export const Home = () => {
  return (
    <>
      <Banner />
      <SalesLeader />
      <Sets />
    </>
  );
};

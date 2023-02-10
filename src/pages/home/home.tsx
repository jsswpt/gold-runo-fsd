// import CustomSlider from "@/shared/ui/slider/CustomSlider";
import { Banner } from "./sections/banner";
import { SalesLeader } from "./sections/sales-leader";

import st from "./styles.module.scss";

export const Home = () => {
  return (
    <>
      <Banner />
      <SalesLeader />
      {/* <CustomSlider
        items={[{ id: 1, image_url: "", price: 12300, title: "Заголовок" }]}
      /> */}
    </>
  );
};

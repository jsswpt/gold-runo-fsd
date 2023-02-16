// import CustomSlider from "@/shared/ui/slider/CustomSlider";

import { Banner } from "./sections/banner/banner";
import { ConvenientPayment } from "./sections/convenient-payment/convenient-payment";
import { Interiors } from "./sections/interiors/interiors";
import { NewProducts } from "./sections/new-products/new-products";
import { ReadLookDo } from "./sections/read-look-do/read-look-do";
import { SalesLeader } from "./sections/sales-leader/sales-leader";
import { Sets } from "./sections/sets/sets";
import st from "./styles.module.scss";

export const Home = () => {
  return (
    <>
      <Banner />
      <SalesLeader />
      <Sets />
      <NewProducts />
      <Interiors />
      <ConvenientPayment />
      <ReadLookDo />
    </>
  );
};

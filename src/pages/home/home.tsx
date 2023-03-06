import { ReadLookDo } from "@/widgets";
import { Banner } from "./sections/banner/banner";
import { Categories } from "./sections/categories/categories";
import { ConvenientPayment } from "./sections/convenient-payment/convenient-payment";
import { Interiors } from "./sections/interiors/interiors";
import { NewProducts } from "./sections/new-products/new-products";
import { OurBranch } from "./sections/our-branch/our-branch";
import { SalesLeader } from "./sections/sales-leader/sales-leader";
import { SaveYourMoney } from "./sections/save-your-money/save-your-money";
import { Sets } from "./sections/sets/sets";
import st from "./styles.module.scss";

export const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <SalesLeader />
      <Sets />
      <NewProducts />
      <Interiors />
      <ConvenientPayment />
      <ReadLookDo />
      <SaveYourMoney />
      <OurBranch />
    </>
  );
};

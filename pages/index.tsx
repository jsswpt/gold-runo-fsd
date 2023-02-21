import { GetStaticProps } from "next";
import Head from "next/head";
import { StaticImageData } from "next/image";
import { Home } from "pages/index";

import { useAppDispatch } from "@/shared/lib";
import { useEffect } from "react";
import { banner, salesLeader } from "@/entities";
import {
  BannerT,
  getBannerSlides,
  getSalesLeader,
  SalesLeader,
} from "@/shared/api/internal";

type Props = {
  banner: BannerT[];
  salesLeader: SalesLeader[];
};

export default function Index(props: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(banner.actions.setSlides(props.banner));
    dispatch(salesLeader.actions.setList(props.salesLeader));
  }, []);

  return (
    <>
      <Head>
        <title>Главная | YORCOM</title>
      </Head>

      <Home />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slides = await getBannerSlides();
  const salesLeader = await getSalesLeader();
  return {
    props: {
      banner: slides.data,
      salesLeader: salesLeader.data,
    },
  };
};

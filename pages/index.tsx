import { GetStaticProps } from "next";
import Head from "next/head";
import { StaticImageData } from "next/image";
import { Home } from "pages/index";

import { useAppDispatch } from "@/shared/lib";
import { useEffect } from "react";
import { banner } from "@/entities";
import { BannerT, getBannerSlides } from "@/shared/api/internal";

type Props = {
  banner: {
    data: BannerT[];
  };
};

export default function Index(props: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(banner.actions.setSlides(props.banner.data));
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
  return {
    props: {
      banner: {
        data: slides,
      },
    },
  };
};

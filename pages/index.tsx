import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { Home, Layout } from "pages/index";
import { Suspense } from "react";

export default function Index() {
  return (
    <>
      <Head>
        <title>Главная | YORCOM</title>
      </Head>

      <Layout>
        <Home />
      </Layout>
    </>
  );
}

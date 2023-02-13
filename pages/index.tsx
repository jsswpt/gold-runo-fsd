import { Home, Layout } from "@/pages";
import Head from "next/head";
import Image from "next/image";

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

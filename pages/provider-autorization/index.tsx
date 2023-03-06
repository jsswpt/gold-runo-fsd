import Head from "next/head";
import { useRouter } from "next/router";
import {} from "react";

const Index = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Загружаем ваш профиль | YORCOM</title>
      </Head>
      <div>loading...</div>
      <div>{JSON.stringify(router.query)}</div>
    </>
  );
};

export default Index;

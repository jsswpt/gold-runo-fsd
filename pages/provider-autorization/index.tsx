import { Loader } from "@/shared/ui";
import { addLocalStorage } from "@/shared/utils";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    addLocalStorage("token", router.query.token as string);
    addLocalStorage("userId", router.query.userId as string);
  }, [router]);

  return (
    <>
      <Head>
        <title>Загружаем ваш профиль | YORCOM</title>
      </Head>
      <div>
        <Loader />
      </div>
      <div>{JSON.stringify(router.query)}</div>
    </>
  );
};

export default Index;

import { useEffect, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { useAppSelector } from "@/shared/lib";
import { useRouter } from "next/router";
import Head from "next/head";
import { Loader } from "@/shared/ui";

type Profile = {};

export const Profile = (props: Profile) => {
  const [timer, setTimer] = useState(5);
  const user = useAppSelector((state) => state["entities/session"].user);

  const isLoading = useAppSelector(
    (state) => state["entities/session"].isLoading
  );

  const isFetched = useAppSelector(
    (state) => state["entities/session"].isFetched
  );

  const router = useRouter();

  useEffect(() => {
    if (!user && !isLoading && isFetched) {
      setInterval(() => {
        setTimer((val) => val - 1);
      }, 1000);
    }
  }, [user, isLoading, isFetched]);

  useEffect(() => {
    if (timer === 0) {
      router.replace("/auth");
    }
  }, [timer]);

  if (!user && isFetched && !isLoading) {
    return (
      <>
        <Head>
          <title>Переадресация | YORCOM</title>
        </Head>
        <>Вы будете перенаправлены на страницу авторизации через {timer} с.</>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Загрузка | YORCOM</title>
        </Head>
        <>
          <Loader type="flying" />
        </>
      </>
    );
  }

  return <>profile</>;
};

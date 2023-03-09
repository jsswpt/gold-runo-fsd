import { useEffect, useState } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { SignInByPoint } from "@/shared/ui";

import Image from "next/image";
import { Yandex } from "@/shared/assets";
import { getYandexAuthUrl } from "@/shared/api/internal";
import Link from "next/link";

type SignInByYandex = {};

export const SignInByYandex = (props: SignInByYandex) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = getYandexAuthUrl()
      .then((res) => {
        setIsLoading(true);
        return res;
      })
      .then(
        (res) => setUrl(res),
        (error: Error) => setError(error.message)
      )
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>загрузка...</div>;
  }

  if (error) {
    return <div>Еррор: {JSON.stringify(error)}</div>;
  }

  return (
    <Link href={url}>
      <SignInByPoint>
        <Yandex />
      </SignInByPoint>
    </Link>
  );
};

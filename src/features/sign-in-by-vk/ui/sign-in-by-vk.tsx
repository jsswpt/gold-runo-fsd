import { useEffect, useState } from "react";

import { SignInByPoint } from "@/shared/ui";

import Image from "next/image";
import { Vkontakte } from "@/shared/assets";
import { getVkontakteAuthUrl } from "@/shared/api/internal";
import Link from "next/link";

type SignInByVk = {};

export const SignInByVk = (props: SignInByVk) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const url = getVkontakteAuthUrl().then(
      (res) => setUrl(res),
      (error: Error) => setError(error.message)
    );
  }, []);

  return !error ? (
    <Link href={url}>
      <SignInByPoint>
        <Vkontakte />
      </SignInByPoint>
    </Link>
  ) : (
    <p>Тут как би ошибка</p>
  );
};

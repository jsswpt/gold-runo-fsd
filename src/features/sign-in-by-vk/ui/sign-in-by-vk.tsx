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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = getVkontakteAuthUrl()
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
    return <div>skeleton</div>;
  }

  if (error) {
    return <div>Еррор: {JSON.stringify(error)}</div>;
  }

  return (
    <Link href={url}>
      <SignInByPoint>
        <Vkontakte />
      </SignInByPoint>
    </Link>
  );
};

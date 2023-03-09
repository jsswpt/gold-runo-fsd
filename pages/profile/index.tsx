import { Profile } from "@/pages";
import { useAppSelector } from "@/shared/lib";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>Профиль | YORCOM</title>
      </Head>
      <Profile />
    </>
  );
};

export default Index;

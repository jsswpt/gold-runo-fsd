import Link from "next/link";
import { CSSProperties } from "react";

import st from "./styles.module.scss";

export const Home = () => {
  return (
    <>
      <Link href={"/other"}>link</Link>
    </>
  );
};

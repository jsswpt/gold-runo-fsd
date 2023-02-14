import { Suspense } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import dynamic from "next/dynamic";
import { HeaderT } from "./header.type";

const HeaderChunk = dynamic(
  () => import("./header").then((m) => m.HeaderChunk),
  { loading: (arg) => (arg.isLoading ? <>loading</> : <>zagruzhen</>) }
);

export const Header = (props: HeaderT) => {
  return (
    // <Suspense fallback={<>loading header</>}>
    <HeaderChunk {...props} />
    // </Suspense>
  );
};

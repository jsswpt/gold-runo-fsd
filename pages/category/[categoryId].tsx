import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import {} from "react";

// получать с бд какие-нибудь определённые товары (диваны, но без вариантов, условно, майами только)
const Index = (props: any) => {
  const router = useRouter();

  console.log(router);
  console.log("props --->", props);

  return <>Все товары ДИВАНОВ</>;
};

export default Index;

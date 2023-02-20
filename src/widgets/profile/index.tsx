import dynamic from "next/dynamic";

const ProfileChunk = dynamic(() => import("./profile").then((m) => m.Profile), {
  ssr: false,
  loading(loadingProps) {
    return loadingProps.isLoading ? <>loading</> : null;
  },
});

export const Favorites = () => {
  return <ProfileChunk />;
};

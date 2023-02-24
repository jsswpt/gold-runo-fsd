import { memo } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { AuthorizeCard, Dropdown, IconButton } from "@/shared/ui";
import { Person } from "@/shared/assets";
import Link from "next/link";
import { useScreen } from "@/shared/hooks";

type Profile = {};

export const Profile = memo((props: Profile) => {
  const isAuth = false;

  const { currentScreen } = useScreen();

  if (isAuth) {
    return (
      <Link href={"/profile"}>
        <IconButton>
          <Person />
        </IconButton>
      </Link>
    );
  } else {
    return (
      <Dropdown
        align="bottom"
        justify="start"
        triggerOn="hover"
        anchorEl={
          <IconButton>
            <Person />
          </IconButton>
        }
      >
        <AuthorizeCard />
      </Dropdown>
    );
  }
});

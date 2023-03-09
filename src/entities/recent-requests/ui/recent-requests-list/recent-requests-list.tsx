import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { useAppSelector } from "@/shared/lib";
import { Chip } from "@/shared/ui";
import { RecentRequest } from "@/shared/api/internal";

type RecentRequestsList = {
  onClick?: (arg: RecentRequest) => void;
};

export const RecentRequestsList = (props: RecentRequestsList) => {
  const list = useAppSelector(
    (state) => state["entities/recent-requests"].list
  );
  return (
    <div className={st.recent_requests_list}>
      {list.length > 0 ? (
        list.map((item) => (
          <Chip
            title={item.query}
            onClick={() => props.onClick && props.onClick(item)}
            key={item.id}
          />
        ))
      ) : (
        <>пусто</>
      )}
    </div>
  );
};

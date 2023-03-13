import {} from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Presenter360, PresenterSlide } from "@/shared/ui";

import Sofa1 from "shared/assets/media/sofa-three/bali_1.jpg";
import Sofa2 from "shared/assets/media/sofa-three/bali_2.jpg";
import Sofa3 from "shared/assets/media/sofa-three/bali_3.jpg";
import Sofa4 from "shared/assets/media/sofa-three/bali_4.jpg";
import Sofa5 from "shared/assets/media/sofa-three/bali_5.jpg";
import Sofa6 from "shared/assets/media/sofa-three/bali_6.jpg";
import Sofa7 from "shared/assets/media/sofa-three/bali_7.jpg";
import Sofa8 from "shared/assets/media/sofa-three/bali_8.jpg";
import Sofa9 from "shared/assets/media/sofa-three/bali_9.jpg";
import Sofa10 from "shared/assets/media/sofa-three/bali_10.jpg";
import Sofa11 from "shared/assets/media/sofa-three/bali_11.jpg";
import Sofa12 from "shared/assets/media/sofa-three/bali_12.jpg";
import Sofa13 from "shared/assets/media/sofa-three/bali_13.jpg";
import Sofa14 from "shared/assets/media/sofa-three/bali_14.jpg";
import Sofa15 from "shared/assets/media/sofa-three/bali_15.jpg";
import Sofa16 from "shared/assets/media/sofa-three/bali_16.jpg";
import Sofa17 from "shared/assets/media/sofa-three/bali_17.jpg";
import Sofa18 from "shared/assets/media/sofa-three/bali_18.jpg";
import Sofa19 from "shared/assets/media/sofa-three/bali_19.jpg";
import Sofa20 from "shared/assets/media/sofa-three/bali_20.jpg";
import Sofa21 from "shared/assets/media/sofa-three/bali_21.jpg";
import Sofa22 from "shared/assets/media/sofa-three/bali_22.jpg";
import Sofa23 from "shared/assets/media/sofa-three/bali_23.jpg";
import Sofa24 from "shared/assets/media/sofa-three/bali_24.jpg";
import Sofa25 from "shared/assets/media/sofa-three/bali_25.jpg";
import Sofa26 from "shared/assets/media/sofa-three/bali_26.jpg";
import Sofa27 from "shared/assets/media/sofa-three/bali_27.jpg";
import Sofa28 from "shared/assets/media/sofa-three/bali_28.jpg";
import Sofa29 from "shared/assets/media/sofa-three/bali_29.jpg";
import Sofa30 from "shared/assets/media/sofa-three/bali_30.jpg";
import Sofa31 from "shared/assets/media/sofa-three/bali_31.jpg";
import Sofa32 from "shared/assets/media/sofa-three/bali_32.jpg";

const array = [
  Sofa1,
  Sofa2,
  Sofa3,
  Sofa4,
  Sofa5,
  Sofa6,
  Sofa7,
  Sofa8,
  Sofa9,
  Sofa10,
  Sofa11,
  Sofa12,
  Sofa13,
  Sofa14,
  Sofa15,
  Sofa16,
  Sofa17,
  Sofa18,
  Sofa19,
  Sofa20,
  Sofa21,
  Sofa22,
  Sofa23,
  Sofa24,
  Sofa25,
  Sofa26,
  Sofa27,
  Sofa28,
  Sofa29,
  Sofa30,
  Sofa31,
  Sofa32,
];

export const Empty = () => {
  return (
    <section className={st.section_empty}>
      <div className={st.presenter_wrap}>
        <div className={st.presenter_wrapper}>
          <Presenter360>
            {array.map((item, idx) => (
              <PresenterSlide
                key={idx}
                media={{ id: idx, image_url: item, video_url: null }}
              />
            ))}
          </Presenter360>
        </div>
      </div>
    </section>
  );
};

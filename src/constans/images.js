import myPhoto from "../assets/images/myphoto.png";
import es_d_1 from "../assets/images/eStore/d_1.png";
import es_d_2 from "../assets/images/eStore/d_2.png";
import es_d_3 from "../assets/images/eStore/d_3.png";
import es_d_4 from "../assets/images/eStore/d_4.png";
import es_d_5 from "../assets/images/eStore/d_5.png";
import es_m_1 from "../assets/images/eStore/m_1.png";
import es_m_2 from "../assets/images/eStore/m_2.png";
import es_m_3 from "../assets/images/eStore/m_3.png";
import cr_d_1 from "../assets/images/crypto/d_1.png";
import cr_d_2 from "../assets/images/crypto/d_2.png";
import cr_d_3 from "../assets/images/crypto/d_3.png";
import cr_m_1 from "../assets/images/crypto/m_1.png";
import cr_m_2 from "../assets/images/crypto/m_2.png";
import cr_m_3 from "../assets/images/crypto/m_3.png";

import ca_d_1 from "../assets/images/calendar/d_1.png";
import ca_d_2 from "../assets/images/calendar/d_2.png";
import ca_m_1 from "../assets/images/calendar/m_1.png";
import icons from "./icons";

const eStore = {
  mobile: [es_m_1, es_m_2, es_m_3],
  desktop: [es_d_1, es_d_2, es_d_3, es_d_4, es_d_5],
  technologies: [
    icons.skills[2],
    icons.skills[3],
    icons.skills[4],
    icons.skills[6],
    icons.skills[7],
  ],
  github: "https://github.com/Mateusz-Michalec/eStore",
  demo: "https://mateusz-michalec.github.io/eStore/",
};

const crypto = {
  mobile: [cr_m_1, cr_m_2, cr_m_3],
  desktop: [cr_d_1, cr_d_2, cr_d_3],
  technologies: [
    icons.skills[2],
    icons.skills[3],
    icons.skills[4],
    icons.skills[6],
  ],
  github: "https://github.com/Mateusz-Michalec/crypto",
  demo: "https://mateusz-michalec.github.io/crypto/",
};

const calendar = {
  mobile: [ca_m_1],
  desktop: [ca_d_1, ca_d_2],
  technologies: [icons.skills[2], icons.skills[5], icons.skills[6]],
  github: "https://github.com/Mateusz-Michalec/calendar",
  demo: "https://mateusz-michalec.github.io/calendar/",
};

export default {
  myPhoto,
  eStore,
  crypto,
  calendar,
};

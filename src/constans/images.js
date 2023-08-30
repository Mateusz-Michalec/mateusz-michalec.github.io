import myPhoto from "../assets/images/myphoto.png";
import es_d_1 from "../assets/images/eStore/d_1.png";
import es_d_2 from "../assets/images/eStore/d_2.png";
import es_d_3 from "../assets/images/eStore/d_3.png";
import es_d_4 from "../assets/images/eStore/d_4.png";
import es_d_5 from "../assets/images/eStore/d_5.png";
import es_m_1 from "../assets/images/eStore/m_1.png";
import es_m_2 from "../assets/images/eStore/m_2.png";
import es_m_3 from "../assets/images/eStore/m_3.png";
import icons from "./icons";

const eStore = {
  mobile: [es_m_1, es_m_2, es_m_3],
  desktop: [es_d_1, es_d_2, es_d_3, es_d_4, es_d_5],
  title: "E-commerce (sklep internetowy)",
  features: [
    "Przeglądanie wielu produktów",
    "Sortowanie produktów (rosnąco, malejąco, według ceny)",
    "Podgląd konkretnego produktu",
    "System ocen produktu",
    "Dane pobierane z API są zmieniane (rozmiary, cena, dostępność)",
    "Przeglądane produkty są zapisywane w historii przeglądania",
    "Produkty można dodawać do ulubionych oraz do koszyka",
  ],
  technologies: [
    icons.skills[2],
    icons.skills[3],
    icons.skills[4],
    icons.skills[6],
    icons.skills[7],
  ],
};

export default {
  myPhoto,
  eStore,
};

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
import cr_d_4 from "../assets/images/crypto/d_4.png";
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
  github: "https://github.com/Mateusz-Michalec/eStore",
  demo: "",
};

const crypto = {
  mobile: [cr_m_1, cr_m_2, cr_m_3],
  desktop: [cr_d_1, cr_d_2, cr_d_3, cr_d_4],
  title: "Crypto (wiadomości kryptowalutowe)",
  features: [
    "Przeglądanie światowych statystyk",
    "Podgląd statystyk kryptowalut",
    "Szczegółowe dane na temat danej kryptowaluty, w tym wykresy",
    "Aktualne wiadomości ze świata na temat rynku kryptowalut",
    "Dane pobierane z API są zmieniane (rozmiary, cena, dostępność)",
    "Wyszukiwanie konkretnej krytowaluty",
    "Wiadomości na temat konkretnej kryptowaluty",
  ],
  technologies: [
    icons.skills[2],
    icons.skills[3],
    icons.skills[4],
    icons.skills[6],
  ],
  github: "https://github.com/Mateusz-Michalec/crypto",
  demo: "",
};

const calendar = {
  mobile: [ca_m_1],
  desktop: [ca_d_1, ca_d_2],
  title: "Kalendarz",
  features: [
    "Pełnoprawny kalendarz",
    "Dodawanie własnych zdarzeń",
    "Zdarzenia są zapisywane w przeglądarce",
  ],
  technologies: [icons.skills[2], icons.skills[5], icons.skills[6]],
  github: "https://github.com/Mateusz-Michalec/calendar",
  demo: "",
};

export default {
  myPhoto,
  eStore,
  crypto,
  calendar,
};

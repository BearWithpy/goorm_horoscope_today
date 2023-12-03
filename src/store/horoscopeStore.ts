import Horoscope from "components/model/Horoscope";
import { create } from "zustand";

type HoroscopeStore = {
  horoscope: Horoscope;
};

const useHoroscopeStore = create<HoroscopeStore>(
  (set): HoroscopeStore => ({
    horoscope: { quote: "", fortune: "" },
  })
);

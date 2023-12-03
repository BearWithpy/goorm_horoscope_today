import Horoscope from "components/model/Horoscope";
import { create } from "zustand";

type HoroscopeStore = {
	horoscope: Horoscope;
	setHoroscope: (horoscopeJSON: Horoscope) => void;
};

const useHoroscopeStore = create<HoroscopeStore>(
	(set): HoroscopeStore => ({
		horoscope: { quote: "", fortune: "" },
		setHoroscope: (horoscopeJSON: Horoscope) => {
			set(() => {
				return {
					horoscope: {
						fortune: horoscopeJSON.fortune,
						quote: horoscopeJSON.quote,
					},
				};
			});
		},
	})
);

export default useHoroscopeStore;

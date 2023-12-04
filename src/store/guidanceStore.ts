import Horoscope from "components/model/Horoscope";
import { create } from "zustand";

type GuidanceStore = {
  guidance: string;
  toggleGuidance: (guide: string) => void;
};

const useGuidanceStore = create<GuidanceStore>(
  (set): GuidanceStore => ({
    guidance: "카드를 클릭하세요.",
    toggleGuidance: (guide: string) => {
      set(() => {
        return {
          guidance: guide,
        };
      });
    },
  })
);

export default useGuidanceStore;

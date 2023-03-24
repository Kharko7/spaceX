import { RocketData } from "interface/Rocket";
import { atom } from "recoil";

export const favouritesFlightsAtom = atom<RocketData[]>({
  key: "favouritesFlightsState",
  default: [],
});
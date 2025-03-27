import { Dispatch, SetStateAction } from "react";

export interface HeroProps {
  darkMode: boolean;
  setPop: Dispatch<SetStateAction<boolean>>;
}

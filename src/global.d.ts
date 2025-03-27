import { Dispatch, SetStateAction } from "react";

declare module "@fontsource/raleway";

export interface HeroProps {
  darkMode: boolean;
  setPop: Dispatch<SetStateAction<boolean>>;
}

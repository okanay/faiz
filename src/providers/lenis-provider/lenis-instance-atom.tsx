import { atom, useAtom } from "jotai";
import { LenisInstance } from "@studio-freight/react-lenis";

export const lenisInstanceAtom = atom<LenisInstance | undefined>(undefined);

export const useLenisAtom = () => {
  const [lenis, setLenisAtom] = useAtom(lenisInstanceAtom);

  return { lenis, setLenisAtom };
};

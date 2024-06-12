'use client'

import { useLenisAtom } from "./lenis-instance-atom";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

type Type = React.FC<{ children: React.ReactNode }>;

export const LenisProvider: Type = ({ children }) => {
  const { setLenisAtom } = useLenisAtom();

  useLenis((lenis) => {
    setLenisAtom(lenis);
  });

  return <ReactLenis root>{children}</ReactLenis>;
};
